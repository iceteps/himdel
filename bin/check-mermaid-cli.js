#!/usr/bin/env node
import { exec } from 'child_process';
import { logger } from '../lib/utils/logger.js';

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

/**
 * Check if Mermaid CLI is installed and install it if not
 */
async function checkAndInstallMermaidCLI() {
  try {
    logger.info('Checking for Mermaid CLI installation...');
    
    // Try to execute mmdc to see if it's installed
    try {
      const { stdout } = await execAsync('mmdc --version');
      logger.success(`✅ Mermaid CLI is installed: ${stdout.trim()}`);
      return true;
    } catch (e) {
      logger.warn('Mermaid CLI (mmdc) not found in PATH');
      
      // Try with npx
      try {
        const { stdout } = await execAsync('npx @mermaid-js/mermaid-cli --version');
        logger.success(`✅ Mermaid CLI is available via npx: ${stdout.trim()}`);
        return true;
      } catch (err) {
        logger.warn('Mermaid CLI not found with npx either');
        
        // Check if npm is available
        try {
          await execAsync('npm --version');
          
          // Ask user if they want to install Mermaid CLI
          logger.info('Would you like to install Mermaid CLI globally? (y/n)');
          process.stdout.write('> ');
          
          process.stdin.once('data', async (data) => {
            const input = data.toString().trim().toLowerCase();
            
            if (input === 'y' || input === 'yes') {
              logger.info('Installing Mermaid CLI globally...');
              try {
                const { stdout, stderr } = await execAsync('npm install -g @mermaid-js/mermaid-cli');
                logger.success('✅ Mermaid CLI installed successfully!');
                logger.info('Please run your Himdell command again to generate the PNG.');
              } catch (installError) {
                logger.error(`Failed to install Mermaid CLI: ${installError.message}`);
                logger.info('You can try installing it manually with: npm install -g @mermaid-js/mermaid-cli');
              }
            } else {
              logger.info('Skipping Mermaid CLI installation.');
              logger.info('You can manually install it later with: npm install -g @mermaid-js/mermaid-cli');
            }
            
            process.exit(0);
          });
          
        } catch (npmError) {
          logger.error('npm is not available in your PATH. Please install Node.js and npm first.');
          return false;
        }
      }
    }
  } catch (error) {
    logger.error(`Error checking Mermaid CLI: ${error.message}`);
    return false;
  }
}

// Run the check
checkAndInstallMermaidCLI(); 