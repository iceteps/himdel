# UserDashboard Structure

```mermaid
flowchart TD
  UserDashboard["UserDashboard"]

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
  end

  UserDashboard --> state
  UserDashboard --> methods
  UserDashboard --> consumers
```
