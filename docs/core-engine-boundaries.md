# Core Engine Boundaries

## Overview
To prevent "spaghetti code" and "logic bleed", the WelliQo Clinical Engine enforces strict boundaries between its modules. No module is permitted to do the job of another module.

## 1. The Rules Engine
- **Allowed**: Compare answers to static schemas. Map finding IDs and evidence IDs. Produce linear score deductions.
- **Forbidden**: Do not consider multiple questions simultaneously (that is Synergy). Do not clamp the final score (that is Validator).

## 2. The Synergy Engine
- **Allowed**: Look for clusters of findings/evidence (e.g. "Late Eating" + "Large Portions" = "Positive Energy Balance"). Produce priority modifiers and adjust specific pillar scores.
- **Forbidden**: Do not evaluate raw answer strings directly (rely on evidence IDs instead). Do not alter the base mathematical deductions.

## 3. The Score Engine
- **Allowed**: Calculate weighted averages. Apply synergy modifiers. Aggregate the Audit Trail.
- **Forbidden**: Do not clamp scores to arbitrary maximums (e.g. `if (score > 85) score = 85`). Do not evaluate clinical logic. Pure math only.

## 4. The Clinical Validator
- **Allowed**: Intervene when a mathematical score produces a clinically impossible outcome (e.g. "Healthy Minimums", "High Risk Caps", "Contradictions"). Log `ValidatorInterventions`.
- **Forbidden**: Do not recalculate the entire score. Do not replace the Score Engine.

## 5. The Formula Registry
- **Allowed**: Execute deterministic, widely accepted physiological formulas (BMI, BMR, TDEE, Water targets).
- **Forbidden**: Do not execute psychological logic. Do not make database queries. 

## 6. The Report Builder
- **Allowed**: Map schema objects to UI interfaces. Assemble text.
- **Forbidden**: Do not calculate. Do not use `.includes()`, `.split()`, or regex to parse string meanings. Do not infer clinical data that doesn't exist in the Engine result.
