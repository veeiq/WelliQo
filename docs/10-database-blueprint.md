# Database Blueprint

## Design principles

PostgreSQL is the system of record. Use UUID primary keys, `created_at`/`updated_at`, explicit market/locale fields where relevant, immutable published versions, and row-level security. Separate public content from private identity and assessment data.

## Domains

| Domain                   | Tables                                                                                                                          | Key rule                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Editorial                | `content_items`, `content_versions`, `topics`, `sources`, `assets`, `content_reviews`                                           | Published content is versioned and reviewable        |
| Assessment configuration | `assessment_versions`, `question_sets`, `questions`, `answer_options`, `routing_rules`, `recommendation_blocks`, `engine_rules` | Rules are typed, versioned configuration             |
| Assessment sessions      | `assessment_sessions`, `assessment_answers`, `assessment_reports`, `report_recommendations`                                     | Pseudonymous by default; expiry/retention controlled |
| Consent and leads        | `consent_versions`, `consent_events`, `contact_requests`, `lead_routes`                                                         | Identity is separate; links require consent          |
| Directory                | `coach_profiles`, `coach_languages`, `coach_specialties`, `coach_availability`                                                  | No public profile without approval/status            |
| Governance               | `approval_records`, `audit_events`, `data_retention_policies`                                                                   | Compliance state is visible and auditable            |

## Essential relationships

`assessment_version → question_set → questions → answer_options`  
`assessment_session → assessment_answers → assessment_report → report_recommendations`  
`engine_rule → recommendation_block → content_item`  
`contact_request → consent_event → optional assessment_session link`

## Privacy controls

- Sessions use an opaque ID and expire according to published retention policy.
- Direct contact information lives in a restricted table, inaccessible to ordinary users and public clients.
- The report stores a snapshot of its rule-set/content versions for explanation and auditability.
- Sensitive health categories are absent from v1 schema; do not add “just in case” columns.
- RLS policies start deny-all, then grant narrowly by user/service role and purpose.

## Indexes and scale

Index content by `status`, `market`, `locale`, `slug`, and `published_at`; assessment by session/version/status; and directory by publication/location/language. Use full-text search materialized fields or a managed search layer only after the content corpus justifies it. Avoid premature denormalized copies; use read models for measured hot paths.
