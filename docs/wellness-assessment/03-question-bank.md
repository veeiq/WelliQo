# Question Bank

## Inclusion rule

A question belongs only if it drives routing, scoring, safety, recommendation relevance, or an explicit visitor-selected contact preference. Each has an owner, rationale, market, version, review date, and risk level.

## Required schema

`id`, `title`, `subtitle`, `type`, `options`, `validation`, `conditions`, `next_question_rules`, `weight`, `help_text`, `category`, `report_mapping`, `purpose`, `market`, `version`, `review_status`.

## Core v1 bank

| ID                     | Category            | Question / answer style                                           | Purpose                                 |
| ---------------------- | ------------------- | ----------------------------------------------------------------- | --------------------------------------- |
| `goal.primary`         | Intent              | What would you like support with today? multi-select with primary | Select route and report framing         |
| `goal.detail`          | Intent              | What would feel meaningfully better in the next few weeks?        | Personalize priority language           |
| `eligibility.age_band` | Identity            | Are you 18 or older? / age band                                   | Adult gate; no exact DOB                |
| `rhythm.occupation`    | Lifestyle           | Daily pattern: seated, active, mixed, shifts, caregiving, other   | Time and movement route                 |
| `sleep.duration`       | Sleep               | Typical sleep range                                               | Sleep-habit signal                      |
| `sleep.quality`        | Sleep               | How rested do you usually feel?                                   | Sleep priority fit                      |
| `stress.frequency`     | Stress              | How often does stress affect your routine?                        | Barrier and support route               |
| `water.pattern`        | Hydration           | Which description fits your usual day?                            | Hydration-habit signal                  |
| `meals.regularity`     | Eating              | How predictable are your meals?                                   | Nutrition consistency signal            |
| `meal.breakfast`       | Eating              | What usually happens in the morning?                              | Breakfast route only if relevant        |
| `snacking.pattern`     | Eating              | When do snacks tend to happen?                                    | Habit/resource route                    |
| `activity.daily`       | Activity            | Typical daily movement                                            | Activity-habit signal                   |
| `activity.enjoyment`   | Activity            | What movement feels realistic or enjoyable?                       | Action recommendation fit               |
| `time.available`       | Capacity            | How much time feels realistic most days?                          | Recommendation size                     |
| `cooking.confidence`   | Lifestyle           | How comfortable are you preparing simple meals?                   | Recipe route                            |
| `budget.preference`    | Context             | Prefer low-cost / flexible / no preference                        | Filter resources, never product pricing |
| `attempts.previous`    | Motivation          | What has made routines difficult before?                          | Barrier rules                           |
| `support.level`        | Support             | How supported do you feel?                                        | Coach appropriateness signal            |
| `readiness.change`     | Motivation          | How ready do you feel to try one small change?                    | Readiness score                         |
| `confidence.change`    | Motivation          | How confident are you about one small change?                     | Recommendation size                     |
| `coaching.preference`  | Preference          | Would a general conversation be useful?                           | Optional report CTA only                |
| `body.height_weight`   | Optional context    | Optional height/weight, with units and “skip”                     | Non-diagnostic context; no health label |
| `body.waist`           | Optional context    | Excluded from v1 unless approved                                  | Reserved; not renderable                |
| `interest.business`    | Separate preference | Not asked in wellness assessment v1                               | Must be a separate, approved route      |

## Prohibited or gated questions

Do not ask medical history, diagnosis, medication, pregnancy, disability, eating-disorder history, exact age, exact location, or financial information in v1. Gender, body measures, and any demographic field are optional, have an explicit purpose, and must not alter safety or worthiness language.
