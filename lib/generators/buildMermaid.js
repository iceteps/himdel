import path from 'path';
import fs from 'fs/promises';
import { logger } from '../utils/logger.js';

/**
 * Builds a mermaid diagram from either an analysis object or a markdown file
 * 
 * @param {Object|string} input - Either an analysis object or path to a markdown file
 * @param {string} outputDir - Directory to save the output files (optional)
 * @returns {Promise<string>} The mermaid diagram code
 */
export async function buildMermaid(input, outputDir) {
  try {
    // Check if input is an analysis object or a file path
    if (typeof input === 'object') {
      logger.info('Building mermaid diagram from analysis data...');
      return buildFromAnalysis(input);
    } else if (typeof input === 'string') {
      logger.info(`Building mermaid diagram from file: ${input}...`);
      return buildFromFile(input, outputDir);
    } else {
      throw new Error('Invalid input type. Must be an analysis object or a file path string.');
    }
  } catch (error) {
    logger.error(`Failed to build mermaid diagram: ${error.message}`);
    throw error;
  }
}

/**
 * Builds a mermaid diagram from an analysis object
 * 
 * @param {Object} analysis - The analysis object
 * @returns {string} The mermaid diagram code
 */
function buildFromAnalysis(analysis) {
  // Basic flowchart
  let mermaidCode = 'flowchart TD\n';
  
  // Add nodes for files
  if (analysis.imports && analysis.imports.length > 0) {
    // Collect all unique files
    const files = new Set();
    analysis.imports.forEach(({ file, source }) => {
      files.add(file);
      files.add(source);
    });
    
    // Add nodes for files
    files.forEach(file => {
      const fileName = path.basename(file);
      mermaidCode += `  ${sanitizeId(fileName)}["${fileName}"]\n`;
    });
    
    // Add edges for imports
    analysis.imports.forEach(({ file, source }) => {
      const sourceName = path.basename(source);
      const fileName = path.basename(file);
      mermaidCode += `  ${sanitizeId(sourceName)} -->|imports| ${sanitizeId(fileName)}\n`;
    });
  }
  
  // Add context relationships if available
  if (analysis.contexts && analysis.contexts.length > 0) {
    // Context relationships
    analysis.contexts.forEach(({ type, name, file }) => {
      const fileName = path.basename(file);
      
      if (type === 'create') {
        mermaidCode += `  ${sanitizeId(fileName)} -->|creates| ${sanitizeId(name)}\n`;
      } else if (type === 'consume') {
        mermaidCode += `  ${sanitizeId(name)} -.->|uses| ${sanitizeId(fileName)}\n`;
      }
    });
  }
  
  // Add props if available
  if (analysis.props && analysis.props.length > 0) {
    // Group props by file
    const propsByFile = {};
    analysis.props.forEach(prop => {
      const file = prop.file;
      if (!propsByFile[file]) {
        propsByFile[file] = [];
      }
      propsByFile[file].push(prop);
    });
    
    // Add prop relationships
    Object.entries(propsByFile).forEach(([file, props]) => {
      const fileName = path.basename(file);
      props.forEach(prop => {
        if (prop.component) {
          mermaidCode += `  ${sanitizeId(fileName)} -->|prop: ${prop.name}| ${sanitizeId(prop.component)}\n`;
        }
      });
    });
  }
  
  return mermaidCode;
}

/**
 * Builds a mermaid diagram from a markdown file
 * 
 * @param {string} filePath - Path to the markdown file
 * @param {string} outputDir - Directory to save the HTML and MD files
 * @returns {Promise<string>} The mermaid diagram code
 */
async function buildFromFile(filePath, outputDir) {
  // Read the markdown file
  const markdown = await fs.readFile(filePath, 'utf-8');
  
  // Extract mermaid code blocks
  const mermaidBlocks = extractMermaidBlocks(markdown);
  
  if (mermaidBlocks.length === 0) {
    logger.warn(`No mermaid code blocks found in ${filePath}`);
    return '';
  }
  
  if (outputDir) {
    // Create the output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });
    
    // Get the base name of the file
    const baseName = path.basename(filePath, path.extname(filePath));
    
    // Build the HTML file
    const html = buildHtml(mermaidBlocks[0], baseName);
    
    // Write the HTML file
    const htmlFilePath = path.join(outputDir, `${baseName}.html`);
    await fs.writeFile(htmlFilePath, html);
    
    logger.success(`HTML mermaid diagram saved to ${htmlFilePath}`);
    
    // Also write the original markdown file to the output directory
    const mdFilePath = path.join(outputDir, `${baseName}.md`);
    await fs.writeFile(mdFilePath, markdown);
    
    logger.success(`Markdown file copied to ${mdFilePath}`);
  }
  
  return mermaidBlocks[0];
}

/**
 * Sanitizes a string for use as a mermaid ID
 * 
 * @param {string} id - The ID to sanitize
 * @returns {string} The sanitized ID
 */
function sanitizeId(id) {
  return id.replace(/[^a-zA-Z0-9]/g, '_');
}

/**
 * Extracts mermaid code blocks from a markdown string
 * 
 * @param {string} markdown - The markdown string
 * @returns {string[]} An array of mermaid code blocks
 */
function extractMermaidBlocks(markdown) {
  const mermaidRegex = /```mermaid\n([\s\S]*?)\n```/g;
  const blocks = [];
  let match;
  
  while ((match = mermaidRegex.exec(markdown)) !== null) {
    blocks.push(match[1]);
  }
  
  return blocks;
}

/**
 * Builds an HTML string with the mermaid diagram
 * 
 * @param {string} mermaidCode - The mermaid code
 * @param {string} title - The title of the diagram
 * @returns {string} The HTML string
 */
function buildHtml(mermaidCode, title) {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Himdell ${title}</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Use CDN links instead of local files -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10.8.0/dist/mermaid.min.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }
    
    .controls {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 100;
      background: rgba(255, 255, 255, 0.8);
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .controls button {
      padding: 5px 10px;
      margin: 0 5px;
      cursor: pointer;
      background: #4a6ee0;
      color: white;
      border: none;
      border-radius: 3px;
    }
    
    #graph {
      overflow: auto;
      margin-top: 20px;
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      min-height: 400px;
    }
    
    #graph svg {
      max-width: 100%;
      height: auto;
    }
    
    .mermaid {
      font-size: 16px;
    }
    
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
    
    .legend {
      margin: 10px 0;
      padding: 10px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 1px 5px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <h1>Himdell ${title}</h1>
  
  <div class="legend">
    <p>This diagram shows the dependencies between files in your project.</p>
  </div>
  
  <!-- Error container -->
  <div id="error-container" style="color: red; margin-bottom: 10px;"></div>
  
  <!-- Controls for zooming -->
  <div class="controls">
    <button id="zoom-in">+</button>
    <button id="zoom-out">-</button>
    <button id="reset">Reset</button>
  </div>
  
  <div id="graph" class="mermaid">
    ${mermaidCode}
  </div>
  
  <script>
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize mermaid with better settings
      mermaid.initialize({ 
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
          htmlLabels: true,
          curve: 'basis'
        }
      });
      
      // Setup zoom functionality
      let zoom = 1;
      const graph = document.getElementById('graph');
      
      document.getElementById('zoom-in').addEventListener('click', function() {
        zoom += 0.1;
        graph.style.transform = \`scale(\${zoom})\`;
      });
      
      document.getElementById('zoom-out').addEventListener('click', function() {
        if (zoom > 0.2) zoom -= 0.1;
        graph.style.transform = \`scale(\${zoom})\`;
      });
      
      document.getElementById('reset').addEventListener('click', function() {
        zoom = 1;
        graph.style.transform = 'scale(1)';
      });
    });
  </script>
</body>
</html>`;
}