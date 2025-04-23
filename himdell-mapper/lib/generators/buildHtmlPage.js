import fs from 'fs/promises';
import path from 'path';
import { buildEnhancedMermaid } from './enhancedMermaid.js';

export async function buildHtmlPage(analysis, outputDir) {
  // Read the HTML template
  const templatePath = path.join(process.cwd(), 'himdell-mapper', 'assets', 'template.html');
  let htmlTemplate = await fs.readFile(templatePath, 'utf-8');
  
  // Generate enhanced mermaid content
  const mermaidContent = buildEnhancedMermaid(analysis);
  
  // Escape backticks in mermaid content to avoid breaking the JavaScript string
  const escapedContent = mermaidContent.replace(/`/g, '\\`');
  
  // Replace the placeholder with the actual mermaid diagram code
  htmlTemplate = htmlTemplate.replace('<!-- MERMAID_CODE -->', escapedContent);
  
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
    /mermaid\.initialize\(\{[^}]*\}\);/s,
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
  
  <div id="flowchart-tab" class="tab-content active">
    <div id="graph" class="mermaid"></div>
    <div class="export-controls">
      <button id="export-png">Export as PNG</button>
      <button id="fullscreen">Fullscreen</button>
    </div>
  </div>
  
  <div id="text-tab" class="tab-content">
    <h3>Text-Styled Flowchart</h3>
    <div id="text-flow"></div>
  </div>
  `;
  
  // Replace the graph div with our tabs and content
  htmlTemplate = htmlTemplate.replace(
    '<div id="graph" class="mermaid">',
    tabsAndContent + '\n  <div id="graph" class="mermaid" style="display:none;">'
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
  `;
  
  // Add the additional JavaScript to the HTML
  htmlTemplate = htmlTemplate.replace(
    '</script>',
    additionalJavaScript + '\n  </script>'
  );
  
  // Write the HTML file
  const outputPath = path.join(outputDir, 'dependency-map.html');
  await fs.writeFile(outputPath, htmlTemplate);
  
  console.log('✅ Enhanced HTML file generated!');
}