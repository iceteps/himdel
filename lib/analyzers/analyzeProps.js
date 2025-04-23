import { parse } from '@babel/parser';
import { visit } from 'recast';
import { logger } from '../utils/logger.js';
import { getFileHash, cache } from '../utils/fileCache.js';
import fs from 'fs/promises';
import path from 'path';

export async function analyzeProps(filePath) {
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
    
    const props = [];

    visit(ast, {
      // Track components that receive props via JSX
      visitJSXOpeningElement(path) {
        const componentName = path.node.name.name;
        // Skip HTML elements (lowercase first letter)
        if (!componentName || componentName[0].toLowerCase() === componentName[0]) {
          this.traverse(path);
          return;
        }
        
        const componentProps = [];
        path.node.attributes.forEach(attr => {
          if (attr.type === 'JSXAttribute') {
            // Extract prop name
            const propName = attr.name.name;
            
            // Extract prop value and determine type
            let propValue = null;
            let propType = 'unknown';
            
            if (attr.value) {
              if (attr.value.type === 'StringLiteral') {
                propValue = attr.value.value;
                propType = 'string';
              } else if (attr.value.type === 'JSXExpressionContainer') {
                if (attr.value.expression.type === 'NumericLiteral') {
                  propValue = attr.value.expression.value;
                  propType = 'number';
                } else if (attr.value.expression.type === 'BooleanLiteral') {
                  propValue = attr.value.expression.value;
                  propType = 'boolean';
                } else if (attr.value.expression.type === 'ObjectExpression') {
                  propValue = '{...}';
                  propType = 'object';
                } else if (attr.value.expression.type === 'ArrayExpression') {
                  propValue = '[...]';
                  propType = 'array';
                } else if (attr.value.expression.type === 'Identifier') {
                  propValue = attr.value.expression.name;
                  propType = 'variable';
                } else if (attr.value.expression.type === 'ArrowFunctionExpression' ||
                           attr.value.expression.type === 'FunctionExpression') {
                  propValue = 'function';
                  propType = 'function';
                }
              }
            } else {
              // Props with no value are boolean true (e.g., <Component isActive />)
              propValue = true;
              propType = 'boolean';
            }
            
            componentProps.push({
              name: propName,
              value: propValue,
              type: propType
            });
          }
        });
        
        if (componentProps.length > 0) {
          logger.debug(`🧩 Found ${componentProps.length} props for component ${componentName} in ${filePath}`);
          props.push({
            component: componentName,
            props: componentProps,
            file: filePath,
            usage: 'jsx'
          });
        }
        
        this.traverse(path);
      },
      
      // Track function components and their props
      visitFunctionDeclaration(path) {
        // Check if it could be a React component (starts with capital letter)
        const name = path.node.id?.name;
        if (!name || name[0].toLowerCase() === name[0]) {
          this.traverse(path);
          return;
        }
        
        if (path.node.params.length > 0) {
          const param = path.node.params[0];
          if (param.type === 'ObjectPattern') {
            const propsList = [];
            
            // Extract props with possible default values
            param.properties.forEach(prop => {
              const propName = prop.key.name;
              let defaultValue = null;
              let propType = 'unknown';
              
              // Check for default value
              if (prop.value && prop.value.type === 'AssignmentPattern') {
                if (prop.value.right.type === 'StringLiteral') {
                  defaultValue = prop.value.right.value;
                  propType = 'string';
                } else if (prop.value.right.type === 'NumericLiteral') {
                  defaultValue = prop.value.right.value;
                  propType = 'number';
                } else if (prop.value.right.type === 'BooleanLiteral') {
                  defaultValue = prop.value.right.value;
                  propType = 'boolean';
                } else if (prop.value.right.type === 'ObjectExpression') {
                  defaultValue = '{...}';
                  propType = 'object';
                } else if (prop.value.right.type === 'ArrayExpression') {
                  defaultValue = '[...]';
                  propType = 'array';
                }
              }
              
              propsList.push({
                name: propName,
                defaultValue: defaultValue,
                type: propType
              });
            });
            
            logger.debug(`🧩 Found ${propsList.length} props for component ${name} in ${filePath}`);
            props.push({
              component: name,
              props: propsList,
              file: filePath,
              type: 'function'
            });
          }
        }
        
        this.traverse(path);
      },
      
      // Track arrow function components
      visitArrowFunctionExpression(path) {
        if (path.parent.type === 'VariableDeclarator') {
          const name = path.parent.id?.name;
          // Skip if not potential React component
          if (!name || name[0].toLowerCase() === name[0]) {
            this.traverse(path);
            return;
          }
          
          if (path.node.params.length > 0) {
            const param = path.node.params[0];
            if (param.type === 'ObjectPattern') {
              const propsList = [];
              
              // Extract props with possible default values
              param.properties.forEach(prop => {
                const propName = prop.key.name;
                let defaultValue = null;
                let propType = 'unknown';
                
                // Check for default value
                if (prop.value && prop.value.type === 'AssignmentPattern') {
                  if (prop.value.right.type === 'StringLiteral') {
                    defaultValue = prop.value.right.value;
                    propType = 'string';
                  } else if (prop.value.right.type === 'NumericLiteral') {
                    defaultValue = prop.value.right.value;
                    propType = 'number';
                  } else if (prop.value.right.type === 'BooleanLiteral') {
                    defaultValue = prop.value.right.value;
                    propType = 'boolean';
                  } else if (prop.value.right.type === 'ObjectExpression') {
                    defaultValue = '{...}';
                    propType = 'object';
                  } else if (prop.value.right.type === 'ArrayExpression') {
                    defaultValue = '[...]';
                    propType = 'array';
                  }
                }
                
                propsList.push({
                  name: propName,
                  defaultValue: defaultValue,
                  type: propType
                });
              });
              
              logger.debug(`🧩 Found ${propsList.length} props for component ${name} in ${filePath}`);
              props.push({
                component: name,
                props: propsList,
                file: filePath,
                type: 'arrow'
              });
            }
          }
        }
        
        this.traverse(path);
      },
      
      // Look for PropTypes declarations to get more type information
      visitMemberExpression(path) {
        if (path.node.object.type === 'Identifier' && 
            path.parent && path.parent.type === 'AssignmentExpression') {
          
          const componentName = path.node.object.name;
          if (path.node.property.name === 'propTypes' || 
              path.node.property.name === 'defaultProps') {
            
            const isPropTypes = path.node.property.name === 'propTypes';
            const isDefaultProps = path.node.property.name === 'defaultProps';
            
            if (path.parent.right.type === 'ObjectExpression') {
              const propDefinitions = [];
              
              path.parent.right.properties.forEach(prop => {
                if (prop.key && prop.key.name) {
                  const propName = prop.key.name;
                  
                  if (isPropTypes) {
                    let propType = 'unknown';
                    
                    // Try to extract PropTypes info
                    if (prop.value.type === 'MemberExpression') {
                      if (prop.value.object.type === 'MemberExpression' &&
                          prop.value.object.object.name === 'PropTypes') {
                        propType = prop.value.object.property.name;
                      } else if (prop.value.object.name === 'PropTypes') {
                        propType = prop.value.property.name;
                      }
                    }
                    
                    propDefinitions.push({
                      name: propName,
                      type: propType,
                      isRequired: propType.includes('isRequired')
                    });
                  } else if (isDefaultProps) {
                    let defaultValue = null;
                    let propType = 'unknown';
                    
                    // Extract default value
                    if (prop.value.type === 'StringLiteral') {
                      defaultValue = prop.value.value;
                      propType = 'string';
                    } else if (prop.value.type === 'NumericLiteral') {
                      defaultValue = prop.value.value;
                      propType = 'number';
                    } else if (prop.value.type === 'BooleanLiteral') {
                      defaultValue = prop.value.value;
                      propType = 'boolean';
                    } else if (prop.value.type === 'ObjectExpression') {
                      defaultValue = '{...}';
                      propType = 'object';
                    } else if (prop.value.type === 'ArrayExpression') {
                      defaultValue = '[...]';
                      propType = 'array';
                    }
                    
                    propDefinitions.push({
                      name: propName,
                      defaultValue: defaultValue,
                      type: propType
                    });
                  }
                }
              });
              
              if (propDefinitions.length > 0) {
                logger.debug(`🧩 Found ${propDefinitions.length} ${isPropTypes ? 'propTypes' : 'defaultProps'} for ${componentName} in ${filePath}`);
                props.push({
                  component: componentName,
                  props: propDefinitions,
                  file: filePath,
                  type: isPropTypes ? 'propTypes' : 'defaultProps'
                });
              }
            }
          }
        }
        
        this.traverse(path);
      }
    });

    cache.set(hash, props);
    return props;
  } catch (error) {
    logger.warn(`Skipped ${filePath}: ${error.message}`);
    return [];
  }
}