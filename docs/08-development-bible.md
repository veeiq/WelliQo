# Development Bible

## Monorepo shape

```text
apps/
  web/                  Next.js public site, assessment, authenticated tools
packages/
  ui/                   Design tokens and accessible shared components
  content/              Content schemas, MDX/CMS adapters, validation
  assessment-engine/    Pure deterministic scoring and recommendation rules
  database/             Generated database types, migrations, repositories
  config/               Shared TypeScript, lint, test configuration
docs/                   Governing platform documentation and ADRs
supabase/               SQL migrations, seed data, local configuration
```

## Boundaries

- `web` renders and coordinates; it does not contain business-scoring rules.
- `assessment-engine` is pure TypeScript: typed input → typed result. It has no database, network, UI, date, or random dependency.
- `content` owns schemas and validation for editorial content.
- Database access flows through typed repositories/server actions; browser clients never receive privileged keys.
- UI components are presentational and accessible; they do not query business data directly.

## Engineering standards

- TypeScript strict mode; no untyped `any` in product code.
- Validate every boundary: form input, CMS input, server actions, environment variables, database writes.
- Use semantic HTML, keyboard interactions, visible focus, and WCAG AA color contrast.
- Prefer server rendering and static generation; add client JavaScript only for interaction.
- Add unit tests for rules, integration tests for persistence and access controls, and end-to-end tests for critical assessment/contact flows.
- Record analytics as product events with a declared purpose; never use hidden tracking or sensitive answers for advertising.

## Security and privacy

- Keep secrets in Vercel/Supabase environment configuration, never source code.
- Apply Supabase row-level security to every exposed table; deny by default.
- Store only the minimum assessment session data required for the visitor-selected result and stated purpose.
- Separate contact identity from assessment answers. Link them only after explicit, versioned consent.
- Encrypt in transit, maintain audit events for privileged access, and define deletion/export workflows before launch.

## Delivery sequence

1. Documentation, brand identity, design tokens, lint/test/CI baseline.
2. Public shell, legal/disclosure templates, content schemas, and content hubs.
3. Assessment question schema, client flow, pure engine, report blocks, and rule tests.
4. Consent-based lead capture and secure Supabase persistence.
5. Associate and coach-directory modules after their separate compliance/privacy gates.

## Definition of done

Code is complete only when documentation and ADRs are current, tests pass, empty/loading/error states exist, accessibility is checked, analytics purpose is documented, and policy approvals are recorded where required.
