import { parse } from '@babel/parser';
import { visit } from 'recast';
import { logger } from '../utils/logger.js';
import { getFileHash, cache } from '../utils/fileCache.js';
import fs from 'fs/promises';
import path from 'path';

export async function analyzeContexts(filePath) {
  const hash = await getFileHash(filePath);
  if (cache.has(hash)) return cache.get(hash);

  try {
    const code = await fs.readFile(filePath, 'utf8');
    
    // Determine file type for appropriate plugins
    const fileExtension = path.extname(filePath).toLowerCase();
    
    // Set up plugins based on file type
    const plugins = ['jsx', 'typescript', 'decorators-legacy'];
    
    // Add file-specific plugins
    if (fileExtension === '.tsx' || fileExtension === '.jsx') {
      plugins.push('react');
    }
    
    const ast = parse(code, {
      sourceType: 'module',
      plugins: plugins,
      allowImportExportEverywhere: true,
      tokens: true
    });
    
    const contexts = [];
    const providers = [];
    
    // Track imports for React and useContext
    let hasReactImport = false;
    let hasUseContextImport = false;
    let hasCreateContextImport = false;

    // First, scan for imports
    visit(ast, {
      visitImportDeclaration(path) {
        if (path.node.source.value === 'react') {
          // Check specifiers to see if createContext and useContext are imported
          path.node.specifiers.forEach(specifier => {
            if (specifier.imported && specifier.imported.name === 'createContext') {
              hasCreateContextImport = true;
            }
            if (specifier.imported && specifier.imported.name === 'useContext') {
              hasUseContextImport = true;
            }
          });
          hasReactImport = true;
        }
        this.traverse(path);
      }
    });

    // Look for context creation, consumption, and provider components
    visit(ast, {
      // Track context creation
      visitCallExpression(path) {
        // Look for createContext calls
        if (path.node.callee.name === 'createContext') {
          logger.debug(`🔄 Found context creation in ${filePath}`);
          
          // Get context name from parent variable declaration
          let contextName = 'UnnamedContext';
          let initialValue = null;
          let contextType = 'unknown';
          
          // Get the parent node to find the variable name
          if (path.parent && path.parent.id && path.parent.id.name) {
            contextName = path.parent.id.name;
          }
          
          // Try to determine the initial value and its type
          if (path.node.arguments.length > 0) {
            const initialValueNode = path.node.arguments[0];
            
            if (initialValueNode.type === 'ObjectExpression') {
              initialValue = '{...}';
              contextType = 'object';
            } else if (initialValueNode.type === 'ArrayExpression') {
              initialValue = '[...]';
              contextType = 'array';
            } else if (initialValueNode.type === 'NullLiteral') {
              initialValue = 'null';
              contextType = 'null';
            } else if (initialValueNode.type === 'StringLiteral') {
              initialValue = initialValueNode.value;
              contextType = 'string';
            } else if (initialValueNode.type === 'NumericLiteral') {
              initialValue = initialValueNode.value;
              contextType = 'number';
            } else if (initialValueNode.type === 'BooleanLiteral') {
              initialValue = initialValueNode.value;
              contextType = 'boolean';
            }
          }
          
          contexts.push({
            type: 'create',
            name: contextName,
            file: filePath,
            initialValue: initialValue,
            valueType: contextType
          });
        }
        
        // Look for useContext calls
        if (path.node.callee.name === 'useContext') {
          let contextName = 'UnknownContext';
          
          // Extract context name from argument
          if (path.node.arguments.length > 0 && path.node.arguments[0].type === 'Identifier') {
            contextName = path.node.arguments[0].name;
          }
          
          // Try to determine the parent component using this context
          let consumerComponent = 'UnknownComponent';
          let parentFunction = path;
          
          while (parentFunction && 
                 parentFunction.parent && 
                 parentFunction.parent.type !== 'FunctionDeclaration' && 
                 parentFunction.parent.type !== 'ArrowFunctionExpression') {
            parentFunction = parentFunction.parent;
          }
          
          // If we found a parent function, get its name
          if (parentFunction && parentFunction.parent) {
            if (parentFunction.parent.type === 'FunctionDeclaration' && 
                parentFunction.parent.id) {
              consumerComponent = parentFunction.parent.id.name;
            } else if (parentFunction.parent.type === 'ArrowFunctionExpression' && 
                       parentFunction.parent.parent && 
                       parentFunction.parent.parent.type === 'VariableDeclarator' &&
                       parentFunction.parent.parent.id) {
              consumerComponent = parentFunction.parent.parent.id.name;
            }
          }
          
          logger.debug(`🔄 Found context consumption: ${contextName} in ${consumerComponent} (${filePath})`);
          
          contexts.push({
            type: 'consume',
            name: contextName,
            file: filePath,
            component: consumerComponent
          });
        }
        
        this.traverse(path);
      },
      
      // Look for Context.Provider components to track providers
      visitJSXOpeningElement(path) {
        // Check if this is a Context.Provider component
        if (path.node.name.type === 'JSXMemberExpression' && 
            path.node.name.property.name === 'Provider') {
          
          const contextName = path.node.name.object.name;
          
          // Try to find the parent component (provider)
          let providerComponent = 'UnknownProvider';
          let parentFunction = path;
          
          while (parentFunction && 
                 parentFunction.parent && 
                 parentFunction.parent.type !== 'FunctionDeclaration' && 
                 parentFunction.parent.type !== 'ArrowFunctionExpression') {
            parentFunction = parentFunction.parent;
          }
          
          // If we found a parent function, get its name
          if (parentFunction && parentFunction.parent) {
            if (parentFunction.parent.type === 'FunctionDeclaration' && 
                parentFunction.parent.id) {
              providerComponent = parentFunction.parent.id.name;
            } else if (parentFunction.parent.type === 'ArrowFunctionExpression' && 
                       parentFunction.parent.parent && 
                       parentFunction.parent.parent.type === 'VariableDeclarator' &&
                       parentFunction.parent.parent.id) {
              providerComponent = parentFunction.parent.parent.id.name;
            }
          }
          
          // Extract the 'value' prop - this contains the context state
          const valueAttribute = path.node.attributes.find(attr => 
            attr.type === 'JSXAttribute' && attr.name.name === 'value'
          );
          
          let contextValue = null;
          let valueType = 'unknown';
          
          if (valueAttribute && valueAttribute.value) {
            if (valueAttribute.value.type === 'JSXExpressionContainer') {
              const expr = valueAttribute.value.expression;
              
              if (expr.type === 'ObjectExpression') {
                // Try to extract properties from object
                const properties = expr.properties.map(prop => {
                  if (prop.key && prop.key.name) {
                    return prop.key.name;
                  }
                  return null;
                }).filter(Boolean);
                
                if (properties.length > 0) {
                  contextValue = `{${properties.join(', ')}}`;
                } else {
                  contextValue = '{...}';
                }
                valueType = 'object';
              } else if (expr.type === 'Identifier') {
                contextValue = expr.name;
                valueType = 'variable';
              } else if (expr.type === 'MemberExpression') {
                if (expr.object.type === 'Identifier' && expr.property.type === 'Identifier') {
                  contextValue = `${expr.object.name}.${expr.property.name}`;
                }
                valueType = 'member-access';
              }
            }
          }
          
          logger.debug(`🔄 Found context provider: ${contextName} in ${providerComponent} (${filePath})`);
          
          providers.push({
            type: 'provider',
            contextName: contextName,
            providerComponent: providerComponent,
            file: filePath,
            value: contextValue,
            valueType: valueType
          });
        }
        
        this.traverse(path);
      },
      
      // Look for custom hook patterns like useMyContext
      visitVariableDeclarator(path) {
        if (path.node.id && path.node.id.name && 
            path.node.id.name.startsWith('use') &&
            path.node.id.name[3] && path.node.id.name[3] === path.node.id.name[3].toUpperCase()) {
          
          // This might be a custom hook for a context
          // Check if the function body contains useContext
          if (path.node.init && path.node.init.type === 'ArrowFunctionExpression') {
            let usesContext = false;
            let contextName = null;
            
            // Traverse the function body to look for useContext calls
            visit(path.node.init, {
              visitCallExpression(innerPath) {
                if (innerPath.node.callee.name === 'useContext') {
                  usesContext = true;
                  if (innerPath.node.arguments.length > 0 && 
                      innerPath.node.arguments[0].type === 'Identifier') {
                    contextName = innerPath.node.arguments[0].name;
                  }
                  return false;
                }
                this.traverse(innerPath);
              }
            });
            
            if (usesContext && contextName) {
              const hookName = path.node.id.name;
              logger.debug(`🔄 Found custom context hook: ${hookName} for ${contextName} in ${filePath}`);
              
              contexts.push({
                type: 'hook',
                name: contextName,
                hookName: hookName,
                file: filePath
              });
            }
          }
        }
        
        this.traverse(path);
      }
    });

    // Combine the contexts and providers data
    const result = [...contexts, ...providers];
    cache.set(hash, result);
    return result;
  } catch (error) {
    logger.warn(`Skipped ${filePath}: ${error.message}`);
    return [];
  }
}