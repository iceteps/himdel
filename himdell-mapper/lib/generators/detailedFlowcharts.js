import path from 'path';
import fs from 'fs/promises';
import { logger } from '../utils/logger.js';

/**
 * Generates detailed, human-friendly flowcharts for specific application features
 * 
 * @param {Object} analysis - The analysis results from the codebase
 * @param {string} outputDir - Directory to write output files
 */
export async function generateDetailedFlowcharts(analysis, outputDir) {
  logger.info('Generating detailed feature flowcharts...');
  
  try {
    // Identify key context providers (like CartContext)
    const contextFiles = analysis.imports
      .filter(({ file }) => file.includes('Context.') || file.includes('/contexts/'))
      .map(({ file }) => file);
    
    // Get unique context files
    const uniqueContextFiles = [...new Set(contextFiles)];
    
    // Create grouped flowcharts instead of many separate files
    
    // 1. Data & State Management Group
    let dataStateContent = `# Data & State Management Diagrams\n\n`;
    
    // 2. Component Hierarchy Group
    let componentHierarchyContent = `# Component Hierarchies & User Interface\n\n`;
    
    // 3. User Flows & Feature Group
    let userFlowsContent = `# User Flows & Features\n\n`;
    
    // Process contexts and add them to the appropriate groups
    for (const contextFile of uniqueContextFiles) {
      const basename = path.basename(contextFile, path.extname(contextFile));
      
      // Special handling for CartContext and other key features
      if (basename.includes('Cart') || basename.includes('cart')) {
        const cartFlowcharts = await generateCartFlowcharts(contextFile, analysis);
        dataStateContent += cartFlowcharts.dataStructure + '\n\n';
        componentHierarchyContent += cartFlowcharts.componentHierarchy + '\n\n';
        userFlowsContent += cartFlowcharts.dataFlow + '\n\n';
      } else if (basename.includes('Auth') || basename.includes('auth') || basename.includes('User')) {
        const authFlowchart = await generateAuthFlowcharts(contextFile, analysis);
        dataStateContent += authFlowchart + '\n\n';
      } else {
        const genericFlowchart = await generateGenericContextFlowcharts(contextFile, analysis);
        dataStateContent += genericFlowchart + '\n\n';
      }
    }
    
    // Generate API integration flowchart and add to data state group
    const apiFlowchart = await generateApiIntegrationFlowchart(analysis);
    dataStateContent += apiFlowchart + '\n\n';
    
    // Generate data flow overview and add to user flows group
    const dataFlowOverview = await generateDataFlowOverview(analysis);
    userFlowsContent += dataFlowOverview + '\n\n';
    
    // Generate checkout process flowchart and add to user flows group
    const checkoutProcess = await generateCheckoutProcess(analysis);
    userFlowsContent += checkoutProcess + '\n\n';
    
    // Write the grouped content to files
    await fs.writeFile(path.join(outputDir, 'data-state-diagrams.md'), dataStateContent);
    await fs.writeFile(path.join(outputDir, 'component-hierarchy-diagrams.md'), componentHierarchyContent);
    await fs.writeFile(path.join(outputDir, 'user-flows-diagrams.md'), userFlowsContent);
    
    logger.success('✅ Consolidated flowcharts generated successfully!');
  } catch (error) {
    logger.error(`Failed to generate detailed flowcharts: ${error.message}`);
    throw error;
  }
}

/**
 * Generate cart-specific flowcharts including state management, operations, UI components
 */
async function generateCartFlowcharts(contextFile, analysis) {
  const fileBasename = path.basename(contextFile, path.extname(contextFile));
  
  // Find all imports related to this context
  const contextImports = analysis.imports
    .filter(({ file }) => file === contextFile)
    .map(({ source }) => source);
  
  // Find all components that use the cart context
  const cartConsumers = analysis.contexts
    .filter(({ name, type }) => 
      (name === fileBasename || name.includes('Cart')) && 
      type === 'consume'
    )
    .map(({ file }) => file);
  
  // Identify potential state variables, operations, and persistence methods
  const stateVariables = ['cartItems', 'subtotal', 'totalQuantity', 'shippingFee', 'total'];
  const operations = ['addToCart', 'removeFromCart', 'updateQuantity', 'clearCart', 'getCartForAPI'];
  const persistence = ['localStorage', 'globalCartItems', 'CartStatePersistenceHandler'];
  
  // Additional file scanning to find actual methods and states
  const cartComponents = [
    'ShoppingCart', 'CartCheck', 'CartButton', 
    'EmptyCartNotification', 'CheckoutModal'
  ];
  
  // Generate the data structure flowchart
  const dataStructureFlowchart = `## ${fileBasename} Data Structure & State Management

\`\`\`mermaid
flowchart TD
    CartContext["${fileBasename}"]
    
    subgraph state["State Management"]
      direction TB
      cartItems["cartItems[]"]
      subtotal["subtotal (calculated)"]
      totalQuantity["totalQuantity"]
      shippingFee["shippingFee"]
      total["total (calculated)"]
    end
    
    subgraph persistence["Persistence Mechanisms"]
      localStorage["localStorage"]
      globalCartItems["globalCartItems (shared state)"]
      persistenceHandler["CartStatePersistenceHandler"]
    end
    
    subgraph operations["Cart Core Functions"]
      direction LR
      addToCart["addToCart()"]
      removeFromCart["removeFromCart()"]
      updateQuantity["updateQuantity()"]
      clearCart["clearCart()"]
      getCartForAPI["getCartForAPI()"]
    end
    
    subgraph normalization["Type-Safe ID Normalization"]
      direction TB
      idNorm["Convert string IDs to numbers for consistent comparison"]
    end
    
    CartContext --> state
    CartContext --> persistence
    CartContext --> operations
    
    operations --> normalization
\`\`\`
`;

  // Generate UI component hierarchy flowchart
  const componentHierarchyFlowchart = `## ${fileBasename} Component Hierarchy

\`\`\`mermaid
flowchart TD
    cartComponents["Cart Components"]
    
    subgraph components["Cart UI Components"]
      ShoppingCart["ShoppingCart.tsx"]
      CartCheck["CartCheck.tsx"]
      CartButton["CartButton.tsx"]
      EmptyCartNotification["EmptyCartNotification"]
      CheckoutModal["CheckoutModal"]
    end
    
    subgraph pages["Cart Pages"]
      cartPage["cart-check/page.tsx"]
      otherPages["(potentially other cart-related pages)"]
    end
    
    subgraph helpers["Helper Components"]
      Checkout["Checkout.tsx"]
      additionalHelpers["Additional Helpers"]
    end
    
    cartComponents --> components
    ShoppingCart --> pages
    CartCheck --> pages
    CartButton --> helpers
    EmptyCartNotification --> helpers
    CheckoutModal --> Checkout
\`\`\`
`;

  // Generate the cart data flow diagram
  const dataFlowFlowchart = `## ${fileBasename} Data Flow

\`\`\`mermaid
flowchart TD
    userAction["1. User adds product to cart (addToCart)"]
    
    subgraph contextUpdate["2. CartContext Processing"]
      normalizeId["ID Normalization"]
      updateState["Update State"]
    end
    
    subgraph persistence["3. Persistence"]
      saveLocal["Save to localStorage"]
      updateGlobal["Update globalCartItems"] 
    end
    
    subgraph discount["4. Discount Calculation"]
      useCartDiscounts["useCartDiscounts hook"]
      calculatePer["Calculate per-line discounts"]
      calculateTotal["Calculate total discounts"]
    end
    
    subgraph ui["5. UI Updates"]
      renderCart["Render cart items"]
      showDiscounts["Display discounts & ribbons"]
    end
    
    checkout["6. Checkout process sends data to API"]
    
    userAction --> contextUpdate
    contextUpdate --> persistence
    persistence --> discount
    discount --> ui
    ui --> checkout
    
    contextUpdate -.-> |"Product data with:
- id (normalized)
- cdm_deals
- on_sale
- sale_price
- other fields"| discount
    
    discount -.-> |"Discount calculation:
- perLine discounts
- total discount
- dealsByLine"| ui
\`\`\`
`;

  return {
    dataStructure: dataStructureFlowchart,
    componentHierarchy: componentHierarchyFlowchart,
    dataFlow: dataFlowFlowchart
  };
}

/**
 * Generate auth-specific flowcharts
 */
async function generateAuthFlowcharts(contextFile, analysis) {
  const fileBasename = path.basename(contextFile, path.extname(contextFile));
  
  // Find components that use the auth context
  const authConsumers = analysis.contexts
    .filter(({ name, type }) => 
      (name === fileBasename || name.includes('Auth') || name.includes('User')) && 
      type === 'consume'
    )
    .map(({ file }) => file);
  
  // Generate the auth flow diagram
  const authFlowchart = `## ${fileBasename} Authentication Flow

\`\`\`mermaid
flowchart TD
    ${fileBasename}["${fileBasename}"]
    
    subgraph state["Authentication State"]
      isAuthenticated["isAuthenticated"]
      userData["userData"]
      loading["loading"]
    end
    
    subgraph methods["Auth Methods"]
      login["login()"]
      logout["logout()"]
      register["register()"]
      refreshToken["refreshToken()"]
    end
    
    subgraph storage["Token Storage"]
      localStorage["localStorage"]
      cookies["HTTP-only cookies"]
    end
    
    subgraph components["Auth Components"]
      ${authConsumers.map(file => {
        const name = path.basename(file, path.extname(file));
        return `${name}["${name}"]`;
      }).join('\n      ')}
    end
    
    ${fileBasename} --> state
    ${fileBasename} --> methods
    methods --> storage
    ${fileBasename} --> components
\`\`\`
`;

  return authFlowchart;
}

/**
 * Generate generic context flowcharts for other contexts
 */
async function generateGenericContextFlowcharts(contextFile, analysis) {
  const fileBasename = path.basename(contextFile, path.extname(contextFile));
  
  // Find imports and state from this context
  const contextImports = analysis.imports
    .filter(({ file }) => file === contextFile)
    .map(({ source }) => source);
  
  // Find components that consume this context
  const consumers = analysis.contexts
    .filter(({ name, type }) => name === fileBasename && type === 'consume')
    .map(({ file }) => file);
  
  // Generate the flowchart
  const flowchart = `## ${fileBasename} Context Flow

\`\`\`mermaid
flowchart TD
    ${fileBasename}["${fileBasename}"]
    
    subgraph state["State"]
      direction TB
      stateVars["Context State Variables"]
    end
    
    subgraph methods["Methods"]
      direction TB
      contextMethods["Context Methods"]
    end
    
    subgraph consumers["Consumer Components"]
      ${consumers.slice(0, 5).map(file => {
        const name = path.basename(file, path.extname(file));
        return `${name}["${name}"]`;
      }).join('\n      ')}
      ${consumers.length > 5 ? 'moreComponents["...and more"]' : ''}
    end
    
    ${fileBasename} --> state
    ${fileBasename} --> methods
    ${fileBasename} --> consumers
\`\`\`
`;

  return flowchart;
}

/**
 * Generate API integration flowchart
 */
async function generateApiIntegrationFlowchart(analysis) {
  // Find all API-related files
  const apiFiles = analysis.imports
    .filter(({ file, source }) => 
      file.includes('/api/') || 
      source.includes('/api/') ||
      file.includes('api.') ||
      source.includes('api.')
    )
    .map(({ file, source }) => file.includes('/api/') || file.includes('api.') ? file : source);
  
  const uniqueApiFiles = [...new Set(apiFiles)];
  
  // Group API files by endpoint type
  const orderApis = uniqueApiFiles.filter(file => file.includes('order'));
  const userApis = uniqueApiFiles.filter(file => file.includes('user'));
  const productApis = uniqueApiFiles.filter(file => file.includes('product'));
  const wordpressApis = uniqueApiFiles.filter(file => file.includes('wp_'));
  const otherApis = uniqueApiFiles.filter(file => 
    !file.includes('order') && 
    !file.includes('user') && 
    !file.includes('product') && 
    !file.includes('wp_')
  );
  
  // Generate the API integration flowchart
  const apiFlowchart = `## API Integration

\`\`\`mermaid
flowchart TD
    apiEndpoints["API Endpoints"]
    
    subgraph orderApi["Order API"]
      ${orderApis.length ? orderApis.map(file => {
        const name = path.basename(file, path.extname(file));
        return `order_${name}["/api/order"]`;
      }).join('\n      ') : 'orderEndpoint["/api/order"]'}
    end
    
    subgraph userApi["User API"]
      ${userApis.length ? userApis.map(file => {
        const name = path.basename(file, path.extname(file));
        return `user_${name}["/api/users"]`;
      }).join('\n      ') : 'userEndpoint["/api/users"]'}
    end
    
    subgraph productApi["Product API"]
      ${productApis.length ? productApis.map(file => {
        const name = path.basename(file, path.extname(file));
        return `product_${name}["/api/products"]`;
      }).join('\n      ') : 'productEndpoint["/api/products"]'}
    end
    
    subgraph wpApi["WordPress API"]
      wpEndpoint["WordPress API"]
    end
    
    apiEndpoints --> orderApi
    apiEndpoints --> userApi
    apiEndpoints --> productApi
    apiEndpoints --> wpApi
\`\`\`
`;

  return apiFlowchart;
}

/**
 * Generate data flow overview
 */
async function generateDataFlowOverview(analysis) {
  // Generate the data flow overview
  const dataFlowOverview = `## Application Data Flow

\`\`\`mermaid
flowchart TD
    subgraph clientSide["Client-Side Data Flow"]
      contexts["Context Providers"]
      components["UI Components"]
      hooks["Custom Hooks"]
    end
    
    subgraph serverSide["Server-Side Processing"]
      apiRoutes["API Routes"]
      cache["Caching Layer"]
      external["External APIs"]
    end
    
    contexts --> components
    components --> contexts
    
    contexts --> hooks
    hooks --> contexts
    
    components --> apiRoutes
    apiRoutes --> components
    
    apiRoutes --> cache
    cache --> apiRoutes
    
    apiRoutes --> external
    external --> apiRoutes
    
    subgraph dataProcessing["Data Processing"]
      normalization["Data Normalization"]
      transformation["Data Transformation"]
      validation["Data Validation"]
    end
    
    components --> dataProcessing
    dataProcessing --> components
    
    apiRoutes --> dataProcessing
    dataProcessing --> apiRoutes
\`\`\`
`;

  return dataFlowOverview;
}

/**
 * Generate checkout process flowchart
 */
async function generateCheckoutProcess(analysis) {
  // Generate the checkout process flowchart
  const checkoutFlowchart = `## Checkout Process

\`\`\`mermaid
flowchart TD
    start["User navigates to cart or cart-check"]
    
    subgraph cartDisplay["Cart Display"]
      showItems["Display cart items & summary"]
      showTotal["Calculate & show total with discounts"]
    end
    
    subgraph authCheck["Authentication Check"]
      checkAuth["Check if user is authenticated"]
      showAuthModal["Show authentication modal if needed"]
      processAuth["Authentication process"]
    end
    
    subgraph orderPrep["Order Preparation"]
      prepareCart["getCartForAPI prepares data for submission"]
      collectAddress["Collect/validate delivery address"]
    end
    
    subgraph apiSubmission["API Submission"]
      submitOrder["API call to /api/order"]
      handleResponse["Process API response"]
    end
    
    subgraph completion["Order Completion"]
      clearCart["Clear cart"]
      showConfirmation["Redirect to order-confirmation"]
    end
    
    start --> cartDisplay
    cartDisplay --> authCheck
    
    checkAuth -->|Authenticated| orderPrep
    checkAuth -->|Not authenticated| showAuthModal
    showAuthModal --> processAuth
    processAuth --> orderPrep
    
    orderPrep --> apiSubmission
    apiSubmission -->|Success| completion
    apiSubmission -->|Error| cartDisplay
\`\`\`
`;

  return checkoutFlowchart;
}