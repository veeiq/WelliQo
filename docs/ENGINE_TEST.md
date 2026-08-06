# WelliQo Engine Acceptance Tests

This document defines the baseline expectations for the Regression Suite. If the engine executes these personas and deviates from these bounds, the Engine has failed the acceptance test.

## Persona: Healthy Adult
- **Description**: Baseline healthy individual. Good habits across the board.
- **Expected Score**: 90 - 100
- **Expected Findings**: `FINDING_ACTIVE_LIFESTYLE`, `FINDING_STRONG_RECOVERY`, `FINDING_BALANCED_NUTRITION`
- **Expected Validator**: `None`

---

## Persona: Overweight Office Worker
- **Description**: High sedentary behavior, poor nutrition, high stress.
- **Expected Score**: 70 - 85
- **Expected Synergy**: `FINDING_POSITIVE_ENERGY_BALANCE`, `FINDING_SEDENTARY_LIFESTYLE`
- **Expected Validator**: `None`

---

## Persona: Severe Weight Management
- **Description**: Morbidly obese, extremely poor eating habits, severe sleep deprivation.
- **Expected Score**: 50 - 70
- **Expected Findings**: `FINDING_POSITIVE_ENERGY_BALANCE`, `FINDING_EMOTIONAL_EATING_PATTERN`, `FINDING_POOR_RECOVERY`
- **Expected Validator**: `None`

---

## Persona: Over-Penalized Eater
- **Description**: Bad eating habits but highly active and sleeps well. Ensure the Rules Engine doesn't accidentally tank their score into the 40s.
- **Expected Score**: 65 - 75
- **Expected Synergy**: `FINDING_POSITIVE_ENERGY_BALANCE`
- **Expected Validator**: `None`

---

## Persona: Golden Health
- **Description**: Perfection in every metric.
- **Expected Score**: 95 - 100
- **Expected Outcome**: Flawless execution, no deductions, score near 100.

---

## Persona: Flawed Athlete
- **Description**: Golden health metrics but with one terrible habit (e.g., intense cravings). 
- **Expected Score**: 85 - 95
- **Expected Validator**: `None` (Math natively keeps score high).

---

## Persona: High Scoring Risk
- **Description**: Attempting to game the system by answering "perfectly" on some things while revealing 3+ critical synergies.
- **Expected Score**: 50 - 70
- **Expected Validator**: `VAL_HIGH_RISK_CAP` (If math fails to naturally drop the score below 70, the Validator must intervene).

---

## Persona: Impossible User
- **Description**: Claims perfect active lifestyle, 10k+ steps, good sleep, no bad eating habits, yet has a BMI of 41.5 and extreme portions.
- **Expected Score**: Any
- **Expected Validator**: `VAL_CONTRADICTION` (Must flag the inconsistency).
