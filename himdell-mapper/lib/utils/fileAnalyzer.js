import workerpool from 'workerpool';
import fs from 'fs/promises';
import { parse } from '@babel/parser';
import { visit } from 'recast';

// Function to analyze a file for imports, contexts, props, objects, arrays, and map operations
async function analyze(filePath) {
  try {
    // Read the file content
    const code = await fs.readFile(filePath, 'utf8');
    
    // Parse the code to AST
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript', 'decorators-legacy'],
    });
    
    // Results to collect
    const result = {
      imports: [],
      contexts: [],
      props: [],
      objects: [],
      arrays: [],
      mapOperations: [],
    };
    
    // Analyze imports
    visit(ast, {
      visitImportDeclaration(path) {
        const source = path.node.source.value;
        result.imports.push({ source, file: filePath });
        this.traverse(path);
      },
    });
    
    // Analyze React contexts
    visit(ast, {
      visitCallExpression(path) {
        if (path.node.callee.name === 'createContext') {
          result.contexts.push({ 
            type: 'create', 
            name: path.parent.id?.name || 'UnnamedContext', 
            file: filePath 
          });
        } else if (path.node.callee.name === 'useContext') {
          result.contexts.push({ 
            type: 'use', 
            name: path.node.arguments[0]?.name || 'UnknownContext', 
            file: filePath 
          });
        }
        
        // Track map operations
        if (path.node.callee.type === 'MemberExpression' && 
            path.node.callee.property.name === 'map') {
          const source = path.node.callee.object;
          let sourceName = 'unknown';
          
          if (source.type === 'Identifier') {
            sourceName = source.name;
          }
          
          result.mapOperations.push({
            source: sourceName,
            file: filePath,
            location: {
              start: path.node.loc?.start,
              end: path.node.loc?.end
            }
          });
        }
        
        this.traverse(path);
      },
    });
    
    // Analyze props
    visit(ast, {
      visitJSXOpeningElement(path) {
        const componentName = path.node.name.name;
        if (!componentName || componentName[0].toLowerCase() === componentName[0]) {
          // Skip HTML elements (lowercase first letter)
          this.traverse(path);
          return;
        }
        
        const props = [];
        path.node.attributes.forEach(attr => {
          if (attr.type === 'JSXAttribute') {
            props.push(attr.name.name);
          }
        });
        
        if (props.length > 0) {
          result.props.push({
            component: componentName,
            props,
            file: filePath
          });
        }
        
        this.traverse(path);
      },
      
      // Track function components and their props
      visitFunctionDeclaration(path) {
        const componentName = path.node.id?.name;
        if (componentName && path.node.params.length > 0) {
          // Extract prop names and types
          const propParams = path.node.params.map(p => {
            if (p.type === 'ObjectPattern') {
              // Handle destructured props
              return {
                name: 'destructured',
                properties: p.properties.map(prop => prop.key.name)
              };
            }
            return { name: p.name || 'unknown' };
          });

          result.props.push({
            component: componentName,
            props: propParams,
            file: filePath,
            type: 'function'
          });
        }
        this.traverse(path);
      },
      
      // Track arrow function components and their props
      visitArrowFunctionExpression(path) {
        if (path.parent.type === 'VariableDeclarator') {
          const componentName = path.parent.id.name;
          // Extract prop names and types
          const propParams = path.node.params.map(p => {
            if (p.type === 'ObjectPattern') {
              // Handle destructured props
              return {
                name: 'destructured',
                properties: p.properties.map(prop => prop.key.name)
              };
            }
            return { name: p.name || 'unknown' };
          });

          result.props.push({
            component: componentName,
            props: propParams,
            file: filePath,
            type: 'arrow'
          });
        }
        this.traverse(path);
      },
      
      // Track object declarations
      visitObjectExpression(path) {
        if (path.parent.type === 'VariableDeclarator') {
          const objectName = path.parent.id.name;
          const properties = path.node.properties.map(prop => {
            if (prop.key && prop.key.name) {
              return prop.key.name;
            }
            return 'unknown';
          });
          
          result.objects.push({
            name: objectName,
            properties,
            file: filePath,
            location: {
              start: path.node.loc?.start,
              end: path.node.loc?.end
            }
          });
        }
        this.traverse(path);
      },
      
      // Track array declarations
      visitArrayExpression(path) {
        if (path.parent.type === 'VariableDeclarator') {
          const arrayName = path.parent.id.name;
          result.arrays.push({
            name: arrayName,
            elements: path.node.elements.length,
            file: filePath,
            location: {
              start: path.node.loc?.start,
              end: path.node.loc?.end
            }
          });
        }
        this.traverse(path);
      }
    });
    
    return result;
  } catch (error) {
    console.error(`Error analyzing ${filePath}: ${error.message}`);
    return { 
      imports: [], 
      contexts: [], 
      props: [], 
      objects: [], 
      arrays: [], 
      mapOperations: [], 
      error: error.message 
    };
  }
}

// Create a worker with the analyze function
workerpool.worker({
  analyze
});