# WelliQo Clinical Engine v1.1

## Overview
The WelliQo Clinical Engine v1.1 represents the frozen, mature architectural state of the core assessment pipeline. This version guarantees mathematical purity, explainability, and rigorous clinical validation boundaries.

## Architecture Pipeline
1. **JSON Knowledge Base** (`src/knowledge/*`)
   - Fully decoupled clinical logic, rules, synergies, and thresholds.
2. **FormulaRegistry** (`formula-registry.ts`)
   - Computes all deterministic physiological math (BMI, BMR, targets, timelines).
3. **RulesEngine** (`rules-engine.ts`)
   - Evaluates answers against static rules for direct score deductions.
4. **SynergyEngine** (`synergy-engine.ts`)
   - Computes complex compounding risk factors (e.g., Emotional Eating Pattern) and applies non-linear modifiers to specific pillar scores.
5. **ScoreEngine** (`score-engine.ts`)
   - Aggregates deductions and synergies mathematically to produce final pillar and overall wellness scores. Emits a comprehensive `ScoreAuditTrail`.
6. **ClinicalValidator** (`validator.ts`)
   - Acts as an end-of-pipe safety net to catch mathematically possible but clinically impossible edge cases (e.g., `VAL_CONTRADICTION`).
7. **ReportBuilder** (`report-builder.ts`)
   - Assembles the final `CalculatedMetrics` payload for the UI. It operates purely as a data-mapper with zero logic parsing.

## Frozen Baseline
The Weight Management Assessment (`weight-management.json`) is the gold-standard reference implementation. Any future assessments (e.g., Sleep, Longevity) must conform to this exact architectural flow without modifying the Core Engine files.
