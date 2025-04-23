# User Flows & Features

## Application Data Flow

```mermaid
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
```


## Checkout Process

```mermaid
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
```


