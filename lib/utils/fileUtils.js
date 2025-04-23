import fs from 'fs/promises';
import path from 'path';

export const ensureOutputDir = async (outputDir) => {
  await fs.mkdir(outputDir, { recursive: true });
};

export const sanitizeName = (name) => {
  // If it's a file path, extract just the filename
  if (name.includes('/')) {
    const filename = path.basename(name);
    // Return just the base name without extension
    return path.parse(filename).name;
  }
  
  // For import names (like 'react'), keep them as is
  return name;
}