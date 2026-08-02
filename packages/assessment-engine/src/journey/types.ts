import type { Question, NavigationCondition } from '../types';

export interface QuestionGroup {
  id: string;
  title?: string;
  description?: string;
  questions: Question[];
  conditions?: NavigationCondition[];
  metadata?: Record<string, unknown>;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  enabled: boolean;
  conditions?: NavigationCondition[];
  questionGroups: QuestionGroup[];
  metadata?: Record<string, unknown>;
}

export interface Journey {
  id: string;
  version: string;
  name: string;
  description?: string;
  metadata?: Record<string, unknown>;
  sections: Section[];
}

export interface JourneyProgress {
  journeyId: string;
  version: string;
  completedSectionIds: string[];
  currentSectionId: string | null;
  currentGroupId: string | null;
  isComplete: boolean;
}
