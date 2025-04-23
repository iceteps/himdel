#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import { analyzeCodebase } from '../lib/analyzers/index.js';
import { generateOutputs } from '../lib/generators/index.js';
import { logger } from '../lib/utils/logger.js';
import { ensureOutputDir } from '../lib/utils/fileUtils.js';
import { executeDocumentCommand } from '../lib/cli/documentationCommand.js';
import { segmentDiagram } from '../lib/utils/segmentDiagram.js';
import { buildMermaid } from '../lib/utils/buildMermaid.js';
import { writeMarkdown } from '../lib/utils/writeMarkdown.js';
import { buildHtmlPage } from '../lib/utils/buildHtmlPage.js';
import { generatePNG } from '../lib/utils/generatePNG.js';
import { generateStructureFlowcharts } from '../lib/utils/generateStructureFlowcharts.js';
import { generateDetailedFlowcharts } from '../lib/utils/generateDetailedFlowcharts.js';
import path from 'path';

program
  .option('-d, --dir <path>', 'Target directory (default: current)', process.cwd())
  .option('-o, --output <path>', 'Output directory', 'himdell-output')
  .option('--format <formats>', 'Output formats (md,html,png)', 'md,html')
  .option('--concurrency <number>', 'Parallel files to parse', 8)
  .option('--verbose', 'Show debug logs', false)
  .option('--exclude <patterns>', 'Directories/patterns to exclude (comma-separated)', 'node_modules,dist,build,.git,.next')
  .option('--exts <extensions>', 'File extensions to analyze (comma-separated)', 'js,jsx,ts,tsx,html')
  .option('--docs', 'Generate comprehensive documentation', false)
  .option('--doc-types <types>', 'Documentation types to generate (comma-separated: architecture,roadmap,dependency,performance,readme)', 'all')
  .option('--project-name <name>', 'Project name for documentation', 'Application')
  .parse();

const options = program.opts();

// Enable debug logs if verbose mode is enabled
if (options.verbose) {
  process.env.DEBUG = '1';
}

(async () => {
  try {
    logger.info(`Analyzing codebase in: ${options.dir}`);
    logger.info(`File extensions to analyze: ${options.exts}`);
    
    // Ensure output directory exists
    await ensureOutputDir(options.output);
    
    // If docs flag is specified, generate comprehensive documentation
    if (options.docs) {
      logger.info('Generating comprehensive documentation...');
      
      // Execute the documentation command
      await executeDocumentCommand({
        dir: options.dir,
        output: options.output,
        types: options.docTypes,
        name: options.projectName,
        exclude: options.exclude,
        concurrency: options.concurrency,
        debug: options.verbose
      });
      
      logger.success('✨ Documentation generation completed!');
      return;
    }
    
    // Regular mermaid diagram generation
    const analysis = await analyzeCodebase(options.dir, options);
    
    if (Object.keys(analysis).length === 0 || (analysis.imports && analysis.imports.length === 0)) {
      logger.warn('No meaningful data found to generate diagrams.');
      process.exit(0);
    }
    
    await generateOutputs(analysis, options);
    logger.success('✨ Mapping completed!');
  } catch (error) {
    logger.error(`🚨 Failed: ${error.message}`);
    if (options.verbose) {
      logger.error(error.stack);
    }
    process.exit(1);
  }
})();

export async function generateOutputs(analysis, options) {
  // Segment the analysis based on segmentSize
  const segments = segmentDiagram(analysis, options.segmentSize);
  
  // Generate outputs for each segment
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const segmentSuffix = segments.length > 1 ? `-part${i+1}` : '';
    
    const mermaidContent = buildMermaid(segment);
    
    if (options.format.includes('md')) {
      await writeMarkdown(segment, options.output, `dependency-map${segmentSuffix}.md`);
    }

    if (options.format.includes('html')) {
      await buildHtmlPage(segment, options.output, `dependency-map${segmentSuffix}.html`);
    }

    if (options.format.includes('png')) {
      const mdPath = path.join(options.output, `dependency-map${segmentSuffix}.md`);
      const pngPath = path.join(options.output, `dependency-map${segmentSuffix}.png`);
      await generatePNG(mdPath, pngPath);
    }
  }
  
  // Generate the additional flowcharts and structured visualizations
  await generateStructureFlowcharts(analysis, options.output);
  await generateDetailedFlowcharts(analysis, options.output);
}