# Wellness Assessment and Intelligence Engine

## Purpose and limits

The assessment helps a visitor reflect on general wellness habits and discover relevant educational content or a voluntary consultation. It is not a diagnosis, medical history form, treatment plan, prescription, product selector, or guarantee of outcomes.

The v1 experience must not collect medical history, medication, pregnancy, disease, disability, or other sensitive health data. It presents a clear safety route to a qualified professional instead. These data categories require a later ADR and documented market-specific legal/compliance approval.

## Conversational design

The flow shows one clear question at a time, uses plain-language progress cues, allows back/skip where appropriate, explains why a data point is requested, and adapts only through approved question-routing rules. It must remain valuable in under five minutes.

### v1 question domains

| Domain          | Examples                                                               | Handling                            |
| --------------- | ---------------------------------------------------------------------- | ----------------------------------- |
| Intent and goal | energy, routine, meal planning, general wellness learning              | Required to route content           |
| Basic context   | adult age band, height/weight optional, occupation pattern             | Minimize and explain use            |
| Habits          | meal timing, activity pattern, sleep quality, water habit              | General self-report only            |
| Experience      | prior routine attempts, preferred learning format, coaching preference | Optional                            |
| Motivation      | challenge, confidence, readiness, support                              | Optional, non-judgmental            |
| Contact         | preferred route and consent                                            | Asked only after report, separately |

Age must be collected as an adult eligibility gate or coarse age band. Minors must not enter the assessment without a separately approved policy and flow.

## Engine model

```text
Validated answers
  → routing rules
  → dimension scores + confidence flags
  → priority selection
  → approved recommendation blocks
  → report composition (with engine/rule-set version)
```

Dimensions use neutral names: routine consistency, meal planning, hydration habit, movement habit, rest/recovery habit, and change readiness. Scores represent self-reported patterns, not health status. The engine never labels a person “healthy”, “unhealthy”, “at risk”, or medically suitable.

## Rule structure

Each rule has `id`, `version`, `when`, `scoreEffect`, `priorityEffect`, `recommendationBlockIds`, `reason`, `market`, `approvalStatus`, and `reviewDate`. Rules are data/configuration, not scattered conditional statements.

Example: if a visitor chooses irregular meal timing and low routine confidence, the engine may prioritize an approved “small routine experiments” block and related meal-planning guide. It must not recommend a product, calorie target, supplement, or treatment.

## Report composition

The report contains:

- a respectful summary of the visitor-selected goal;
- observed self-reported patterns and strengths;
- 1–3 educational priorities, expressed without medical claims;
- relevant reviewed guides, recipes, FAQs, and glossary terms;
- a realistic next action;
- optional, clearly disclosed consultation route;
- safety and limits statement; and
- report/rule-set version plus review date.

## Safety routing

The assessment includes a neutral early screen: “Do you have a health question that needs individual medical guidance?” An affirmative or uncertain answer pauses individualized scoring and directs the person to an appropriate professional. No diagnosis inference is stored.

## Measurement

Measure step completion, voluntary report saves, content usefulness, consented consultation requests, and rule coverage. Do not measure or optimize sensitive attributes, shame-based drop-off, or health outcomes. Changes require A/B-test and policy review procedures documented in an ADR.
