# Weight Management Dashboard v1.0

**Status**: Frozen
**Date**: 2026-08-05

## Overview
The Dashboard translates clinical data structures (`CalculatedMetrics`) into an engaging, empathetic, and premium user experience.

## Key Components
1. **HealthWheel**: A 5-tier semantic color-coded visualization (Red <40, Orange 40-59, Amber 60-74, Green 75-89, Emerald 90-100).
2. **Current vs Ideal**: Shows weight difference, BMI, Fat Percentage and estimated clinical timeline based on user answers.
3. **Biggest Health Challenges**: Transforms engine `scoreExplanation` findings into dynamic Icon Cards indicating High or Medium severity impact.
4. **Targeted Nutrition Profile**: Computes dynamic daily protein targets (`weight * 1.6`) alongside personalized macro strategies.
5. **Priority Plan**: Filters top 5 active recommendations mapped with standard timelines (e.g. 2–4 weeks) and numbered priorities.
6. **Overall Summary**: Generates a dynamic paragraph blending the user's primary goal with their most critical limiting habits.

## Design Aesthetic
- Employs dark mode gradients, glassmorphism `backdrop-blur`, and interactive micro-animations.
- Relies on specific tailored CSS utility combinations rather than standard Tailwind classes for a bespoke look.

## Constraints
- Visual structural changes to v1.0 are locked.
- UI bug fixes are permitted.
