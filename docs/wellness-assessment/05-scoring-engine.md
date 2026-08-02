# Scoring Engine

## Philosophy

Scores summarize self-reported habits for prioritization; they are not diagnoses, body ratings, medical risk scores, or a measure of personal value. They are shown only with a plain-language explanation and never as a single “wellness grade.”

## Dimensions

| Score             | Inputs                                                         | Calculation                                  | Report use                            |
| ----------------- | -------------------------------------------------------------- | -------------------------------------------- | ------------------------------------- |
| Nutrition routine | meal regularity, breakfast path, snacking pattern, cooking fit | weighted answered-item average, 0–100        | meal-planning priority                |
| Hydration habit   | self-described water pattern                                   | mapped option band, 0–100                    | hydration reminder/resource           |
| Rest habit        | sleep duration band and rested feeling                         | weighted average, 0–100                      | sleep-routine education               |
| Movement habit    | daily movement, activity fit, time                             | weighted average, 0–100                      | realistic movement action             |
| Stress support    | stress impact, time, support                                   | barrier signal, not health measure           | support and workload-sensitive action |
| Consistency       | meal, rest, movement predictability                            | cross-domain average with coverage threshold | emphasize small repeatable routines   |
| Readiness         | stated readiness, confidence, time, prior barriers             | weighted average, 0–100                      | action size and CTA timing            |

## Calculation rules

- Options map to published, versioned values (`0–100`) with `unknown` distinct from `0`.
- A dimension returns `unavailable` unless its minimum coverage is met; it never fills blanks with negative assumptions.
- Weight is a configuration value, normalized over answered valid inputs.
- The output includes `value`, `band`, `coverage`, `input_ids`, and `explanation_key`.
- Bands are **supportive**: `established`, `developing`, `opportunity`. Never “bad,” “poor,” or “unhealthy.”

## Overall summary

There is no public overall wellness score in v1. A private internal prioritization index may rank domains by opportunity, readiness, visitor goal, and confidence, but the report presents only the top 1–3 supportive priorities. Body measures are never folded into the wellness score.

## Test cases

Unit tests cover each option map, missing input, boundary, weight change, route-specific minimum coverage, and deterministic replay. Property tests ensure every score stays in range and that an omitted answer cannot lower a score.
