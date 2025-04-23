# Himdell Mapper User Guide

This guide explains how to use the Himdell Mapper tool to analyze your codebase and generate comprehensive documentation and visualizations.

## Getting Started

Himdell Mapper is a powerful tool for analyzing JavaScript/TypeScript codebases and generating visualizations of component dependencies, context relationships, and data flow.

### Prerequisites

- Node.js 14.x or higher
- For PNG generation: `@mermaid-js/mermaid-cli` installed globally
  ```
  npm install -g @mermaid-js/mermaid-cli
  ```

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/himdell.git
   cd himdell
   ```

2. Install dependencies:
   ```
   npm install
   # or
   pnpm install
   ```

## Using the All-in-One Command

The unified `himdell.js` command combines both dependency map generation and comprehensive documentation generation in a single operation.

### Basic Usage

```bash
node himdell-mapper/bin/himdell.js --dir ./path/to/project --output output-directory --name "Project Name"
```

### Full Options

```bash
node himdell-mapper/bin/himdell.js \
  --dir ./path/to/project \
  --output output-directory \
  --name "Project Name" \
  --format md,html,png \
  --concurrency 4 \
  --exclude "node_modules,.next,public,out,dist,build,.git" \
  --verbose \
  --open
```

### Command Options

| Option | Description | Default |
|--------|-------------|---------|
| `--dir`, `-d` | Target directory to analyze | Current directory |
| `--output`, `-o` | Output directory for generated files | `himdell-output` |
| `--name` | Project name for documentation | `Application` |
| `--format` | Output formats for maps (comma-separated) | `md,html,png` |
| `--concurrency` | Number of files to parse in parallel | `8` |
| `--verbose` | Show detailed debug logs | `false` |
| `--exclude` | Directories/patterns to exclude (comma-separated) | `node_modules,dist,build,.git,.next` |
| `--exts` | File extensions to analyze (comma-separated) | `js,jsx,ts,tsx,html,vue,svelte` |
| `--open` | Open the results in your default browser | `false` |

## Viewing the Generated Documentation

After running the command, you'll have a comprehensive set of documentation files in your output directory.

### Using the Interactive Index

The simplest way to view the documentation is through the generated `index.html` file:

1. Navigate to your output directory:
   ```
   cd your-output-directory
   ```

2. Start a web server:
   ```
   python3 -m http.server 8000
   ```

3. Open in your browser:
   ```
   http://localhost:8000/
   ```

The index page provides links to all generated documentation and visualizations with a clean, modern interface.

### Generated Documents

The tool generates the following documentation:

#### Map Visualizations

- **Dependency Map** (`maps/dependency-map.html`, `.md`, `.png`): Visualizes component and context dependencies
- **Component Structure** (`maps/*-structure.md`): Individual component structure diagrams
- **Component Hierarchy** (`maps/component-hierarchy.md`): Overall component hierarchy
- **API Integration** (`maps/api-integration.md`): API integration flow
- **Data Flow** (`maps/data-flow.md`): Data flow diagrams

#### Documentation Files

- **Architecture Overview** (`ARCHITECTURE.md`): High-level overview of the codebase architecture
- **Detailed Architecture** (`ARCHITECTURE_DEEP.md`): Detailed documentation of component relationships
- **Baseline Roadmap** (`BASELINE_ROADMAP.md`): Metrics and structure overview
- **Refactoring Plan** (`REFACTORING.md`): Suggestions for code improvements
- **Performance Report** (`PERF_REPORT.md`): Performance analysis and optimization opportunities
- **Documentation Index** (`README.md`): Overview and links to all generated documentation

## Best Practices

For the best results when using Himdell Mapper:

1. **Exclude Irrelevant Directories**:
   Use the `--exclude` option to skip directories that don't contain relevant code (like `node_modules`).

2. **Adjust Concurrency**:
   For very large codebases, you may need to reduce the concurrency using `--concurrency 4` to avoid memory issues.

3. **Use Verbose Mode for Debugging**:
   If you encounter issues, run with `--verbose` to see detailed logs.

4. **Generate All Formats**:
   Use `--format md,html,png` to generate all available visualization formats.

5. **Provide a Meaningful Project Name**:
   The `--name` option is used in documentation titles and headers.

## Typical Workflow

A typical workflow using Himdell Mapper might look like:

1. **Initial Analysis**:
   ```
   node himdell-mapper/bin/himdell.js --dir ./my-project --output analysis-output --name "My Project" --verbose
   ```

2. **View Results**:
   ```
   cd analysis-output
   python3 -m http.server 8000
   # Open http://localhost:8000 in your browser
   ```

3. **Share with Team**:
   The generated documentation can be committed to your repository or shared via your internal documentation system.

## Troubleshooting

### PNG Generation Issues

If you encounter issues with PNG generation:

1. Ensure `@mermaid-js/mermaid-cli` is installed globally:
   ```
   npm install -g @mermaid-js/mermaid-cli
   ```

2. Check that the `mmdc` command is available in your PATH.

3. For complex diagrams, you might need to increase the dimensions:
   ```
   mmdc -i input.md -o output.png -w 4000 -H 3000
   ```

### Memory Issues

For very large codebases:

1. Reduce concurrency:
   ```
   --concurrency 2
   ```

2. Be more specific with exclusions:
   ```
   --exclude "node_modules,.next,public,out,dist,build,.git,third-party,assets"
   ```

3. Analyze only specific directories:
   ```
   --dir ./src/components
   ```

## Example Command

Here's an example of analyzing a Next.js application:

```bash
node himdell-mapper/bin/himdell.js \
  --dir ./my-nextjs-app \
  --output analysis-results \
  --name "Next.js Application" \
  --format md,html,png \
  --exclude "node_modules,.next,public,out,dist,build,.git" \
  --verbose
```

## Need Help?

If you encounter any issues or have questions:

1. Check the README.md file for additional information
2. Look at the examples in the `examples` directory
3. File an issue on the GitHub repository 