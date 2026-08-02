import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  AssessmentState, 
  QuestionRegistry, 
  validateAnswer,
  determineNextQuestionId
} from '@welliqo/assessment-engine';

export interface AssessmentStore extends AssessmentState {
  setAnswer: (questionId: string, value: unknown) => void;
  nextQuestion: (registry: QuestionRegistry) => void;
  previousQuestion: () => void;
  startAssessment: (firstQuestionId: string) => void;
  reset: () => void;
  getErrors: (registry: QuestionRegistry) => string[];
}

export const useAssessmentStore = create<AssessmentStore>()(
  persist(
    (set, get) => ({
      answers: {},
      history: [],
      currentQuestionId: null,
      isComplete: false,

      setAnswer: (questionId, value) => {
        set((state) => ({
          answers: {
            ...state.answers,
            [questionId]: value,
          }
        }));
      },

      getErrors: (registry: QuestionRegistry) => {
        const { currentQuestionId, answers } = get();
        if (!currentQuestionId) return [];
        const currentItem = registry.getQuestion(currentQuestionId);
        if (!currentItem) return [];
        const validation = validateAnswer(currentItem.question, answers[currentQuestionId]);
        return validation.errors;
      },

      nextQuestion: (registry: QuestionRegistry) => {
        const { currentQuestionId, answers, history } = get();
        if (!currentQuestionId) return;

        const currentItem = registry.getQuestion(currentQuestionId);
        if (!currentItem) return;

        const validation = validateAnswer(currentItem.question, answers[currentQuestionId]);
        if (!validation.isValid) {
          return; // Block navigation on invalid
        }

        const nextId = determineNextQuestionId(
          currentQuestionId,
          answers,
          currentItem.rules,
          currentItem.defaultNextId
        );

        if (nextId === 'END') {
          set({ isComplete: true });
        } else {
          set({
            currentQuestionId: nextId,
            history: [...history, currentQuestionId],
          });
        }
      },

      previousQuestion: () => {
        set((state) => {
          const newHistory = [...state.history];
          const previousId = newHistory.pop();
          
          if (!previousId) return state;

          return {
            history: newHistory,
            currentQuestionId: previousId,
            isComplete: false,
          };
        });
      },

      startAssessment: (firstQuestionId: string) => {
        set({
          answers: {},
          history: [],
          currentQuestionId: firstQuestionId,
          isComplete: false,
        });
      },

      reset: () => {
        set({
          answers: {},
          history: [],
          currentQuestionId: null,
          isComplete: false,
        });
      },
    }),
    {
      name: 'welliqo-assessment-session',
      // skip hydration on server
      skipHydration: true,
    }
  )
);
