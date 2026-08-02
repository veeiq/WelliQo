# Question Flow

## Routing principles

No global hardcoded order exists. The route resolver evaluates eligible questions after every answer. Questions have prerequisites, exclusion rules, priority, and completion criteria. The resolver chooses the highest-value unanswered eligible question, capped by the core-route duration budget.

## Canonical core route

```text
welcome → adult eligibility → primary goal → goal detail
→ daily pattern → relevant habits → barriers/capacity
→ readiness/confidence → report
```

## Goal branches

| Primary goal          | Required follow-ups                                  | Usually omitted                       |
| --------------------- | ---------------------------------------------------- | ------------------------------------- |
| More consistent meals | meal regularity, breakfast, snacking, cooking, time  | detailed movement unless volunteered  |
| Better daily energy   | sleep, meal regularity, water, stress, daily pattern | body measures by default              |
| More movement         | activity, enjoyment, time, confidence, support       | breakfast detail unless also selected |
| Better rest/routine   | sleep, stress, time, support, readiness              | body measures, recipe detail          |
| General learning      | preferred topic and readiness                        | intrusive context fields              |

## Conditional routing examples

- Shift work → ask meal timing flexibility and rest pattern; avoid an implied “normal schedule.”
- Low cooking confidence → ask preferred preparation effort; include simple recipe resources.
- Low readiness or confidence → select a smaller action block; do not ask more detail merely to prolong the flow.
- High stress impact → ask time/support preference; show supportive boundaries and general resources.
- Wants individual medical guidance → safety route, professional-care signpost, no individualized scoring.
- Explicit coaching interest + low confidence/support + clear educational need → eligible for an optional coach invitation after the report.

## Completion rules

The report may generate when all required route-domain questions are answered or skipped and at least one scored domain plus readiness is available. Missing values remain unknown—not zero. The engine reports “based on the habits you chose to share,” never claims completeness.

## Routing validation

Automated checks must prove every active route reaches a report or safety exit, no question loops indefinitely, no sensitive question is reachable in v1, and every `next_question_rule` targets an active compatible question.
