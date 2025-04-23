# Index Structure

This diagram shows the structure of index files and what they export.

```mermaid
flowchart TD
    utils["utils/index"]
    cache["cache"]
    utils -->|exports| cache
    product["product"]
    utils -->|exports| product
    api["api/index"]
    global["global"]
    api -->|exports| global
    constants["constants"]
    api -->|exports| constants
    auth["auth/index"]
    server["server"]
    auth -->|exports| server
    cache["cache/index"]
    constants["constants"]
    cache -->|exports| constants
    filter["filter/index"]
    global["global"]
    filter -->|exports| global
    product["product/index"]
    global["global"]
    product -->|exports| global
    Deal["Deal"]
    product -->|exports| Deal
```