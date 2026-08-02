# Insight Engine

**Status:** Design complete — implementation blocked pending approval  
**Position:** Question Engine → **Insight Engine** → Scoring Engine → Rule Engine → Recommendation Selector → Report Generator

## 1. Purpose

Answers are facts. Insights are meaningful, cautious interpretations of _patterns across answers_. The Insight Engine is how WelliQo moves from “the visitor selected option B” to “this person may benefit from a smaller, more flexible routine because their schedule, available time, and confidence point in the same direction.”

The engine must make the report feel understood without pretending to know more than the person shared. It is not a diagnostic, psychological, medical, or personality-profiling system.

## 2. The insight contract

An insight is a typed, explainable record:

`id`, `version`, `domain`, `evidence`, `confidence`, `polarity`, `interpretation_key`, `score_effects`, `rule_facts`, `report_eligibility`, `expiry`, `market`, `approval_status`.

| Field                | Requirement                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| `evidence`           | Named answer IDs and/or prior derived insights; never opaque inference    |
| `confidence`         | Coverage/consistency of evidence, not confidence in a health claim        |
| `polarity`           | `strength`, `opportunity`, `constraint`, or `preference`; never “failure” |
| `interpretation_key` | Approved, localizable plain-language meaning—not free-generated prose     |
| `score_effects`      | Typed contribution to a named habit dimension; optional                   |
| `rule_facts`         | Safe facts exposed to the Rule Engine                                     |
| `report_eligibility` | Conditions under which a visitor may see it                               |
| `expiry`             | Prevents stale assumptions across return sessions or version changes      |

An insight may be created only when it improves a downstream decision. It must be discarded if evidence is missing, contradictory, unsafe, or no longer relevant to the visitor's chosen goal.

## 3. Processing model

```text
Validated answers
  → atomic observations
  → cross-answer pattern detection
  → insight confidence and conflict checks
  → score contributions and rule facts
  → approved report-language eligibility
```

### Atomic observations

Atomic observations preserve what was directly stated: `meals_are_irregular`, `time_available_is_low`, `prefers_checklists`, `reports_shift_pattern`. They are not shown as conclusions and should never be worded as diagnoses.

### Pattern insights

Pattern insights combine two or more relevant observations, or one explicitly high-signal answer plus a corroborating route. They identify practical relationships, for example: irregular meals + shift pattern + limited time → `routine_needs_flexibility`.

### Confidence and conflicts

Confidence uses evidence coverage and agreement only:

- **High:** multiple route-relevant answers agree.
- **Moderate:** one direct answer plus supporting context.
- **Low:** weak, incomplete, or contradictory evidence; do not surface as a personal observation.

If facts conflict, preserve the visitor’s direct preference, reduce confidence, and choose a neutral fallback. The engine never interrogates the person to resolve a conflict unless the answer materially affects safety or the requested route.

## 4. Insight domains

| Domain              | Example insight                       | Evidence pattern                               | What it changes                                   |
| ------------------- | ------------------------------------- | ---------------------------------------------- | ------------------------------------------------- |
| Motivation          | `seeks_practical_routine_change`      | primary goal + 90-day meaning                  | report framing, resource cluster                  |
| Existing strength   | `has_a_reliable_anchor_habit`         | one habit described as predictable/positive    | strength block; build-next-step around it         |
| Daily rhythm        | `routine_needs_flexibility`           | shift/caregiving pattern + irregular timing    | flexible planning blocks/resources                |
| Capacity            | `change_capacity_is_limited_now`      | low time + stress impact or low confidence     | smaller action size; avoid overload               |
| Nutrition routine   | `meal_planning_is_key_opportunity`    | irregular meals + goal/breakfast/snack context | nutrition/consistency contributions               |
| Rest habit          | `rest_routine_may_need_attention`     | short sleep band + low rested feeling          | rest contribution and education                   |
| Movement fit        | `movement_needs_personal_fit`         | low daily movement + stated enjoyable option   | preference-fit activity resource                  |
| Barrier             | `previous_plans_were_hard_to_sustain` | previous barrier + current constraint          | “start smaller” block, anti-repeat rule           |
| Support             | `benefits_from_low-pressure_support`  | low support + coaching preference/readiness    | optional coach eligibility, not automatic contact |
| Learning preference | `learns_best_by_action`               | selected checklist/recipe/short-action format  | ordering/presentation of resources                |
| Safety              | `needs_professional_guidance_route`   | visitor requests individual medical guidance   | bypass individualized output                      |

## 5. Required insight patterns

### Pattern A — Smallest viable change

**Evidence:** stated goal + time available + readiness + confidence + one relevant barrier.  
**Insight:** `smallest_viable_change`.  
**Purpose:** select an action that fits the visitor’s current capacity.  
**Permitted output:** a one-step experiment such as preparation, reminder, or scheduling action.  
**Not permitted:** calorie target, exercise prescription, supplement/product recommendation, promise of result.

### Pattern B — Strength-led plan

**Evidence:** a consistent habit or positive self-report in a goal-relevant domain.  
**Insight:** `reusable_strength`.  
**Purpose:** begin the report with a truthful strength and connect a new action to an existing routine.  
**Example:** predictable morning timing can be used as an anchor for a simple preparation habit.

### Pattern C — Constraint-aware plan

**Evidence:** daily rhythm + time + stress impact and/or prior barrier.  
**Insight:** `plan_must_reduce_friction`.  
**Purpose:** filter out aspirational-but-impractical resources and prevent an overlarge plan.

### Pattern D — Readiness fit

**Evidence:** readiness + confidence + preferred learning style.  
**Insight:** `start_with_learning` / `start_with_micro_action` / `ready_for_structured_plan`.  
**Purpose:** choose report sequencing and the number/size of suggested actions.  
**Boundary:** none of these imply motivation quality or predict adherence.

### Pattern E — Support fit

**Evidence:** support level + coaching preference + confidence + safety state.  
**Insight:** `optional_human_support_may_help`.  
**Purpose:** make an optional coach invitation eligible after value delivery.  
**Boundary:** a low score, low confidence, or low support alone can never create a lead or contact action.

## 6. Insight-to-score mapping

Scores remain numeric summaries of self-reported _habits_. Insights make their interpretation and prioritization human-centered.

| Insight                             | Score effect                                              | Rule fact                          | Report effect                                |
| ----------------------------------- | --------------------------------------------------------- | ---------------------------------- | -------------------------------------------- |
| `routine_needs_flexibility`         | no direct penalty; modifies consistency interpretation    | `requires_flexible_plan=true`      | avoids “be more consistent” phrasing         |
| `meal_planning_is_key_opportunity`  | contributes to nutrition/consistency when coverage exists | `meal_priority=high`               | selects meal-planning block/resources        |
| `rest_routine_may_need_attention`   | contributes to rest habit                                 | `rest_priority=high`               | selects rest education, not a health warning |
| `change_capacity_is_limited_now`    | may lower readiness only from stated readiness/confidence | `action_size=micro`                | one low-friction next step                   |
| `reusable_strength`                 | no numeric inflation                                      | `strength_anchor=id`               | starts report with real strength             |
| `learns_best_by_action`             | no score change                                           | `resource_format=checklist/recipe` | rearranges selected resources                |
| `needs_professional_guidance_route` | suppresses all tailored scores                            | `safety_route=true`                | safety report only                           |

No insight may lower a score merely because the visitor skipped a question. No insight may use body measurements to create an overall wellness score.

## 7. Coach-like language without false authority

The Report Generator can express an approved insight only through traceable, conditional language.

| Do                                                                        | Do not                                         |
| ------------------------------------------------------------------------- | ---------------------------------------------- |
| “Your answers suggest that a flexible plan may fit your schedule better.” | “Your schedule is the reason you are failing.” |
| “You already have a useful foundation in…”                                | “You are healthy because…”                     |
| “A small first step may feel more realistic right now.”                   | “You lack discipline.”                         |
| “Based on what you chose to share…”                                       | “We understand exactly what your body needs.”  |
| “You may find this guide useful…”                                         | “You need this intervention.”                  |

Every rendered observation must link internally to an insight ID and evidence list for audit tools, but the visitor sees a concise, humane explanation—not raw scores or technical logic.

## 8. Anti-patterns and safeguards

- Do not infer hidden motives, personality traits, medical conditions, emotions, socioeconomic status, or business interest.
- Do not use insights to drive ads, ranking, pricing, recruitment, or unsolicited outreach.
- Do not combine unrelated low-signal answers merely to create an appearance of personalization.
- Do not display a low-confidence insight, even if it would make the report longer.
- Do not make an insight permanent. Recalculate it on a new session; preserve prior snapshots only for visitor/audit history.
- Do not permit free-text model generation in the engine. Report language is approved blocks and templates only.

## 9. Evaluation and quality assurance

Each insight needs synthetic fixtures showing: expected evidence, created/not-created cases, confidence boundaries, score effects, selected rules, report phrasing, and safety behavior. Reviewers evaluate whether the observation is useful, fair, nonjudgmental, and warranted by the stated evidence.

Track aggregate insight usefulness through voluntary report feedback and resource engagement. Do not treat click-through as proof of wellness impact. Retire an insight if it does not improve recommendation relevance, action fit, safety, or visitor-reported understanding.

## 10. Acceptance criteria

- Every visible report observation is backed by a named, versioned insight and named evidence.
- Insights are created before scores/rules and are reusable across both.
- Missing or conflicting answers cannot create a negative or speculative insight.
- Insight language remains supportive, conditional, and non-medical.
- Coach eligibility requires explicit preference and consent; business logic is unreachable.
- The engine can explain why a recommendation appeared without exposing a visitor’s private data.
- All insight configurations are testable, localizable, market-scoped, reviewable, and retireable without changing UI code.
