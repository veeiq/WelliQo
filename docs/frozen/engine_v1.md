# WelliQo Clinical Intelligence Engine v1.0

**Status**: Frozen
**Date**: 2026-08-05

## Architecture
The Engine is a stateless, rule-based pipeline that processes user questionnaire answers into a personalized clinical report.

1. **KnowledgeLoader**: Dynamically loads JSON definitions for Rules, Findings, Recommendations, and Synergies.
2. **FormulaRegistry**: Executes clinical math (BMI, BMR, Fat Percentage, Ideal Weight) safely.
3. **RulesEngine**: Evaluates raw answers against defined `rules/*.json`, generating `evidenceIds` and initial deductions.
4. **SynergyEngine**: Looks for combinations of `evidenceIds` (e.g., Poor Sleep + High Sugar) and triggers Synergy Findings.
5. **ScoreEngine**: Aggregates all deductions and synergies, clamping scores between 0-100 per pillar and tracking a detailed Audit Trail.
6. **ReportBuilder**: Transforms the raw score data and active recommendations into the UI-ready `CalculatedMetrics` interface.

## Constraints
- Changes to v1.0 logic are restricted to bug fixes, clinical evidence updates, and scientific corrections.
- New features and architectural updates must wait for Engine v2.0.
