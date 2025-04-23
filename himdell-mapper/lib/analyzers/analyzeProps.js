import { parse } from '@babel/parser';
import { visit } from 'recast';
import { logger } from '../utils/logger.js';
import { getFileHash, cache } from '../utils/fileCache.js';
import fs from 'fs/promises';

export async function analyzeProps(filePath) {
  const hash = await getFileHash(filePath);
  if (cache.has(hash)) return cache.get(hash);

  try {
    const code = await fs.readFile(filePath, 'utf8');
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });

    const props = [];
    const imports = [];
    const objects = [];
    const arrays = [];
    const mapOperations = [];
    
    visit(ast, {
      visitImportDeclaration(path) {
        const source = path.node.source.value;
        imports.push({ source, file: filePath });
        this.traverse(path);
      },
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

          props.push({
            component: componentName,
            props: propParams,
            file: filePath,
            type: 'function'
          });
        }
        this.traverse(path);
      },
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

          props.push({
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
          
          objects.push({
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
          arrays.push({
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
      },
      // Track .map() operations
      visitCallExpression(path) {
        if (path.node.callee.type === 'MemberExpression' && 
            path.node.callee.property.name === 'map') {
          const source = path.node.callee.object;
          let sourceName = 'unknown';
          
          if (source.type === 'Identifier') {
            sourceName = source.name;
          }
          
          mapOperations.push({
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
      // Track prop usage in JSX elements
      visitJSXElement(path) {
        const elementName = path.node.openingElement.name.name;
        const attributes = path.node.openingElement.attributes.map(attr => {
          if (attr.type === 'JSXAttribute') {
            return {
              name: attr.name.name,
              value: attr.value?.type === 'JSXExpressionContainer' ? 
                     (attr.value.expression.type === 'Identifier' ? 
                     attr.value.expression.name : 'expression') : 
                     (attr.value?.value || 'unknown')
            };
          }
          return { name: 'unknown', value: 'unknown' };
        });
        
        if (attributes.length > 0) {
          props.push({
            component: elementName,
            props: attributes,
            file: filePath,
            type: 'jsx-usage'
          });
        }
        
        this.traverse(path);
      }
    });

    const result = {
      props,
      objects,
      arrays,
      mapOperations
    };

    cache.set(hash, result);
    return result;
  } catch (error) {
    logger.warn(`Skipped ${filePath}: ${error.message}`);
    return { props: [], objects: [], arrays: [], mapOperations: [] };
  }
}