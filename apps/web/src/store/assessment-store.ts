import { create } from 'zustand';
import type { MasterQuestion } from '@welliqo/intelligence';

export type AssessmentRuntimeState =
  | 'IDLE'
  | 'LOADING'
  | 'ASKING'
  | 'TRANSITIONING'
  | 'GENERATING_REPORT'
  | 'REPORT_READY'
  | 'ERROR';

export interface AssessmentState {
  runtimeState: AssessmentRuntimeState;

  // Single Question Loop
  currentQuestion: MasterQuestion | null;
  confidences: any[];
  answers: Record<string, unknown>;

  // Deterministic Result
  result: any | null; // The final report or preview

  // Flow Control
  currentLayer: string | null;

  // Errors
  error: Error | null;

  // Actions
  start: () => void;
  recordAnswer: (questionId: string, value: unknown) => void;
  submitAnswer: () => void;
  continueFromTransition: () => void;
  reset: () => void;
}

export const useAssessmentStore = create<AssessmentState>((set, get) => ({
  runtimeState: 'IDLE',
  currentQuestion: null,
  confidences: [],
  answers: {},
  currentLayer: null,
  result: null,
  error: null,

  start: async () => {
    set({ runtimeState: 'LOADING', error: null });
    get().submitAnswer();
  },

  recordAnswer: (questionId, value) => {
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: value,
      },
    }));
  },

  submitAnswer: async () => {
    const { answers } = get();
    set({ runtimeState: 'LOADING' });

    try {
      // Execute the assessment kernel securely on the server
      const response = await fetch('/api/assessment/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          knownFacts: [], // Will be computed server-side from answers
          answeredQuestionIds: Object.keys(answers),
          currentLayer: get().currentLayer,
        }),
      });

      if (!response.ok) throw new Error('Server execution failed');
      const data = await response.json();

      if (data.action === 'ASK') {
        set({
          currentQuestion: data.nextQuestion,
          confidences: data.confidences || [],
          result: data.currentReportPreview,
          currentLayer: data.newLayerName || get().currentLayer,
          runtimeState: data.isNewLayer ? 'TRANSITIONING' : 'ASKING',
        });
      } else if (data.action === 'FINISH') {
        set({
          currentQuestion: null,
          confidences: data.confidences || [],
          result: data.report,
          runtimeState: 'REPORT_READY',
        });
      }
    } catch (error) {
      set({
        runtimeState: 'ERROR',
        error: error instanceof Error ? error : new Error('Unknown error during execution'),
      });
    }
  },

  continueFromTransition: () => {
    set({ runtimeState: 'ASKING' });
  },

  reset: () => {
    set({
      runtimeState: 'IDLE',
      currentQuestion: null,
      confidences: [],
      answers: {},
      currentLayer: null,
      result: null,
      error: null,
    });
  },
}));
