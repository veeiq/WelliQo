# WelliQo Clinical Authoring Guide

This guide is the master handbook for Authoring Clinical Intelligence inside WelliQo. By following these standards, all 45+ upcoming assessments will remain consistent, ensuring the engine scales beautifully without requiring constant code rewrites.

## Development Workflow
Every future assessment MUST follow this exact lifecycle:
1. **Clinical Specification**: Define the scope, pillars, and evidence.
2. **Questions**: Create `questions.ts`.
3. **Knowledge JSON**: Scaffold empty JSON structure for rules, findings, recs, and synergy.
4. **Rules**: Write `scoreDeductions`, map `questionId` to `answerValue`.
5. **Recommendations**: Draft clinical actions.
6. **Engine Integration**: Plug module into `module.ts` and verify types.
7. **Regression Test**: Update `test-regression.ts` with 5 bespoke personas.
8. **Dashboard Review**: Validate scores and UI generation visually.
9. **Freeze**: Commit to `docs/frozen/` and restrict future changes to bug fixes.

---

## 1. Naming Conventions

### IDs
- **Questions**: Use `snake_case` (e.g., `late_eating`, `daily_steps`).
- **Options**: Use concise `snake_case` matching the logic (e.g., `less_5`, `daily`).
- **Rules**: `RULE_[TOPIC]_[VALUE]` (e.g., `RULE_TIME_1M`, `RULE_FAST_5`).
- **Evidence IDs**: `UPPER_SNAKE_CASE` describing the exact behavior (e.g., `POOR_SLEEP`, `VERY_LARGE_PORTIONS`).
- **Finding/Rec/Synergy IDs**: `UPPER_SNAKE_CASE` (e.g., `FINDING_UNREALISTIC_TIMELINE`, `REC_SLEEP_HYGIENE`).

### JSON Standards
- JSON files must live in `src/knowledge/[type]/[assessment-id].json`.
- Values in `"answerValue"` MUST exactly match the `value` field in `questions.ts`. If multiple options trigger the same rule, duplicate the rule or write logic to handle arrays.
- `"scoreDeduction"` should accurately reflect the severity of the habit against the pillar (typically `5` to `20` points).

---

## 2. Writing Findings
Findings explain *why* the user lost points or what negative pattern was identified.

- **Title**: Plain human language. Focus on the action/habit, not clinical jargon.
  - ❌ *Positive Energy Balance Pattern*
  - ✅ *Reducing Excess Calorie Intake*
- **User Explanation**: Write directly to the user in a sympathetic but firm tone.
  - ❌ *Patient consumes excess calories leading to weight gain.*
  - ✅ *Eating large portions consistently makes it very difficult to maintain a caloric deficit.*
- **Clinical Impact**: Used for audit trailing. Be scientifically exact.
- **Severity Definitions**:
  - `CRITICAL` / `HIGH`: Major blockers (e.g., severe sleep deprivation, high sugar consumption). Usually carries a 15-20 point deduction.
  - `MEDIUM`: Moderate friction points (e.g., occasional skipped meals). 5-10 points.
  - `LOW` / `INFO`: Minor optimizations. 0-5 points.
- **Confidence Level**: Usually `100` for direct single-answer mappings. `80-90` for inferred synergies.

---

## 3. Writing Recommendations
Recommendations must be actionable and empathetic.

- **Title**: Action-oriented and empowering.
  - ❌ *Avoid Sugar*
  - ✅ *Optimize Hydration*
- **Why This Matters**: Explain the biology simply. Why does this work?
- **Action Steps**: Give an exact, measurable instruction.
  - ❌ *Sleep more.*
  - ✅ *Go to bed 30 minutes earlier tonight and avoid screens.*
- **Expected Benefits**: What will the user feel? (e.g., "Reduced afternoon brain fog and better recovery.")
- **Difficulty Levels**:
  - `Easy`: Quick wins, friction-free changes (e.g., drink a glass of water).
  - `Moderate`: Requires some planning (e.g., cooking a meal, 30 min exercise).
  - `Advanced`: Requires significant lifestyle alteration (e.g., complete diet overhaul, advanced fasting).
- **Timeline Conventions**:
  - Use standardized strings to render nicely in the UI.
  - Example: `2–4 weeks`, `Immediate`, `1–3 months`.

---

## 4. Tone of Voice
- **Empathetic but Direct**: Do not sugarcoat health risks, but never shame the user.
- **Action-Oriented**: Focus on what *to do*, not just what *not to do*.
- **Speak Human**: Avoid obscure medical terms unless followed immediately by a simple explanation.

---

## 5. Success Indicators
Every Recommendation should have 1-3 Success Indicators.
- Frame them as achievable checkpoints.
- Example: `Wake up feeling rested without an alarm`, `No sugar cravings after dinner`.

---

## 6. Formula Standards
Formulas (like BMI, BMR, MACROs) must live in the `FormulaRegistry`.
- Never hardcode math inside UI components.
- Always validate inputs (e.g., ensure height is not zero).
- Document the source of the formula if it's based on specific clinical guidelines (e.g., Mifflin-St Jeor).
