import { analyzeImports } from './analyzeImports.js';
import { analyzeContexts } from './analyzeContexts.js';
import { analyzeProps } from './analyzeProps.js';
import { workerPool } from '../utils/workerPool.js';
import fg from 'fast-glob';
import path from 'path';
import { logger } from '../utils/logger.js';
import fs from 'fs/promises';

export async function analyzeCodebase(dir, options) {
  const pool = workerPool(options.concurrency);
  
  // Normalize path to handle both absolute and relative paths correctly
  const normalizedDir = path.isAbsolute(dir) 
    ? dir 
    : path.resolve(process.cwd(), dir);
  
  // Debug log to help identify path issues
  logger.debug(`Scanning for files in: ${normalizedDir}`);
  
  // Parse exclude patterns
  let excludePatterns = [];
  if (options.exclude) {
    if (typeof options.exclude === 'string') {
      excludePatterns = options.exclude.split(',').map(pattern => pattern.trim());
    } else if (Array.isArray(options.exclude)) {
      excludePatterns = options.exclude;
    } else {
      logger.warn(`Unexpected options.exclude type: ${typeof options.exclude}. Using empty array.`);
    }
  }
  const ignorePatterns = excludePatterns.map(pattern => `**/${pattern}/**`);
  
  logger.debug(`Excluding patterns: ${JSON.stringify(ignorePatterns)}`);
  
  // Enhanced file pattern to include more file types
  const fileExtensions = options.exts ? 
    options.exts.split(',').map(ext => ext.trim()) : 
    ['js', 'jsx', 'ts', 'tsx', 'html', 'vue', 'svelte'];
    
  const pattern = `${normalizedDir}/**/*.{${fileExtensions.join(',')}}`;
  logger.debug(`Using glob pattern: ${pattern}`);
  
  const files = await fg([pattern], { 
    ignore: ignorePatterns,
    onlyFiles: true
  });
  
  // Log the files found
  logger.debug(`Found ${files.length} files to analyze:`);
  if (options.verbose) {
    files.forEach(file => logger.debug(` - ${file}`));
  }
  
  if (files.length === 0) {
    logger.warn('No files found to analyze. Check your --dir path and make sure it contains JS/TS/HTML files.');
    return {};
  }

  // First, analyze the file tree structure
  const fileStructure = await analyzeFileStructure(files, normalizedDir);

  const results = await Promise.allSettled(
    files.map(file => pool.exec('analyze', [file]))
  );

  const analysis = {
    imports: [],
    contexts: [],
    props: [],
    objects: [],
    arrays: [],
    mapOperations: [],
    errors: [],
    fileStructure, // Add the file structure analysis
  };

  results.forEach(result => {
    if (result.status === 'fulfilled') {
      analysis.imports.push(...result.value.imports);
      analysis.contexts.push(...result.value.contexts);
      analysis.props.push(...result.value.props);
      // Add the new data collections
      if (result.value.objects) analysis.objects.push(...result.value.objects);
      if (result.value.arrays) analysis.arrays.push(...result.value.arrays);
      if (result.value.mapOperations) analysis.mapOperations.push(...result.value.mapOperations);
    } else {
      analysis.errors.push(result.reason);
    }
  });

  // Process props to identify those consumed in multiple places
  analysis.multiConsumedProps = identifyMultiConsumed(analysis.props);
  
  // Process contexts to identify those consumed in multiple places
  analysis.multiConsumedContexts = identifyMultiConsumed(analysis.contexts);

  // Log analysis summary
  logger.debug(`Analysis complete: Found ${analysis.imports.length} imports, ${analysis.contexts.length} contexts, ${analysis.props.length} props, ${analysis.objects.length} objects, ${analysis.arrays.length} arrays, ${analysis.mapOperations.length} map operations`);
  
  await pool.terminate();
  return analysis;
}

/**
 * Identifies items that are consumed in multiple places
 * @param {Array} items - Array of items to check for multiple consumption
 * @returns {Array} Items that are consumed in multiple places
 */
function identifyMultiConsumed(items) {
  const consumptionCount = {};
  
  // Count occurrences
  items.forEach(item => {
    const key = item.name || item.component;
    if (!key) return;
    
    if (!consumptionCount[key]) {
      consumptionCount[key] = {
        name: key,
        count: 0,
        files: new Set(),
        occurrences: []
      };
    }
    
    consumptionCount[key].count++;
    consumptionCount[key].files.add(item.file);
    consumptionCount[key].occurrences.push(item);
  });
  
  // Filter for multiple consumption
  return Object.values(consumptionCount)
    .filter(item => item.count > 1 || item.files.size > 1)
    .map(item => ({
      ...item,
      files: Array.from(item.files)
    }));
}

/**
 * Analyzes the file structure of the codebase to build a directory tree
 * 
 * @param {string[]} files - List of file paths 
 * @param {string} baseDir - The base directory
 * @returns {Object} File structure tree
 */
async function analyzeFileStructure(files, baseDir) {
  // Group files by directory
  const directoryMap = {};
  
  files.forEach(file => {
    const relativePath = path.relative(baseDir, file);
    const directory = path.dirname(relativePath);
    
    if (!directoryMap[directory]) {
      directoryMap[directory] = [];
    }
    
    directoryMap[directory].push(path.basename(file));
  });
  
  // Build a tree structure
  const tree = {};
  
  for (const directory in directoryMap) {
    const parts = directory.split(path.sep);
    let current = tree;
    
    // Build the directory path in the tree
    for (const part of parts) {
      if (part === '.') continue;
      
      if (!current[part]) {
        current[part] = {};
      }
      
      current = current[part];
    }
    
    // Add files to the leaf directory
    current._files = directoryMap[directory];
  }
  
  return tree;
}