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

### All-in-One Command (Recommended)
```bash
# Generate both dependency maps and comprehensive documentation
node himdell-mapper/bin/himdell.js --dir ./path/to/project --output my-output --name "My Project"

# With all options
node himdell-mapper/bin/himdell.js --dir ./path/to/project --output my-output --format md,html,png --concurrency 4 --exclude "node_modules,dist,build,.git,.next" --name "My Project" --verbose --open
```

This unified command will:
1. Analyze your codebase
2. Generate dependency maps (HTML, Markdown, PNG)
3. Create comprehensive documentation (architecture, roadmap, performance, etc.)
4. Build an interactive index page for easy navigation
5. Optionally open the results in your browser

### Individual Commands (Legacy)

#### Map Generation
```bash
# Using node directly
node himdell-mapper/bin/generate-map.js --dir ./path/to/project --output my-output

# With debug output
DEBUG=1 node himdell-mapper/bin/generate-map.js --dir ./path/to/project --verbose

# Generate all formats (html, md, png)
node himdell-mapper/bin/generate-map.js --dir ./path/to/project --output my-output --format html,md,png
```

#### Documentation Generation
```bash
# Generate comprehensive documentation
node himdell-mapper/bin/generate-docs.js --dir ./path/to/project --output my-docs --name "My Project"
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
| `--format` | Output formats (comma-separated) | `md,html,png` |
| `--concurrency` | Number of files to parse in parallel | `8` |
| `--verbose` | Show detailed debug logs | `false` |
| `--exclude` | Directories/patterns to exclude (comma-separated) | `node_modules,dist,build,.git,.next` |
| `--name` | Project name for documentation | `Application` |
| `--open` | Open results in browser after generation | `false` |

## Output Files

When you run Himdell Mapper, it will create the following files based on your format selection:

- **HTML** (`--format html`): Interactive diagram viewable in a browser
  - `<output-dir>/maps/dependency-map.html`
- **Markdown** (`--format md`): Mermaid-compatible markdown diagram
  - `<output-dir>/maps/dependency-map.md`  
- **PNG** (`--format png`): Static image of the dependency graph
  - `<output-dir>/maps/dependency-map.png`
  - **Note:** PNG generation requires [Mermaid CLI](https://github.com/mermaid-js/mermaid-cli) to be installed globally:
    ```bash
    npm install -g @mermaid-js/mermaid-cli
    ```

### Documentation Files

When using the all-in-one command, you'll also get these documentation files:

- **Architecture Overview** (`ARCHITECTURE.md`): High-level overview of the codebase architecture
- **Detailed Architecture** (`ARCHITECTURE_DEEP.md`): Detailed documentation of component relationships
- **Baseline Roadmap** (`BASELINE_ROADMAP.md`): Metrics and structure overview
- **Refactoring Plan** (`REFACTORING.md`): Suggestions for code improvements
- **Performance Report** (`PERF_REPORT.md`): Performance analysis and optimization opportunities
- **Documentation Index** (`README.md`): Overview and links to all generated documentation
- **Interactive Index** (`index.html`): Browse all documentation and visualizations

### Creating a New Analysis

To analyze a new project or create a fresh analysis:

```bash
# 1. Navigate to the himdell directory
cd path/to/himdell

# 2. Run the all-in-one analysis with a specific output directory
node himdell-mapper/bin/himdell.js --dir /path/to/your/project --output my-new-analysis --name "Project Name"

# 3. Open the results in your browser
# Option 1: Use the --open flag
node himdell-mapper/bin/himdell.js --dir /path/to/your/project --output my-new-analysis --name "Project Name" --open

# Option 2: Start a simple web server
cd my-new-analysis
python3 -m http.server 8000
# Then visit: http://localhost:8000/
```

The results will be saved in the `my-new-analysis` directory, creating a comprehensive set of documentation and visualization files.

## Performance Tips

For large codebases, use the `--exclude` option to skip directories that contain many files but aren't relevant to your analysis:

```bash
# Example for a Next.js project - all-in-one command
node himdell-mapper/bin/himdell.js --dir ./my-project --exclude "node_modules,.next,public,out" --verbose

# Start a simple web server
cd your-output-directory
python3 -m http.server 8000

# Open in your browser
# Visit: http://localhost:8000/
```

This helps prevent memory issues and significantly speeds up the analysis.