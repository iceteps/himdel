import { parse } from '@babel/parser';
import { visit } from 'recast';
import { logger } from '../utils/logger.js';
import { getFileHash, cache } from '../utils/fileCache.js';
import fs from 'fs/promises';  // Add missing fs import

export async function analyzeImports(filePath) {
  const hash = await getFileHash(filePath);
  if (cache.has(hash)) return cache.get(hash);

  try {
    const code = await fs.readFile(filePath, 'utf8');
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript', 'decorators'],
    });
    
    const imports = [];
    visit(ast, {
      visitImportDeclaration(path) {
        const source = path.node.source.value;
        logger.debug(`📦 Found import: ${source} in ${filePath}`);  // Use logger instead of console.log
        imports.push({ source, file: filePath });
        this.traverse(path);
      },
    });

    cache.set(hash, imports);
    return imports;
  } catch (error) {
    logger.warn(`Skipped ${filePath}: ${error.message}`);
    return [];
  }
}