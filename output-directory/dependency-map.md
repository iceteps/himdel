# Project Name Codebase Dependency Map

This document provides a comprehensive visualization of the dependencies and relationships between files, contexts, and components in the application.

## Context Providers

The application uses 0 main context providers to manage state:


1. **AppProvider** - Main application state
2. **AuthProvider** - Authentication state
3. **DataProvider** - Data management

## Provider Hierarchy

```mermaid
flowchart TD
    subgraph "Provider Hierarchy"
        A[AppProvider] --> B[AuthProvider]
        B --> C[DataProvider]
        C --> D[UIProvider]
        D --> E[App Content]
    end
```

## Context APIs and Consumers

```mermaid
flowchart TD
    subgraph "Context Definitions"
        %% Context definitions
        CC[AuthContext] -->|provides| CCA["AuthContextType\n- user\n- isLoading\n- login\n- logout"]
        DC[DataContext] -->|provides| DCA["DataContextType\n- data\n- loading\n- error\n- refresh"]
    end

    subgraph "Context Hooks"
        %% Context hooks
        uctx[useAuth] -.->|consumes| CC
        uapp[useData] -.->|consumes| DC
    end

    subgraph "Component Consumers"
        %% Auth context consumers
        PC[ProfileComponent] -->|uses| uctx
        SC[SettingsComponent] -->|uses| uctx
        
        %% Data context consumers
        TC[TableComponent] -->|uses| uapp
        VC[ViewController] -->|uses| uapp
    end
```

## Data Flow

```mermaid
flowchart TD
    subgraph "Server Side"
        APIR[API Routes] -->|fetch| EXT[External APIs]
        CACHE[(Cache)]
        
        APIR -->|read/write| CACHE
    end

    subgraph "Client Side"
        subgraph "Data Fetching & Caching"
            DH[Data Hooks]
            DH -->|use| APIR
        end
        
        subgraph "Contexts"
            DC[DataContext] -->|uses| DH
            AC[AuthContext] -->|uses| DH
        end
        
        subgraph "Components"
            COMP[Components] -->|use| DC
            COMP -->|use| AC
        end
    end
```

## Component Prop Flow

```mermaid
flowchart TD
    subgraph "Major Component Props"
        PC[ParentComponent] -->|passes| PCProps["Props:\n- data\n- onAction\n- isLoading"]
        
        SC[SubComponent] -->|receives| SCProps["Props:\n- item\n- onSelect"]
        
        PC -->|passes| SC
    end
```

## Key Component Dependencies

```mermaid
flowchart TD
    subgraph "Key Component Imports"
        APP[App] -->|imports| LAYOUT[Layout]
        LAYOUT -->|imports| HEADER[Header]
        LAYOUT -->|imports| MAIN[MainContent]
        LAYOUT -->|imports| FOOTER[Footer]
        
        MAIN -->|imports| HOME[HomePage]
        MAIN -->|imports| DETAIL[DetailPage]
    end
```

## Data Types Flow

```mermaid
flowchart TD
    subgraph "Type Definitions"
        GT[global.ts] -->|defines| API["ApiTypes\nResponseTypes"]
        GT -->|defines| UI["ComponentProps\nEventHandlers"]
        
        CT[component.ts] -->|extends| UI_Ext["Extended UI Types"]
    end
    
    subgraph "Type Usage"
        COMP[Components] -->|use| UI
        API_CLIENT[ApiClient] -->|uses| API
    end
```

## Key Files and Their Purpose

| File | Purpose | Key Dependencies |
|------|---------|------------------|
| `App.tsx` | Main application entry | Router, Providers |
| `Layout.tsx` | Application layout | Header, Footer |
| `AuthContext.tsx` | Authentication state | API client |
| `DataContext.tsx` | Data state management | API client, caching |
| `useAuth.ts` | Authentication hook | AuthContext |
| `useData.ts` | Data hook | DataContext |
