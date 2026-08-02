# Report Generator

## Report contract

The composer receives an immutable assessment result and selects approved modular blocks. It never writes open-ended advice, invents content, or turns a score into a diagnosis.

## Report sections

1. **Welcome and scope:** restates the chosen goal and “based on what you chose to share.”
2. **Strengths:** 1–3 observed positive habits, only when evidence exists.
3. **Patterns to explore:** neutral observations tied to answers, not labels.
4. **Priority plan:** up to three approved priorities, ranked by goal, opportunity, readiness, and likely practicality.
5. **Small next step:** one realistic experiment sized by readiness/time/confidence.
6. **Learn next:** reviewed guides, FAQs, recipes, and glossary resources selected by tags and market.
7. **Optional support:** coach/conversation invitation only when eligible and with no pressure.
8. **Safety and transparency:** limits, professional-care signpost where needed, report/rule-set version and review date.

## Block schema

Each block has `id`, `type`, `title_key`, `body_key`, `eligibility`, `exclusions`, `priority_range`, `content_tags`, `market`, `approval_status`, `review_date`, and `tone`. Block text uses templated facts only from an approved allow-list; it does not interpolate raw sensitive responses.

## Selection rules

- Prioritize a maximum of three areas. More is overwhelming.
- Show a strength before an opportunity wherever truthful.
- Do not display unavailable dimensions or mention omissions.
- Recommendations must have a direct relationship to the selected priority and be currently published/reviewed.
- If the safety route is active, show only the safety report and broad educational resources.
- Contact details, products, pricing, recruiting, and business content are excluded by default.

## Example tone transformation

Avoid: “Your lifestyle score is poor.”  
Use: “Your answers suggest that a more predictable rest routine may be one area worth exploring.”

## Report persistence

Save a rendered structured snapshot—not only references—so a historic report remains explainable after blocks change. Store content/report IDs, versions, triggered reasons, disclosure version, and expiry. A visitor can delete a saved report under the documented privacy workflow.
