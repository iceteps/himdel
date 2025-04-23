import { parse } from '@babel/parser';
import { visit } from 'recast';
import { logger } from '../utils/logger.js';
import { getFileHash, cache } from '../utils/fileCache.js';
import fs from 'fs/promises';

export async function analyzeContexts(filePath) {
  const hash = await getFileHash(filePath);
  if (cache.has(hash)) return cache.get(hash);

  try {
    const code = await fs.readFile(filePath, 'utf8');
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });

    const contexts = [];
    const imports = [];
    
    visit(ast, {
      visitImportDeclaration(path) {
        const source = path.node.source.value;
        console.log(`📦 Found import: ${source} in ${filePath}`);
        imports.push({ source, file: filePath });
        this.traverse(path);
      },
      visitCallExpression(path) {
        const { callee } = path.node;
        if (callee.name === 'createContext') {
          const contextName = path.parent.id?.name || 'AnonymousContext';
          contexts.push({
            type: 'create',
            name: contextName,
            file: filePath,
          });
        }
        if (callee.name === 'useContext') {
          const contextName = path.node.arguments[0]?.name || 'UnknownContext';
          contexts.push({
            type: 'use',
            name: contextName,
            file: filePath,
          });
        }
        this.traverse(path);
      },
    });

    cache.set(hash, contexts);
    return contexts;
  } catch (error) {
    logger.warn(`Skipped ${filePath}: ${error.message}`);
    return [];
  }
}