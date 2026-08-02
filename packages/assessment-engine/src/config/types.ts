import { z } from 'zod';
import { JourneySchema, SectionSchema, QuestionGroupSchema, QuestionSchema, FactSchema, FactRuleSchema, InsightSchema, InsightRuleSchema } from './schemas';

export type ValidatedJourney = z.infer<typeof JourneySchema>;
export type ValidatedSection = z.infer<typeof SectionSchema>;
export type ValidatedQuestionGroup = z.infer<typeof QuestionGroupSchema>;
export type ValidatedQuestion = z.infer<typeof QuestionSchema>;
export type ValidatedFact = z.infer<typeof FactSchema>;
export type ValidatedFactRule = z.infer<typeof FactRuleSchema>;
export type ValidatedInsight = z.infer<typeof InsightSchema>;
export type ValidatedInsightRule = z.infer<typeof InsightRuleSchema>;
