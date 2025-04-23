# Data & State Management Diagrams

## AuthContext Authentication Flow

```mermaid
flowchart TD
    AuthContext["AuthContext"]
    
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
      
    end
    
    AuthContext --> state
    AuthContext --> methods
    methods --> storage
    AuthContext --> components
```


## CartContext Data Structure & State Management

```mermaid
flowchart TD
    CartContext["CartContext"]
    
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
```


## DataContext Context Flow

```mermaid
flowchart TD
    DataContext["DataContext"]
    
    subgraph state["State"]
      direction TB
      stateVars["Context State Variables"]
    end
    
    subgraph methods["Methods"]
      direction TB
      contextMethods["Context Methods"]
    end
    
    subgraph consumers["Consumer Components"]
      
      
    end
    
    DataContext --> state
    DataContext --> methods
    DataContext --> consumers
```


## DealsContext Context Flow

```mermaid
flowchart TD
    DealsContext["DealsContext"]
    
    subgraph state["State"]
      direction TB
      stateVars["Context State Variables"]
    end
    
    subgraph methods["Methods"]
      direction TB
      contextMethods["Context Methods"]
    end
    
    subgraph consumers["Consumer Components"]
      
      
    end
    
    DealsContext --> state
    DealsContext --> methods
    DealsContext --> consumers
```


## API Integration

```mermaid
flowchart TD
    apiEndpoints["API Endpoints"]
    
    subgraph orderApi["Order API"]
      order_route["/api/order"]
      order_route["/api/order"]
      order_route["/api/order"]
      order_route["/api/order"]
    end
    
    subgraph userApi["User API"]
      user_user-api["/api/users"]
      user_route["/api/users"]
      user_user-api["/api/users"]
      user_route["/api/users"]
      user_route["/api/users"]
      user_route["/api/users"]
      user_route["/api/users"]
      user_route["/api/users"]
    end
    
    subgraph productApi["Product API"]
      product_route["/api/products"]
      product_route["/api/products"]
      product_route["/api/products"]
    end
    
    subgraph wpApi["WordPress API"]
      wpEndpoint["WordPress API"]
    end
    
    apiEndpoints --> orderApi
    apiEndpoints --> userApi
    apiEndpoints --> productApi
    apiEndpoints --> wpApi
```


