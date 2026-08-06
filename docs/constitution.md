# WelliQo Clinical Engine Constitution

This document defines the immutable laws of the WelliQo Clinical Engine.

## Article I: The Core Engine
The Core Engine is defined strictly as the following modules:
- **KnowledgeLoader**: Loads frozen schemas.
- **RulesEngine**: Deducts scores linearly.
- **SynergyEngine**: Computes non-linear relationship modifiers.
- **ScoreEngine**: Mathematically processes deductions and modifiers.
- **ClinicalValidator**: Inspects final scores for clinical impossibilities.
- **FormulaRegistry**: Computes physiological metrics (BMI, BMR, targets).
- **ReportBuilder**: Assembles purely declarative UI schemas.

Any modification to these files requires an **Architecture Audit**, a **Regression Suite execution**, and **explicit approval**.

## Article II: The Report Builder Law
**The Report Builder NEVER decides. It only assembles.**
- Report Builder never calculates.
- Report Builder never infers.
- Report Builder never guesses.

Everything visible in the report must already exist inside `CalculatedMetrics` or the JSON schemas.
**Banned operations inside Report Builder:**
- `.split()`
- `.includes()`
- `.regex()`
- `.startsWith()` / `.endsWith()` (when used to infer clinical meaning from text)
- String manipulations to generate new clinical meaning.

If the ReportBuilder needs new information, it MUST be added to `CalculatedMetrics` or another upstream engine output.

## Article III: Pure Boundaries
- **Rules Engine**: Deductions only.
- **Synergy Engine**: Relationship adjustments only.
- **Score Engine**: Mathematics only.
- **Clinical Validator**: Sanity checks only. (Does not replace scoring math).
- **Report Builder**: Presentation mapping only.

## Article IV: Validation Transparency
The Clinical Validator acts as a post-processing safety net. It must NEVER silently alter a score. Every intervention must generate a `ValidatorIntervention` object within the `ScoreAuditTrail`, specifying:
- `ruleId` (e.g., `VAL_HIGH_RISK_CAP`)
- `clinicalRationale`
- `oldScore` -> `newScore`
