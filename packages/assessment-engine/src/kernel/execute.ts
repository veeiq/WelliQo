import { runPipeline } from './pipeline';
import type { AssessmentPayload, AssessmentResult } from './types';

export function executeAssessment(payload: AssessmentPayload): AssessmentResult {
  const startTime = Date.now();

  const {
    facts,
    insights,
    categoryScores,
    decisions,
    recommendations,
  } = runPipeline(payload.answers, payload.configuration);

  const overallScoreEntry = categoryScores.find(
    (s) => s.categoryId === 'OVERALL' || s.categoryId === 'OVERALL_SCORE'
  );
  const overallScore = overallScoreEntry ? overallScoreEntry.value : undefined;

  const executionTimeMs = Date.now() - startTime;

  return {
    journeyId: payload.journey.id,
    answers: payload.answers,
    facts,
    insights,
    categoryScores,
    overallScore,
    decisions,
    recommendations,
    metadata: {
      executionTimeMs,
      executedAt: new Date().toISOString(),
      version: payload.journey.version || '1.0',
    },
  };
}
