# Assessment Architecture

This document defines the strict architectural laws governing assessments within the WelliQo platform.

## 🔒 The Assessment Registry Constitution

**No page, component, widget, route, or feature may hardcode assessment information.**

Any new assessment feature that introduces hardcoded assessment IDs, routes, metadata, categories, goals, or links outside the `AssessmentRegistry` is considered an architectural bug and must not be merged.

### The Single Source of Truth
`src/assessments/registry.ts` is the sole source of truth for all assessment metadata and routing. 

If a widget needs to link to an assessment, it MUST ask the Registry:
```typescript
import { AssessmentRegistry } from '@/assessments/registry';

// Get a route to a specific assessment
const route = AssessmentRegistry.getRoute('sleep');

// Link to the directory
const directory = AssessmentRegistry.getDirectoryRoute();
```

### ROUTE CONTRACT

The following routes are immutable for MVP:

- `/assessments` (The Directory)
- `/assessment?id=[id]` (The Engine)
- `/assessment/report` (The Report)

**No new assessment routes may be introduced without updating this document and receiving architecture approval.**

This explicitly forbids creating pages like:
- `/assessment/new`
- `/assessment/start`
- `/assessment/select`
- `/assessment/list`
- `/assessments/[id]` (Landing Pages)

This prevents architectural drift, duplicate routing logic, and SEO fragmentation. All paths lead through the Registry and the unified Engine.
