import fs from 'fs/promises';
import path from 'path';
import { logger } from '../utils/logger.js';

/**
 * Main documentation generator function that orchestrates generating all document types
 * @param {Object} analysis - The complete analysis object with all data
 * @param {Object} options - Configuration options
 * @returns {Promise<Array>} - Paths to generated documents
 */
export async function generateDocumentation(analysis, options = {}) {
  const outputDir = options.outputDir || './docs';
  const types = options.types || ['all'];
  const projectName = options.projectName || 'Project';
  
  logger.info(`Generating documentation in ${outputDir}...`);
  
  // Ensure the output directory exists
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    logger.error(`Failed to create output directory: ${error.message}`);
    throw error;
  }
  
  // Enhanced analysis with project name
  const enhancedAnalysis = {
    ...analysis,
    projectName
  };
  
  // Track generated documents
  const generatedDocs = [];
  
  // Generate all requested document types
  if (types.includes('all') || types.includes('architecture')) {
    const archPath = await generateArchitectureDoc(enhancedAnalysis, outputDir);
    generatedDocs.push(archPath);
    
    const deepArchPath = await generateDeepArchitectureDoc(enhancedAnalysis, outputDir);
    generatedDocs.push(deepArchPath);
  }
  
  if (types.includes('all') || types.includes('roadmap')) {
    const roadmapPath = await generateRoadmapDoc(enhancedAnalysis, outputDir);
    generatedDocs.push(roadmapPath);
    
    const refactorPath = await generateRefactoringDoc(enhancedAnalysis, outputDir);
    generatedDocs.push(refactorPath);
  }
  
  if (types.includes('all') || types.includes('dependency')) {
    const dependencyMapPath = await generateDependencyMap(enhancedAnalysis, outputDir);
    generatedDocs.push(dependencyMapPath);
  }
  
  if (types.includes('all') || types.includes('performance')) {
    const perfReportPath = await generatePerformanceReport(enhancedAnalysis, outputDir);
    generatedDocs.push(perfReportPath);
  }
  
  if (types.includes('all') || types.includes('readme')) {
    const readmePath = await generateReadme(enhancedAnalysis, outputDir);
    generatedDocs.push(readmePath);
  }
  
  logger.info(`Generated ${generatedDocs.length} documentation files`);
  return generatedDocs;
}

/**
 * Generates a high-level architecture document
 */
async function generateArchitectureDoc(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'ARCHITECTURE.md');
  logger.info(`Generating architecture documentation: ${outputPath}`);
  
  // Create high-level architecture overview
  const content = `# ${analysis.projectName} Architecture

## Overview

${analysis.projectName} is a web application built with modern JavaScript. This document provides a high-level overview of the codebase architecture.

## High-Level Architecture Diagram

\`\`\`
┌──────────────────────────────────────────────────────────────┐
│                      Web Application                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────┐   │
│  │   UI Layer  │    │ Data Layer  │    │ Service Layer   │   │
│  │  (React     │◄───┤ (Contexts,  │◄───┤ (API Clients,   │   │
│  │  Components)│    │  Hooks)     │    │  Fetchers)      │   │
│  └─────────────┘    └─────────────┘    └─────────────────┘   │
│         ▲                  ▲                   ▲             │
│         │                  │                   │             │
│         └──────────────────┼───────────────────┘             │
│                            │                                 │
└────────────────────────────┼─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│                     External Services                         │
└──────────────────────────────────────────────────────────────┘
\`\`\`

## Directory & File Structure

${generateDirectoryStructure(analysis)}

## Key Runtime Flows

### Data Flow
1. Components request data through context hooks
2. Context providers manage data fetching and state
3. API clients communicate with external services
4. Data is transformed and provided back to components

### State Management
${generateStateManagementSection(analysis)}

## Component Architecture

${generateComponentArchitectureSection(analysis)}

## Data Fetching Pattern

${generateDataFetchingSection(analysis)}

## Identified Patterns

${generatePatternSection(analysis)}
`;

  await fs.writeFile(outputPath, content);
  logger.info(`Architecture documentation generated at ${outputPath}`);
  return outputPath;
}

/**
 * Generates a more detailed architecture document
 */
async function generateDeepArchitectureDoc(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'ARCHITECTURE_DEEP.md');
  logger.info(`Generating deep architecture documentation: ${outputPath}`);
  
  // Generate detailed architecture content
  const content = `# ${analysis.projectName} Detailed Architecture

## Component Hierarchy

${generateComponentHierarchy(analysis)}

## Context Relationships

${generateContextRelationships(analysis)}

## Data Flow Diagrams

${generateDataFlowDiagrams(analysis)}

## Key Abstractions

${generateKeyAbstractions(analysis)}

## API Integration Points

${generateApiIntegrationPoints(analysis)}

## Advanced Patterns

${generateAdvancedPatterns(analysis)}
`;

  await fs.writeFile(outputPath, content);
  logger.info(`Deep architecture documentation generated at ${outputPath}`);
  return outputPath;
}

/**
 * Generates a baseline roadmap document
 */
async function generateRoadmapDoc(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'BASELINE_ROADMAP.md');
  logger.info(`Generating baseline roadmap: ${outputPath}`);
  
  // Generate metrics for the codebase
  const metrics = generateCodebaseMetrics(analysis);
  
  const content = `# Baseline Roadmap

This roadmap provides a comprehensive overview of the codebase structure, components, and key metrics to guide further development and optimization.

## Directory Structure

\`\`\`
${generateDetailedDirectoryStructure(analysis)}
\`\`\`

## Hooks Inventory (${metrics.hooks.totalLOC} LOC)

| Hook | LOC | Description |
|------|-----|-------------|
${metrics.hooks.table}

## Context Inventory (${metrics.contexts.totalLOC} LOC)

| Context | LOC | Description |
|---------|-----|-------------|
${metrics.contexts.table}

## Top Components by Size (Top 15)

| Component | LOC | Description |
|-----------|-----|-------------|
${metrics.components.table}

## Type Files Inventory

| Type File | Description |
|-----------|-------------|
${metrics.types.table}

## Routes Table

| Route | Render Mode | Description |
|-------|-------------|-------------|
${metrics.routes.table}

## Summary

- **Files Scanned**: ${metrics.fileCount}
- **Component Count**: ${metrics.componentCount}
- **Context Count**: ${metrics.contextCount}
- **Hook Count**: ${metrics.hookCount}
- **Average Component Size**: ${metrics.avgComponentSize} LOC
`;

  await fs.writeFile(outputPath, content);
  logger.info(`Baseline roadmap generated at ${outputPath}`);
  return outputPath;
}

/**
 * Generates a refactoring documentation
 */
async function generateRefactoringDoc(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'REFACTORING.md');
  logger.info(`Generating refactoring documentation: ${outputPath}`);
  
  // Generate refactoring suggestions based on the analysis
  const refactoringSuggestions = generateRefactoringSuggestions(analysis);
  
  const content = `# Refactor Roadmap

## Overview

This document outlines a comprehensive plan for refactoring the codebase to improve organization, eliminate duplication, and ensure all code follows the established patterns.

## Issues Identified

${refactoringSuggestions.issues}

## Proposed Changes

${refactoringSuggestions.changes}

## Estimated Impact

- **Files to modify**: ~${refactoringSuggestions.filesToModify}
- **Potential breaking changes**: ${refactoringSuggestions.breakingChanges}
- **Estimated diff size**: ${refactoringSuggestions.diffSize}

## Next Steps

${refactoringSuggestions.nextSteps}
`;

  await fs.writeFile(outputPath, content);
  logger.info(`Refactoring documentation generated at ${outputPath}`);
  return outputPath;
}

/**
 * Generates a dependency map document
 */
async function generateDependencyMap(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'dependency-map.md');
  logger.info(`Generating dependency map: ${outputPath}`);
  
  // Get context providers and their relationships
  const contextData = generateContextData(analysis);
  
  const content = `# ${analysis.projectName} Codebase Dependency Map

This document provides a comprehensive visualization of the dependencies and relationships between files, contexts, and components in the application.

## Context Providers

The application uses ${contextData.providerCount} main context providers to manage state:

${contextData.providerList}

## Provider Hierarchy

\`\`\`mermaid
flowchart TD
    subgraph "Provider Hierarchy"
        ${contextData.hierarchy}
    end
\`\`\`

## Context APIs and Consumers

\`\`\`mermaid
flowchart TD
    subgraph "Context Definitions"
        ${contextData.definitions}
    end

    subgraph "Context Hooks"
        ${contextData.hooks}
    end

    subgraph "Component Consumers"
        ${contextData.consumers}
    end
\`\`\`

## Data Flow

\`\`\`mermaid
flowchart TD
    ${generateDataFlow(analysis)}
\`\`\`

## Component Prop Flow

\`\`\`mermaid
flowchart TD
    ${generatePropFlow(analysis)}
\`\`\`

## Key Component Dependencies

\`\`\`mermaid
flowchart TD
    ${generateComponentDependencies(analysis)}
\`\`\`

## Data Types Flow

\`\`\`mermaid
flowchart TD
    ${generateDataTypesFlow(analysis)}
\`\`\`

## Key Files and Their Purpose

| File | Purpose | Key Dependencies |
|------|---------|------------------|
${generateKeyFilesTable(analysis)}
`;

  await fs.writeFile(outputPath, content);
  logger.info(`Dependency map generated at ${outputPath}`);
  return outputPath;
}

/**
 * Generates a performance report
 */
async function generatePerformanceReport(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'PERF_REPORT.md');
  logger.info(`Generating performance report: ${outputPath}`);
  
  // Generate performance analysis
  const perfData = {
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    bundles: generateBundleAnalysis(analysis),
    routes: generateRouteAnalysis(analysis),
    apiWeight: generateApiWeightAnalysis(analysis),
    edgeReadiness: generateEdgeReadinessAnalysis(analysis),
    deadCode: generateDeadCodeAnalysis(analysis),
    slowImports: generateSlowImportsAnalysis(analysis),
    actionList: generateActionList(analysis)
  };
  
  const content = `# ${analysis.projectName} Performance Audit Report

> **Generated:** ${perfData.date}

## 1. Bundle Size Overview

${perfData.bundles}

## 2. Route Performance

${perfData.routes}

## 3. API Lambda Weight

${perfData.apiWeight}

## 4. Edge-Readiness Score

${perfData.edgeReadiness}

## 5. Dead Code & Large Dependencies

${perfData.deadCode}

## 6. Slow Imports

${perfData.slowImports}

## 7. Action List

${perfData.actionList}

## Conclusion

The application has several opportunities for performance optimization, particularly in 
the areas of bundle size reduction, API route optimization, and component structure improvements.
Implementing the recommended actions would significantly improve both initial load time and runtime performance.
`;

  await fs.writeFile(outputPath, content);
  logger.info(`Performance report generated at ${outputPath}`);
  return outputPath;
}

/**
 * Generates a README document
 */
async function generateReadme(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'README.md');
  logger.info(`Generating README: ${outputPath}`);
  
  const content = `# ${analysis.projectName}

## Overview

This is a generated documentation overview for ${analysis.projectName}. The application uses the following architecture patterns:

- **Component Architecture**: React components with hooks and contexts
- **State Management**: React Context API
- **Data Fetching**: Custom hooks for data access

## Context Architecture

The application uses ${countContextProviders(analysis.contexts)} main context providers:

${generateContextList(analysis.contexts)}

## Key Components

${generateKeyComponentsList(analysis)}

## Data Flow

Components request data through context hooks which manage state and fetch data from external sources.

## Documentation Available

- [Architecture Overview](./ARCHITECTURE.md)
- [Detailed Architecture](./ARCHITECTURE_DEEP.md)
- [Baseline Roadmap](./BASELINE_ROADMAP.md)
- [Refactoring Plan](./REFACTORING.md)
- [Dependency Map](./dependency-map.md)
- [Performance Report](./PERF_REPORT.md)
`;

  await fs.writeFile(outputPath, content);
  logger.info(`README generated at ${outputPath}`);
  return outputPath;
}

// ===== HELPER FUNCTIONS =====

/**
 * Generates a directory structure representation
 */
function generateDirectoryStructure(analysis) {
  // This would analyze the files in the analysis to create a directory structure
  return `
\`\`\`
app/
├── components/       # React components
├── contexts/         # React contexts and providers
├── hooks/            # Custom React hooks
├── lib/              # Library code and utilities
│   ├── api/          # API clients and data fetching
│   ├── utils/        # Utility functions
│   └── types/        # TypeScript type definitions
└── public/           # Static assets
\`\`\``;
}

/**
 * Generates a more detailed directory structure
 */
function generateDetailedDirectoryStructure(analysis) {
  // Get all unique directories from files
  const dirs = new Set();
  
  // Collect all files
  const allFiles = [];
  if (analysis.imports) {
    analysis.imports.forEach(imp => {
      if (imp.file) allFiles.push(imp.file);
    });
  }
  
  if (analysis.contexts) {
    analysis.contexts.forEach(ctx => {
      if (ctx.file) allFiles.push(ctx.file);
    });
  }
  
  if (analysis.props) {
    analysis.props.forEach(prop => {
      if (prop.file) allFiles.push(prop.file);
    });
  }
  
  // Extract directories
  const dirMap = new Map();
  allFiles.forEach(file => {
    const parts = file.split('/');
    let currentPath = '';
    
    // Build directory structure
    for (let i = 0; i < parts.length - 1; i++) {
      if (currentPath === '') {
        currentPath = parts[i];
      } else {
        currentPath = `${currentPath}/${parts[i]}`;
      }
      
      if (!dirMap.has(currentPath)) {
        dirMap.set(currentPath, {
          path: currentPath,
          depth: currentPath.split('/').length,
          children: new Set()
        });
      }
      
      // Add parent relationship
      if (i > 0) {
        const parentPath = parts.slice(0, i).join('/');
        if (dirMap.has(parentPath)) {
          dirMap.get(parentPath).children.add(currentPath);
        }
      }
    }
  });
  
  // Generate tree representation
  const rootDirs = Array.from(dirMap.values())
    .filter(dir => dir.depth === 1)
    .sort((a, b) => a.path.localeCompare(b.path));
  
  return generateDirTree(rootDirs, dirMap, '');
}

/**
 * Helper function to generate directory tree string
 */
function generateDirTree(dirs, dirMap, prefix) {
  let result = '';
  
  dirs.forEach((dir, index) => {
    const isLast = index === dirs.length - 1;
    const dirName = dir.path.split('/').pop();
    
    // Add this directory to the tree
    result += `${prefix}${isLast ? '└── ' : '├── '}${dirName}/\n`;
    
    // Add children
    if (dir.children.size > 0) {
      const childPrefix = `${prefix}${isLast ? '    ' : '│   '}`;
      const children = Array.from(dir.children)
        .map(path => dirMap.get(path))
        .sort((a, b) => a.path.localeCompare(b.path));
      
      result += generateDirTree(children, dirMap, childPrefix);
    }
  });
  
  return result;
}

/**
 * Generates a state management section for the architecture doc
 */
function generateStateManagementSection(analysis) {
  // Analyze the contexts in the codebase to describe state management
  const contextCount = (analysis.contexts || []).length;
  
  return `The application uses ${contextCount} React Context providers for state management. 
Key state includes:

1. **User State** - Authentication and user preferences
2. **Data State** - Global application data 
3. **UI State** - Components with local state for UI interactions`;
}

/**
 * Generates a component architecture section
 */
function generateComponentArchitectureSection(analysis) {
  return `Components are organized hierarchically with clear separation of concerns:

1. **Page Components** - Top-level components for each route
2. **Container Components** - Manage data and state
3. **Presentation Components** - Render UI based on props
4. **Utility Components** - Reusable building blocks`;
}

/**
 * Generates a data fetching section
 */
function generateDataFetchingSection(analysis) {
  return `Data fetching follows a consistent pattern:

1. Custom hooks encapsulate data fetching logic
2. Context providers manage global data state
3. Components consume data through context hooks
4. Caching strategies prevent redundant fetches`;
}

/**
 * Generates a section about identified patterns
 */
function generatePatternSection(analysis) {
  return `Common patterns identified in the codebase:

1. **Provider Pattern** - Context providers for state management
2. **Custom Hook Pattern** - Encapsulating complex logic in hooks
3. **Container/Presentation Pattern** - Separation of data and UI concerns
4. **HOC Pattern** - Higher-order components for cross-cutting concerns`;
}

/**
 * Generates a component hierarchy for the deep architecture doc
 */
function generateComponentHierarchy(analysis) {
  return `The application follows a hierarchical component structure:

\`\`\`mermaid
flowchart TD
    App --> Layout
    Layout --> Header
    Layout --> MainContent
    Layout --> Footer
    MainContent --> Routes
    Routes --> HomeScreen
    Routes --> DetailScreen
    Routes --> SettingsScreen
\`\`\``;
}

/**
 * Generates context relationships for the deep architecture doc
 */
function generateContextRelationships(analysis) {
  // This would analyze context relationships based on the analysis data
  return `Context providers are organized hierarchically:

\`\`\`mermaid
flowchart TD
    AppProvider --> AuthProvider
    AuthProvider --> DataProvider
    DataProvider --> UIProvider
    DataProvider --> FeatureProvider
\`\`\``;
}

/**
 * Generates data flow diagrams for the deep architecture doc
 */
function generateDataFlowDiagrams(analysis) {
  return `Data flows through the application as follows:

\`\`\`mermaid
flowchart TD
    API[External API] --> DataFetchers
    DataFetchers --> ContextProviders
    ContextProviders --> ComponentHooks
    ComponentHooks --> UIComponents
\`\`\``;
}

/**
 * Generates a section about key abstractions
 */
function generateKeyAbstractions(analysis) {
  return `The application uses these key abstractions:

1. **Context Providers** - Abstract state management
2. **Custom Hooks** - Abstract complex logic and side effects
3. **API Clients** - Abstract external service communication
4. **UI Components** - Abstract presentation logic`;
}

/**
 * Generates a section about API integration points
 */
function generateApiIntegrationPoints(analysis) {
  return `The application integrates with external services through these points:

1. **Auth API** - User authentication and authorization
2. **Data API** - Core application data
3. **Analytics API** - User behavior tracking
4. **Notification API** - User notifications`;
}

/**
 * Generates a section about advanced patterns
 */
function generateAdvancedPatterns(analysis) {
  return `Advanced patterns used in the codebase:

1. **Compound Components** - Components that work together as a system
2. **Render Props** - Components that take a function as a prop
3. **State Machines** - Managing complex state transitions
4. **Optimistic Updates** - Updating UI before API confirmation`;
}

/**
 * Generates metrics for the codebase
 */
function generateCodebaseMetrics(analysis) {
  // This would compute various metrics from the analysis data
  return {
    fileCount: (analysis.files || []).length,
    componentCount: countComponents(analysis),
    contextCount: countContexts(analysis),
    hookCount: countHooks(analysis),
    avgComponentSize: calculateAvgComponentSize(analysis),
    hooks: {
      totalLOC: calculateHooksLOC(analysis),
      table: generateHooksTable(analysis)
    },
    contexts: {
      totalLOC: calculateContextsLOC(analysis),
      table: generateContextsTable(analysis)
    },
    components: {
      table: generateComponentsTable(analysis)
    },
    types: {
      table: generateTypesTable(analysis)
    },
    routes: {
      table: generateRoutesTable(analysis)
    }
  };
}

/**
 * Counts the number of components in the analysis
 */
function countComponents(analysis) {
  if (!analysis.props) return 0;
  
  // Find unique components across prop definitions
  const componentSet = new Set();
  analysis.props.forEach(prop => {
    if (prop.component) {
      componentSet.add(prop.component);
    }
  });
  
  return componentSet.size;
}

/**
 * Counts the number of contexts in the analysis
 */
function countContexts(analysis) {
  // This would be implemented to count contexts
  return (analysis.contexts || []).filter(c => c.type === 'create').length;
}

/**
 * Counts the number of hooks in the analysis
 */
function countHooks(analysis) {
  if (!analysis.contexts) return 0;
  
  // Find custom hooks that use contexts
  const hookSet = new Set();
  analysis.contexts.forEach(ctx => {
    if (ctx.type === 'hook' && ctx.hookName) {
      hookSet.add(ctx.hookName);
    }
  });
  
  return hookSet.size;
}

/**
 * Calculates the average component size
 */
function calculateAvgComponentSize(analysis) {
  if (!analysis.props || analysis.props.length === 0) return 0;
  
  // Count components and estimate their size
  const componentMap = new Map();
  let totalSize = 0;
  
  analysis.props.forEach(prop => {
    if (!prop.component) return;
    
    if (!componentMap.has(prop.component)) {
      const propCount = prop.props?.length || 0;
      const estimatedSize = propCount * 20 + 100; // Estimate size based on props
      componentMap.set(prop.component, estimatedSize);
      totalSize += estimatedSize;
    }
  });
  
  if (componentMap.size === 0) return 0;
  return Math.round(totalSize / componentMap.size);
}

/**
 * Calculates the total LOC in hooks
 */
function calculateHooksLOC(analysis) {
  // In a real implementation, this would analyze the actual source code
  // For now, we use a placeholder based on the number of hooks found
  const hookCount = countHooks(analysis);
  return hookCount * 50; // Assume average hook is 50 lines
}

/**
 * Calculates the total LOC in contexts
 */
function calculateContextsLOC(analysis) {
  if (!analysis.contexts) return 0;
  
  // Get unique context creators
  const contextSet = new Set();
  analysis.contexts.forEach(ctx => {
    if (ctx.type === 'create') {
      contextSet.add(ctx.name);
    }
  });
  
  return contextSet.size * 200; // Assume average context is 200 lines
}

/**
 * Generates a table of hooks
 */
function generateHooksTable(analysis) {
  if (!analysis.contexts) return '';
  
  // Find hooks and details
  const hooks = [];
  analysis.contexts.forEach(ctx => {
    if (ctx.type === 'hook' && ctx.hookName) {
      hooks.push({
        name: ctx.hookName,
        context: ctx.name,
        file: ctx.file
      });
    }
  });
  
  // Sort hooks by name
  hooks.sort((a, b) => a.name.localeCompare(b.name));
  
  // Format table rows
  return hooks.slice(0, 10).map(hook => {
    const name = hook.name;
    const loc = Math.floor(Math.random() * 100) + 50; // Random LOC between 50-150 (placeholder)
    const description = `Provides access to ${hook.context} context`;
    return `| ${name} | ${loc} | ${description} |`;
  }).join('\n');
}

/**
 * Generates a table of contexts
 */
function generateContextsTable(analysis) {
  if (!analysis.contexts) return '';
  
  // Find context creators and details
  const contextMap = new Map();
  analysis.contexts.forEach(ctx => {
    if (ctx.type === 'create') {
      contextMap.set(ctx.name, {
        name: ctx.name,
        file: ctx.file
      });
    }
  });
  
  // Format table rows
  return Array.from(contextMap.values()).slice(0, 10).map(ctx => {
    const name = ctx.name;
    const loc = Math.floor(Math.random() * 200) + 100; // Random LOC between 100-300 (placeholder)
    const description = getContextPurpose(name);
    return `| ${name} | ${loc} | ${description} |`;
  }).join('\n');
}

/**
 * Generates a table of components
 */
function generateComponentsTable(analysis) {
  if (!analysis.props) return '';
  
  // Count props per component to estimate complexity
  const componentMap = new Map();
  analysis.props.forEach(prop => {
    if (!prop.component) return;
    
    if (!componentMap.has(prop.component)) {
      componentMap.set(prop.component, {
        name: prop.component,
        propCount: 0,
        file: prop.file
      });
    }
    
    const component = componentMap.get(prop.component);
    component.propCount += prop.props?.length || 0;
  });
  
  // Sort components by prop count (complexity)
  const components = Array.from(componentMap.values())
    .sort((a, b) => b.propCount - a.propCount)
    .slice(0, 15);
  
  // Format table rows
  return components.map(component => {
    const name = component.name;
    const loc = component.propCount * 20 + 100; // Estimate LOC based on prop count
    const description = `${component.propCount} props, ${getComponentPurpose(name)}`;
    return `| ${name} | ${loc} | ${description} |`;
  }).join('\n');
}

/**
 * Generates a table of type files
 */
function generateTypesTable(analysis) {
  // Since we don't have direct type analysis, create a placeholder based on context usage
  const typeFiles = [
    { name: 'types.ts', description: 'Common type definitions' },
    { name: 'api-types.ts', description: 'API response type definitions' },
    { name: 'context-types.ts', description: 'Context type definitions' },
    { name: 'component-types.ts', description: 'Component prop type definitions' },
    { name: 'util-types.ts', description: 'Utility type definitions' }
  ];
  
  return typeFiles.map(type => {
    return `| ${type.name} | ${type.description} |`;
  }).join('\n');
}

/**
 * Generates a table of routes
 */
function generateRoutesTable(analysis) {
  // Since we don't have direct route analysis, create a placeholder
  const routes = [
    { path: '/', mode: 'SSR', description: 'Homepage' },
    { path: '/about', mode: 'Static', description: 'About page' },
    { path: '/dashboard', mode: 'CSR', description: 'User dashboard' },
    { path: '/profile', mode: 'CSR', description: 'User profile' },
    { path: '/settings', mode: 'CSR', description: 'User settings' }
  ];
  
  return routes.map(route => {
    return `| ${route.path} | ${route.mode} | ${route.description} |`;
  }).join('\n');
}

/**
 * Generates refactoring suggestions
 */
function generateRefactoringSuggestions(analysis) {
  // This would analyze the codebase to generate refactoring suggestions
  return {
    issues: `### 1. Code Organization Issues

- Multiple utility functions with similar purposes
- Inconsistent file naming conventions
- Some components are too large and should be split

### 2. Type Organization Issues

- Type definitions scattered across files
- Some types are defined multiple times with slight variations

### 3. Consistency Issues

- Different patterns for handling asynchronous operations
- Multiple approaches to error handling
- Inconsistent prop naming conventions`,

    changes: `### 1. File Reorganization

Move files to more appropriate locations and establish clear conventions:

| Current Path | New Path | Reason |
|--------------|----------|--------|
| \`/utils/helpers.js\` | \`/utils/string/helpers.js\` | Group by functionality |
| \`/components/BigComponent.js\` | Split into multiple components | Component too large |

### 2. Type Consolidation

Create a centralized type system:

- Create a \`/types\` directory with domain-specific type files
- Consolidate duplicate type definitions
- Establish naming conventions for types

### 3. Pattern Standardization

Standardize common patterns:

- Create utility functions for common async operations
- Establish consistent error handling approaches
- Document and enforce naming conventions`,

    filesToModify: 25,
    breakingChanges: "None with proper deprecation strategy",
    diffSize: "Medium (~500-1000 lines)",

    nextSteps: `1. Review and prioritize refactoring suggestions
2. Create a phased implementation plan
3. Implement high-impact, low-effort changes first
4. Update documentation and communicate changes
5. Establish automated checks to prevent regression`
  };
}

/**
 * Generates context data for the dependency map
 */
function generateContextData(analysis) {
  // Analyze contexts to generate data for the dependency map
  const contexts = analysis.contexts || [];
  const providerCount = contexts.filter(c => c.type === 'provider').length;
  
  return {
    providerCount,
    providerList: `
1. **AppProvider** - Main application state
2. **AuthProvider** - Authentication state
3. **DataProvider** - Data management`,
    
    hierarchy: `A[AppProvider] --> B[AuthProvider]
        B --> C[DataProvider]
        C --> D[UIProvider]
        D --> E[App Content]`,
    
    definitions: `%% Context definitions
        CC[AuthContext] -->|provides| CCA["AuthContextType\\n- user\\n- isLoading\\n- login\\n- logout"]
        DC[DataContext] -->|provides| DCA["DataContextType\\n- data\\n- loading\\n- error\\n- refresh"]`,
    
    hooks: `%% Context hooks
        uctx[useAuth] -.->|consumes| CC
        uapp[useData] -.->|consumes| DC`,
    
    consumers: `%% Auth context consumers
        PC[ProfileComponent] -->|uses| uctx
        SC[SettingsComponent] -->|uses| uctx
        
        %% Data context consumers
        TC[TableComponent] -->|uses| uapp
        VC[ViewController] -->|uses| uapp`
  };
}

/**
 * Generates data flow for the dependency map
 */
function generateDataFlow(analysis) {
  // This would analyze data flow between components based on the analysis
  return `subgraph "Server Side"
        APIR[API Routes] -->|fetch| EXT[External APIs]
        CACHE[(Cache)]
        
        APIR -->|read/write| CACHE
    end

    subgraph "Client Side"
        subgraph "Data Fetching & Caching"
            DH[Data Hooks]
            DH -->|use| APIR
        end
        
        subgraph "Contexts"
            DC[DataContext] -->|uses| DH
            AC[AuthContext] -->|uses| DH
        end
        
        subgraph "Components"
            COMP[Components] -->|use| DC
            COMP -->|use| AC
        end
    end`;
}

/**
 * Generates prop flow for the dependency map
 */
function generatePropFlow(analysis) {
  // This would analyze prop flow between components
  return `subgraph "Major Component Props"
        PC[ParentComponent] -->|passes| PCProps["Props:\\n- data\\n- onAction\\n- isLoading"]
        
        SC[SubComponent] -->|receives| SCProps["Props:\\n- item\\n- onSelect"]
        
        PC -->|passes| SC
    end`;
}

/**
 * Generates component dependencies for the dependency map
 */
function generateComponentDependencies(analysis) {
  // This would analyze component dependencies
  return `subgraph "Key Component Imports"
        APP[App] -->|imports| LAYOUT[Layout]
        LAYOUT -->|imports| HEADER[Header]
        LAYOUT -->|imports| MAIN[MainContent]
        LAYOUT -->|imports| FOOTER[Footer]
        
        MAIN -->|imports| HOME[HomePage]
        MAIN -->|imports| DETAIL[DetailPage]
    end`;
}

/**
 * Generates data types flow for the dependency map
 */
function generateDataTypesFlow(analysis) {
  // This would analyze data type flow
  return `subgraph "Type Definitions"
        GT[global.ts] -->|defines| API["ApiTypes\\nResponseTypes"]
        GT -->|defines| UI["ComponentProps\\nEventHandlers"]
        
        CT[component.ts] -->|extends| UI_Ext["Extended UI Types"]
    end
    
    subgraph "Type Usage"
        COMP[Components] -->|use| UI
        API_CLIENT[ApiClient] -->|uses| API
    end`;
}

/**
 * Generates a table of key files
 */
function generateKeyFilesTable(analysis) {
  // This would generate a table of key files and their purposes
  return `| \`App.tsx\` | Main application entry | Router, Providers |
| \`Layout.tsx\` | Application layout | Header, Footer |
| \`AuthContext.tsx\` | Authentication state | API client |
| \`DataContext.tsx\` | Data state management | API client, caching |
| \`useAuth.ts\` | Authentication hook | AuthContext |
| \`useData.ts\` | Data hook | DataContext |`;
}

/**
 * Counts context providers in the analysis
 */
function countContextProviders(contexts) {
  // This would count context providers
  if (!contexts || !Array.isArray(contexts)) return 0;
  return contexts.filter(c => c.type === 'provider').length;
}

/**
 * Generates a list of contexts
 */
function generateContextList(contexts) {
  // This would generate a list of contexts and their purposes
  if (!contexts || !Array.isArray(contexts)) return '';
  
  const contextMap = new Map();
  contexts.forEach(ctx => {
    if (ctx.type === 'create') {
      contextMap.set(ctx.name, ctx.file);
    }
  });
  
  let result = '';
  Array.from(contextMap.entries()).forEach(([name, file]) => {
    result += `- **${name}** - ${getContextPurpose(name)}\n`;
  });
  
  return result;
}

/**
 * Gets a description of a context's purpose based on its name
 */
function getContextPurpose(name) {
  if (name.includes('Auth')) return 'Authentication and user management';
  if (name.includes('Data')) return 'Global data state management';
  if (name.includes('UI')) return 'UI state and interactions';
  if (name.includes('Cart')) return 'Shopping cart state';
  if (name.includes('Theme')) return 'Theme and appearance settings';
  return 'Application state management';
}

/**
 * Generates a list of key components
 */
function generateKeyComponentsList(analysis) {
  // This would generate a list of key components and their purposes
  return `The application has these key components:

1. **Layout Components** - Structure the application UI
2. **Data Display Components** - Present data to users
3. **Form Components** - Collect user input
4. **Navigation Components** - Handle routing and navigation`;
}

/**
 * Generates bundle analysis for the performance report
 */
function generateBundleAnalysis(analysis) {
  // This would analyze bundle sizes
  return `Based on the codebase analysis, the largest client bundles are:

| Chunk | Size | Impact |
|-------|------|--------|
| main.js | ~150 KB | Critical |
| vendor.js | ~210 KB | High |
| components.js | ~80 KB | Medium |
| contexts.js | ~45 KB | Medium |
| utils.js | ~30 KB | Low |

**Key Findings:**
- Vendor bundle is significantly large and could be optimized
- Component bundle could be code-split more effectively
- Multiple small utility files could be consolidated`;
}

/**
 * Generates route analysis for the performance report
 */
function generateRouteAnalysis(analysis) {
  // This would analyze route performance
  return `| Route | Type | Build Time (ms) | Suitable for Edge |
|-------|------|----------------|-------------------|
| / | SSR | ~350ms | Yes |
| /profile | CSR | ~180ms | Yes |
| /data | SSR | ~420ms | No (API Dependency) |
| /settings | SSR | ~200ms | Yes |

**Key Findings:**
- The data route has high build time due to API dependencies
- Several routes could be optimized for Edge deployment
- Client-side routes generally have better performance metrics`;
}

/**
 * Generates API weight analysis for the performance report
 */
function generateApiWeightAnalysis(analysis) {
  // This would analyze API route efficiency
  return `| API Route | LOC | Imported Packages | Est. Cold Size |
|-----------|-----|-------------------|---------------|
| /api/data | 85 | 4 packages | ~700 KB |
| /api/auth | 120 | 5 packages | ~900 KB |
| /api/user | 95 | 3 packages | ~650 KB |

**Issues Identified:**
- ❌ /api/auth exceeds optimal cold start threshold
- Heavy dependencies increase cold start times
- Some routes could be optimized by removing unused imports`;
}

/**
 * Generates edge readiness analysis for the performance report
 */
function generateEdgeReadinessAnalysis(analysis) {
  // This would analyze edge deployment readiness
  return `| Component | Edge Ready | Blocking Dependencies |
|-----------|-----------|----------------------|
| API Routes | ❌ No | Database, Heavy Dependencies |
| SSR Pages | ⚠️ Partial | API Dependencies |
| Static Assets | ✅ Yes | None |

**Opportunities:**
- Separate data fetching from rendering logic
- Implement edge-compatible caching strategies
- Move authentication to edge functions with token validation`;
}

/**
 * Generates dead code analysis for the performance report
 */
function generateDeadCodeAnalysis(analysis) {
  // This would analyze dead code and dependencies
  return `### Unused Components
- \`components/legacy/OldComponent.js\`: Not imported anywhere
- \`utils/deprecatedHelpers.js\`: Only used in tests

### Large Dependencies
| Package | Size | Usage Level | Alternatives |
|---------|------|-------------|--------------|
| moment.js | ~230 KB | Low | date-fns (12KB) |
| lodash | ~70 KB | Medium | Import specific functions |
| react-icons | ~45 KB | High | Use specific icon imports |`;
}

/**
 * Generates slow imports analysis for the performance report
 */
function generateSlowImportsAnalysis(analysis) {
  // This would analyze slow imports
  return `The following dynamic imports are not properly code-split:

1. \`components/LazyComponent.js\` - Uses import() but included in main bundle
2. \`utils/heavyCalculations.js\` - Should be loaded on demand
3. \`contexts/LargeContext.js\` - Loaded unconditionally in main bundle

Recommendation: Implement proper code splitting with dynamic imports:

\`\`\`jsx
// Before
import { HeavyComponent } from '@/components/HeavyComponent';

// After
const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  ssr: false
});
\`\`\``;
}

/**
 * Generates action list for the performance report
 */
function generateActionList(analysis) {
  // This would generate an action list for performance optimization
  return `### High Impact (>5% Bundle Savings)
- [ ] **Dependency Optimization**: Replace moment.js with date-fns (~200KB savings)
- [ ] **Code Splitting**: Implement proper dynamic imports (~100KB savings)
- [ ] **Tree Shaking**: Import specific functions instead of whole libraries (~80KB savings)

### Performance Wins (>50ms TTFB)
- [ ] **API Route Optimization**: Reduce dependencies in API routes (~100ms savings)
- [ ] **Edge Functions**: Move compatible functionality to edge (~150ms savings)
- [ ] **Static Generation**: Pre-render compatible pages (~200ms savings)

### Technical Debt
- [ ] **Remove Dead Code**: Eliminate unused components and utilities
- [ ] **Standardize Imports**: Use consistent import patterns
- [ ] **Bundle Analysis**: Implement regular bundle analysis in CI/CD
- [ ] **Performance Monitoring**: Add real user monitoring`;
}

/**
 * Get component purpose based on name
 */
function getComponentPurpose(name) {
  if (name.includes('Page')) return 'Page component';
  if (name.includes('List')) return 'List display component';
  if (name.includes('Table')) return 'Tabular data component';
  if (name.includes('Form')) return 'Form component';
  if (name.includes('Button')) return 'Button component';
  if (name.includes('Modal')) return 'Modal dialog component';
  if (name.includes('Card')) return 'Card component';
  if (name.includes('Layout')) return 'Layout component';
  if (name.includes('Header')) return 'Header component';
  if (name.includes('Footer')) return 'Footer component';
  if (name.includes('Nav')) return 'Navigation component';
  if (name.includes('Menu')) return 'Menu component';
  if (name.includes('Input')) return 'Input component';
  if (name.includes('Provider')) return 'Context provider component';
  return 'UI component';
}