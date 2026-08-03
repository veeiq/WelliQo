import { z } from 'zod';
import {
  JourneySchema,
  SectionSchema,
  QuestionGroupSchema,
  QuestionSchema,
  FactSchema,
  FactRuleSchema,
  InsightSchema,
  InsightRuleSchema,
  ScoreCategorySchema,
  ScoreRuleSchema,
  EngineRuleSchema,
  RecommendationRuleSchema,
} from './schemas';

export type ValidatedJourney = z.infer<typeof JourneySchema>;
export type ValidatedSection = z.infer<typeof SectionSchema>;
export type ValidatedQuestionGroup = z.infer<typeof QuestionGroupSchema>;
export type ValidatedQuestion = z.infer<typeof QuestionSchema>;
export type ValidatedFact = z.infer<typeof FactSchema>;
export type ValidatedFactRule = z.infer<typeof FactRuleSchema>;
export type ValidatedInsight = z.infer<typeof InsightSchema>;
export type ValidatedInsightRule = z.infer<typeof InsightRuleSchema>;
export type ValidatedScoreCategory = z.infer<typeof ScoreCategorySchema>;
export type ValidatedScoreRule = z.infer<typeof ScoreRuleSchema>;
export type ValidatedEngineRule = z.infer<typeof EngineRuleSchema>;
export type ValidatedRecommendationRule = z.infer<typeof RecommendationRuleSchema>;
