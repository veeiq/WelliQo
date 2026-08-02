# Assessment Architecture

## Design

The engine is a deterministic pipeline. All questions, routes, scores, rules, content mappings, and report blocks are versioned configuration. The UI renders configuration; it does not decide wellness logic.

```text
Question configuration → answer validation → route resolver
→ scoring calculator → rule evaluator → recommendation selector
→ report composer → immutable report snapshot
```

## Modules

| Module                   | Responsibility                                         | Must not do                 |
| ------------------------ | ------------------------------------------------------ | --------------------------- |
| Question registry        | Question schema, copy, options, conditions, validation | Calculate reports           |
| Route resolver           | Select next eligible question                          | Contain UI components       |
| Scoring calculator       | Derive transparent dimension signals                   | Query content or leads      |
| Rule evaluator           | Turn answer/score facts into priority signals          | Write presentation text     |
| Recommendation selector  | Select approved content/habit blocks                   | Make medical/product claims |
| Report composer          | Assemble a versioned report snapshot                   | Recalculate rules in UI     |
| Consent/identity gateway | Keep identity and report separate                      | Gate report access          |

## Versioning and explainability

Every session pins an `assessment_version`. Every report stores: question-set version, rule-set version, answer snapshot, derived score snapshot, triggered rule IDs, selected block IDs, content versions, generated timestamp, and review status. Re-running a historical session must reproduce its original result.

## Configuration lifecycle

`draft → validated → compliance-reviewed → scheduled → active → retired`

Only one active assessment version exists per market/locale at a time. A new version is additive; never mutate live logic. Configuration validation blocks orphaned routes, impossible conditions, unsafe content blocks, duplicate question IDs, and references to unpublished content.

## Runtime boundaries

The core engine is a pure TypeScript package with typed input/output and no network, database, time, random, or UI dependency. Persistence, authentication, content lookup, analytics, and rendering are adapters around it. This enables exhaustive tests and offline report generation.

## Safety architecture

The v1 schema excludes medical history, medication, pregnancy, diagnoses, and disease questions. A safety route directs a visitor to appropriate professional care if they seek individual medical guidance. The engine never infers or stores medical conditions.
