import { parse } from '@babel/parser';
import { visit } from 'recast';
import { logger } from '../utils/logger.js';
import { getFileHash, cache } from '../utils/fileCache.js';
import fs from 'fs/promises';
import path from 'path';

export async function analyzeImports(filePath) {
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
    
    const imports = [];
    visit(ast, {
      visitImportDeclaration(path) {
        const source = path.node.source.value;
        logger.debug(`📦 Found import: ${source} in ${filePath}`);
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