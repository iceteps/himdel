#!/usr/bin/env node
import { program } from 'commander';
import { executeDocumentCommand } from '../lib/cli/documentationCommand.js';
import { logger } from '../lib/utils/logger.js';

// Define the program
program
  .name('himdell-docs')
  .description('Generate comprehensive documentation from codebase')
  .version('1.0.0')
  .option('-d, --dir <path>', 'Target directory (default: current)', process.cwd())
  .option('-o, --output <path>', 'Output directory', 'docs')
  .option('-t, --types <types>', 'Documentation types to generate (comma-separated: architecture,roadmap,dependency,performance,readme)', 'all')
  .option('-n, --name <name>', 'Project name for documentation', 'Application')
  .option('-e, --exclude <patterns>', 'Directories/patterns to exclude (comma-separated)', 'node_modules,dist,build,.git,.next')
  .option('-c, --concurrency <number>', 'Number of files to analyze concurrently', '8')
  .option('-v, --verbose', 'Show detailed debug logs', false)
  .parse();

// Get the options
const options = program.opts();

// Enable debug logs if verbose mode is enabled
if (options.verbose) {
  process.env.DEBUG = '1';
}

// Execute the document command
(async () => {
  try {
    await executeDocumentCommand({
      dir: options.dir,
      output: options.output,
      types: options.types,
      name: options.name,
      exclude: options.exclude,
      concurrency: parseInt(options.concurrency, 10),
      debug: options.verbose
    });
  } catch (error) {
    logger.error(`Failed to generate documentation: ${error.message}`);
    if (options.verbose) {
      logger.error(error.stack);
    }
    process.exit(1);
  }
})(); 