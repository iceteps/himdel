import fs from 'fs/promises';
import path from 'path';
import { buildEnhancedMermaid } from './enhancedMermaid.js';

// Helper function to categorize files by type
function categorizeFile(filePath) {
  if (filePath.includes('/api/')) {
    return 'API';
  } else if (filePath.includes('/components/')) {
    return 'Component';
  } else if (filePath.includes('/app/')) {
    return 'Page';
  } else if (filePath.includes('/lib/')) {
    return 'Utility';
  } else if (filePath.includes('/contexts/')) {
    return 'Context';
  } else {
    return 'Other';
  }
}

// Helper function to extract component name from file path
function getComponentName(filePath) {
  const basename = path.basename(filePath, path.extname(filePath));
  return basename;
}

export async function writeMarkdown(analysis, outputDir) {
  const outputPath = path.join(outputDir, 'dependency-map.md');

  // Group imports by file and categorize
  const importsByCategory = {
    'API': [],
    'Component': [],
    'Page': [],
    'Utility': [],
    'Context': [],
    'Other': []
  };

  // Process imports and group by file source
  const importsByFile = {};

  analysis.imports.forEach(({ file, source }) => {
    const category = categorizeFile(file);
    
    if (!importsByFile[file]) {
      importsByFile[file] = [];
    }
    
    importsByFile[file].push(source);
    
    // Create import entry
    const importEntry = `- **${file}** → \`${source}\``;
    importsByCategory[category].push(importEntry);
  });

  // Process contexts and group by creator/consumer
  const contextCreators = {};
  const contextConsumers = {};

  analysis.contexts.forEach(({ type, name, file }) => {
    if (type === 'create') {
      if (!contextCreators[name]) {
        contextCreators[name] = [];
      }
      contextCreators[name].push(file);
    } else {
      if (!contextConsumers[name]) {
        contextConsumers[name] = [];
      }
      contextConsumers[name].push(file);
    }
  });

  // Process props and group by component
  const propsByComponent = {};
  const componentsUsingProps = {};

  analysis.props.forEach(({ component, props, file }) => {
    if (!propsByComponent[component]) {
      propsByComponent[component] = [];
    }
    
    // Store the props with their provider
    propsByComponent[component].push({ file, props });
    
    // Track which components are receiving props
    if (!componentsUsingProps[file]) {
      componentsUsingProps[file] = [];
    }
    
    componentsUsingProps[file].push({ component, props });
  });

  // Generate markdown content with sections
  const mermaidCode = buildEnhancedMermaid(analysis);
  
  let markdownContent = `# Dependency Map\n\n`;
  
  // Add Mermaid diagram
  markdownContent += `\`\`\`mermaid\n${mermaidCode}\n\`\`\`\n\n`;

  // Add imports by category
  markdownContent += `## Imports\n\n`;
  
  // API Routes
  if (importsByCategory['API'].length > 0) {
    markdownContent += `### API Routes\n\n`;
    markdownContent += importsByCategory['API'].join('\n') + '\n\n';
  }
  
  // Pages
  if (importsByCategory['Page'].length > 0) {
    markdownContent += `### Pages\n\n`;
    markdownContent += importsByCategory['Page'].join('\n') + '\n\n';
  }
  
  // Components
  if (importsByCategory['Component'].length > 0) {
    markdownContent += `### Components\n\n`;
    markdownContent += importsByCategory['Component'].join('\n') + '\n\n';
  }
  
  // Contexts
  if (importsByCategory['Context'].length > 0) {
    markdownContent += `### Context Providers\n\n`;
    markdownContent += importsByCategory['Context'].join('\n') + '\n\n';
  }
  
  // Utilities
  if (importsByCategory['Utility'].length > 0) {
    markdownContent += `### Utilities\n\n`;
    markdownContent += importsByCategory['Utility'].join('\n') + '\n\n';
  }
  
  // Other
  if (importsByCategory['Other'].length > 0) {
    markdownContent += `### Other\n\n`;
    markdownContent += importsByCategory['Other'].join('\n') + '\n\n';
  }

  // Add contexts section
  markdownContent += `## Context Flow\n\n`;
  
  // List context creators
  markdownContent += `### Context Creators\n\n`;
  Object.entries(contextCreators).forEach(([contextName, files]) => {
    markdownContent += `- **${contextName}** is created by:\n`;
    files.forEach(file => {
      markdownContent += `  - ${file}\n`;
    });
  });
  markdownContent += '\n';
  
  // List context consumers
  markdownContent += `### Context Consumers\n\n`;
  Object.entries(contextConsumers).forEach(([contextName, files]) => {
    markdownContent += `- **${contextName}** is used by:\n`;
    files.forEach(file => {
      markdownContent += `  - ${file}\n`;
    });
  });
  markdownContent += '\n';

  // Add special section for multi-consumed contexts
  if (analysis.multiConsumedContexts && analysis.multiConsumedContexts.length > 0) {
    markdownContent += `### Multi-Consumed Contexts\n\n`;
    analysis.multiConsumedContexts.forEach(context => {
      markdownContent += `- **${context.name}** is consumed in ${context.files.length} files:\n`;
      context.files.forEach(file => {
        markdownContent += `  - ${file}\n`;
      });
    });
    markdownContent += '\n';
  }

  // Add props section
  markdownContent += `## Props Flow\n\n`;
  
  // Props by component
  markdownContent += `### Component Props\n\n`;
  Object.entries(propsByComponent).forEach(([component, propEntries]) => {
    markdownContent += `- **${component}** receives props from:\n`;
    propEntries.forEach(({ file, props }) => {
      markdownContent += `  - ${file} (${props.join(', ')})\n`;
    });
  });
  markdownContent += '\n';
  
  // Components passing props
  markdownContent += `### Components Passing Props\n\n`;
  Object.entries(componentsUsingProps).forEach(([file, componentEntries]) => {
    markdownContent += `- **${file}** passes props to:\n`;
    componentEntries.forEach(({ component, props }) => {
      markdownContent += `  - ${component} (${props.join(', ')})\n`;
    });
  });
  markdownContent += '\n';
  
  // Add special section for multi-consumed props
  if (analysis.multiConsumedProps && analysis.multiConsumedProps.length > 0) {
    markdownContent += `### Multi-Consumed Props\n\n`;
    analysis.multiConsumedProps.forEach(prop => {
      markdownContent += `- **${prop.name}** is consumed in ${prop.files.length} files:\n`;
      prop.files.forEach(file => {
        markdownContent += `  - ${file}\n`;
      });
    });
    markdownContent += '\n';
  }
  
  // Add objects section if we have objects
  if (analysis.objects && analysis.objects.length > 0) {
    markdownContent += `## Objects\n\n`;
    analysis.objects.forEach(obj => {
      markdownContent += `- **${obj.name}** defined in ${obj.file}:\n`;
      if (obj.properties && obj.properties.length > 0) {
        markdownContent += `  - Properties: ${obj.properties.join(', ')}\n`;
      }
    });
    markdownContent += '\n';
  }
  
  // Add arrays section if we have arrays
  if (analysis.arrays && analysis.arrays.length > 0) {
    markdownContent += `## Arrays\n\n`;
    analysis.arrays.forEach(arr => {
      markdownContent += `- **${arr.name}** defined in ${arr.file}`;
      if (arr.elements) {
        markdownContent += ` with ${arr.elements} elements`;
      }
      markdownContent += '\n';
    });
    markdownContent += '\n';
  }
  
  // Add map operations section if we have any
  if (analysis.mapOperations && analysis.mapOperations.length > 0) {
    markdownContent += `## Map Operations\n\n`;
    
    // Group by source
    const mapsBySource = {};
    analysis.mapOperations.forEach(map => {
      if (!mapsBySource[map.source]) {
        mapsBySource[map.source] = [];
      }
      mapsBySource[map.source].push(map.file);
    });
    
    Object.entries(mapsBySource).forEach(([source, files]) => {
      if (source !== 'unknown') {
        markdownContent += `- **${source}** is mapped in:\n`;
        [...new Set(files)].forEach(file => {
          markdownContent += `  - ${file}\n`;
        });
      }
    });
    markdownContent += '\n';
  }

  // Write the markdown file
  await fs.writeFile(outputPath, markdownContent);
  console.log('✅ Markdown file generated!');
}