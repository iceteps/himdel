# DealsContext Structure

```mermaid
flowchart TD
  DealsContext["DealsContext"]

  subgraph state["State Management"]
    direction TB
    state1["- state variables"]
    state2["- calculated values"]
  end

  subgraph methods["Context Methods"]
    direction TB
    method1["addItem()"]
    method2["removeItem()"]
    method3["updateItem()"]
  end

  subgraph consumers["Context Consumers"]
    direction TB
    CartContext["CartContext"]
    DealsContext["DealsContext"]
  end

  DealsContext --> state
  DealsContext --> methods
  DealsContext --> consumers
```
