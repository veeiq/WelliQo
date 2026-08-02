import { z } from 'zod';
import { JourneySchema, SectionSchema, QuestionGroupSchema, QuestionSchema } from './schemas';

export type ValidatedJourney = z.infer<typeof JourneySchema>;
export type ValidatedSection = z.infer<typeof SectionSchema>;
export type ValidatedQuestionGroup = z.infer<typeof QuestionGroupSchema>;
export type ValidatedQuestion = z.infer<typeof QuestionSchema>;
