# WelliQo Information Architecture

**Principle:** Start small, complete, and trustworthy. Expand only when each section has an owner, approved content model, and a distinct visitor need.

## 1. Launch sitemap

```text
/
├─ /about
├─ /guides
│  └─ /guides/{topic}
├─ /recipes
│  └─ /recipes/{recipe}
├─ /wellness
│  ├─ /wellness/habits
│  └─ /wellness/{guide}
├─ /product-information                 (only when market approved)
│  └─ /product-information/{product}
├─ /business-information                (only when market approved)
│  └─ /business-information/{topic}
├─ /faqs
├─ /glossary
├─ /contact
├─ /search
├─ /privacy
├─ /cookies
├─ /terms
├─ /disclosures
└─ /accessibility
```

## 2. Navigation model

**Primary navigation:** Guides, Recipes, Wellness, FAQs, About, Contact.  
**Conditional navigation:** Product Information and Business Information appear only after market-specific approval.  
**Footer:** Legal, disclosures, accessibility, privacy/cookies, contact, and independent-distributor identity where applicable.

## 3. Content hierarchy

| Layer      | Purpose                           | Example                                |
| ---------- | --------------------------------- | -------------------------------------- |
| Hub        | Broad topic entry and orientation | `/guides`                              |
| Cluster    | Narrow subtopic and curated paths | `/wellness/habits`                     |
| Detail     | One complete question/intent      | `/guides/building-a-breakfast-routine` |
| Support    | Definitions and direct answers    | `/faqs`, `/glossary`                   |
| Conversion | Transparent, consented contact    | `/contact`                             |

## 4. URL rules

- Use human-readable, lowercase, hyphenated slugs.
- Never include changing claims, dates, campaign codes, tracking identifiers, or unapproved trademarks in URLs.
- Keep URLs stable; use permanent redirects when a published page moves.
- Create separate local-market pages only when content, disclosures, language, and ownership are genuinely distinct.

## 5. Internal-link rules

- A detail page links upward to its hub and sideways to 2–4 genuinely helpful related pages.
- A hub links to its most useful details, not every possible page.
- Legal and disclosure pages are always reachable from the footer.
- Product/business pages may link only to approved, contextually relevant contact pathways.

## 6. Expansion roadmap

| Stage              | Additions                                                 | Gate                                          |
| ------------------ | --------------------------------------------------------- | --------------------------------------------- |
| Foundation         | Core guides, recipes, FAQ, legal/contact                  | Documents and policies approved               |
| Content scale      | Topic hubs, glossary, search, newsletter only if approved | Content ownership and review cadence in place |
| Product education  | Approved product index and detail pages                   | Per-market product/brand approval             |
| Business education | Approved opportunity information                          | Compliance/legal approval and disclosures     |
| Interactive tools  | General wellness questionnaires/calculators               | Privacy, safety, and methodology review       |

## 7. Page inventory requirements

Before a route is created, its record must specify: audience, purpose, intent, template, owner, content type, market, risk level, approval status, CTA, internal links, and review date.
