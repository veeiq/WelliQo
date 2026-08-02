# WelliQo Documentation

## Golden rule

> The repository documentation is the single source of truth.

This repository defines a long-term, compliance-first wellness knowledge platform operated independently of Herbalife. It is not an official Herbalife property, e-commerce store, medical service, or income-opportunity website.

## Vision and mission

**Vision:** Become the most useful, trustworthy destination for education-led wellness and approved Herbalife-related knowledge.

**Mission:** Help people learn, reflect on daily habits, and choose helpful next steps; give Independent Associates compliant education pathways; and earn qualified, consented engagement through original, search-useful content.

The Wellness Assessment is the product center of gravity. It is a deterministic discovery experience that creates a supportive educational roadmap—not a diagnosis, prescription, sales funnel, or live-AI chat.

## Core principles

1. Compliance, privacy, safety, and truthfulness outrank growth.
2. Education comes before conversion; learning is never gated by contact capture.
3. The assessment discovers a person’s stated goals, routines, barriers, strengths, and readiness—not merely their measurements.
4. Rules, insights, scoring, and reports are deterministic, explainable, versioned, and approved. No live AI is used in product decisions.
5. Content is original, useful, accessible, search-intent led, and reviewed.
6. Wellness, coaching, community, product, and business journeys have separate consent and data boundaries.
7. Architecture is frozen at V1.0. Implementation must not silently change it.

## Repository map

```text
apps/                 Deployable applications; `apps/web` becomes the Next.js app
packages/             Shared UI, content, assessment-engine, database, and configuration packages
docs/                 Governing product, compliance, editorial, architecture, and delivery documents
docs/wellness-assessment/
                      Assessment V1.0 system specifications
supabase/             Future SQL migrations, local configuration, seed data, and RLS policies
```

Do not treat the current static starter as the product architecture. Implementation follows the V1.0 roadmap and uses the agreed Next.js/TypeScript/Supabase stack.

## Mandatory reading order

No implementation begins until these documents are understood in this order:

1. [Project Bible](01-project-bible.md)
2. [Compliance Manual](02-compliance-manual.md)
3. [Content Constitution](03-content-constitution.md)
4. [Information Architecture](04-information-architecture.md)
5. [Content and Data Model](05-content-data-model.md)
6. [UI Design System](06-ui-design-system.md)
7. [SEO Blueprint](07-seo-blueprint.md)
8. [Platform Charter](00-platform-charter.md)
9. [Development Bible](08-development-bible.md)
10. [Database Blueprint](10-database-blueprint.md)
11. Every document in [Wellness Assessment](wellness-assessment/), in numerical order (01–13)
12. [Architecture V1.0](ARCHITECTURE-V1.0.md)
13. [Implementation Roadmap](IMPLEMENTATION-ROADMAP.md)

## Implementation rules

- Documentation drives implementation. Implementation does not redefine architecture.
- If a technical constraint requires an architecture change: stop, document the proposed change and consequences, request approval, then proceed only after approval.
- Start with the Assessment Engine sprints. Do not extend website pages, SEO content, coach directory, CMS, or business paths ahead of their roadmap sprint.
- Keep all assessment logic data-driven. Do not hardcode question order, rule logic, scoring, recommendations, or report text inside UI components.
- Use versioned configuration and immutable report snapshots.

## Coding rules

- Use Next.js, TypeScript strict mode, Tailwind CSS, shadcn/ui, Supabase PostgreSQL/Auth/Storage, and Vercel as specified in the roadmap.
- Place pure wellness logic in the assessment-engine package; keep it independent of UI, network, database, time, and randomness.
- Validate input at every boundary; use strongly typed schemas and deny-by-default database access.
- Reuse shared components, tokens, schemas, and packages. Do not duplicate styles or business logic.
- Deliver accessible, responsive, server-first experiences with tests for every engine rule and critical flow.

## Compliance rules

- Never make medical, treatment, outcome, earnings, lifestyle, or unapproved product claims.
- V1 does not collect medical history, conditions, medication, pregnancy, diagnosis, or other sensitive health data.
- Do not gate a report or educational content behind contact details.
- Coach contact is optional, transparent, consented, purpose-limited, and revocable.
- Business interest is a separate future route; it cannot use wellness answers or influence wellness scores, reports, or contact.
- If policy, local law, approval, source, or consent wording is unclear, do not ship the affected capability.

## Working mode

Architecture V1.0 is frozen. The project is now in **implementation mode**. Create new planning/architecture documents only when explicitly requested or when an approved change-control process requires one.
