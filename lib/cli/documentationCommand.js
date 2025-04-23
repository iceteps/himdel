import { analyzeCodebase } from '../analyzers/index.js';
import { generateDocumentation } from '../generators/documentationGenerator.js';
import { logger } from '../utils/logger.js';

/**
 * Execute the documentation command
 * @param {Object} options - Command options
 */
export async function executeDocumentCommand(options) {
  try {
    logger.info('Starting documentation generation...');
    
    // Get directory to analyze
    const codeDir = options.dir || process.cwd();
    
    // Set output directory
    const outputDir = options.output || './docs';
    
    // Set the project name
    const projectName = options.name || 'Application';
    
    // Determine which doc types to generate
    const types = options.types ? options.types.split(',') : ['all'];
    
    // Handle exclude patterns (could be string or array)
    let excludePatterns = [];
    if (options.exclude) {
      if (typeof options.exclude === 'string') {
        excludePatterns = options.exclude.split(',');
      } else if (Array.isArray(options.exclude)) {
        excludePatterns = options.exclude;
      }
    }
    
    // Run the code analysis
    logger.info(`Analyzing codebase in ${codeDir}...`);
    const analysis = await analyzeCodebase(codeDir, {
      exclude: excludePatterns,
      concurrency: options.concurrency || 8,
      debug: options.debug || false
    });
    
    // Generate documentation
    const docOptions = {
      outputDir,
      types,
      projectName
    };
    
    const docPaths = await generateDocumentation(analysis, docOptions);
    
    logger.success(`Documentation generated successfully! Created ${docPaths.length} files in ${outputDir}`);
    docPaths.forEach(path => {
      logger.info(`- ${path}`);
    });
    
  } catch (error) {
    logger.error(`Error generating documentation: ${error.message}`);
    if (options.debug) {
      logger.debug(error.stack);
    }
    process.exit(1);
  }
} 