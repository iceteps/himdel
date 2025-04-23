import chalk from 'chalk';

// Create helper functions for color formatting
const blue = text => chalk.blue(text);
const green = text => chalk.green(text);
const yellow = text => chalk.yellow(text);
const red = text => chalk.red(text);
const gray = text => chalk.gray(text);

export const logger = {
  info: (msg) => console.log(blue(`ℹ️ ${msg}`)),
  success: (msg) => console.log(green(`✅ ${msg}`)),
  warn: (msg) => console.log(yellow(`⚠️ ${msg}`)),
  error: (msg) => console.log(red(`🚨 ${msg}`)),
  debug: (msg) => process.env.DEBUG && console.log(gray(`🐛 ${msg}`)),
};