# WelliQo Architecture V1.0

**Status:** Frozen architecture baseline  
**Audience:** Any developer, product owner, or AI agent joining the project  
**Read time:** Under 15 minutes

## Product in one paragraph

WelliQo is an independent, compliance-first wellness knowledge platform. Its primary product is a deterministic Wellness Assessment that helps a visitor understand self-reported habit patterns and receive a supportive, educational next-step roadmap. The assessment is not a medical tool, product selector, recruitment route, or lead gate. The platform surrounds this experience with original knowledge content, optional consented coaching, and future community capabilities.

## Architecture at a glance

```text
Question Engine → Discovery Engine → Insight Engine → Score Engine
→ Rule Engine → Recommendation Engine → Report Generator
→ Experience Engine (lifecycle, consent, personalization, next state)
```

The interface renders configuration and results; it does not contain assessment decisions. Every active configuration element is versioned, market-scoped, reviewable, and testable.

## Assessment engines

| Engine                | Responsibility                                                                                        | Primary reference                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Question Engine       | Data-driven question rendering, validation, eligibility, and routing                                  | `wellness-assessment/03-question-bank.md`, `04-question-flow.md` |
| Discovery Engine      | Finds stated motivation, constraints, strengths, practical barriers, and meaningful next-step context | `11-discovery-engine.md`                                         |
| Insight Engine        | Turns corroborated answer patterns into cautious, explainable human insights                          | `12-insight-engine.md`                                           |
| Score Engine          | Produces transparent, supportive habit dimensions with coverage rules                                 | `05-scoring-engine.md`                                           |
| Rule Engine           | Applies approved deterministic priorities, exclusions, safety routes, and block selection             | `06-rule-engine.md`                                              |
| Recommendation Engine | Selects reviewed resources and actions compatible with goal, insight, rule, market, and preferences   | `06-rule-engine.md`, `07-report-generator.md`                    |
| Report Generator      | Assembles immutable, supportive report snapshots from reusable approved blocks                        | `07-report-generator.md`                                         |
| Experience Engine     | Controls visitor state, events, transitions, memory, consent, and personalization boundaries          | `13-experience-engine.md`                                        |

## Deterministic flow

Questions collect only decision-useful answers. The Discovery Engine explains why those answers matter as a person’s lived context. The Insight Engine identifies high-confidence behavioral patterns. Scores summarize self-reported habits; they do not label health. Rules convert facts into bounded priorities. Recommendations select approved educational content and realistic actions. The report composes those blocks with a strength-first, nonjudgmental voice.

No live OpenAI, Gemini, Claude, or other generative AI API is part of this decision flow.

## Data and privacy

Assessment sessions are pseudonymous by default. Identity is separate and only connected after explicit, versioned consent. Reports retain question, rule, block, resource, and disclosure versions so their result remains explainable. V1 excludes medical history, diagnoses, medication, pregnancy, disease, disability, and similar sensitive health data. Row-level security denies access by default.

## Knowledge platform

Guides, recipes, FAQs, glossary entries, and any approved product/business content are structured, original, reviewed content. They are selected by topic tags and approval state; they do not alter assessment rules. Every indexable page serves a genuine search intent and links helpfully to the next relevant learning step. See the Content Constitution, Information Architecture, and SEO Blueprint.

## Coach platform

Coach discovery and contact are a post-value, voluntary pathway. A coach invitation needs explicit visitor preference, no safety route, approved market/profile data, identity disclosure, a clear sharing choice, and revocable consent. Low scores, browsing, or incomplete assessment responses never create a lead.

## Compliance philosophy

When policy, approval, local law, privacy, or claim substantiation is unclear, do not build or publish the affected capability. The platform cannot diagnose, treat, cure, prescribe, promise an outcome, guarantee income, or imply official Herbalife affiliation. Business learning, if ever approved, is a fully separate journey that cannot use wellness answers.

## SEO philosophy

Search is an education acquisition channel, not a reason to create thin or misleading pages. Content must be original, useful, accessible, reviewed, source-aware, internally linked, and technically indexable. SEO never overrules safety, truthfulness, or visitor intent.

## Technology and boundaries

Use a TypeScript monorepo: Next.js App Router, Tailwind CSS, shadcn/ui, Supabase PostgreSQL/Auth/Storage, and Vercel. Put pure scoring/rules/insights in a reusable `assessment-engine` package. Keep UI, content, persistence, and privileged operations in separate packages/adapters. This is elaborated in the Development Bible and Database Blueprint.

## Change control

Architecture V1.0 is frozen. If a sprint exposes a real architectural need, stop work on that change, document context/alternatives/consequences in an ADR, request approval, and then implement only the approved decision. Never silently alter this design.
