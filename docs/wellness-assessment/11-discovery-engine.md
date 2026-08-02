# Discovery Engine

**Status:** Design complete — implementation blocked pending approval  
**Role:** The decision-intelligence layer of the Wellness Assessment  
**Precedence:** This document refines the question bank, flow, scoring, rules, and report-generator documents. Where they conflict, this document governs.

## 1. The core shift: discover a person, not collect a profile

WelliQo does not begin by measuring a visitor. It begins by listening.

The Discovery Engine turns a short conversation into a practical understanding of: why this person arrived today, what “better” means to them, what is getting in their way, which strengths they already have, and which single small step is most likely to feel possible now.

The engine must not optimize for data volume, completion rate at any cost, body information, or lead capture. It optimizes for **useful understanding per question**. The minimum viable discovery is the smallest set of answers that can truthfully generate a respectful, actionable educational roadmap.

## 2. Discovery contract

Every active question must have all of the following before activation:

| Required property     | Meaning                                                                    |
| --------------------- | -------------------------------------------------------------------------- |
| Decision purpose      | The precise engine decision improved by this answer                        |
| Insight               | The human understanding revealed; not merely the stored field              |
| Downstream links      | Scores, routes, report blocks, resources, and contact eligibility affected |
| Personalization value | How the visitor sees a more relevant experience                            |
| Removal test          | The specific degradation if the question is removed                        |
| Risk and consent      | Data sensitivity, necessity, skip policy, retention and disclosure         |
| Owner and review      | Editorial, product, privacy and compliance responsibility                  |

An answer must trigger at least one permitted change: a route, a derived signal, a priority, a block, a resource filter, action size, safety state, report language, or explicit contact preference. A question with no active downstream decision is `draft` and cannot render.

## 3. Four-stage conversation

### Stage 1 — Discovery: “Why today?”

Goal: establish emotional relevance before any physical context. The visitor chooses their intention and describes the change that would matter. The engine identifies their desired outcome, hidden practical motivation, and the initial best route.

Opening sequence:

1. “What made you visit today?”
2. “What would you most like to improve?”
3. “If one thing felt better over the next 90 days, what would make you happiest?”

The third question must be a structured choice plus optional short text only if a privacy-approved free-text policy exists. It turns an abstract goal into a personal success definition without soliciting medical details.

### Stage 2 — Lifestyle: “What is daily life really like?”

Goal: understand rhythm, habits, obstacles, capacity, and existing strengths. Questions adapt to the Stage 1 goal; no one receives a generic lifestyle interrogation. The engine discovers patterns rather than assigning blame.

### Stage 3 — Health profile: “What context would help?”

Goal: offer optional, non-diagnostic physical context only after trust is established. V1 allows only adult eligibility and, if explicitly chosen, height/weight in broad, unit-validated form. It excludes medical history, medication, diagnoses, pregnancy, disease, exact age, and waist measurement. The report never translates this data into a health label, BMI diagnosis, or product recommendation.

### Stage 4 — Personalization: “What is a good next step for you?”

Goal: establish readiness, confidence, practical constraints, learning/communication preference, and optional coach interest. The engine generates the roadmap and offers voluntary support only after value is delivered.

## 4. Discovery dimensions and permitted use

| Dimension                    | What the engine learns                           | Permitted use                                | Not permitted                                |
| ---------------------------- | ------------------------------------------------ | -------------------------------------------- | -------------------------------------------- |
| Intent and 90-day meaning    | Why the person came; desired change              | report framing, route, resource cluster      | promise an outcome                           |
| Daily rhythm                 | work pattern, timing constraints                 | action size, meal/movement route             | judgement of occupation                      |
| Habits                       | self-reported consistency patterns               | supportive priorities                        | medical inference                            |
| Obstacles                    | what has interrupted past attempts               | barrier-aware blocks                         | blame or psychological diagnosis             |
| Readiness/confidence         | how much change feels possible                   | action size and coach eligibility            | coercive urgency                             |
| Support/time/budget          | practical feasibility                            | accessible content/recipe filtering          | financial profiling or sales targeting       |
| Learning style/communication | preferred way to learn or contact                | presentation and optional contact method     | hidden marketing segmentation                |
| Language                     | preferred language                               | locale/content selection                     | infer ethnicity or identity                  |
| Coach preference             | desire for a conversation                        | optional consented invitation                | contact without consent                      |
| Business curiosity           | explicit interest in separate business education | only an approved, separate post-report route | influence wellness scoring/report or recruit |
| Physical context             | optional self-reported context                   | non-diagnostic education context             | diagnose, label, prescribe, market products  |

“Personality” and “hidden motivation” are not collected as labels or psychometric scores. They emerge only as transparent, visitor-selected preferences: e.g., “I prefer a small first step,” “I learn by trying,” or “I want a simple plan.” The engine must never infer personality from answers.

## 5. Question value ledger

This ledger is the active-question source of truth. `Scores` refers to the supportive dimensions in `05-scoring-engine.md`; `Resources` means reviewed content tags, never generated claims. All question IDs are data-driven and versioned.

| ID / Stage                        | Question and answer model                                     | Purpose and insight                                                            | Scores / future route                           | Report and recommendation effect                        | Coach / business / SEO personalization                                                           | Removal test                                                                                               |
| --------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `goal.visit_reason` / 1           | “What made you visit today?” primary intent options           | Identifies the immediate reason for arrival and establishes a respectful route | selects goal branch; no score                   | opening summary, priority context, guide cluster        | coach: only relevance; business: none; SEO: goal-topic related resources                         | Without it, all routes are generic; remove no other question can choose the right conversation             |
| `goal.desired_change` / 1         | “What would you like to improve most?” single primary outcome | Distinguishes topic from desired lived benefit                                 | goal detail route; priority tie-breaker         | “what matters to you” language; next-step type          | coach: relevance only; business: none; SEO: outcome-tag resources                                | Without it, report repeats a broad topic and loses personal meaning                                        |
| `goal.ninety_day_meaning` / 1     | structured 90-day success choice; approved optional text      | Reveals personal motivation and success definition                             | motivational framing; selects tone/action theme | success framing and habit block                         | coach: helps conversation relevance after consent; business: none; SEO: supporting content theme | Without it, motivation is inferred rather than expressed                                                   |
| `eligibility.adult` / 1           | adult confirmation                                            | Protects minors and selects legal route                                        | safety/exit route                               | eligibility or exit message                             | no coach/business/SEO personalization                                                            | Without it, the system cannot enforce adult-only v1 policy                                                 |
| `rhythm.occupation_pattern` / 2   | seated, active, mixed, shift, caregiving, other               | Discovers schedule constraints without job identity                            | movement and meal-timing route                  | practical context observation; time-fit action          | coach: context; business: none; SEO: routine-format resources                                    | Without it, recommendations assume a standard day                                                          |
| `sleep.duration_band` / 2         | typical sleep range                                           | Identifies a self-reported rest pattern                                        | rest score                                      | rest priority/block if coverage supports it             | coach: relevance; business: none; SEO: rest resources                                            | Without it, rest recommendations lack a direct signal                                                      |
| `sleep.rested_feeling` / 2        | “How rested do you usually feel?”                             | Adds lived experience; prevents duration-only assumption                       | rest score; route if low                        | strength/opportunity observation                        | coach: relevance; business: none; SEO: rest resources                                            | Without it, duration is overinterpreted                                                                    |
| `stress.routine_impact` / 2       | effect of stress on routine                                   | Identifies an obstacle, not a mental-health condition                          | stress-support signal; smaller-action route     | compassionate-start block, workload-sensitive priority  | coach: may contribute to optional eligibility; business: none; SEO: routine/support resources    | Without it, engine may prescribe too much for current capacity                                             |
| `water.usual_pattern` / 2         | self-described hydration routine                              | Finds a simple habit opportunity                                               | hydration score                                 | hydration block/resource if a top priority              | coach: no; business: none; SEO: hydration content                                                | Without it, hydration cannot be an evidence-based priority                                                 |
| `meals.predictability` / 2        | predictable to irregular                                      | Reveals routine consistency, not diet quality                                  | nutrition routine + consistency                 | meal-planning priority and guides                       | coach: relevance; business: none; SEO: planning resources                                        | Without it, meal recommendations are not personalized                                                      |
| `breakfast.usual_pattern` / 2     | only after meal/energy goal indicates relevance               | Understands morning friction                                                   | nutrition route/score input                     | breakfast resource or recipe filter                     | coach: no; business: none; SEO: breakfast resources                                              | Without it, retain a broader meal route; ask only where specific value exceeds friction                    |
| `snacking.context` / 2            | timing/context options, not calories                          | Identifies likely routine trigger                                              | nutrition route; barrier signal                 | relevant planning/habit block                           | coach: relevance; business: none; SEO: context-specific guide                                    | Without it, snack content is generic; omit outside nutrition branch                                        |
| `movement.daily_pattern` / 2      | typical daily movement                                        | Understands baseline routine context                                           | movement score                                  | movement priority/resource                              | coach: relevance; business: none; SEO: movement-format resources                                 | Without it, movement support lacks context                                                                 |
| `movement.preference` / 2         | realistic/enjoyable forms                                     | Discovers what feels possible rather than ideal                                | recommendation fit                              | personalized action/resource                            | coach: context; business: none; SEO: preferred-format resources                                  | Without it, actions are less likely to fit real life                                                       |
| `time.realistic_amount` / 2       | available time band                                           | Identifies change capacity                                                     | readiness score; action-size rule               | micro/standard/flexible action block                    | coach: relevance; business: none; SEO: time-filtered guides                                      | Without it, the engine cannot calibrate next steps                                                         |
| `cooking.confidence` / 2          | comfort with simple preparation                               | Discovers recipe accessibility need                                            | nutrition route                                 | recipe complexity filter                                | coach: no; business: none; SEO: recipe difficulty filter                                         | Without it, recipe selection may be impractical                                                            |
| `budget.resource_preference` / 2  | low-cost, flexible, no preference                             | Removes financial friction from general education                              | resource filter only                            | cost-conscious general recipe/guide selection           | coach: no; business: none; SEO: resource format—not ad targeting                                 | Without it, recommendations may be inaccessible; never use for sales segmentation                          |
| `attempts.previous_barrier` / 2   | what made previous routines difficult                         | Discovers failure pattern without shame                                        | barrier rules; readiness calibration            | obstacle-aware block; avoids repeating unhelpful tactic | coach: may add relevance; business: none; SEO: barrier-specific resources                        | Without it, report can repeat the same unrealistic advice                                                  |
| `support.available` / 2           | perceived support level                                       | Identifies social feasibility                                                  | stress-support / readiness signal               | solo-friendly or shared-plan block                      | coach: may contribute to optional eligibility; business: none; SEO: support-related content      | Without it, social assumptions weaken action fit                                                           |
| `readiness.small_change` / 4      | readiness for one small change                                | Measures willingness now, not commitment value                                 | readiness score                                 | action size, invitation timing                          | coach: signal only; business: none; SEO: starter vs deeper content                               | Without it, the engine cannot distinguish learning from action readiness                                   |
| `confidence.small_change` / 4     | confidence in one small change                                | Identifies need for a simpler next step                                        | readiness score                                 | strength-building / micro-action block                  | coach: may contribute to optional eligibility; business: none; SEO: confidence-fit resources     | Without it, advice may exceed confidence                                                                   |
| `learning.preferred_style` / 4    | read, checklist, recipe, short action, conversation           | Finds preferred education format                                               | resource presentation filter                    | format/order of learning resources                      | coach: only if “conversation” chosen; business: none; SEO: related resource format               | Without it, learning is less usable; must change presentation, not data collection alone                   |
| `language.preference` / 4         | offered locales only                                          | Ensures understandable experience                                              | locale route                                    | copy/content locale                                     | coach: language match if requested; business: none; SEO: locale resources                        | Without it, platform may present unusable content                                                          |
| `coaching.preference` / 4         | “Would a general conversation be useful?”                     | Explicitly discovers support preference                                        | optional contact eligibility                    | optional, disclosed invitation after report             | coach: direct opt-in; business: none; SEO: no                                                    | Without it, no coach CTA may appear; prevents covert lead capture                                          |
| `communication.preference` / 4    | only after coaching yes: email/phone/WhatsApp etc.            | Lets visitor choose a contact channel                                          | contact route only                              | contact form configuration                              | coach: direct; business: none; SEO: no                                                           | Without it, contact can still be offered but cannot be personalized or sent                                |
| `body.height_weight_optional` / 3 | optional context, with clear skip and purpose                 | Allows visitor-selected non-diagnostic context                                 | no public overall score; context flag only      | only a neutral context acknowledgement, if approved     | coach: no automatic effect; business: none; SEO: no                                              | Remove from v1 without degrading core discovery; therefore it stays optional and may be disabled by market |

## 6. Questions deliberately excluded from active v1

| Candidate                                                                              | Decision                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exact age, gender, exact location                                                      | Do not ask unless a named market/legal or localization decision cannot be served otherwise. Current core route works without them.                                                                                      |
| Waist, BMI, body-composition indicator, weight history                                 | Do not ask in v1. They do not improve the non-diagnostic core roadmap enough to justify sensitivity and judgement risk.                                                                                                 |
| Medical history, condition, medication, pregnancy, disability, eating-disorder history | Prohibited in v1. Safety route replaces collection.                                                                                                                                                                     |
| Family support details                                                                 | Use broad perceived support only; do not profile family.                                                                                                                                                                |
| Personality type / hidden-motivation inference                                         | Prohibited. Use visitor-selected motivation and preferred action style instead.                                                                                                                                         |
| Product experience or Herbalife awareness                                              | Excluded from discovery. Product education, if approved, is a separate module.                                                                                                                                          |
| Business curiosity                                                                     | Excluded from active wellness flow. It may exist later as an explicit, separate post-report preference after compliance approval; it must not influence any wellness score, report, coach ranking, or contact pressure. |

## 7. Discovery-to-report intelligence

The report should demonstrate listening through traceable, bounded connections:

```text
visitor goal + success definition
  + strongest existing habit
  + highest-impact practical barrier
  + readiness/confidence/time
  → one small action + 1–3 relevant learning blocks
```

Example: a visitor chooses “more predictable meals,” describes a busy shift pattern, reports irregular meals, low cooking confidence, and only 10 minutes available. The engine selects a nonjudgmental meal-rhythm observation, a low-effort preparation action, beginner recipe resources, and a short checklist—not a generic nutrition score lecture. This is explainable by the answer IDs and triggered rule IDs saved in the report snapshot.

## 8. Coach and business boundaries

Coach recommendation is **not** a sales outcome. It appears only after the report when all conditions are true: no safety route; the visitor has explicitly chosen coaching; the market/coach directory is approved; a relevant published profile is available; and clear identity, contact purpose, and consent are shown. Low score alone can never trigger contact.

Business opportunity material is fully outside the Wellness Assessment. The assessment must not ask business-curiosity questions, rank visitors for business outreach, or use wellness answers for recruitment. Any future approved business-learning pathway requires a separate consent, document set, data boundary, and compliance review.

## 9. Measurement and continuous deletion

For each active question, measure completion, skip rate, answer distribution, route effect, score coverage effect, report-block selection effect, and perceived usefulness—without using answers for ad targeting. Quarterly, run the removal test: simulate deleting the question across representative synthetic sessions. If it does not materially change routing, safety, priority, resource fit, or report quality, retire it in the next version.

Success is not “more data collected.” Success is a visitor reporting that the next step felt relevant, respectful, and achievable.

## 10. Acceptance criteria before implementation

- Every active question appears in the value ledger and passes the removal test.
- Each route has a traceable purpose and reaches a report or safety exit.
- Every score and rule input is documented and testable.
- Every report block has eligibility, exclusions, approved copy, and a reason key.
- Medical/sensitive questions and business-recruitment logic are unreachable.
- Coach invitation is optional, consented, disclosed, and independent from report access.
- The complete configuration can be versioned, simulated, audited, localized, and retired without rewriting UI code.
