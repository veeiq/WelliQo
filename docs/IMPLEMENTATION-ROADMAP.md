# Implementation Roadmap

**Architecture status:** V1.0 frozen  
**Operating rule:** Finish and verify each sprint before beginning the next. Do not use a sprint to redesign architecture.

## Sprint 1 — Foundation

**Objective:** Establish the production engineering base without building product features.

- Initialize the TypeScript monorepo and Next.js App Router web application.
- Configure strict TypeScript, linting, formatting, test tooling, environment validation, and CI.
- Add Tailwind CSS, shadcn/ui primitives, shared design tokens, accessible base components, and package boundaries.
- Configure Supabase project/local tooling, PostgreSQL migration discipline, generated types, and deny-by-default row-level security baseline.
- Establish the agreed folder structure: `apps/web`, `packages/ui`, `packages/content`, `packages/assessment-engine`, `packages/database`, `packages/config`, `supabase`.
- Replace the temporary static starter only when the Next.js shell is ready.

**Exit criteria:** clean build/lint/test commands; documented environment setup; shared component demo; no business logic in UI; no public lead/data feature.

## Sprint 2 — Dynamic Assessment Engine

**Objective:** Render the approved assessment configuration as a private, adaptive, recoverable conversation.

- Implement typed question configuration, validation, eligibility conditions, and data-driven conditional branching.
- Implement phase progress, back/skip behavior, safety route, autosave, session expiry, and session recovery.
- Keep all sessions pseudonymous and separate from contact identity.
- Implement test fixtures for every route, loop check, unavailable question, missing answer, and safety exit.

**Exit criteria:** every documented route reaches a report threshold or safety exit; no question order is hardcoded; assessment works without contact capture.

## Sprint 3 — Insight, Score, Rule, and Recommendation Engines

**Objective:** Turn validated answers into deterministic, explainable, tested decisions.

- Build the pure assessment-engine package: atomic observations, insight creation/confidence, scoring dimensions, rule evaluation, recommendation selection.
- Implement configuration versioning, conflict handling, coverage rules, blocked/safety behavior, and simulation fixtures.
- Add unit/property/regression tests and audit-friendly decision traces.
- Keep engines free of UI, persistence, network, time, and random dependencies.

**Exit criteria:** deterministic replay for representative sessions; every visible decision traces to versioned evidence/rules; no unsupported medical/product/business output.

## Sprint 4 — Report Generator

**Objective:** Deliver a supportive, modular, explainable educational roadmap.

- Implement approved reusable report blocks, strength-first ordering, priorities, small-next-step selection, resources, limits, and optional support eligibility.
- Persist immutable report snapshots with rule/content/disclosure versions.
- Build a private report view, low-data state, safety state, expired state, optional save/delete controls, and print-ready semantic structure.
- Create a lightweight personalized return dashboard only for explicit saved-session/account flows.

**Exit criteria:** report is available without lead capture; each block has eligibility/exclusion/reason trace; print and accessibility checks pass.

## Sprint 5 — Knowledge Platform

**Objective:** Add the reviewed content supply that recommendations can safely select.

- Implement structured content models for articles, recipes, guides, FAQs, glossary, topics, sources, assets, reviews, and resource tags.
- Build indexable guide/recipe/FAQ templates, search, internal linking, related-resource logic, and review metadata.
- Connect recommendation tags to only published, approved, market-compatible content.

**Exit criteria:** resource selection has safe fallbacks; no stale/unapproved content can be recommended; content meets editorial, source, accessibility, and SEO checks.

## Sprint 6 — Public Website and Coach Directory

**Objective:** Build the public learning experience around the working assessment and knowledge platform.

- Build homepage, navigation, assessment invitation, content hubs, technical SEO, and approved landing pathways.
- Implement coach directory/profile discovery only with approved disclosures, location/language filters, and profile governance.
- Implement optional coach consideration and consented request flow from the Experience Engine.

**Exit criteria:** public routes are accessible and performant; coach contact is post-value, optional, disclosed, and consented; no business path is mixed into wellness.

## Sprint 7 — Content Operations / CMS

**Objective:** Give authorized teams governed operational control without architecture drift.

- Implement content management, source/assets/media workflow, coach-profile management, SEO metadata management, and compliance-review lifecycle.
- Add configuration authoring/simulation for assessment versions, blocks, and rules with approval gates.
- Add audit records, publish scheduling, rollback, review expiry, and restricted operational roles.

**Exit criteria:** no approved production content/rule requires direct database editing; all governance states are auditable; access is least-privilege.

## Sprint 8 — Optimization and Release

**Objective:** Prove production readiness.

- Performance: server-first rendering, image/script budgets, Core Web Vitals measurement.
- Accessibility: automated and manual keyboard/screen-reader checks, contrast, reduced motion, content clarity.
- Security/privacy: RLS verification, secret management, consent/withdrawal/deletion/export workflows, threat review.
- Testing: full unit, integration, end-to-end, route, accessibility, and regression coverage.
- Deployment: Vercel environments, migration process, monitoring, error handling, rollback, incident runbook.

**Exit criteria:** documented release sign-off from engineering, accessibility, privacy, compliance, and content owners; no unresolved critical issues.

## Cross-sprint non-negotiables

- Update tests and documentation alongside approved implementation changes.
- Never silently modify the frozen architecture; follow change control in `ARCHITECTURE-V1.0.md`.
- Prefer reuse over rewrites; shared packages own shared logic/components/styles.
- Do not begin a later sprint merely because a visible page can be made attractive sooner.
- Compliance approval, source validity, privacy, and consent are release gates—not post-launch tasks.
