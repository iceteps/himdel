// Enhanced Mermaid diagram generator that tracks props, objects, arrays, and map operations
import path from 'path';

/**
 * Builds a Mermaid flowchart code from the analysis data
 * with enhanced tracking of props, objects, arrays, and map operations
 * 
 * @param {Object} analysis - The analysis data
 * @returns {string} - Mermaid flowchart code
 */
export function buildEnhancedMermaid(analysis) {
  // Use LR (left-to-right) layout instead of TD to reduce width
  let mermaidCode = '%%{init: {"theme": "default", "flowchart": {"htmlLabels": true, "curve": "basis"}}}%%\n';
  mermaidCode += 'flowchart LR\n';
  
  // Track nodes we've already added to avoid duplicates
  const addedNodes = new Set();
  
  // Function to sanitize ID for Mermaid
  const sanitizeId = (id) => {
    if (!id) return 'unknown';
    return id.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  };
  
  // Function to escape text for labels
  const escapeLabel = (text) => {
    if (!text) return '';
    return text.replace(/"/g, '\\"');
  };
  
  // Function to add a node if it hasn't been added before
  const addNode = (id, label, style = '', tooltip = '') => {
    const sanitizedId = sanitizeId(id);
    if (!addedNodes.has(sanitizedId)) {
      let nodeLabel = label;
      
      // Add tooltip as a title attribute if provided
      if (tooltip) {
        nodeLabel = `<div title="${escapeLabel(tooltip)}">${label}</div>`;
      }
      
      if (style) {
        mermaidCode += `  ${sanitizedId}["${nodeLabel}"]:::${style}\n`;
      } else {
        mermaidCode += `  ${sanitizedId}["${nodeLabel}"]\n`;
      }
      addedNodes.add(sanitizedId);
    }
    return sanitizedId;
  };
  
  // Add component files as nodes
  const componentFiles = analysis.imports
    ? analysis.imports
        .filter(({ file }) => file.includes('.jsx') || file.includes('.tsx'))
        .map(({ file }) => file)
    : [];
  
  // Add style classes with enhanced styles
  mermaidCode += `  %% Style definitions\n`;
  mermaidCode += `  classDef component fill:#e1f5fe,stroke:#0288d1,color:#01579b,stroke-width:2px\n`;
  mermaidCode += `  classDef context fill:#fff9c4,stroke:#fbc02d,color:#f57f17,stroke-width:2px\n`;
  mermaidCode += `  classDef object fill:#e8f5e9,stroke:#43a047,color:#1b5e20,stroke-width:1px\n`;
  mermaidCode += `  classDef array fill:#f3e5f5,stroke:#8e24aa,color:#4a148c,stroke-width:1px\n`;
  mermaidCode += `  classDef map fill:#ffebee,stroke:#e53935,color:#b71c1c,stroke-width:1px\n`;
  mermaidCode += `  classDef multiConsumer fill:#ede7f6,stroke:#673ab7,color:#311b92,stroke-width:3px\n`;
  mermaidCode += `  classDef provider fill:#e8f5e9,stroke:#43a047,color:#1b5e20,stroke-width:2px,stroke-dasharray:5,5\n`;
  mermaidCode += `  classDef hook fill:#bbdefb,stroke:#1976d2,color:#0d47a1,stroke-width:1px\n`;
  mermaidCode += `  classDef prop fill:#e1f5fe,stroke:#0288d1,color:#01579b,stroke-width:1px,stroke-dasharray:3,3\n\n`;
  
  // Group related components (by directory)
  const filesByDirectory = componentFiles.reduce((acc, file) => {
    const dir = path.dirname(file);
    if (!acc[dir]) acc[dir] = [];
    acc[dir].push(file);
    return acc;
  }, {});
  
  // Create subgraphs for better organization
  // Components Subgraph organized by directories
  mermaidCode += `  subgraph Components\n`;
  Object.entries(filesByDirectory).forEach(([dir, files]) => {
    // Create a subgraph for each directory
    const dirName = dir.split('/').pop();
    mermaidCode += `    subgraph ${sanitizeId(dirName)}_components["${dirName}"]\n`;
    files.forEach(file => {
      const componentName = path.basename(file, path.extname(file));
      
      // Count props for this component
      const componentProps = analysis.props ? analysis.props.filter(p => p.component === componentName) : [];
      const propCount = componentProps.length > 0 ? componentProps.length : 0;
      
      // Check if this component consumes contexts
      const consumedContexts = analysis.contexts ? 
        analysis.contexts.filter(c => c.type === 'consume' && c.component === componentName) : [];
      
      // Build a tooltip with detailed info
      const tooltip = `Component: ${componentName}\nFile: ${file}\nProps: ${propCount}\nContexts Used: ${consumedContexts.length}`;
      
      addNode(componentName, `<b>${componentName}</b>\n(Props: ${propCount})`, 'component', tooltip);
    });
    mermaidCode += `    end\n`;
  });
  mermaidCode += `  end\n\n`;
  
  // Create a subgraph for context providers
  const providers = analysis.contexts ? analysis.contexts.filter(c => c.type === 'provider') : [];
  
  if (providers.length > 0) {
    mermaidCode += `  subgraph Providers\n`;
    providers.forEach(provider => {
      const providerName = provider.providerComponent;
      const contextName = provider.contextName;
      let valueDisplay = '';
      
      if (provider.value) {
        valueDisplay = `\nValue: ${provider.value.substring(0, 30)}${provider.value.length > 30 ? '...' : ''}`;
      }
      
      const tooltip = `Provider: ${providerName}\nContext: ${contextName}${valueDisplay}`;
      
      addNode(`provider_${providerName}_${contextName}`, 
              `<b>${providerName}</b>\n(Provides: ${contextName})${valueDisplay}`, 
              'provider', 
              tooltip);
    });
    mermaidCode += `  end\n\n`;
  }
  
  // Add hooks subgraph
  const hooks = analysis.contexts ? analysis.contexts.filter(c => c.type === 'hook') : [];
  
  if (hooks.length > 0) {
    mermaidCode += `  subgraph CustomHooks["Custom Hooks"]\n`;
    hooks.forEach(hook => {
      const hookName = hook.hookName;
      const contextName = hook.name;
      const tooltip = `Hook: ${hookName}\nUses Context: ${contextName}\nFile: ${hook.file}`;
      
      addNode(hookName, `<b>${hookName}</b>\n(Uses: ${contextName})`, 'hook', tooltip);
    });
    mermaidCode += `  end\n\n`;
  }
  
  // Add objects subgraph with more details
  if (analysis.objects && analysis.objects.length > 0) {
    mermaidCode += `  subgraph Objects\n`;
    analysis.objects.forEach(obj => {
      const objName = obj.name;
      const propertiesCount = obj.properties ? obj.properties.length : 0;
      
      // Build a tooltip with property details
      let propsTooltip = `Object: ${objName}\nProperties: ${propertiesCount}`;
      if (obj.properties && obj.properties.length > 0) {
        propsTooltip += '\n' + obj.properties.map(p => `- ${p}`).join('\n');
      }
      
      const objId = addNode(objName, `<b>Object:</b> ${objName}\n(${propertiesCount} props)`, 'object', propsTooltip);
    });
    mermaidCode += `  end\n\n`;
  }
  
  // Add arrays subgraph
  if (analysis.arrays && analysis.arrays.length > 0) {
    mermaidCode += `  subgraph Arrays\n`;
    analysis.arrays.forEach(arr => {
      const arrName = arr.name;
      const elementsCount = arr.elements || 0;
      const tooltip = `Array: ${arrName}\nElements: ${elementsCount}\nFile: ${arr.file}`;
      
      const arrId = addNode(arrName, `<b>Array:</b> ${arrName}\n(${elementsCount} elements)`, 'array', tooltip);
    });
    mermaidCode += `  end\n\n`;
  }
  
  // Add contexts subgraph with much more detail
  if (analysis.contexts && analysis.contexts.length > 0) {
    mermaidCode += `  subgraph Contexts\n`;
    // Create a map to count context usage across files
    const contextUsage = {};
    analysis.contexts.forEach(ctx => {
      if (ctx.type !== 'create' && ctx.type !== 'consume') return;
      
      const name = ctx.name;
      if (!contextUsage[name]) {
        contextUsage[name] = { 
          creators: new Set(), 
          consumers: new Set(),
          initialValue: null,
          valueType: 'unknown'
        };
      }
      
      if (ctx.type === 'create') {
        contextUsage[name].creators.add(ctx.file);
        contextUsage[name].initialValue = ctx.initialValue;
        contextUsage[name].valueType = ctx.valueType;
      } else if (ctx.type === 'consume') {
        contextUsage[name].consumers.add(ctx.component || ctx.file);
      }
    });
    
    // Add context nodes with enhanced details
    Object.entries(contextUsage).forEach(([name, usage]) => {
      const isMultiConsumed = usage.consumers.size > 1;
      const nodeStyle = isMultiConsumed ? 'multiConsumer' : 'context';
      
      // Format the initial value
      let initialValueDisplay = '';
      if (usage.initialValue !== null) {
        initialValueDisplay = `\nInitial: ${usage.initialValue}`;
      }
      
      // Create tooltip with detailed information
      const consumers = Array.from(usage.consumers).join(', ');
      const creators = Array.from(usage.creators).join(', ');
      const tooltip = `Context: ${name}\nType: ${usage.valueType}\nCreated in: ${creators}\nConsumed by: ${consumers}`;
      
      const label = `<b>Context:</b> ${name}\n(${usage.consumers.size} consumers)${initialValueDisplay}`;
      addNode(name, label, nodeStyle, tooltip);
    });
    mermaidCode += `  end\n\n`;
  }
  
  // Add detailed props subgraph for multiple-consumed props
  if (analysis.multiConsumedProps && analysis.multiConsumedProps.length > 0) {
    mermaidCode += `  subgraph SharedProps["Shared Props"]\n`;
    analysis.multiConsumedProps.forEach(prop => {
      const propName = prop.name;
      const consumersCount = prop.files ? prop.files.length : 0;
      
      // Create detailed tooltip
      const tooltip = `Prop: ${propName}\nConsumers: ${consumersCount}\nUsed in: ${prop.files.join(', ')}`;
      
      // Add more informative label that shows consumers
      let consumersList = '';
      if (prop.files && prop.files.length > 0) {
        const shortList = prop.files.slice(0, 3).map(f => path.basename(f, path.extname(f)));
        consumersList = `\n(${shortList.join(', ')}${prop.files.length > 3 ? ', ...' : ''})`;
      }
      
      addNode(`prop_${propName}`, `<b>Prop:</b> ${propName}\n(Used ${consumersCount}×)${consumersList}`, 'multiConsumer', tooltip);
    });
    mermaidCode += `  end\n\n`;
  }
  
  // Add detailed component props subgraph
  if (analysis.props && analysis.props.length > 0) {
    // Group props by component
    const componentWithDetailedProps = new Set();
    const propsByComponent = {};
    
    analysis.props.forEach(prop => {
      const component = prop.component;
      if (!propsByComponent[component]) {
        propsByComponent[component] = [];
      }
      
      // Only include certain types of prop entries to avoid duplication
      if (prop.type === 'function' || prop.type === 'arrow' || prop.type === 'jsx') {
        if (prop.props && prop.props.length > 0) {
          // For structured prop data
          if (typeof prop.props[0] === 'object') {
            propsByComponent[component].push(...prop.props.map(p => ({ 
              name: p.name, 
              type: p.type, 
              defaultValue: p.defaultValue,
              file: prop.file
            })));
          } else {
            // For simple prop data (just names)
            propsByComponent[component].push(...prop.props.map(p => ({ 
              name: p, 
              type: 'unknown',
              file: prop.file
            })));
          }
          componentWithDetailedProps.add(component);
        }
      }
    });
    
    // Add a subgraph for components with significant props
    if (componentWithDetailedProps.size > 0) {
      mermaidCode += `  subgraph ComponentProps["Component Props"]\n`;
      
      Array.from(componentWithDetailedProps).slice(0, 5).forEach(component => {
        // Create a subgraph for each component's props (limit to 5 components to avoid clutter)
        const props = propsByComponent[component];
        if (props && props.length > 0) {
          mermaidCode += `    subgraph ${sanitizeId(component)}_props["${component} Props"]\n`;
          
          // Add up to 8 prop nodes per component
          props.slice(0, 8).forEach(prop => {
            const propName = prop.name;
            let typeInfo = prop.type !== 'unknown' ? `\nType: ${prop.type}` : '';
            let defaultValueInfo = '';
            
            if (prop.defaultValue !== undefined && prop.defaultValue !== null) {
              defaultValueInfo = `\nDefault: ${prop.defaultValue}`;
            }
            
            const tooltip = `Prop: ${propName} in ${component}${typeInfo}${defaultValueInfo}\nFile: ${prop.file}`;
            
            addNode(`${component}_prop_${propName}`, 
                    `<b>${propName}</b>${typeInfo}${defaultValueInfo}`, 
                    'prop', 
                    tooltip);
          });
          
          // If there are more props, add an ellipsis node
          if (props.length > 8) {
            mermaidCode += `      ${sanitizeId(component)}_more_props["...and ${props.length - 8} more"]\n`;
          }
          
          mermaidCode += `    end\n`;
        }
      });
      
      // If there are more components, add a note
      if (componentWithDetailedProps.size > 5) {
        mermaidCode += `    more_components["...and ${componentWithDetailedProps.size - 5} more components"]\n`;
      }
      
      mermaidCode += `  end\n\n`;
    }
  }

  // Add relationships for imports (show only significant relationships)
  mermaidCode += `  %% Import relationships\n`;
  if (analysis.imports) {
    // Group imports by source to reduce complexity
    const importsBySource = {};
    
    analysis.imports.forEach(({ file, source }) => {
      const sourceFile = path.basename(source, path.extname(source));
      const targetFile = path.basename(file, path.extname(file));
      
      if (!importsBySource[sourceFile]) {
        importsBySource[sourceFile] = new Set();
      }
      importsBySource[sourceFile].add(targetFile);
    });
    
    // Add import relationships (limit to significant ones)
    Object.entries(importsBySource).forEach(([source, targets]) => {
      // Skip common libraries that would clutter the diagram
      if (['react', 'react-dom', 'prop-types', 'styled-components'].includes(source)) {
        return;
      }
      
      // Add each target with a clean directional arrow
      targets.forEach(target => {
        mermaidCode += `  ${sanitizeId(source)} --> ${sanitizeId(target)}\n`;
      });
    });
  }
  
  // Add relationships for contexts with better visibility
  mermaidCode += `  %% Context relationships\n`;
  if (analysis.contexts) {
    // Track the context creation relationships
    analysis.contexts.filter(c => c.type === 'create').forEach(({ name, file }) => {
      const fileName = path.basename(file, path.extname(file));
      mermaidCode += `  ${sanitizeId(fileName)} -->|creates| ${sanitizeId(name)}\n`;
    });
    
    // Track connections to providers
    analysis.contexts.filter(c => c.type === 'provider').forEach((provider) => {
      const providerName = provider.providerComponent;
      const contextName = provider.contextName;
      
      mermaidCode += `  ${sanitizeId(contextName)} -->|used by| ${sanitizeId(`provider_${providerName}_${contextName}`)}\n`;
    });
    
    // Track only significant component consumption (to avoid clutter)
    const contextConsumers = {};
    analysis.contexts.filter(c => c.type === 'consume').forEach(({ name, component, file }) => {
      if (!contextConsumers[name]) {
        contextConsumers[name] = new Set();
      }
      
      const consumerName = component || path.basename(file, path.extname(file));
      contextConsumers[name].add(consumerName);
    });
    
    // Add context consumer connections (limited to important ones)
    Object.entries(contextConsumers).forEach(([contextName, consumers]) => {
      // Limit to 5 consumers per context to avoid clutter
      Array.from(consumers).slice(0, 5).forEach(consumerName => {
        mermaidCode += `  ${sanitizeId(contextName)} -.->|used by| ${sanitizeId(consumerName)}\n`;
      });
    });
    
    // Add hook relationships
    hooks.forEach(hook => {
      const hookName = hook.hookName;
      const contextName = hook.name;
      
      mermaidCode += `  ${sanitizeId(contextName)} -.->|used by| ${sanitizeId(hookName)}\n`;
    });
  }
  
  // Add relationships for component props
  mermaidCode += `  %% Props relationships\n`;
  if (analysis.props) {
    // Connect components to their prop subgraphs
    const componentsWithPropSubgraphs = new Set();
    
    analysis.props.forEach(prop => {
      if (prop.props && prop.props.length > 0) {
        componentsWithPropSubgraphs.add(prop.component);
      }
    });
    
    // Add connections from components to their props subgraphs
    componentsWithPropSubgraphs.forEach(component => {
      mermaidCode += `  ${sanitizeId(component)} -->|has props| ${sanitizeId(component)}_props\n`;
    });
    
    // Add connections for multi-consumed props
    if (analysis.multiConsumedProps) {
      analysis.multiConsumedProps.forEach(prop => {
        if (prop.files) {
          // Limit to 3 files per shared prop to avoid clutter
          prop.files.slice(0, 3).forEach(file => {
            const fileName = path.basename(file, path.extname(file));
            mermaidCode += `  ${sanitizeId(`prop_${prop.name}`)} -.->|used by| ${sanitizeId(fileName)}\n`;
          });
        }
      });
    }
  }
  
  // Add relationships for objects
  mermaidCode += `  %% Object relationships\n`;
  if (analysis.objects) {
    analysis.objects.forEach(obj => {
      const objName = obj.name;
      const fileName = path.basename(obj.file, path.extname(obj.file));
      
      mermaidCode += `  ${sanitizeId(fileName)} -->|creates| ${sanitizeId(objName)}\n`;
    });
  }
  
  // Add relationships for arrays
  mermaidCode += `  %% Array relationships\n`;
  if (analysis.arrays) {
    analysis.arrays.forEach(arr => {
      const arrName = arr.name;
      const fileName = path.basename(arr.file, path.extname(arr.file));
      
      mermaidCode += `  ${sanitizeId(fileName)} -->|creates| ${sanitizeId(arrName)}\n`;
    });
  }
  
  // Add map operations with cleaner organization
  mermaidCode += `  %% Map operations\n`;
  if (analysis.mapOperations && analysis.mapOperations.length > 0) {
    // Group map operations by source to reduce clutter
    const mapsBySource = {};
    
    analysis.mapOperations.forEach(map => {
      const source = map.source;
      if (!mapsBySource[source]) {
        mapsBySource[source] = [];
      }
      mapsBySource[source].push(map);
    });
    
    // Connect arrays to their map operations (limiting to significant ones)
    Object.entries(mapsBySource).forEach(([source, maps]) => {
      if (source !== 'unknown' && maps.length > 0) {
        // Just take the first few map operations to avoid cluttering the diagram
        maps.slice(0, 3).forEach(map => {
          const fileName = path.basename(map.file, path.extname(map.file));
          mermaidCode += `  ${sanitizeId(source)} -->|mapped in| ${sanitizeId(fileName)}\n`;
        });
      }
    });
  }
  
  return mermaidCode;
}

function segmentDiagram(analysis, segmentSize = 20) {
  // If the number of components is small enough, return the full analysis
  const componentCount = getComponentCount(analysis);
  if (componentCount <= segmentSize) {
    return [analysis];
  }
  
  // Otherwise, create segments
  const segments = [];
  
  // Group by directory or other logical divisions
  const componentsByDirectory = groupComponentsByDirectory(analysis);
  
  // Create segments respecting the segmentSize limit
  let currentSegment = createEmptyAnalysisObject();
  let currentNodeCount = 0;
  
  for (const [dir, components] of Object.entries(componentsByDirectory)) {
    // If adding this directory would exceed the segment size,
    // finalize the current segment and create a new one
    if (currentNodeCount + components.length > segmentSize && currentNodeCount > 0) {
      segments.push(currentSegment);
      currentSegment = createEmptyAnalysisObject();
      currentNodeCount = 0;
    }
    
    // Add this directory's components to the current segment
    addComponentsToSegment(currentSegment, components, analysis);
    currentNodeCount += components.length;
  }
  
  // Add the final segment if it has any components
  if (currentNodeCount > 0) {
    segments.push(currentSegment);
  }
  
  return segments;
}

function createContextFocusedDiagram(analysis, contextName) {
  // Filter the analysis data to include only the specified context
  // and components that consume it
  const focusedAnalysis = {
    ...analysis,
    contexts: analysis.contexts.filter(ctx => 
      ctx.name === contextName || 
      (ctx.type === 'consume' && ctx.contextName === contextName)
    ),
    // Filter other properties similarly
  };
  
  return buildEnhancedMermaid(focusedAnalysis);
}