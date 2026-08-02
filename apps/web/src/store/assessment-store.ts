import { create } from 'zustand';
import { journey as journeyEngine, kernel } from '@welliqo/assessment-engine';

export type AssessmentRuntimeState = 'IDLE' | 'STARTING' | 'ASSESSMENT' | 'VALIDATING' | 'EXECUTING' | 'GENERATING_REPORT' | 'REPORT_READY' | 'ERROR';

export interface AssessmentState {
  runtimeState: AssessmentRuntimeState;
  
  // Static Configuration
  configuration: kernel.EngineConfiguration | null;
  journey: journeyEngine.Journey | null;

  // Volatile Session
  progress: journeyEngine.JourneyProgress | null;
  answers: Record<string, unknown>;
  
  // Deterministic Result
  result: kernel.AssessmentResult | null;
  
  // Errors
  error: Error | null;

  // Actions
  initialize: (configuration: kernel.EngineConfiguration, journey: journeyEngine.Journey) => void;
  recordAnswer: (questionId: string, value: unknown) => void;
  nextStep: () => void;
  execute: () => void;
  reset: () => void;
}

export const useAssessmentStore = create<AssessmentState>((set, get) => ({
  runtimeState: 'IDLE',
  configuration: null,
  journey: null,
  progress: null,
  answers: {},
  result: null,
  error: null,

  initialize: (configuration, journey) => {
    set({ runtimeState: 'STARTING', error: null });
    try {
      const progress = journeyEngine.initializeProgress(journey);
      
      set({
        runtimeState: 'ASSESSMENT',
        configuration,
        journey,
        progress,
        answers: {},
        result: null,
      });
    } catch (error) {
      set({ runtimeState: 'ERROR', error: error instanceof Error ? error : new Error('Unknown error during initialization') });
    }
  },

  recordAnswer: (questionId, value) => {
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: value,
      },
    }));
  },

  nextStep: () => {
    const { journey, progress, answers, runtimeState } = get();
    if (runtimeState !== 'ASSESSMENT' || !journey || !progress) return;

    set({ runtimeState: 'VALIDATING' });
    try {
      // In a real app we'd run Zod validation for the current group here.
      // For now, we assume valid and determine the next step.
      const nextProgress = journeyEngine.determineNextStep(journey, progress, answers);
      
      set({ 
        progress: nextProgress,
        runtimeState: nextProgress.isComplete ? 'EXECUTING' : 'ASSESSMENT' 
      });

      if (nextProgress.isComplete) {
        get().execute();
      }
    } catch (error) {
      set({ runtimeState: 'ERROR', error: error instanceof Error ? error : new Error('Unknown error during navigation') });
    }
  },

  execute: () => {
    const { configuration, journey, answers, runtimeState } = get();
    if (runtimeState !== 'EXECUTING' || !configuration || !journey) return;

    try {
      // Execute the assessment kernel synchronously
      const result = kernel.executeAssessment({
        journey,
        answers,
        configuration,
      });

      set({
        result,
        runtimeState: 'REPORT_READY',
      });
    } catch (error) {
      set({ runtimeState: 'ERROR', error: error instanceof Error ? error : new Error('Unknown error during execution') });
    }
  },

  reset: () => {
    set({
      runtimeState: 'IDLE',
      progress: null,
      answers: {},
      result: null,
      error: null,
    });
  },
}));
