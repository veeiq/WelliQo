# Assessment Data Model

## Entity map

```text
assessment_versions → question_sets → questions → options
assessment_versions → scoring_definitions + engine_rules + recommendation_blocks
assessment_sessions → answers → reports → report_blocks/report_resources
consent_events → optional contact_request → optional session reference
```

## Configuration entities

| Entity                  | Important fields                                             |
| ----------------------- | ------------------------------------------------------------ |
| `assessment_versions`   | id, market, locale, status, active_from, review_date         |
| `questions`             | id, version, schema JSON, purpose, risk_level, review status |
| `routing_rules`         | condition AST, target ID, priority, version                  |
| `scoring_definitions`   | dimension, option mappings, weights, coverage threshold      |
| `engine_rules`          | condition AST, typed effects, reason key, approval state     |
| `recommendation_blocks` | copy keys, eligibility, tags, market, review state           |

## Session and output entities

| Entity                | Important fields                                | Privacy treatment       |
| --------------------- | ----------------------------------------------- | ----------------------- |
| `assessment_sessions` | opaque ID, version, status, expires_at          | pseudonymous            |
| `assessment_answers`  | question ID, selected value, skipped flag       | minimum retention       |
| `assessment_reports`  | version snapshots, score facts, expiry          | pseudonymous by default |
| `report_blocks`       | report ID, block ID/version, order, reason IDs  | immutable snapshot      |
| `consent_events`      | consent version, purpose, timestamp, withdrawal | append-only evidence    |
| `contact_requests`    | contact route/value, explicit purpose, status   | restricted and separate |

## Data rules

- No sensitive health, diagnosis, medication, pregnancy, or medical-history columns in v1.
- An answer is `unknown` or `skipped`, never silently converted to zero.
- Identity is never required for a report and is never linked without an explicit share choice.
- Apply row-level security deny-by-default; public clients may only use narrowly scoped session operations.
- Retention periods are configuration with legal/compliance approval, not a hidden code constant.

## Auditability

Record configuration publication, assessment processing, consent capture/withdrawal, privileged data access, and deletion/export actions. Never log raw free-text or contact data in application telemetry.
