import path from 'path';
import fs from 'fs/promises';
import { logger } from '../utils/logger.js';

/**
 * Generates structured flowcharts based on file analysis
 * This creates detailed structure diagrams for components, contexts, and data flow
 * 
 * @param {Object} analysis - The analysis results from analyzeCodebase
 * @param {string} outputDir - Directory to write output files
 */
export async function generateStructureFlowcharts(analysis, outputDir) {
  logger.info('Generating structure flowcharts...');
  
  try {
    // Find contexts to analyze
    const contextFiles = analysis.imports
      .filter(({ file, source }) => file.includes('/contexts/') || source.includes('Context'))
      .map(({ file }) => file);
    
    // Get unique context files
    const uniqueContextFiles = [...new Set(contextFiles)];
    
    // Generate structure diagrams for each context
    for (const contextFile of uniqueContextFiles) {
      await generateContextFlowchart(contextFile, analysis, outputDir);
    }
    
    // Generate component hierarchy flowchart
    await generateComponentHierarchy(analysis, outputDir);
    
    // Generate API integration flowchart
    await generateApiIntegration(analysis, outputDir);
    
    // Generate data flow flowchart
    await generateDataFlow(analysis, outputDir);
    
    logger.success('Structure flowcharts generated successfully!');
  } catch (error) {
    logger.error(`Failed to generate structure flowcharts: ${error.message}`);
    throw error;
  }
}

/**
 * Generates a flowchart for a specific context file
 */
async function generateContextFlowchart(contextFile, analysis, outputDir) {
  const basename = path.basename(contextFile, path.extname(contextFile));
  const outputPath = path.join(outputDir, `${basename}-structure.md`);
  
  // Find all imports from this context
  const contextImports = analysis.imports
    .filter(({ file }) => file === contextFile)
    .map(({ source }) => source);
  
  // Find all components that use this context
  const contextUsers = analysis.contexts
    .filter(({ name }) => name === basename || name.includes(basename))
    .map(({ file }) => file);
  
  // Generate flowchart content
  let flowchartContent = `# ${basename} Structure\n\n`;
  flowchartContent += '```mermaid\nflowchart TD\n';
  
  // Add the context
  flowchartContent += `  ${basename}["${basename}"]\n\n`;
  
  // Add state management section
  flowchartContent += '  subgraph state["State Management"]\n';
  flowchartContent += '    direction TB\n';
  contextImports.forEach(imp => {
    if (imp.includes('useState') || imp.includes('useReducer') || imp.includes('createContext')) {
      flowchartContent += `    ${getNodeName(imp)}["${imp}"]\n`;
    }
  });
  flowchartContent += '    state1["- state variables"]\n';
  flowchartContent += '    state2["- calculated values"]\n';
  flowchartContent += '  end\n\n';
  
  // Add methods section
  flowchartContent += '  subgraph methods["Context Methods"]\n';
  flowchartContent += '    direction TB\n';
  flowchartContent += '    method1["addItem()"]\n';
  flowchartContent += '    method2["removeItem()"]\n';
  flowchartContent += '    method3["updateItem()"]\n';
  flowchartContent += '  end\n\n';
  
  // Add consumers section
  flowchartContent += '  subgraph consumers["Context Consumers"]\n';
  flowchartContent += '    direction TB\n';
  contextUsers.slice(0, 5).forEach(user => {
    const userName = path.basename(user, path.extname(user));
    flowchartContent += `    ${getNodeName(userName)}["${userName}"]\n`;
  });
  if (contextUsers.length > 5) {
    flowchartContent += '    more["...and more"]\n';
  }
  flowchartContent += '  end\n\n';
  
  // Add connections
  flowchartContent += `  ${basename} --> state\n`;
  flowchartContent += `  ${basename} --> methods\n`;
  flowchartContent += `  ${basename} --> consumers\n`;
  
  flowchartContent += '```\n';
  
  // Write the flowchart to file
  await fs.writeFile(outputPath, flowchartContent);
  logger.info(`Generated context structure flowchart: ${outputPath}`);
}

/**
 * Generates a component hierarchy flowchart
 */
async function generateComponentHierarchy(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'component-hierarchy.md');
  
  // Find all components and their relationships
  const componentFiles = analysis.imports
    .filter(({ file }) => file.includes('/components/'))
    .map(({ file }) => file);
  
  const uniqueComponentFiles = [...new Set(componentFiles)];
  
  // Find parent-child relationships based on imports
  const componentRelationships = {};
  
  uniqueComponentFiles.forEach(component => {
    const componentName = path.basename(component, path.extname(component));
    componentRelationships[componentName] = {
      children: [],
      parents: []
    };
  });
  
  // Analyze component relationships based on imports
  analysis.imports.forEach(({ file, source }) => {
    if (file.includes('/components/') && source.includes('/components/')) {
      const parentName = path.basename(file, path.extname(file));
      const childName = path.basename(source, path.extname(source));
      
      if (componentRelationships[parentName] && componentRelationships[childName]) {
        componentRelationships[parentName].children.push(childName);
        componentRelationships[childName].parents.push(parentName);
      }
    }
  });
  
  // Generate flowchart content
  let flowchartContent = `# Component Hierarchy\n\n`;
  flowchartContent += '```mermaid\nflowchart TD\n';
  
  // Add components
  uniqueComponentFiles.forEach(component => {
    const componentName = path.basename(component, path.extname(component));
    flowchartContent += `  ${getNodeName(componentName)}["${componentName}"]\n`;
  });
  
  // Add relationships
  Object.entries(componentRelationships).forEach(([parent, { children }]) => {
    children.forEach(child => {
      flowchartContent += `  ${getNodeName(parent)} -->|includes| ${getNodeName(child)}\n`;
    });
  });
  
  flowchartContent += '```\n';
  
  // Write the flowchart to file
  await fs.writeFile(outputPath, flowchartContent);
  logger.info(`Generated component hierarchy flowchart: ${outputPath}`);
}

/**
 * Generates an API integration flowchart
 */
async function generateApiIntegration(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'api-integration.md');
  
  // Find all API routes
  const apiFiles = analysis.imports
    .filter(({ file }) => file.includes('/api/'))
    .map(({ file }) => file);
  
  const uniqueApiFiles = [...new Set(apiFiles)];
  
  // Find components that interact with API routes
  const apiUsers = {};
  
  uniqueApiFiles.forEach(apiFile => {
    apiUsers[apiFile] = [];
  });
  
  analysis.imports.forEach(({ file, source }) => {
    if (source.includes('/api/') && !file.includes('/api/')) {
      const apiFile = uniqueApiFiles.find(api => source.includes(api));
      if (apiFile && !apiUsers[apiFile].includes(file)) {
        apiUsers[apiFile].push(file);
      }
    }
  });
  
  // Generate flowchart content
  let flowchartContent = `# API Integration\n\n`;
  flowchartContent += '```mermaid\nflowchart TD\n';
  
  // Add API routes section
  flowchartContent += '  subgraph APIs["API Routes"]\n';
  flowchartContent += '    direction TB\n';
  uniqueApiFiles.forEach(api => {
    const apiName = path.basename(path.dirname(api));
    flowchartContent += `    ${getNodeName(api)}["/${apiName}"]\n`;
  });
  flowchartContent += '  end\n\n';
  
  // Add components that use APIs
  flowchartContent += '  subgraph Components["Components"]\n';
  flowchartContent += '    direction TB\n';
  const allUsers = [...new Set([].concat(...Object.values(apiUsers)))];
  allUsers.forEach(user => {
    const userName = path.basename(user, path.extname(user));
    flowchartContent += `    ${getNodeName(userName)}["${userName}"]\n`;
  });
  flowchartContent += '  end\n\n';
  
  // Add connections
  Object.entries(apiUsers).forEach(([api, users]) => {
    users.forEach(user => {
      const userName = path.basename(user, path.extname(user));
      const apiName = path.basename(path.dirname(api));
      flowchartContent += `  ${getNodeName(userName)} -->|uses| ${getNodeName(api)}\n`;
    });
  });
  
  flowchartContent += '```\n';
  
  // Write the flowchart to file
  await fs.writeFile(outputPath, flowchartContent);
  logger.info(`Generated API integration flowchart: ${outputPath}`);
}

/**
 * Generates a data flow flowchart
 */
async function generateDataFlow(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'data-flow.md');
  
  // Generate flowchart content
  let flowchartContent = `# Data Flow\n\n`;
  flowchartContent += '```mermaid\nflowchart TD\n';
  
  // Add Context providers
  flowchartContent += '  subgraph Contexts["Context Providers"]\n';
  flowchartContent += '    direction TB\n';
  const contextCreators = analysis.contexts
    .filter(({ type }) => type === 'create')
    .map(({ name }) => name);
  
  [...new Set(contextCreators)].forEach(context => {
    flowchartContent += `    ${getNodeName(context)}["${context}"]\n`;
  });
  flowchartContent += '  end\n\n';
  
  // Add API layer
  flowchartContent += '  subgraph API["API Layer"]\n';
  flowchartContent += '    direction TB\n';
  flowchartContent += '    fetch["Fetch API"]\n';
  flowchartContent += '    endpoints["API Endpoints"]\n';
  flowchartContent += '  end\n\n';
  
  // Add UI Components layer
  flowchartContent += '  subgraph UI["UI Components"]\n';
  flowchartContent += '    direction TB\n';
  const componentFiles = analysis.imports
    .filter(({ file }) => file.includes('/components/'))
    .map(({ file }) => path.basename(file, path.extname(file)));
  
  [...new Set(componentFiles)].slice(0, 5).forEach(component => {
    flowchartContent += `    ${getNodeName(component)}["${component}"]\n`;
  });
  if (componentFiles.length > 5) {
    flowchartContent += '    more["...and more"]\n';
  }
  flowchartContent += '  end\n\n';
  
  // Add connections
  flowchartContent += '  Contexts --> API\n';
  flowchartContent += '  API --> Contexts\n';
  flowchartContent += '  Contexts --> UI\n';
  flowchartContent += '  UI --> Contexts\n';
  
  flowchartContent += '```\n';
  
  // Write the flowchart to file
  await fs.writeFile(outputPath, flowchartContent);
  logger.info(`Generated data flow flowchart: ${outputPath}`);
}

/**
 * Helper function to get a node name that's safe for Mermaid
 */
function getNodeName(path) {
  let name = path;
  
  // Extract filename from path if it's a path
  if (name.includes('/')) {
    const pathSegments = name.split('/');
    name = pathSegments[pathSegments.length - 1];
  }
  
  // Remove file extension
  name = name.replace(/\.(js|jsx|ts|tsx|mjs|cjs)$/, '');
  
  // Sanitize the name for Mermaid
  name = name.replace(/[^a-zA-Z0-9]/g, '_');
  
  // Ensure the name doesn't start with a number for Mermaid compatibility
  if (name.match(/^[0-9]/)) {
    name = `n${name}`;
  }
  
  return name;
}