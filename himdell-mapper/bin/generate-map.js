#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import { analyzeCodebase } from '../lib/analyzers/index.js';
import { generateOutputs } from '../lib/generators/index.js';
import { logger } from '../lib/utils/logger.js';
import { ensureOutputDir } from '../lib/utils/fileUtils.js';

program
  .option('-d, --dir <path>', 'Target directory (default: current)', process.cwd())
  .option('-o, --output <path>', 'Output directory', 'himdell-output')
  .option('--format <formats>', 'Output formats (md,html,png)', 'md,html')
  .option('--concurrency <number>', 'Parallel files to parse', 8)
  .option('--verbose', 'Show debug logs', false)
  .option('--exclude <patterns>', 'Directories/patterns to exclude (comma-separated)', 'node_modules,dist,build,.git,.next')
  .parse();

const options = program.opts();

(async () => {
  try {
    await ensureOutputDir(options.output);
    const analysis = await analyzeCodebase(options.dir, options);
    await generateOutputs(analysis, options);
    logger.success('✨ Mapping completed!');
  } catch (error) {
    logger.error(`🚨 Failed: ${error.message}`);
    process.exit(1);
  }
})();