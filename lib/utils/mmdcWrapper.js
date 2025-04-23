import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { logger } from './logger.js';

/**
 * Generate a PNG from a Mermaid markdown file
 */
export async function generatePNG(mdPath, outputPath) {
  try {
    // Check if the source file exists
    try {
      await fs.access(mdPath);
    } catch (error) {
      throw new Error(`Source file not found: ${mdPath}. Make sure to generate Markdown first.`);
    }
    
    // Extract Mermaid content from markdown
    const content = await fs.readFile(mdPath, 'utf-8');
    const mermaidMatch = content.match(/```mermaid\s*([\s\S]*?)\s*```/);
    let mermaidContent;
    
    if (mermaidMatch && mermaidMatch[1]) {
      mermaidContent = mermaidMatch[1].trim();
    } else {
      // If no mermaid code blocks found, look for the start of a section
      const sectionMatch = content.match(/^##\s+\w+/m);
      if (sectionMatch) {
        const startIndex = content.indexOf(sectionMatch[0]);
        mermaidContent = content.substring(startIndex);
      } else {
        mermaidContent = content;
      }
    }
    
    // Create a temporary file
    const tempDir = os.tmpdir();
    const tempMmdFile = path.join(tempDir, `himdell-${Date.now()}.mmd`);
    const tempConfigFile = path.join(tempDir, `himdell-config-${Date.now()}.json`);
    
    // Create a custom config file with settings for better readability
    const config = {
      theme: 'default',
      maxTextSize: 500000,
      fontSize: 16,
      fontFamily: 'arial,sans-serif',
      maxEdges: 2000,
      flowchart: {
        htmlLabels: true,
        curve: 'basis',
        rankSpacing: 80,
        nodeSpacing: 80,
        diagramPadding: 40,
        wrap: true,
        useMaxWidth: false,
        defaultRenderer: 'dagre-wrapper'
      },
      themeVariables: {
        primaryColor: '#326CE5',
        primaryTextColor: '#fff',
        primaryBorderColor: '#1a56c4',
        lineColor: '#666',
        fontSize: '16px',
        nodeBorder: '2px',
        edgeLabelBackground: '#fff',
      },
      securityLevel: 'loose'
    };
    
    // Preprocess the Mermaid content for better readability
    mermaidContent = preprocessMermaidForReadability(mermaidContent);
    
    // Write the Mermaid code to a temporary file
    await fs.writeFile(tempMmdFile, mermaidContent);
    await fs.writeFile(tempConfigFile, JSON.stringify(config));
    
    // Determine if mmdc is installed
    let mmdcCommand;
    try {
      await execAsync('mmdc --version');
      mmdcCommand = 'mmdc';
    } catch (e) {
      try {
        await execAsync('npx @mermaid-js/mermaid-cli --version');
        mmdcCommand = 'npx @mermaid-js/mermaid-cli';
      } catch (err) {
        logger.error('Neither mmdc nor npx @mermaid-js/mermaid-cli are available');
        logger.warn('Please install Mermaid CLI with: npm install -g @mermaid-js/mermaid-cli');
        logger.warn('PNG generation skipped. Install Mermaid CLI and try again.');
        return;
      }
    }
    
    // Generate the PNG file using the Mermaid CLI with improved settings
    // Increased width and height, with better scaling
    const command = `${mmdcCommand} -i ${tempMmdFile} -o ${outputPath} -c ${tempConfigFile} -w 3000 -H 2000 -b transparent`;
    
    logger.info(`Generating PNG with command: ${command}`);
    await execAsync(command);
    
    // Check if the PNG generation was successful
    try {
      await fs.access(outputPath);
      logger.success(`✅ PNG file generated! (${outputPath})`);
      
      // Generate additional separate views for large diagrams
      const filename = path.basename(outputPath, '.png');
      const dirname = path.dirname(outputPath);
      
      // If the diagram is complex, generate additional focused views
      if (mermaidContent.includes('subgraph') && mermaidContent.split('\n').length > 50) {
        await generateSubgraphViews(mermaidContent, dirname, filename);
      }
      
    } catch (error) {
      logger.error(`Could not verify PNG output: ${error.message}`);
    }
    
    // Clean up temporary files
    await fs.unlink(tempMmdFile);
    await fs.unlink(tempConfigFile);
    
  } catch (error) {
    if (error.stderr) {
      logger.error(`PNG export failed: ${error.stderr}`);
    } else {
      logger.error(`PNG export failed: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Generate separate PNG files for each subgraph to improve readability
 */
async function generateSubgraphViews(mermaidContent, outputDir, baseFilename) {
  try {
    // Extract subgraphs from the mermaid content
    const subgraphMatches = mermaidContent.match(/subgraph\s+([\w\s"-]+)[\s\n]/g);
    
    if (!subgraphMatches || subgraphMatches.length === 0) {
      return;
    }
    
    logger.info(`Found ${subgraphMatches.length} subgraphs, generating separate views...`);
    
    // For each subgraph, create a separate, focused diagram
    for (let i = 0; i < subgraphMatches.length; i++) {
      const match = subgraphMatches[i];
      const subgraphName = match.replace(/subgraph\s+/, '').trim().replace(/"/g, '').replace(/\s+/g, '-');
      
      if (!subgraphName) continue;
      
      // Create a diagram focused just on this subgraph and its connections
      const subgraphDiagram = `%%{init: {'theme': 'default', 'themeVariables': { 'fontSize': '16px' }}}%%
flowchart TD
    ${match}
    ${extractSubgraphContent(mermaidContent, match)}
    end
    ${extractRelatedConnections(mermaidContent, subgraphName)}
`;

      // Create temporary files
      const tempDir = os.tmpdir();
      const tempMmdFile = path.join(tempDir, `himdell-subgraph-${Date.now()}.mmd`);
      const tempConfigFile = path.join(tempDir, `himdell-config-${Date.now()}.json`);
      
      // Config for subgraph views
      const config = {
        theme: 'default',
        maxTextSize: 500000,
        fontSize: 16,
        flowchart: {
          htmlLabels: true,
          curve: 'basis',
          rankSpacing: 60,
          nodeSpacing: 60,
        }
      };
      
      // Write files
      await fs.writeFile(tempMmdFile, subgraphDiagram);
      await fs.writeFile(tempConfigFile, JSON.stringify(config));
      
      // Generate the PNG for this subgraph
      const outputPath = path.join(outputDir, `${baseFilename}-${subgraphName}.png`);
      
      // Use mmdc
      let mmdcCommand = 'mmdc';
      try {
        await execAsync('mmdc --version');
      } catch (e) {
        mmdcCommand = 'npx @mermaid-js/mermaid-cli';
      }
      
      const command = `${mmdcCommand} -i ${tempMmdFile} -o ${outputPath} -c ${tempConfigFile} -w 2000 -b transparent`;
      
      await execAsync(command);
      logger.success(`✅ Generated focused view for ${subgraphName}`);
      
      // Cleanup
      await fs.unlink(tempMmdFile);
      await fs.unlink(tempConfigFile);
    }
    
  } catch (error) {
    logger.error(`Error generating subgraph views: ${error.message}`);
  }
}

/**
 * Extract the content inside a specific subgraph
 */
function extractSubgraphContent(mermaidContent, subgraphHeader) {
  const lines = mermaidContent.split('\n');
  const startIndex = lines.findIndex(line => line.trim().includes(subgraphHeader.trim()));
  
  if (startIndex === -1) return '';
  
  let content = [];
  let depth = 1;
  let i = startIndex + 1;
  
  while (i < lines.length && depth > 0) {
    const line = lines[i].trim();
    
    if (line.startsWith('subgraph')) {
      depth++;
    } else if (line === 'end') {
      depth--;
      if (depth === 0) break;
    }
    
    if (depth > 0) {
      content.push(lines[i]);
    }
    
    i++;
  }
  
  return content.join('\n');
}

/**
 * Extract connections related to nodes in the specified subgraph
 */
function extractRelatedConnections(mermaidContent, subgraphName) {
  const lines = mermaidContent.split('\n');
  const connections = [];
  
  // Find all node definitions in the specified subgraph
  const nodePattern = new RegExp(`\\b${subgraphName}[\\w]*\\b`, 'g');
  const nodes = new Set();
  
  for (const line of lines) {
    const matches = line.match(nodePattern);
    if (matches) {
      matches.forEach(match => nodes.add(match));
    }
  }
  
  // Find all connections involving those nodes
  for (const line of lines) {
    if (line.includes('-->') || line.includes('---') || line.includes('-.-')) {
      for (const node of nodes) {
        if (line.includes(node)) {
          connections.push(line.trim());
          break;
        }
      }
    }
  }
  
  return connections.join('\n');
}

/**
 * Preprocess Mermaid content to improve readability in generated PNGs
 */
function preprocessMermaidForReadability(mermaidContent) {
  let content = mermaidContent;
  
  // Add viewport configuration and theme settings
  if (!content.includes('%%{init:')) {
    content = `%%{init: {'theme': 'default', 'themeVariables': { 'fontSize': '16px', 'primaryColor': '#326CE5' }}}%%\n${content}`;
  }
  
  // Improve node labels to be more descriptive and readable
  content = content.replace(/\[(["'])(.*?)\1\]/g, (match, quote, label) => {
    // Make node labels more descriptive
    return `["${label}"]`;
  });
  
  // Enhance styling for subgraphs
  content = content.replace(/style\s+(\w+)\s+fill/g, (match, group) => {
    return `style ${group} fill:#f9f9f9,stroke:#999,stroke-width:2px,color:#333,font-weight:bold`;
  });
  
  // For edge labels, make them clearer
  content = content.replace(/\|(\w+)\|/g, '|$1|');
  
  return content;
}

/**
 * Promise-based wrapper for child_process.exec
 */
async function execAsync(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        error.stderr = stderr;
        error.stdout = stdout;
        reject(error);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}