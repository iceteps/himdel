import { buildMermaid } from './buildMermaid.js';
import { writeMarkdown } from './writeMarkdown.js';
import { buildHtmlPage } from './buildHtmlPage.js';
import { generatePNG } from '../utils/mmdcWrapper.js';
import { generateStructureFlowcharts } from './structureFlowcharts.js';
import { generateDetailedFlowcharts } from './detailedFlowcharts.js';
import path from 'path';

export async function generateOutputs(analysis, options) {
  const mermaidContent = buildMermaid(analysis);  // Generate Mermaid first
  
  if (options.format.includes('md')) {
    await writeMarkdown(analysis, options.output);
  }

  if (options.format.includes('html')) {
    await buildHtmlPage(mermaidContent, options.output);  // Pass mermaidContent
  }

  if (options.format.includes('png')) {
    await generatePNG(
      path.join(options.output, 'dependency-map.md'),  // Updated to match actual file name
      path.join(options.output, 'dependency-map.png')  // Updated to match naming convention
    );
  }
  
  // Generate the additional flowcharts
  await generateStructureFlowcharts(analysis, options.output);
  
  // Generate the detailed human-readable flowcharts
  await generateDetailedFlowcharts(analysis, options.output);
}