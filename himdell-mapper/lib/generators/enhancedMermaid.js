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
  let mermaidCode = 'flowchart LR\n';
  
  // Track nodes we've already added to avoid duplicates
  const addedNodes = new Set();
  
  // Function to sanitize ID for Mermaid
  const sanitizeId = (id) => {
    return id.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  };
  
  // Function to add a node if it hasn't been added before
  const addNode = (id, label, shape = 'rect', style = '') => {
    const sanitizedId = sanitizeId(id);
    if (!addedNodes.has(sanitizedId)) {
      if (style) {
        mermaidCode += `  ${sanitizedId}${shape}["${label}"]:::${style}\n`;
      } else {
        mermaidCode += `  ${sanitizedId}${shape}["${label}"]\n`;
      }
      addedNodes.add(sanitizedId);
    }
    return sanitizedId;
  };
  
  // Add component files as nodes
  const componentFiles = analysis.imports
    .filter(({ file }) => file.includes('.jsx') || file.includes('.tsx'))
    .map(({ file }) => file);
  
  // Add style classes
  mermaidCode += `  %% Style definitions\n`;
  mermaidCode += `  classDef component fill:#e1f5fe,stroke:#0288d1,color:#01579b\n`;
  mermaidCode += `  classDef context fill:#fff9c4,stroke:#fbc02d,color:#f57f17\n`;
  mermaidCode += `  classDef object fill:#e8f5e9,stroke:#43a047,color:#1b5e20\n`;
  mermaidCode += `  classDef array fill:#f3e5f5,stroke:#8e24aa,color:#4a148c\n`;
  mermaidCode += `  classDef map fill:#ffebee,stroke:#e53935,color:#b71c1c\n`;
  mermaidCode += `  classDef multiConsumer fill:#ede7f6,stroke:#673ab7,color:#311b92,stroke-width:3px\n\n`;
  
  // Create subgraphs for better organization
  // Components Subgraph
  mermaidCode += `  subgraph Components\n`;
  componentFiles.forEach(file => {
    const componentName = path.basename(file, path.extname(file));
    addNode(componentName, componentName, '["Component: " + "', 'component');
  });
  mermaidCode += `  end\n\n`;
  
  // Add objects subgraph
  if (analysis.objects && analysis.objects.length > 0) {
    mermaidCode += `  subgraph Objects\n`;
    analysis.objects.forEach(obj => {
      const objName = obj.name;
      const propertiesCount = obj.properties ? obj.properties.length : 0;
      const objId = addNode(objName, `Object: ${objName}\n(${propertiesCount} props)`, '["', 'object');
    });
    mermaidCode += `  end\n\n`;
  }
  
  // Add arrays subgraph
  if (analysis.arrays && analysis.arrays.length > 0) {
    mermaidCode += `  subgraph Arrays\n`;
    analysis.arrays.forEach(arr => {
      const arrName = arr.name;
      const elementsCount = arr.elements || 0;
      const arrId = addNode(arrName, `Array: ${arrName}\n(${elementsCount} elements)`, '["', 'array');
    });
    mermaidCode += `  end\n\n`;
  }
  
  // Add contexts subgraph
  if (analysis.contexts && analysis.contexts.length > 0) {
    mermaidCode += `  subgraph Contexts\n`;
    // Create a map to count context usage across files
    const contextUsage = {};
    analysis.contexts.forEach(({ name, type, file }) => {
      if (!contextUsage[name]) {
        contextUsage[name] = { creators: new Set(), consumers: new Set() };
      }
      
      if (type === 'create') {
        contextUsage[name].creators.add(file);
      } else if (type === 'consume') {
        contextUsage[name].consumers.add(file);
      }
    });
    
    // Add context nodes
    Object.entries(contextUsage).forEach(([name, usage]) => {
      const isMultiConsumed = usage.consumers.size > 1;
      const nodeStyle = isMultiConsumed ? 'multiConsumer' : 'context';
      const label = `Context: ${name}\n(${usage.consumers.size} consumers)`;
      addNode(name, label, '["', nodeStyle);
    });
    mermaidCode += `  end\n\n`;
  }
  
  // Add multiple-consumed props subgraph if applicable
  if (analysis.multiConsumedProps && analysis.multiConsumedProps.length > 0) {
    mermaidCode += `  subgraph MultiConsumedProps\n`;
    analysis.multiConsumedProps.forEach(prop => {
      const propName = prop.name;
      const consumersCount = prop.files.length;
      addNode(`prop_${propName}`, `Prop: ${propName}\n(${consumersCount} consumers)`, '["', 'multiConsumer');
    });
    mermaidCode += `  end\n\n`;
  }

  // Add relationships for imports
  mermaidCode += `  %% Import relationships\n`;
  analysis.imports.forEach(({ file, source }) => {
    const sourceFile = path.basename(source, path.extname(source));
    const targetFile = path.basename(file, path.extname(file));
    
    mermaidCode += `  ${sanitizeId(sourceFile)} --> ${sanitizeId(targetFile)}\n`;
  });
  
  // Add relationships for contexts
  mermaidCode += `  %% Context relationships\n`;
  if (analysis.contexts) {
    analysis.contexts.forEach(({ type, name, file }) => {
      const fileName = path.basename(file, path.extname(file));
      
      if (type === 'create') {
        mermaidCode += `  ${sanitizeId(fileName)} -->|creates| ${sanitizeId(name)}\n`;
      } else if (type === 'consume') {
        mermaidCode += `  ${sanitizeId(name)} -.->|used by| ${sanitizeId(fileName)}\n`;
      }
    });
  }
  
  // Add relationships for props (just component level for clarity)
  mermaidCode += `  %% Props relationships\n`;
  if (analysis.props) {
    // Group props by component to avoid too many lines
    const propsByComponent = {};
    
    analysis.props.forEach(prop => {
      const component = prop.component;
      if (!propsByComponent[component]) {
        propsByComponent[component] = [];
      }
      propsByComponent[component].push(prop);
    });
    
    // Add connections for component props
    Object.entries(propsByComponent).forEach(([component, props]) => {
      if (props.length > 0 && props[0].file) {
        const fileName = path.basename(props[0].file, path.extname(props[0].file));
        mermaidCode += `  ${sanitizeId(fileName)} -->|props| ${sanitizeId(component)}\n`;
      }
    });
    
    // Add connections for multi-consumed props
    if (analysis.multiConsumedProps) {
      analysis.multiConsumedProps.forEach(prop => {
        prop.files.forEach(file => {
          const fileName = path.basename(file, path.extname(file));
          mermaidCode += `  ${sanitizeId(`prop_${prop.name}`)} -.->|used by| ${sanitizeId(fileName)}\n`;
        });
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
  
  // Add relationships for map operations
  mermaidCode += `  %% Map operations\n`;
  if (analysis.mapOperations) {
    // Group map operations by source to reduce clutter
    const mapsBySource = {};
    
    analysis.mapOperations.forEach(map => {
      const source = map.source;
      if (!mapsBySource[source]) {
        mapsBySource[source] = [];
      }
      mapsBySource[source].push(map);
    });
    
    // Connect arrays to their map operations
    Object.entries(mapsBySource).forEach(([source, maps]) => {
      if (source !== 'unknown') {
        maps.forEach(map => {
          const fileName = path.basename(map.file, path.extname(map.file));
          mermaidCode += `  ${sanitizeId(source)} -->|mapped in| ${sanitizeId(fileName)}\n`;
        });
      }
    });
  }
  
  return mermaidCode;
}