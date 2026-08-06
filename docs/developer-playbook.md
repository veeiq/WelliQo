# WelliQo Clinical Engine: Developer Playbook

## Modifying Existing Logic
Do NOT touch the Core Engine `.ts` files to tweak logic.
All clinical logic, scoring deductions, and synergy definitions reside in the JSON Knowledge Base (`src/knowledge/`).

### Adding a new Rule:
1. Open `src/knowledge/rules/<assessment-name>.json`.
2. Add a new `ClinicalRuleSchema` object mapping the `questionId` and `answerValue` to a `scoreDeduction` and `findingId`.

### Adding a new Synergy:
1. Open `src/knowledge/synergy/<assessment-name>.json`.
2. Define the new `SynergyRuleSchema`. 
3. Specify the `requiredEvidence` (which correlates to the `evidenceId` or `findingId` output by the Rules engine) and the `minRequiredMatches`.
4. Run the regression suite.

## The Regression Suite Law
Any modification to the Core Engine or the JSON Knowledge Base requires running the regression suite.

```bash
# Execute the suite
npx tsx apps/web/test-regression.ts
```

If a test fails unexpectedly:
1. **STOP**. Do not brute-force a fix by hardcoding logic in the Core Engine.
2. Review the `ScoreAuditTrail` printed by the test to see exactly which rules/synergies triggered.
3. Adjust the JSON configuration until the test passes.

## Adding a New Assessment
1. Create `<assessment>.json` files in the `rules`, `synergy`, and `findings` folders.
2. Adhere strictly to the `weight-management.json` structure.
3. Add at least 5 new Personas to `test-regression.ts` for your new assessment.
4. Execute the pipeline. No new `.ts` logic should be required if the boundaries are respected.
