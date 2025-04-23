import path from 'path';
import fs from 'fs/promises';
import { logger } from '../utils/logger.js';

/**
 * Builds a mermaid diagram from a markdown file with mermaid code blocks
 * and saves it as HTML and PNG files
 * 
 * @param {string} filePath - Path to the markdown file
 * @param {string} outputDir - Directory to save the HTML and PNG files
 * @returns {Promise<void>}
 */
export async function buildMermaid(filePath, outputDir) {
  try {
    logger.info(`Building mermaid diagram from ${filePath}...`);
    
    // Read the markdown file
    const markdown = await fs.readFile(filePath, 'utf-8');
    
    // Extract mermaid code blocks
    const mermaidBlocks = extractMermaidBlocks(markdown);
    
    if (mermaidBlocks.length === 0) {
      logger.warn(`No mermaid code blocks found in ${filePath}`);
      return;
    }
    
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
  } catch (error) {
    logger.error(`Failed to build mermaid diagram: ${error.message}`);
    throw error;
  }
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