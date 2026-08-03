import type { kernel } from '@welliqo/assessment-engine';
import {
  InsightMetadataSchema,
  RecommendationMetadataSchema,
  type ReportViewModel,
} from '../types';

export function createReportViewModel(result: kernel.AssessmentResult): ReportViewModel {
  // 1. Process Insights
  const strengths = [];
  const patterns = [];

  for (const insight of result.insights) {
    const meta = InsightMetadataSchema.safeParse(insight.metadata);
    const type = meta.success ? meta.data.type : undefined;

    if (type === 'STRENGTH') {
      strengths.push({
        id: insight.id,
        title: insight.name || 'A Great Habit',
        description: insight.description || 'Keep up the good work.',
      });
    } else {
      patterns.push({
        id: insight.id,
        description: insight.description || 'We found a behavioral pattern here.',
        // We will default why it matters since it's hardcoded in the UI right now
        whyItMatters:
          'This insight was identified based on your responses. Focusing here can create a ripple effect of positive wellness outcomes.',
      });
    }
  }

  // 2. Process Snapshot
  const snapshot = result.categoryScores
    .filter((s) => s.categoryId !== 'overall')
    .map((s) => ({
      id: s.categoryId,
      title: s.categoryId.charAt(0).toUpperCase() + s.categoryId.slice(1),
      percentage: Math.min(Math.max(s.value, 0), 100),
    }));

  const overallScore = result.categoryScores.find((s) => s.categoryId === 'overall')?.value || null;

  // 3. Process Recommendations
  const support = [];
  const generalActions = [];

  for (const rec of result.recommendations) {
    const meta = RecommendationMetadataSchema.safeParse(rec.metadata);
    const title = meta.success ? meta.data.title || 'Recommendation' : 'Recommendation';
    const description = meta.success
      ? meta.data.description || 'Take this action to improve your wellness.'
      : 'Take this action to improve your wellness.';

    if (rec.type === 'COACH' || rec.type === 'COMMUNITY') {
      support.push({
        id: rec.id,
        title: title,
        type: rec.type,
      });
    } else {
      generalActions.push({
        id: rec.id,
        type: rec.type,
        title: title,
        description: description,
        confidence: rec.confidence, // Keep for sorting
        effort: meta.success ? meta.data.effort || 'Low' : 'Low',
        impact: meta.success ? meta.data.impact || 'High' : 'High',
        whyItMatters: meta.success ? meta.data.whyItMatters || null : null,
      });
    }
  }

  // 4. Sort actions and pull out the first step
  generalActions.sort((a, b) => b.confidence - a.confidence);

  const firstStepRaw = generalActions.length > 0 ? generalActions[0] : null;
  const actionPlanRaw = generalActions.slice(1);

  const firstStep = firstStepRaw
    ? {
        id: firstStepRaw.id,
        title: firstStepRaw.title,
        description: firstStepRaw.description,
        effort: firstStepRaw.effort,
        impact: firstStepRaw.impact,
        whyItMatters: firstStepRaw.whyItMatters,
      }
    : null;

  const actionPlan = actionPlanRaw.map((a) => ({
    id: a.id,
    type: a.type,
    title: a.title,
    description: a.description,
  }));

  return {
    hero: { overallScore },
    strengths,
    insights: patterns,
    snapshot,
    actionPlan,
    firstStep,
    support,
  };
}
