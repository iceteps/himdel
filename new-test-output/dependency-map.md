# Dependency Map

```mermaid
flowchart LR
  %% Style definitions
  classDef component fill:#e1f5fe,stroke:#0288d1,color:#01579b
  classDef context fill:#fff9c4,stroke:#fbc02d,color:#f57f17
  classDef object fill:#e8f5e9,stroke:#43a047,color:#1b5e20
  classDef array fill:#f3e5f5,stroke:#8e24aa,color:#4a148c
  classDef map fill:#ffebee,stroke:#e53935,color:#b71c1c
  classDef multiConsumer fill:#ede7f6,stroke:#673ab7,color:#311b92,stroke-width:3px

  subgraph Components
  end

  subgraph MultiConsumedProps
  prop_generatecomponenthierarchy["["Prop: generateComponentHierarchy
(2 consumers)"]:::multiConsumer
  prop_generateapiintegration["["Prop: generateApiIntegration
(2 consumers)"]:::multiConsumer
  prop_generatedataflow["["Prop: generateDataFlow
(2 consumers)"]:::multiConsumer
  end

  %% Import relationships
  commander --> generate_map
  chalk --> generate_map
  index --> generate_map
  index --> generate_map
  logger --> generate_map
  fileutils --> generate_map
  parser --> analyzecontexts
  recast --> analyzecontexts
  logger --> analyzecontexts
  filecache --> analyzecontexts
  promises --> analyzecontexts
  parser --> analyzeimports
  recast --> analyzeimports
  logger --> analyzeimports
  filecache --> analyzeimports
  promises --> analyzeimports
  parser --> analyzeprops
  recast --> analyzeprops
  logger --> analyzeprops
  filecache --> analyzeprops
  promises --> analyzeprops
  analyzeimports --> index
  analyzecontexts --> index
  analyzeprops --> index
  workerpool --> index
  fast_glob --> index
  path --> index
  logger --> index
  promises --> index
  promises --> buildhtmlpage
  path --> buildhtmlpage
  enhancedmermaid --> buildhtmlpage
  path --> buildmermaid
  promises --> buildmermaid
  logger --> buildmermaid
  path --> detailedflowcharts
  promises --> detailedflowcharts
  logger --> detailedflowcharts
  path --> enhancedmermaid
  path --> index
  promises --> index
  logger --> index
  buildmermaid --> index
  detailedflowcharts --> index
  writemarkdown --> index
  buildhtmlpage --> index
  path --> structureflowcharts
  promises --> structureflowcharts
  logger --> structureflowcharts
  promises --> writemarkdown
  path --> writemarkdown
  enhancedmermaid --> writemarkdown
  workerpool --> fileanalyzer
  promises --> fileanalyzer
  parser --> fileanalyzer
  recast --> fileanalyzer
  promises --> filecache
  crypto --> filecache
  path --> filecache
  promises --> fileutils
  path --> fileutils
  chalk --> logger
  child_process --> mmdcwrapper
  promises --> mmdcwrapper
  path --> mmdcwrapper
  os --> mmdcwrapper
  logger --> mmdcwrapper
  workerpool --> workerpool
  path --> workerpool
  url --> workerpool
  logger --> workerpool
  %% Context relationships
  %% Props relationships
  analyzecontexts -->|props| analyzecontexts
  analyzeimports -->|props| analyzeimports
  analyzeprops -->|props| analyzeprops
  index -->|props| analyzecodebase
  index -->|props| identifymulticonsumed
  index -->|props| analyzefilestructure
  buildhtmlpage -->|props| buildhtmlpage
  buildmermaid -->|props| buildmermaid
  buildmermaid -->|props| extractmermaidblocks
  buildmermaid -->|props| buildhtml
  detailedflowcharts -->|props| generatedetailedflowcharts
  detailedflowcharts -->|props| generatecartflowcharts
  detailedflowcharts -->|props| generateauthflowcharts
  detailedflowcharts -->|props| generategenericcontextflowcharts
  detailedflowcharts -->|props| generateapiintegrationflowchart
  detailedflowcharts -->|props| generatedataflowoverview
  detailedflowcharts -->|props| generatecheckoutprocess
  enhancedmermaid -->|props| buildenhancedmermaid
  index -->|props| generateoutputs
  index -->|props| generatestructurediagrams
  index -->|props| generatecomponenthierarchy
  index -->|props| generateapiintegration
  index -->|props| generatedataflow
  index -->|props| generateindexstructure
  structureflowcharts -->|props| generatestructureflowcharts
  structureflowcharts -->|props| generatecontextflowchart
  structureflowcharts -->|props| getnodename
  writemarkdown -->|props| categorizefile
  writemarkdown -->|props| getcomponentname
  writemarkdown -->|props| writemarkdown
  fileanalyzer -->|props| analyze
  mmdcwrapper -->|props| generatepng
  mmdcwrapper -->|props| generatesubgraphviews
  mmdcwrapper -->|props| extractsubgraphcontent
  mmdcwrapper -->|props| extractrelatedconnections
  mmdcwrapper -->|props| preprocessmermaidforreadability
  mmdcwrapper -->|props| execasync
  workerpool -->|props| workerpool
  prop_generatecomponenthierarchy -.->|used by| index
  prop_generatecomponenthierarchy -.->|used by| structureflowcharts
  prop_generateapiintegration -.->|used by| index
  prop_generateapiintegration -.->|used by| structureflowcharts
  prop_generatedataflow -.->|used by| index
  prop_generatedataflow -.->|used by| structureflowcharts
  %% Object relationships
  %% Array relationships
  %% Map operations
  excludepatterns -->|mapped in| index
  files -->|mapped in| index
  authconsumers -->|mapped in| detailedflowcharts
  orderapis -->|mapped in| detailedflowcharts
  userapis -->|mapped in| detailedflowcharts
  productapis -->|mapped in| detailedflowcharts

```

## Imports

### Utilities

- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeContexts.js** → `@babel/parser`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeContexts.js** → `recast`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeContexts.js** → `../utils/logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeContexts.js** → `../utils/fileCache.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeContexts.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeImports.js** → `@babel/parser`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeImports.js** → `recast`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeImports.js** → `../utils/logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeImports.js** → `../utils/fileCache.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeImports.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeProps.js** → `@babel/parser`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeProps.js** → `recast`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeProps.js** → `../utils/logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeProps.js** → `../utils/fileCache.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeProps.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js** → `./analyzeImports.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js** → `./analyzeContexts.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js** → `./analyzeProps.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js** → `../utils/workerPool.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js** → `fast-glob`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js** → `../utils/logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/buildHtmlPage.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/buildHtmlPage.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/buildHtmlPage.js** → `./enhancedMermaid.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/buildMermaid.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/buildMermaid.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/buildMermaid.js** → `../utils/logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js** → `../utils/logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/enhancedMermaid.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js** → `../utils/logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js** → `./buildMermaid.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js** → `./detailedFlowcharts.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js** → `./writeMarkdown.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js** → `./buildHtmlPage.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js** → `../utils/logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/writeMarkdown.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/writeMarkdown.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/writeMarkdown.js** → `./enhancedMermaid.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileAnalyzer.js** → `workerpool`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileAnalyzer.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileAnalyzer.js** → `@babel/parser`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileAnalyzer.js** → `recast`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileCache.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileCache.js** → `crypto`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileCache.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileUtils.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileUtils.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/logger.js** → `chalk`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js** → `child_process`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js** → `fs/promises`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js** → `os`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js** → `./logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/workerPool.js** → `workerpool`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/workerPool.js** → `path`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/workerPool.js** → `url`
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/workerPool.js** → `./logger.js`

### Other

- **/home/ctp/Github/himdell/himdell-mapper/bin/generate-map.js** → `commander`
- **/home/ctp/Github/himdell/himdell-mapper/bin/generate-map.js** → `chalk`
- **/home/ctp/Github/himdell/himdell-mapper/bin/generate-map.js** → `../lib/analyzers/index.js`
- **/home/ctp/Github/himdell/himdell-mapper/bin/generate-map.js** → `../lib/generators/index.js`
- **/home/ctp/Github/himdell/himdell-mapper/bin/generate-map.js** → `../lib/utils/logger.js`
- **/home/ctp/Github/himdell/himdell-mapper/bin/generate-map.js** → `../lib/utils/fileUtils.js`

## Context Flow

### Context Creators


### Context Consumers


## Props Flow

### Component Props

- **analyzeContexts** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeContexts.js ([object Object])
- **analyzeImports** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeImports.js ([object Object])
- **analyzeProps** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeProps.js ([object Object])
- **analyzeCodebase** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js ([object Object], [object Object])
- **identifyMultiConsumed** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js ([object Object])
- **analyzeFileStructure** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js ([object Object], [object Object])
- **buildHtmlPage** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/buildHtmlPage.js ([object Object], [object Object])
- **buildMermaid** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/buildMermaid.js ([object Object], [object Object])
- **extractMermaidBlocks** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/buildMermaid.js ([object Object])
- **buildHtml** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/buildMermaid.js ([object Object], [object Object])
- **generateDetailedFlowcharts** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js ([object Object], [object Object])
- **generateCartFlowcharts** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js ([object Object], [object Object])
- **generateAuthFlowcharts** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js ([object Object], [object Object])
- **generateGenericContextFlowcharts** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js ([object Object], [object Object])
- **generateApiIntegrationFlowchart** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js ([object Object])
- **generateDataFlowOverview** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js ([object Object])
- **generateCheckoutProcess** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js ([object Object])
- **buildEnhancedMermaid** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/enhancedMermaid.js ([object Object])
- **generateOutputs** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js ([object Object], [object Object])
- **generateStructureDiagrams** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js ([object Object], [object Object])
- **generateComponentHierarchy** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js ([object Object])
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js ([object Object], [object Object])
- **generateApiIntegration** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js ([object Object])
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js ([object Object], [object Object])
- **generateDataFlow** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js ([object Object])
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js ([object Object], [object Object])
- **generateIndexStructure** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js ([object Object])
- **generateStructureFlowcharts** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js ([object Object], [object Object])
- **generateContextFlowchart** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js ([object Object], [object Object], [object Object])
- **getNodeName** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js ([object Object])
- **categorizeFile** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/writeMarkdown.js ([object Object])
- **getComponentName** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/writeMarkdown.js ([object Object])
- **writeMarkdown** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/writeMarkdown.js ([object Object], [object Object])
- **analyze** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/utils/fileAnalyzer.js ([object Object])
- **generatePNG** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js ([object Object], [object Object])
- **generateSubgraphViews** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js ([object Object], [object Object], [object Object])
- **extractSubgraphContent** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js ([object Object], [object Object])
- **extractRelatedConnections** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js ([object Object], [object Object])
- **preprocessMermaidForReadability** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js ([object Object])
- **execAsync** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js ([object Object])
- **workerPool** receives props from:
  - /home/ctp/Github/himdell/himdell-mapper/lib/utils/workerPool.js ([object Object])

### Components Passing Props

- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeContexts.js** passes props to:
  - analyzeContexts ([object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeImports.js** passes props to:
  - analyzeImports ([object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/analyzeProps.js** passes props to:
  - analyzeProps ([object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js** passes props to:
  - analyzeCodebase ([object Object], [object Object])
  - identifyMultiConsumed ([object Object])
  - analyzeFileStructure ([object Object], [object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/buildHtmlPage.js** passes props to:
  - buildHtmlPage ([object Object], [object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/buildMermaid.js** passes props to:
  - buildMermaid ([object Object], [object Object])
  - extractMermaidBlocks ([object Object])
  - buildHtml ([object Object], [object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js** passes props to:
  - generateDetailedFlowcharts ([object Object], [object Object])
  - generateCartFlowcharts ([object Object], [object Object])
  - generateAuthFlowcharts ([object Object], [object Object])
  - generateGenericContextFlowcharts ([object Object], [object Object])
  - generateApiIntegrationFlowchart ([object Object])
  - generateDataFlowOverview ([object Object])
  - generateCheckoutProcess ([object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/enhancedMermaid.js** passes props to:
  - buildEnhancedMermaid ([object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js** passes props to:
  - generateOutputs ([object Object], [object Object])
  - generateStructureDiagrams ([object Object], [object Object])
  - generateComponentHierarchy ([object Object])
  - generateApiIntegration ([object Object])
  - generateDataFlow ([object Object])
  - generateIndexStructure ([object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js** passes props to:
  - generateStructureFlowcharts ([object Object], [object Object])
  - generateContextFlowchart ([object Object], [object Object], [object Object])
  - generateComponentHierarchy ([object Object], [object Object])
  - generateApiIntegration ([object Object], [object Object])
  - generateDataFlow ([object Object], [object Object])
  - getNodeName ([object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/generators/writeMarkdown.js** passes props to:
  - categorizeFile ([object Object])
  - getComponentName ([object Object])
  - writeMarkdown ([object Object], [object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/fileAnalyzer.js** passes props to:
  - analyze ([object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/mmdcWrapper.js** passes props to:
  - generatePNG ([object Object], [object Object])
  - generateSubgraphViews ([object Object], [object Object], [object Object])
  - extractSubgraphContent ([object Object], [object Object])
  - extractRelatedConnections ([object Object], [object Object])
  - preprocessMermaidForReadability ([object Object])
  - execAsync ([object Object])
- **/home/ctp/Github/himdell/himdell-mapper/lib/utils/workerPool.js** passes props to:
  - workerPool ([object Object])

### Multi-Consumed Props

- **generateComponentHierarchy** is consumed in 2 files:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js
- **generateApiIntegration** is consumed in 2 files:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js
- **generateDataFlow** is consumed in 2 files:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/index.js
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/structureFlowcharts.js

## Map Operations

- **excludePatterns** is mapped in:
  - /home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js
- **files** is mapped in:
  - /home/ctp/Github/himdell/himdell-mapper/lib/analyzers/index.js
- **authConsumers** is mapped in:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js
- **orderApis** is mapped in:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js
- **userApis** is mapped in:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js
- **productApis** is mapped in:
  - /home/ctp/Github/himdell/himdell-mapper/lib/generators/detailedFlowcharts.js

