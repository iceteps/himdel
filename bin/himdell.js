#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import { analyzeCodebase } from '../lib/analyzers/index.js';
import { generateOutputs } from '../lib/generators/index.js';
import { generateDocumentation } from '../lib/generators/documentationGenerator.js';
import { logger } from '../lib/utils/logger.js';
import { ensureOutputDir } from '../lib/utils/fileUtils.js';
import { executeDocumentCommand } from '../lib/cli/documentationCommand.js';
import path from 'path';
import fs from 'fs/promises';

program
  .name('himdell')
  .description('Generate comprehensive codebase visualization and documentation')
  .option('-d, --dir <path>', 'Target directory to analyze', process.cwd())
  .option('-o, --output <path>', 'Output directory for generated files', 'himdell-output')
  .option('--format <formats>', 'Output formats for maps (md,html,png)', 'md,html,png')
  .option('--concurrency <number>', 'Number of files to parse in parallel', '8')
  .option('--verbose', 'Show detailed debug logs', false)
  .option('--exclude <patterns>', 'Directories/patterns to exclude (comma-separated)', 'node_modules,dist,build,.git,.next')
  .option('--exts <extensions>', 'File extensions to analyze (comma-separated)', 'js,jsx,ts,tsx,html,vue,svelte')
  .option('--name <name>', 'Project name for documentation', 'Application')
  .option('--open', 'Open the generated HTML files in your default browser', false)
  .option('--segment-size <number>', 'Maximum number of nodes in each diagram segment', '20')
  .option('--focus <components>', 'Focus on specific components or contexts (comma-separated)', '')
  .option('--diagram-width <pixels>', 'Width of generated PNG diagrams', '4000')
  .option('--diagram-height <pixels>', 'Height of generated PNG diagrams', '3000')
  .option('--group-by <type>', 'Group visualization by component, directory, or context', 'component')
  .option('--profile <template>', 'Use a predefined profile template (basic, detailed, performance, architecture)', '')
  .option('--profiling-output <path>', 'Generate documentation of the desired outputs for profiling', '')
  .parse();

const options = program.opts();

// Enable debug logs if verbose mode is enabled
if (options.verbose) {
  process.env.DEBUG = '1';
}

// Handle profiling output generation if requested
if (options.profilingOutput) {
  generateProfilingDocs(options.profilingOutput);
  process.exit(0);
}

// Apply predefined profiles if specified
if (options.profile) {
  applyProfile(options.profile, options);
}

(async () => {
  try {
    logger.info(chalk.bold('🚀 Starting Himdell All-in-One Analysis'));
    logger.info(`Analyzing codebase in: ${options.dir}`);
    logger.info(`File extensions to analyze: ${options.exts}`);
    logger.info(`Output formats: ${options.format}`);
    
    // Ensure output directory exists
    await ensureOutputDir(options.output);
    
    // Parse options
    const parsedOptions = {
      exclude: options.exclude,
      concurrency: parseInt(options.concurrency, 10),
      exts: options.exts,
      verbose: options.verbose,
      debug: options.verbose,
      segmentSize: parseInt(options.segmentSize, 10),
      focus: options.focus ? options.focus.split(',') : [],
      diagramWidth: parseInt(options.diagramWidth, 10),
      diagramHeight: parseInt(options.diagramHeight, 10),
      groupBy: options.groupBy
    };
    
    // Run the analysis once
    logger.info('🔍 Analyzing codebase...');
    const analysis = await analyzeCodebase(options.dir, parsedOptions);
    
    if (Object.keys(analysis).length === 0 || (analysis.imports && analysis.imports.length === 0)) {
      logger.warn('⚠️ No meaningful data found to generate diagrams.');
      process.exit(0);
    }
    
    // Generate Maps
    logger.info('📊 Generating dependency maps...');
    const mapsDir = path.join(options.output, 'maps');
    await ensureOutputDir(mapsDir);
    
    // Pass visualization options to generateOutputs
    await generateOutputs(analysis, {
      ...options,
      format: options.format,
      output: mapsDir,
      segmentSize: parsedOptions.segmentSize,
      focus: parsedOptions.focus,
      diagramWidth: parsedOptions.diagramWidth,
      diagramHeight: parsedOptions.diagramHeight,
      groupBy: parsedOptions.groupBy
    });
    
    // Generate Documentation
    logger.info('📝 Generating comprehensive documentation...');
    const docOptions = {
      outputDir: options.output,
      types: 'all',
      projectName: options.name,
      // Pass visualization options to documentation generator
      segmentSize: parsedOptions.segmentSize,
      focus: parsedOptions.focus,
      diagramWidth: parsedOptions.diagramWidth,
      diagramHeight: parsedOptions.diagramHeight,
      groupBy: parsedOptions.groupBy
    };
    
    const docPaths = await generateDocumentation(analysis, docOptions);
    
    // Create index.html file for easy navigation
    await createIndexHtml(options.output, docPaths, analysis);
    
    // Generate a README for the output directory
    await generateOutputReadme(options.output, analysis, options);
    
    logger.success('✨ All-in-One Analysis Complete!');
    logger.info(`📁 Output directory: ${options.output}`);
    
    // If open flag is set, try to open the index.html
    if (options.open) {
      const open = (await import('open')).default;
      const indexPath = path.join(options.output, 'index.html');
      await open(indexPath);
      logger.info(`🌐 Opened ${indexPath} in your default browser`);
    } else {
      logger.info(`To view the results, open ${path.join(options.output, 'index.html')} in your browser`);
      logger.info(`Or run: python3 -m http.server 8000 --directory ${options.output}`);
    }
  } catch (error) {
    logger.error(`🚨 Failed: ${error.message}`);
    if (options.verbose) {
      logger.error(error.stack);
    }
    process.exit(1);
  }
})();

/**
 * Create README.md for output directory with navigation instructions
 */
async function generateOutputReadme(outputDir, analysis, options) {
  const readmePath = path.join(outputDir, 'README.md');
  
  const content = `# ${options.name} Codebase Analysis

## Overview

This directory contains the analysis results generated by Himdell Mapper for the ${options.name} project.

## Key Metrics

- **Files Analyzed**: ${analysis.fileCount || 'N/A'}
- **Components**: ${getComponentCount(analysis) || 'N/A'} 
- **Contexts**: ${getContextCount(analysis) || 'N/A'}
- **Hooks**: ${getHookCount(analysis) || 'N/A'}

## Navigation

For the best viewing experience:

1. Start with the [Analysis Summary](./SUMMARY.md) for an overview
2. Open the [interactive index](./index.html) in a browser for a visual dashboard:
   \`\`\`
   python3 -m http.server 8000
   # Then visit: http://localhost:8000/
   \`\`\`
3. Explore the [dependency map](./maps/dependency-map.html) for interactive visualization

## Available Documentation

- [Architecture Overview](./ARCHITECTURE.md)
- [Detailed Architecture](./ARCHITECTURE_DEEP.md)
- [Baseline Roadmap](./BASELINE_ROADMAP.md)
- [Refactoring Suggestions](./REFACTORING.md)
- [Performance Report](./PERF_REPORT.md)

## Generation Settings

- **Analysis directory**: \`${options.dir}\`
- **Visualization grouping**: \`${options.groupBy}\`
- **Focus areas**: ${options.focus ? options.focus : 'All components'}
- **Diagram segmentation**: ${options.segmentSize} nodes per segment
`;

  await fs.writeFile(readmePath, content);
  logger.info(`Created output README at: ${readmePath}`);
}

/**
 * Apply predefined profile options 
 */
function applyProfile(profileName, options) {
  switch(profileName.toLowerCase()) {
    case 'basic':
      options.segmentSize = '30';
      options.groupBy = 'component';
      options.diagramWidth = '3000';
      options.diagramHeight = '2000';
      logger.info('Applied basic profile settings');
      break;
    case 'detailed':
      options.segmentSize = '15';
      options.groupBy = 'directory';
      options.diagramWidth = '4500';
      options.diagramHeight = '3500';
      logger.info('Applied detailed profile settings');
      break;
    case 'performance':
      options.segmentSize = '50';
      options.groupBy = 'component';
      options.diagramWidth = '5000';
      options.diagramHeight = '4000';
      logger.info('Applied performance profile settings');
      break;
    case 'architecture':
      options.segmentSize = '20';
      options.groupBy = 'context';
      options.diagramWidth = '4000';
      options.diagramHeight = '3000';
      logger.info('Applied architecture profile settings');
      break;
    default:
      logger.warn(`Unknown profile: ${profileName}. Using default settings.`);
  }
}

/**
 * Generate profiling documentation with examples of desired outputs
 */
async function generateProfilingDocs(outputDir) {
  logger.info(`Generating profiling documentation in: ${outputDir}`);
  
  await ensureOutputDir(outputDir);
  
  // Examples of well-structured outputs
  const examples = {
    componentHierarchy: `# Component Hierarchy Example

\`\`\`mermaid
flowchart TD
    subgraph "App Structure"
        App --> Layout
        Layout --> Header
        Layout --> MainContent
        Layout --> Footer
    end
    
    subgraph "Component Details"
        MainContent --> ProductList
        MainContent --> Sidebar
        ProductList --> ProductCard
        ProductCard --> ProductImage
        ProductCard --> ProductInfo
    end
\`\`\``,
    
    contextFlow: `# Context Flow Example

\`\`\`mermaid
flowchart TD
    subgraph "Provider Hierarchy"
        AppProvider --> AuthProvider
        AuthProvider --> DataProvider
        DataProvider --> UIProvider
    end
    
    subgraph "Context Consumption"
        ProfileComponent ---> useAuth
        DashboardComponent ---> useData
        useAuth -.-> AuthContext
        useData -.-> DataContext
    end
\`\`\``,
    
    dataFlow: `# Data Flow Example

\`\`\`mermaid
flowchart LR
    subgraph "Data Sources"
        API((API))
        LocalStorage[(LocalStorage)]
    end
    
    subgraph "Data Management"
        AuthContext
        DataContext
        CartContext
    end
    
    subgraph "UI Components"
        ProductList
        UserProfile
        ShoppingCart
    end
    
    API --> AuthContext
    API --> DataContext
    LocalStorage --> CartContext
    AuthContext --> UserProfile
    DataContext --> ProductList
    CartContext --> ShoppingCart
\`\`\``,
  };
  
  // Write example files
  for (const [name, content] of Object.entries(examples)) {
    await fs.writeFile(path.join(outputDir, `${name}-example.md`), content);
  }
  
  // Generate comparison document
  const comparisonDoc = `# Himdell Output Profiling Guidelines

This document provides examples of the desired output format for Himdell visualization.

## Output Quality Guidelines

The visualization diagrams should follow these principles:

1. **Clarity**: Information should be organized into logical groups
2. **Segmentation**: Large diagrams should be split into manageable segments
3. **Hierarchy**: Clear visual hierarchy between components/modules
4. **Filtering**: Focus on the most important relationships, filtering out noise
5. **Consistency**: Consistent naming and styling

## Example Outputs

- [Component Hierarchy Example](./componentHierarchy-example.md)
- [Context Flow Example](./contextFlow-example.md)
- [Data Flow Example](./dataFlow-example.md)

## Diagram Size Guidelines

For PNG outputs:
- **Width**: 3000-5000px depending on complexity
- **Height**: 2000-4000px depending on complexity
- **Maximum nodes per segment**: 15-25 for readability

## Grouping Strategies

- **By Component**: Group by component type (pages, components, hooks)
- **By Directory**: Group by file directory structure
- **By Context**: Group by context provider/consumer relationships

## Command Line Options

To achieve these output formats, use these command options:

\`\`\`bash
# For clear component hierarchy
himdell --dir ./myproject --group-by component --segment-size 20 --diagram-width 4000 --diagram-height 3000

# For context relationship focus
himdell --dir ./myproject --group-by context --focus "AuthContext,CartContext" --diagram-width 3500 --diagram-height 2500

# For directory-based organization
himdell --dir ./myproject --group-by directory --segment-size 15 --diagram-width 4500
\`\`\`
`;

  await fs.writeFile(path.join(outputDir, 'PROFILING_GUIDE.md'), comparisonDoc);
  
  logger.success(`✅ Generated profiling documentation in ${outputDir}`);
  logger.info(`The documentation includes examples of well-formatted visualizations`);
}

/**
 * Creates an index.html file that links to all generated documentation
 * @param {string} outputDir - The output directory
 * @param {string[]} docPaths - Paths to generated documents
 * @param {Object} analysis - The analysis data
 */
async function createIndexHtml(outputDir, docPaths, analysis) {
  const htmlPath = path.join(outputDir, 'index.html');
  
  // Helper to get relative file paths
  const getRelativePath = (filePath) => {
    return path.relative(outputDir, filePath);
  };
  
  // Get map paths
  const mapsDir = path.join(outputDir, 'maps');
  let mapFiles = [];
  try {
    const files = await fs.readdir(mapsDir);
    mapFiles = files.filter(file => file.endsWith('.html') || file.endsWith('.md') || file.endsWith('.png'));
  } catch (error) {
    logger.debug(`Could not read maps directory: ${error.message}`);
  }
  
  // Compute some stats for dashboard
  const componentCount = getComponentCount(analysis);
  const contextCount = getContextCount(analysis);
  const hookCount = getHookCount(analysis);
  const fileCount = analysis.fileCount || mapFiles.length;
  
  // Generate the HTML
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Himdell Analysis Results</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1100px;
      margin: 0 auto;
      padding: 20px;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    a {
      color: #3498db;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .doc-type {
      font-size: 0.8em;
      background-color: #f0f0f0;
      border-radius: 4px;
      padding: 3px 8px;
      margin-right: 5px;
    }
    .preview-image {
      max-width: 100%;
      height: auto;
      margin-top: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    .dashboard {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      margin-bottom: 30px;
    }
    .stat-card {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 15px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #3498db;
      margin: 5px 0;
    }
    .stat-label {
      font-size: 0.9rem;
      color: #7f8c8d;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <h1>Himdell Analysis Results</h1>
  
  <div class="dashboard">
    <div class="stat-card">
      <div class="stat-value">${componentCount || 'N/A'}</div>
      <div class="stat-label">Components</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${contextCount || 'N/A'}</div>
      <div class="stat-label">Contexts</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${hookCount || 'N/A'}</div>
      <div class="stat-label">Hooks</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${fileCount || 'N/A'}</div>
      <div class="stat-label">Files</div>
    </div>
  </div>
  
  <h2>Documentation</h2>
  <div class="container">
    <div class="card" style="grid-column: 1 / -1; background-color: #f1f8ff; border-color: #79b8ff;">
      <span class="doc-type" style="background-color: #0366d6; color: white;">Summary</span>
      <h3><a href="SUMMARY.md" target="_blank">Analysis Summary</a></h3>
      <p>Overview of all generated documentation and key findings from the analysis.</p>
    </div>
    
    ${docPaths.map(docPath => {
      const fileName = path.basename(docPath);
      const relativePath = getRelativePath(docPath);
      
      // Skip summary since we already added it
      if (fileName === 'SUMMARY.md') return '';
      
      let docType = 'Document';
      if (fileName.includes('ARCHITECTURE')) docType = 'Architecture';
      if (fileName.includes('ROADMAP')) docType = 'Roadmap';
      if (fileName.includes('REFACTORING')) docType = 'Refactoring';
      if (fileName.includes('dependency-map')) docType = 'Dependency Map';
      if (fileName.includes('PERF_REPORT')) docType = 'Performance';
      if (fileName === 'README.md') docType = 'Overview';
      
      return `
    <div class="card">
      <span class="doc-type">${docType}</span>
      <h3><a href="${relativePath}" target="_blank">${fileName}</a></h3>
      <p>${getDocDescription(docType)}</p>
    </div>`;
    }).join('')}
  </div>
  
  <h2>Visualization Maps</h2>
  <div class="container">
    ${organizeMapFiles(mapFiles).map(({ category, files }) => {
      if (files.length === 0) return '';
      
      return `
    <div class="card" style="grid-column: 1 / -1;">
      <h3>${category}</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        ${files.map(fileName => {
          const fileExt = path.extname(fileName).substring(1);
          const relativePath = `maps/${fileName}`;
          const isStructureDiagram = fileName.includes('-structure');
          const isComponentDiagram = fileName.includes('component-hierarchy');
          const isDataFlowDiagram = fileName.includes('data-flow');
          const isApiDiagram = fileName.includes('api-integration');
          
          let mapTypeLabel = 'Other';
          if (isStructureDiagram) mapTypeLabel = 'Structure';
          if (isComponentDiagram) mapTypeLabel = 'Hierarchy';
          if (isDataFlowDiagram) mapTypeLabel = 'Data Flow';
          if (isApiDiagram) mapTypeLabel = 'API';
          
          return `
          <a href="${relativePath}" target="_blank" style="text-decoration: none;">
            <div style="border: 1px solid #eee; border-radius: 4px; padding: 8px; display: inline-block;">
              <span class="doc-type">${fileExt.toUpperCase()}</span>
              <span style="font-size: 0.9em;">${fileName.replace('-structure.md', '').replace('.md', '').replace('.html', '').replace('.png', '')}</span>
            </div>
          </a>`;
        }).join('')}
      </div>
    </div>`;
    }).join('')}
    
    <div class="card" style="grid-column: 1 / -1;">
      <h3>Main Visualizations</h3>
      <div class="container" style="margin-top: 10px;">
        ${getPrimaryVisualizations(mapFiles).map(fileName => {
          const fileExt = path.extname(fileName).substring(1);
          const relativePath = `maps/${fileName}`;
          
          return `
        <div class="card">
          <span class="doc-type">${fileExt.toUpperCase()}</span>
          <h3><a href="${relativePath}" target="_blank">${fileName}</a></h3>
          <p>${getMapDescription(fileExt)}</p>
          ${fileExt === 'png' ? `<img src="${relativePath}" class="preview-image" alt="Map Preview">` : ''}
          ${fileExt === 'html' ? `<iframe src="${relativePath}" style="width:100%;height:200px;border:1px solid #eee;border-radius:4px;margin-top:15px;"></iframe>` : ''}
        </div>`;
        }).join('')}
      </div>
    </div>
  </div>
  
  <footer style="margin-top: 40px; text-align: center; color: #7f8c8d; font-size: 0.9em;">
    Generated by Himdell - Codebase Visualization Tool
  </footer>
  
  <script>
    // If no PNG preview is available but HTML is, create a frame for it
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const link = card.querySelector('a');
      if (link && link.href.endsWith('.html') && !card.querySelector('.preview-image') && !card.querySelector('iframe')) {
        const iframe = document.createElement('iframe');
        iframe.src = link.href;
        iframe.style.width = '100%';
        iframe.style.height = '200px';
        iframe.style.border = '1px solid #eee';
        iframe.style.borderRadius = '4px';
        iframe.style.marginTop = '15px';
        card.appendChild(iframe);
      }
    });
  </script>
</body>
</html>`;

  await fs.writeFile(htmlPath, html);
  logger.info(`Created index file at: ${htmlPath}`);
}

/**
 * Organize map files into categories
 */
function organizeMapFiles(mapFiles) {
  const categories = [
    {
      category: 'Context Structure Diagrams',
      files: mapFiles.filter(file => file.includes('Context-structure'))
    },
    {
      category: 'Component Structure Diagrams',
      files: mapFiles.filter(file => 
        file.includes('-structure') && 
        !file.includes('Context-structure'))
    },
    {
      category: 'Flow Diagrams',
      files: mapFiles.filter(file => 
        file.includes('flow') || 
        file.includes('api-integration') ||
        file.includes('component-hierarchy'))
    }
  ];
  
  return categories;
}

/**
 * Get primary visualizations for featured display
 */
function getPrimaryVisualizations(mapFiles) {
  // Priority files to display prominently
  const priorityFiles = [
    'dependency-map.png',
    'dependency-map.html',
    'component-hierarchy.md',
    'data-flow.md',
    'api-integration.md'
  ];
  
  return mapFiles.filter(file => 
    priorityFiles.includes(file) ||
    (file === 'static-viewer.html')
  );
}

/**
 * Get component count from analysis
 */
function getComponentCount(analysis) {
  if (!analysis) return 0;
  
  // Different ways components might be tracked
  if (analysis.componentCount) return analysis.componentCount;
  
  // Try to count components from props
  if (analysis.props && Array.isArray(analysis.props)) {
    const uniqueComponents = new Set();
    analysis.props.forEach(prop => {
      if (prop.component) uniqueComponents.add(prop.component);
    });
    return uniqueComponents.size;
  }
  
  return 0;
}

/**
 * Get context count from analysis
 */
function getContextCount(analysis) {
  if (!analysis) return 0;
  
  if (analysis.contextCount) return analysis.contextCount;
  
  if (analysis.contexts && Array.isArray(analysis.contexts)) {
    // Count unique contexts
    const uniqueContexts = new Set();
    analysis.contexts.forEach(ctx => {
      if (ctx.name) uniqueContexts.add(ctx.name);
    });
    return uniqueContexts.size;
  }
  
  return 0;
}

/**
 * Get hook count from analysis
 */
function getHookCount(analysis) {
  if (!analysis) return 0;
  
  if (analysis.hookCount) return analysis.hookCount;
  
  // Try to estimate hooks from imports
  if (analysis.imports && Array.isArray(analysis.imports)) {
    const hookImports = analysis.imports.filter(imp => 
      (imp.name && imp.name.startsWith('use')) || 
      (imp.importedAs && imp.importedAs.some(name => name.startsWith('use')))
    );
    return hookImports.length;
  }
  
  return 0;
}

/**
 * Returns a description for a specific document type
 */
function getDocDescription(docType) {
  switch(docType) {
    case 'Architecture':
      return 'High-level overview of the codebase architecture and patterns.';
    case 'Roadmap':
      return 'Baseline metrics and structure to guide development.';
    case 'Refactoring':
      return 'Identified issues and refactoring suggestions.';
    case 'Dependency Map':
      return 'Visualization of file and component dependencies.';
    case 'Performance':
      return 'Performance analysis and optimization opportunities.';
    case 'Overview':
      return 'Project overview and documentation index.';
    default:
      return 'Codebase documentation.';
  }
}

/**
 * Returns a description for a specific map format
 */
function getMapDescription(format) {
  switch(format) {
    case 'html':
      return 'Interactive HTML visualization with clickable elements.';
    case 'md':
      return 'Markdown format with Mermaid diagrams.';
    case 'png':
      return 'Static image visualization.';
    default:
      return 'Dependency visualization.';
  }
} 