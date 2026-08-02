# WelliQo Platform Charter

**Status:** Governing architecture baseline  
**Applies to:** product, design, data, engineering, editorial, growth, and operations  
**Precedence:** This document supersedes earlier implementation assumptions where they conflict.

## Mission

Build an independent, compliance-first Herbalife education and wellness knowledge platform that helps visitors learn, gives Associates a responsible education tool, generates consented qualified leads, and earns organic search visibility through original, genuinely useful content.

WelliQo is not an official Herbalife property, marketplace, medical service, or income-opportunity site.

## Product center of gravity

The adaptive **Wellness Assessment** is the platform's primary experience. Articles, recipes, FAQs, coaching pathways, and future directory profiles exist to help a person act on a relevant assessment result. Content must remain useful without completing an assessment.

## Immutable principles

1. **Compliance before growth.** Unclear policy means do not ship.
2. **Education before conversion.** A CTA is an invitation, not pressure.
3. **Rules, not live AI.** Personalized outputs are deterministic, explainable, versioned rules and approved content blocks.
4. **Privacy by design.** Minimize personal data; no sensitive health data in v1.
5. **Original topical authority.** Every indexable page serves a real search intent and has a distinct, reviewed answer.
6. **Composable systems.** Content, rules, UI, and data must be reusable independently.
7. **Operational clarity.** Every public entity has ownership, approval status, market, and review date.

## Strategic modules

| Module                | Role                                                                 | Release condition                                         |
| --------------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |
| Assessment and report | Adaptive educational discovery and next-step pathway                 | Safety, privacy, methodology, and compliance approval     |
| Knowledge library     | Guides, FAQs, glossary, recipes, approved product/business education | Editorial source and policy review                        |
| Recommendation engine | Deterministic scores, decision trees, approved blocks                | Tested rules, versioning, explainability                  |
| Associate toolkit     | Approved ways to share educational pathways                          | Distributor identity and market approval                  |
| Coach directory       | Optional discovery and consented contact route                       | Privacy, profile accuracy, and contact-consent review     |
| Lead operations       | Secure, consent-based request handling                               | Retention, access control, withdrawal and routing defined |

## Architecture decision record (ADR) rule

Any material decision—data category, third-party service, scoring method, public claim, indexing policy, component pattern, or framework change—requires an ADR containing context, decision, alternatives, consequences, owner, and review date. Architecture changes update documentation before code.

## Initial technology decision

Use a TypeScript monorepo: Next.js App Router for the public and authenticated web experience; Tailwind CSS and shadcn/ui primitives for accessible UI; Supabase PostgreSQL/Auth/Storage with row-level security; Vercel deployment; and a local TypeScript rules package for assessment decisions. No live generative-AI dependency is permitted in the product flow.

## Hard release gates

- Current market policy and distributor disclosure approved.
- Privacy notice, consent text, retention policy, and data-subject workflow approved.
- All health, product, testimonial, earnings, and opportunity claims reviewed.
- Assessment rules tested and each report can state its rule-set version.
- Accessibility, performance, security, and indexing checks pass.
