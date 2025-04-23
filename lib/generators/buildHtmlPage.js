import fs from 'fs/promises';
import path from 'path';
import { buildEnhancedMermaid } from './enhancedMermaid.js';
import { logger } from '../utils/logger.js';

export async function buildHtmlPage(analysis, outputDir) {
  try {
    // Read the HTML template - check in current directory first, then in assets folder
    let templatePath = path.join(process.cwd(), 'assets', 'template.html');
    let htmlTemplate;
    
    try {
      // Try to read from the correct path
      htmlTemplate = await fs.readFile(templatePath, 'utf-8');
    } catch (error) {
      // If not found, try to read from himdell-mapper directory
      try {
        templatePath = path.join(process.cwd(), 'himdell-mapper', 'assets', 'template.html');
        htmlTemplate = await fs.readFile(templatePath, 'utf-8');
      } catch (innerError) {
        // Try relative path as a last resort
        templatePath = path.join('assets', 'template.html');
        htmlTemplate = await fs.readFile(templatePath, 'utf-8');
      }
    }
    
    if (!htmlTemplate) {
      throw new Error('Could not find template.html in any expected location');
    }
    
    // Generate enhanced mermaid content from the analysis data
    const mermaidContent = buildEnhancedMermaid(analysis);
    
    // Escape backticks in mermaid content to avoid breaking the JavaScript string
    const escapedContent = mermaidContent.replace(/`/g, '\\`');
    
    // Replace the placeholder with the actual mermaid diagram code
    htmlTemplate = htmlTemplate.replace(/const mermaidCode = `(.*?)`;/s, 
                                      `const mermaidCode = \`${escapedContent}\`;`);
    
    // If the above replacement didn't work, try the HTML comment placeholder
    if (!htmlTemplate.includes(escapedContent)) {
      htmlTemplate = htmlTemplate.replace('<!-- MERMAID_CODE -->', escapedContent);
    }
    
    // Add configuration for handling large diagrams
    const mermaidConfig = `
    // Configuration for handling larger diagrams
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      maxTextSize: 500000,
      flowchart: {
        htmlLabels: true,
        curve: 'basis',
        useMaxWidth: false,
        rankSpacing: 100,
        nodeSpacing: 100
      },
      er: {
        layoutDirection: 'LR',
        minEntityWidth: 100,
        minEntityHeight: 75
      }
    });
    `;
    
    // Replace the default mermaid configuration with our enhanced one
    htmlTemplate = htmlTemplate.replace(
      /mermaid\.initialize\(\{\s*startOnLoad:\s*true,\s*theme:\s*'default'\s*\}\);/s,
      mermaidConfig
    );
    
    // Add viewport meta tag for better mobile display
    htmlTemplate = htmlTemplate.replace(
      '</title>',
      '</title>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">'
    );
    
    // Add additional styles and functionality for better diagram handling
    const additionalStyles = `
    #graph svg {
      width: auto !important;
      height: auto !important;
      max-width: 100%;
    }
    
    .svg-pan-zoom-control {
      display: block;
    }
    
    /* Tabs for switching between PNG and text views */
    .tabs {
      display: flex;
      margin-bottom: 20px;
    }
    
    .tab {
      padding: 10px 20px;
      cursor: pointer;
      background: #f0f0f0;
      border: 1px solid #ddd;
      border-bottom: none;
      margin-right: 5px;
      border-radius: 5px 5px 0 0;
      color: #333;
    }
    
    .tab.active {
      background: white;
      font-weight: bold;
    }
    
    .tab-content {
      display: none;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 0 5px 5px 5px;
      background: white;
      color: #333;
    }
    
    .tab-content.active {
      display: block;
    }
    
    #text-flow {
      font-family: monospace;
      white-space: pre;
      overflow-x: auto;
      line-height: 1.5;
      padding: 15px;
      background: #f5f5f5;
      border-radius: 5px;
      max-height: 500px;
      overflow-y: auto;
    }
    
    .flowchart-container {
      position: relative;
      margin-top: 20px;
    }
    
    /* Styling for the PNG export controls */
    .export-controls {
      margin-top: 20px;
      display: flex;
      gap: 10px;
    }
    
    .export-controls button {
      padding: 8px 15px;
      background: #4a6ee0;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    /* Legend styling */
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 14px;
    }
    
    .legend-color {
      width: 20px;
      height: 20px;
      border-radius: 4px;
    }
    
    .component-color { background-color: #e1f5fe; border: 1px solid #0288d1; }
    .context-color { background-color: #fff9c4; border: 1px solid #fbc02d; }
    .object-color { background-color: #e8f5e9; border: 1px solid #43a047; }
    .array-color { background-color: #f3e5f5; border: 1px solid #8e24aa; }
    .map-color { background-color: #ffebee; border: 1px solid #e53935; }
    .multi-color { background-color: #ede7f6; border: 1px solid #673ab7; border-width: 3px; }
    
    /* Fallback display */
    .fallback-warning {
      padding: 15px;
      margin: 20px 0;
      background-color: #fff3cd;
      border-left: 5px solid #ffc107;
      color: #856404;
    }
    
    .fallback-content {
      text-align: center;
      margin-top: 20px;
    }
    
    .standalone-view {
      margin-top: 30px;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    
    .code-display {
      background: #f5f5f5;
      padding: 10px;
      border-radius: 4px;
      margin-top: 10px;
      overflow-x: auto;
    }
    `;
    
    // Add the additional styles to the HTML
    htmlTemplate = htmlTemplate.replace(
      '</style>',
      additionalStyles + '\n  </style>'
    );
    
    // Add the tabs and content sections to the HTML
    const tabsAndContent = `
  <div class="tabs">
    <div class="tab active" data-tab="flowchart">Flowchart Visualization</div>
    <div class="tab" data-tab="text">Text-Styled Flowchart</div>
  </div>
  
  <!-- Legend for understanding the diagram -->
  <div class="legend">
    <div class="legend-item">
      <div class="legend-color component-color"></div>
      <span>Component</span>
    </div>
    <div class="legend-item">
      <div class="legend-color context-color"></div>
      <span>Context</span>
    </div>
    <div class="legend-item">
      <div class="legend-color object-color"></div>
      <span>Object</span>
    </div>
    <div class="legend-item">
      <div class="legend-color array-color"></div>
      <span>Array</span>
    </div>
    <div class="legend-item">
      <div class="legend-color map-color"></div>
      <span>Map Operation</span>
    </div>
    <div class="legend-item">
      <div class="legend-color multi-color"></div>
      <span>Multi-Consumed</span>
    </div>
  </div>
  `;
    
    // Add the tabs section before the graph div
    htmlTemplate = htmlTemplate.replace(
      '<div id="graph"></div>',
      tabsAndContent + '\n  <div id="flowchart-tab" class="tab-content active">\n    <div id="graph"></div>\n    <div class="export-controls">\n      <button id="export-png">Export as PNG</button>\n      <button id="fullscreen">Fullscreen</button>\n    </div>\n  </div>\n  <div id="text-tab" class="tab-content">\n    <h3>Text-Styled Flowchart</h3>\n    <div id="text-flow"></div>\n  </div>'
    );
    
    // Add fallback content for when JavaScript is restricted
    const fallbackContent = `
  <!-- Fallback content for when JavaScript is restricted -->
  <div id="fallback-section" class="fallback-warning">
    <h3>⚠️ Display Issue Detected</h3>
    <p>If you're seeing this message and no diagram appears above, your browser may be blocking JavaScript for local files.</p>
    <p><strong>Solutions:</strong></p>
    <ol>
      <li><strong>Open with a local server:</strong> Start a local server in this directory with: <code>python3 -m http.server 8000</code> and navigate to <code>http://localhost:8000/dependency-map.html</code></li>
      <li><strong>Use the text view:</strong> Below is the text representation of the diagram.</li>
      <li><strong>View the PNG file:</strong> Open the <code>dependency-map.png</code> file in the same directory.</li>
    </ol>
  </div>
  
  <div class="standalone-view">
    <h3>Mermaid Diagram Code</h3>
    <p>You can copy this code and paste it into the <a href="https://mermaid.live" target="_blank">Mermaid Live Editor</a> to view the diagram.</p>
    <pre class="code-display">${mermaidContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
  </div>
  `;
    
    // Add the fallback content after the error container
    htmlTemplate = htmlTemplate.replace(
      '<div id="error-container" style="color: red; margin-bottom: 10px;"></div>',
      '<div id="error-container" style="color: red; margin-bottom: 10px;"></div>\n  ' + fallbackContent
    );
    
    // Add JavaScript to handle tabs, export PNG and display text flow
    const additionalJavaScript = `
    // Setup the tabs
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId + '-tab').classList.add('active');
      });
    });
    
    // Initialize the text-flow display
    const textFlowContainer = document.getElementById('text-flow');
    textFlowContainer.textContent = \`${escapedContent}\`;
    
    // Setup PNG export
    document.getElementById('export-png').addEventListener('click', () => {
      const svg = document.querySelector('#graph svg');
      if (svg) {
        // Create a canvas element to convert SVG to PNG
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Create an image from the SVG
        const image = new Image();
        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
        const url = URL.createObjectURL(svgBlob);
        
        image.onload = () => {
          // Set canvas dimensions to match the SVG
          canvas.width = image.width;
          canvas.height = image.height;
          
          // Draw the image to the canvas
          ctx.drawImage(image, 0, 0);
          
          // Convert to PNG and trigger download
          const pngUrl = canvas.toDataURL('image/png');
          const a = document.createElement('a');
          a.href = pngUrl;
          a.download = 'dependency-map.png';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        };
        
        image.src = url;
      }
    });
    
    // Setup fullscreen
    document.getElementById('fullscreen').addEventListener('click', () => {
      const graphContainer = document.getElementById('flowchart-tab');
      if (graphContainer.requestFullscreen) {
        graphContainer.requestFullscreen();
      } else if (graphContainer.mozRequestFullScreen) {
        graphContainer.mozRequestFullScreen();
      } else if (graphContainer.webkitRequestFullscreen) {
        graphContainer.webkitRequestFullscreen();
      } else if (graphContainer.msRequestFullscreen) {
        graphContainer.msRequestFullscreen();
      }
    });

    // Hide fallback content if diagram loaded successfully
    function hideFallback() {
      if (document.querySelector('#graph svg')) {
        const fallbackSection = document.getElementById('fallback-section');
        if (fallbackSection) {
          fallbackSection.style.display = 'none';
        }
        document.querySelectorAll('.standalone-view').forEach(el => {
          el.style.display = 'none';
        });
      }
    }
    
    // Check if Mermaid rendered successfully
    setTimeout(hideFallback, 1500);
    `;
    
    // Add the additional JavaScript to the HTML
    htmlTemplate = htmlTemplate.replace(
      '</script>',
      additionalJavaScript + '\n  </script>'
    );
    
    // Write the HTML file
    const outputPath = path.join(outputDir, 'dependency-map.html');
    await fs.writeFile(outputPath, htmlTemplate);
    
    logger.success('✅ Enhanced HTML file generated!');
  } catch (error) {
    logger.error(`Error generating HTML: ${error.message}`);
  }
}

function addPaginationControls(htmlTemplate, segmentCount) {
  if (segmentCount <= 1) return htmlTemplate;
  
  const paginationHtml = `
  <div class="pagination">
    <span>Showing segment: </span>
    ${Array.from({length: segmentCount}, (_, i) => 
      `<a href="dependency-map-part${i+1}.html" ${i === 0 ? 'class="active"' : ''}>${i+1}</a>`
    ).join(' ')}
  </div>`;
  
  return htmlTemplate.replace(
    '<div id="graph"></div>',
    `${paginationHtml}\n<div id="graph"></div>`
  );
}