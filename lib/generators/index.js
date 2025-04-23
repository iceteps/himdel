import { buildMermaid } from './buildMermaid.js';
import { writeMarkdown } from './writeMarkdown.js';
import { buildHtmlPage } from './buildHtmlPage.js';
import { generatePNG } from '../utils/mmdcWrapper.js';
import { generateStructureFlowcharts } from './structureFlowcharts.js';
import { generateDetailedFlowcharts } from './detailedFlowcharts.js';
import path from 'path';
import fs from 'fs/promises';
import { logger } from '../utils/logger.js';

export async function generateOutputs(analysis, options) {
  const mermaidContent = buildMermaid(analysis);  // Generate Mermaid first
  
  if (options.format.includes('md')) {
    await writeMarkdown(analysis, options.output);
  }

  if (options.format.includes('html')) {
    await buildHtmlPage(analysis, options.output);  // Pass the full analysis data
    // Also create a simpler HTML file that works with local file opening
    try {
      await createStaticViewerHtml(options.output);
    } catch (error) {
      logger.error(`Error generating static viewer: ${error.message}`);
    }
  }

  if (options.format.includes('png')) {
    try {
      // Ensure the markdown file exists before generating PNG
      const mdPath = path.join(options.output, 'dependency-map.md');
      const pngPath = path.join(options.output, 'dependency-map.png');
      
      // Check if markdown file exists
      try {
        await fs.access(mdPath);
      } catch (error) {
        // If markdown file doesn't exist, create it
        logger.warn(`Markdown file not found at ${mdPath}, creating it now...`);
        await writeMarkdown(analysis, options.output);
      }
      
      // Now generate the PNG
      logger.info(`Generating PNG from ${mdPath} to ${pngPath}`);
      await generatePNG(mdPath, pngPath);
    } catch (error) {
      logger.error(`Failed to generate PNG: ${error.message}`);
    }
  }
  
  // Generate the additional flowcharts
  await generateStructureFlowcharts(analysis, options.output);
  
  // Generate the detailed human-readable flowcharts
  await generateDetailedFlowcharts(analysis, options.output);
}

/**
 * Creates a super simple static HTML file that's guaranteed to work with local file opening
 * @param {string} outputDir - The output directory
 */
async function createStaticViewerHtml(outputDir) {
  try {
    // Read the markdown content
    const mdPath = path.join(outputDir, 'dependency-map.md');
    let markdownContent = '';
    try {
      markdownContent = await fs.readFile(mdPath, 'utf-8');
      // Escape HTML entities
      markdownContent = markdownContent
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    } catch (error) {
      logger.warn(`Could not read markdown file: ${error.message}`);
      markdownContent = 'Markdown content not available. Please generate the markdown file.';
    }
    
    // Create a super simple static HTML that works in all browsers
    const staticHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Himdell Static Viewer</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    h1 {
      color: #2c3e50;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
    }
    .image-container {
      text-align: center;
      margin: 30px 0;
      background: white;
      padding: 10px;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .image-container img {
      max-width: 100%;
    }
    .tabs {
      display: flex;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
    }
    .tab {
      padding: 10px 20px;
      cursor: pointer;
      background: #f0f0f0;
      border: 1px solid #ddd;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      margin-right: 5px;
    }
    .tab.active {
      background: white;
      font-weight: bold;
    }
    .tab-content {
      display: none;
      padding: 20px;
      background: white;
      border: 1px solid #ddd;
      border-top: none;
    }
    .tab-content.active {
      display: block;
    }
    pre {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
      overflow-x: auto;
      white-space: pre-wrap;
      font-size: 14px;
    }
    .info-box {
      background: #e3f2fd;
      border-left: 4px solid #2196f3;
      padding: 15px;
      margin: 20px 0;
      border-radius: 0 4px 4px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Himdell Dependency Map Viewer</h1>
    
    <div class="info-box">
      <p><strong>Note:</strong> This static viewer is designed to work even when opened directly from your file system.</p>
      <p>If you need the interactive features, please use the <code>dependency-map.html</code> file with a local web server.</p>
    </div>
    
    <div class="tabs">
      <div class="tab active" onclick="showTab('png-tab')">PNG View</div>
      <div class="tab" onclick="showTab('markdown-tab')">Markdown</div>
    </div>
    
    <div id="png-tab" class="tab-content active">
      <h2>Dependency Map Visualization</h2>
      <div class="image-container">
        <img src="dependency-map.png" alt="Dependency Map">
      </div>
    </div>
    
    <div id="markdown-tab" class="tab-content">
      <h2>Markdown Code</h2>
      <p>Copy this code and paste it into <a href="https://mermaid.live" target="_blank">Mermaid Live Editor</a> to view the diagram:</p>
      <pre>${markdownContent}</pre>
    </div>
  </div>
  
  <script>
    function showTab(tabId) {
      // Hide all tab contents
      const tabContents = document.querySelectorAll('.tab-content');
      for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
      }
      
      // Remove active class from all tabs
      const tabs = document.querySelectorAll('.tab');
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
      }
      
      // Show selected tab content
      document.getElementById(tabId).classList.add('active');
      
      // Add active class to clicked tab
      const clickedTab = document.querySelector('.tab[onclick="showTab(\\'' + tabId + '\\')"]');
      if (clickedTab) {
        clickedTab.classList.add('active');
      }
    }
  </script>
</body>
</html>`;

    const outputPath = path.join(outputDir, 'static-viewer.html');
    await fs.writeFile(outputPath, staticHtml);
    
    logger.success('✅ Static HTML viewer generated!');
  } catch (error) {
    logger.error(`Error generating static viewer: ${error.message}`);
    throw error;
  }
}