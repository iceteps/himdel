import workerpool from 'workerpool';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from './logger.js';

// Get the directory where the current module is located
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Path to the worker script
const workerPath = path.join(__dirname, 'fileAnalyzer.js');

export function workerPool(concurrency = 8) {
  // Create worker pool with the file analyzer worker script
  const pool = workerpool.pool(workerPath, {
    workerType: 'process',
    maxWorkers: concurrency,
  });
  
  logger.debug(`Created worker pool with max ${concurrency} workers`);
  return pool;
}