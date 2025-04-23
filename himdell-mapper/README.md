# Himdell Mapper 🗺️  

Visualize codebase dependencies with interactive diagrams.  

## Features  
- **Import/Export Maps**  
- **React Context Flow**  
- **Component Prop Drilling**  
- Outputs: Markdown, HTML, PNG  

## Installation

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/himdell.git
cd himdell

# Install dependencies
npm install
# or
pnpm install

# For PNG generation, install Mermaid CLI globally
npm install -g @mermaid-js/mermaid-cli
```

## Usage  

### Local Command (from the himdell directory)
```bash
# Using node directly
node himdell-mapper/bin/generate-map.js --dir ./path/to/project --output my-output

# With debug output
DEBUG=1 node himdell-mapper/bin/generate-map.js --dir ./path/to/project --verbose

# Generate all formats (html, md, png)
node himdell-mapper/bin/generate-map.js --dir ./path/to/project --output my-output --format html,md,png
```

### After npm Installation (once published)
```bash
# Basic usage
npx himdell-map --dir ./src --format html,md,png

# Exclude specific directories (to improve performance)
npx himdell-map --dir ./src --exclude "node_modules,dist,build,.git" --format html,md

# Full options example
npx himdell-map --dir ./path/to/project --output my-output --format html,md --concurrency 4 --exclude "node_modules,dist,build,.git,.next" --verbose
```

## Options

| Option | Description | Default |
|--------|-------------|---------|
| `--dir`, `-d` | Target directory to analyze | Current directory |
| `--output`, `-o` | Output directory for generated files | `himdell-output` |
| `--format` | Output formats (comma-separated) | `md,html` |
| `--concurrency` | Number of files to parse in parallel | `8` |
| `--verbose` | Show detailed debug logs | `false` |
| `--exclude` | Directories/patterns to exclude (comma-separated) | `node_modules,dist,build,.git,.next` |

## Output Files

When you run Himdell Mapper, it will create the following files based on your format selection:

- **HTML** (`--format html`): Interactive diagram viewable in a browser
  - `<output-dir>/dependency-map.html`
- **Markdown** (`--format md`): Mermaid-compatible markdown diagram
  - `<output-dir>/dependency-map.md`  
- **PNG** (`--format png`): Static image of the dependency graph
  - `<output-dir>/dependency-map.png`
  - **Note:** PNG generation requires [Mermaid CLI](https://github.com/mermaid-js/mermaid-cli) to be installed globally:
    ```bash
    npm install -g @mermaid-js/mermaid-cli
    ```

### Creating a New Analysis

To analyze a new project or create a fresh analysis:

```bash
# 1. Navigate to the himdell directory
cd path/to/himdell

# 2. Run the analysis with a specific output directory
node himdell-mapper/bin/generate-map.js --dir /path/to/your/project --output my-new-analysis

# 3. Generate all formats (HTML, Markdown, and PNG)
node himdell-mapper/bin/generate-map.js --dir /path/to/your/project --output my-new-analysis --format html,md,png
```

The results will be saved in the `my-new-analysis` directory, creating new files with your project's dependencies visualized.

## Performance Tips

For large codebases, use the `--exclude` option to skip directories that contain many files but aren't relevant to your analysis:

```bash
# Example for a Next.js project - local command
node himdell-mapper/bin/generate-map.js --dir ./my-project --exclude "node_modules,.next,public,out" --verbose

# After npm installation
npx himdell-map --dir ./my-project --exclude "node_modules,.next,public,out" --verbose
```

This helps prevent memory issues and significantly speeds up the analysis.