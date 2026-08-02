# Content Architecture (Version 2.0 - Hybrid Model)

## 1. Dual-Layer Architecture

WelliQo employs a powerful dual-layer architecture, combining a strict hierarchical foundation with a dynamic semantic graph. 

- **Layer 1 (Information Architecture)** answers: *"Where does this content live?"*
- **Layer 2 (Knowledge Layer)** answers: *"What is this content connected to?"*

### Architecture Diagram

```mermaid
graph TD
    subgraph Intelligence Engine
        RecommendationRule["Recommendation Rule"]
        Recommendation["Recommendation (Abstract)"]
    end
    
    subgraph Layer 1: Information Architecture (Hierarchy)
        Domain["Domain (e.g., Recovery)"]
        Category["Category (e.g., Sleep)"]
        Topic["Topic (e.g., Circadian Rhythm)"]
        
        Domain --> Category
        Category --> Topic
    end
    
    subgraph Layer 2: Knowledge Layer (Graph)
        ContentA["Article: Morning Sunlight"]
        ContentB["Article: Deep Sleep Protocol"]
        Concept["Concept: Cortisol"]
        Goal["Goal: Better Sleep"]
        
        ContentA -- supports --> ContentB
        ContentA -- regulates --> Concept
        ContentB -- improves --> Goal
    end
    
    Topic --> |Houses| ContentB
    
    Recommendation --> |Emits targetId| ContentAdapter
    ContentAdapter --> |Queries| ContentB
```

## 2. Layer 1: Information Architecture

The Information Architecture is strict, deterministic, and hierarchical. Its primary purposes are **SEO, Navigation, Menus, Canonical URLs, and Editorial Organization.**

### The Hierarchy
- **Domain**: Broad wellness domains (e.g., `Nutrition`, `Movement`, `Mindset`, `Recovery`).
- **Category**: Specific areas within a domain (e.g., `Nutrition > Hydration`, `Movement > Strength`, `Recovery > Sleep`).
- **Topic**: Focused subject matter (e.g., `Recovery > Sleep > Circadian Rhythm`).

### URL Architecture & SEO
Every piece of content has a single canonical location derived from this layer.
- `/explore/[domain]/[category]/[topic]/[content-slug]`
- This ensures perfect breadcrumbs, flawless sitemap generation, and prevents duplicate content penalties.

## 3. Layer 2: Knowledge Layer

The Knowledge Layer sits on top of the Information Architecture, transforming content into **Knowledge Nodes**. This enables dynamic discovery, intelligent recommendations, and RAG (Retrieval-Augmented Generation).

### Semantic Relationships (Edges)
Every content item can define explicit relationships to other nodes (other content, concepts, habits, or goals):
- `related_to`: General contextual link.
- `supports`: One habit bolsters another (e.g., Hydration supports Focus).
- `requires`: Strict dependency (e.g., Olympic Lifting requires Hip Mobility).
- `conflicts_with`: Mutually exclusive advice (e.g., Fasting conflicts with Pre-workout fueling).
- `prerequisite_of`: Step-by-step progression.
- `progresses_to`: Next best action.
- `explains`: Theoretical breakdown of a practical habit.
- `improves`: Direct link to a user goal.

## 4. Content Data Model

The dual-layer strategy is reflected in the unified `BaseContent` schema. The schema supports Universal Knowledge Nodes, not just traditional articles.

```typescript
// Universal Knowledge Node Types
type NodeType = 
  | 'article' | 'recipe' | 'path' | 'faq' 
  | 'concept' | 'habit' | 'goal' | 'myth' | 'tool' | 'checklist';

// Content Intent Classification
type ContentIntent = 'learn' | 'do' | 'cook' | 'understand' | 'track' | 'compare';

interface BaseContent {
  id: string;
  type: NodeType;
  intent?: ContentIntent;
  title: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  
  // ----------------------------------------
  // LAYER 1: INFORMATION ARCHITECTURE
  // ----------------------------------------
  domain: string;
  category: string;
  topic: string;
  
  // ----------------------------------------
  // LAYER 2: KNOWLEDGE LAYER (EDGES)
  // ----------------------------------------
  // Extensible relationships mapping RelationshipType -> NodeID[]
  // Standard types include: related_to, supports, requires, conflicts_with, 
  // prerequisite_of, progresses_to, explains, improves, myth_about.
  relationships: Record<string, string[]>;
  
  // Metadata
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  readingTimeMinutes?: number;
  
  // SEO overrides
  seoTitle?: string;
  seoDescription?: string;
}
```

## 5. Recommendation Bundles & Action Hubs

The Assessment Engine outputs an abstract recommendation (e.g., `rec_wind_down_routine`).

The decoupled **Content Adapter** is designed around **Recommendation Bundles** rather than 1:1 mapping. When the adapter receives the ID, it interrogates the Knowledge Layer to assemble a rich experience. 

For example, when resolving `rec_wind_down_routine`, it builds an Action Hub:
- **Core Strategy**: A Guide node.
- **Tools**: A Checklist node linked via `supports`.
- **Habit Progression**: The "Next Step" node linked via `progresses_to`.
- **Context**: A Science Concept node linked via `explains`.

This shifts the UI burden entirely to the Content Layer, keeping the Intelligence Engine purely logical.

## 6. Internal Linking & Discovery

- **Layer 1 Navigation**: The user can browse the platform traditionally via top-level menus and breadcrumbs.
- **Layer 2 Discovery**: At the bottom of an article, the UI dynamically generates:
  - *"Next Step"* (driven by `progresses_to`)
  - *"The Science Behind It"* (driven by `explains`)
  - *"Required Habits"* (driven by `requires`)
  - *"Common Goals"* (driven by `improves`)

## 7. Future CMS Readiness

This hybrid architecture maps perfectly to headless CMS platforms (e.g., Sanity).
- **Folders/Collections** handle Layer 1 (Hierarchy).
- **Reference Fields** handle Layer 2 (Relationships).
- In Phase 1 (Local MDX), relationships will be mapped in the frontmatter, and a build-time script will construct the local Knowledge Graph.

## 8. Risks & Mitigations

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Editorial Complexity** | Editors get overwhelmed managing 8 different relationship types. | The CMS interface must make relationships optional. `related_to` is the fallback. Only complex paths require explicit `requires` or `progresses_to` mappings. |
| **Orphaned Nodes** | A referenced node is deleted, breaking the graph edge. | The Content Adapter must silently filter unresolved references at build/run time to prevent 404s. |
| **Circular Dependencies** | A `requires` B, and B `requires` A. | The UI layer must cap recursive graph traversal at a depth of 1 (or protect against infinite loops). |

## 9. Future Evolution (V2+)

To ensure the Knowledge Graph scales efficiently, the following concepts are mapped for future sprints but remain excluded from V1 implementation:

- **Editorial Scalability**: Managing explicit graph edges manually will not scale to 10,000 nodes. Future CMS updates should feature bidirectional inverse resolution (if Node A `requires` Node B, Node B automatically inherits `prerequisite_of` Node A). 
- **AI Auto-Extraction**: As the graph grows, LLMs could be used during the editorial review phase to suggest missing edges based on NLP analysis of the content body.
- **GraphRAG Foundation**: The explicit Knowledge Graph edges create the perfect index for future Retrieval-Augmented Generation, allowing an AI assistant to fetch semantically connected content far more accurately than standard vector searches.
- **Wellness Roles**: In addition to Node Type and Intent, future iterations may classify content by "Wellness Role" (e.g., `Educates`, `Guides`, `Measures`, `Motivates`, `Supports`, `Tracks`). This will allow the Content Adapter to assemble highly personalized, diverse Action Hubs based on user learning styles.
