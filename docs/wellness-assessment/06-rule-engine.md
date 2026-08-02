# Rule Engine

## Purpose

Rules convert answers and derived habit signals into transparent priorities, safety routes, recommendation eligibility, and report blocks. They are declarative records, not scattered UI conditionals.

## Rule record

`id`, `version`, `market`, `when`, `facts_required`, `effects`, `priority`, `reason_key`, `block_ids`, `content_tags`, `approval_status`, `review_date`, `owner`.

`when` is a restricted expression language over validated answers and calculated facts. It cannot execute arbitrary code, call network services, or create text. Effects are typed: `add_signal`, `increase_priority`, `select_block`, `exclude_block`, `route_safety`, `mark_coach_eligible`.

## Evaluation order

1. Validate answers and derive score facts.
2. Evaluate safety rules first; safety may stop tailored output.
3. Evaluate exclusion/eligibility rules.
4. Evaluate priority rules.
5. Select the highest-value compatible blocks and resources.
6. Resolve conflicts by safety > market approval > exclusion > explicit visitor preference > priority > default.

## Example rule patterns

| Condition                                                                  | Effect                                                  | Supportive report result                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------- |
| Sleep duration band is short and rested feeling is low                     | Add rest priority; select sleep-routine block           | “A steadier evening routine may be a useful place to experiment.” |
| Meals are unpredictable and time is limited                                | Add meal-planning priority; select quick-prep resources | “Small preparation steps may make busy days easier.”              |
| Stress often disrupts routine and readiness is low                         | Reduce action size; select compassionate-start block    | “Starting with one low-effort habit can be enough for now.”       |
| Visitor requests medical guidance                                          | Safety route; exclude tailored habit report             | “A qualified professional can help with individual guidance.”     |
| Coaching preference is yes, confidence/support is low, and no safety route | Mark optional contact eligible                          | Display voluntary, disclosed conversation invitation              |

## Guardrails

Rules cannot select product blocks, prescribe food/exercise targets, make body/medical claims, infer a condition, recommend business participation, or contact a person. Every rule must have test fixtures and a human-readable reason key shown in audit tooling.

## Rule quality controls

Run conflict detection, dead-rule detection, content approval validation, market compatibility validation, and regression replay before activation. A rule change creates a new version and requires compliance review where it changes public messaging or data use.
