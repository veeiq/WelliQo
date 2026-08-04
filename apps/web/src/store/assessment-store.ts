import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AssessmentConfig, Finding, Recommendation, MetricCardConfig } from '../types/assessment';
import { ASSESSMENTS } from '../assessments/registry';
import { RulesEngine } from '../engine/rules-engine';
import { SynergyEngine } from '../engine/synergy-engine';
import { ScoreEngine } from '../engine/score-engine';
import { ReportBuilder } from '../engine/report-builder';

export type SimpleAssessmentState = 'GOAL_SELECTION' | 'PROFILE_INTERCEPT' | 'QUESTIONNAIRE' | 'CALCULATING' | 'REPORT_READY';

export interface AssessmentData {
  goal: string | null;
  name: string | null;
  age: number | null;
  gender: 'male' | 'female' | 'other' | null;
  height: number | null; // cm
  weight: number | null; // kg
  occupation: string | null;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | null;
  conditions: string[];
  food_preference: string | null;
  smoking: string | null;
  alcohol: string | null;
}

export interface PillarScore {
  id: string;
  label: string;
  score: number;
  icon: string;
}

export interface MetricCardData {
  id: string;
  title: string;
  icon: string;
  current: string;
  ideal: string;
  difference: string;
  meaning: string;
  status: 'good' | 'warning' | 'danger' | 'neutral';
  clinicalMeaning?: string;
  primaryFocus?: string;
  sourceType?: 'Measured' | 'Calculated' | 'Estimated';
  sourceExplanation?: string;
}

export interface CalculatedMetrics {
  bmi: string;
  bmr: number;
  fatPercentage: string;
  idealWeight: string;
  pillarScores: PillarScore[];
  weightDifferenceKg: number;
  weightDirection: 'lose' | 'gain' | 'maintain';
  
  // Dynamic Report Data
  overallScore: number;
  scoreMeaning: string;
  timeline: string;
  
  metricCards: MetricCardData[];
  
  strengths: string[];
  improvements: string[];
  scoreExplanation: Finding[]; // Why did I get this score
  biggestOpportunity?: string;
  biggestOpportunityExplanation?: string;
  priorityPlan: Recommendation[];
  
  nutritionPlan: {
    protein: string;
    carbs: string;
    fats: string;
    naturalSources: string[];
    supplements: string[];
  };
  recommendedAssessments: { id: string; label: string; icon: string }[];
}

export interface AssessmentState {
  runtimeState: SimpleAssessmentState;
  data: AssessmentData; 
  answers: Record<string, any>; 
  calculatedMetrics: CalculatedMetrics | null;
  currentQuestionIndex: number;
}

interface AssessmentActions {
  setGoal: (goal: AssessmentData['goal']) => void;
  updateData: <K extends keyof AssessmentData>(key: K, value: AssessmentData[K]) => void;
  recordAnswer: (questionId: string, value: any) => void;
  nextQuestion: (totalQuestions: number) => void;
  prevQuestion: (universalQuestionCount: number) => void;
  submitQuestionnaire: () => void;
  continueWithProfile: (universalQuestionCount: number) => void;
  resetProfile: () => void;
  reset: () => void;
}


export const useAssessmentStore = create<AssessmentState & AssessmentActions>()(
  persist(
    (set, get) => ({
      runtimeState: 'GOAL_SELECTION',
      data: {
        goal: null,
        name: null,
        age: null,
        gender: null,
        height: null,
        weight: null,
        occupation: null,
        activityLevel: null,
        conditions: [],
        food_preference: null,
        smoking: null,
        alcohol: null,
      },
      answers: {},
      calculatedMetrics: null,
      currentQuestionIndex: 0,

      setGoal: (goal) => set((state) => {
        const hasBaseline = !!state.data.age && !!state.data.height && !!state.data.weight;
        return {
          data: { ...state.data, goal },
          runtimeState: hasBaseline ? 'PROFILE_INTERCEPT' : 'QUESTIONNAIRE',
          currentQuestionIndex: 0,
          answers: {},
        };
      }),

      continueWithProfile: (universalQuestionCount) => set({
        runtimeState: 'QUESTIONNAIRE',
        currentQuestionIndex: universalQuestionCount,
      }),

      resetProfile: () => set((state) => ({
        runtimeState: 'QUESTIONNAIRE',
        currentQuestionIndex: 0,
        data: {
          ...state.data,
          name: null,
          age: null,
          gender: null,
          height: null,
          weight: null,
          occupation: null,
          activityLevel: null,
          conditions: [],
          food_preference: null,
          smoking: null,
          alcohol: null,
        }
      })),

      updateData: (key, value) => set((state) => ({
        data: { ...state.data, [key]: value },
      })),

      recordAnswer: (questionId, value) => set((state) => {
        const baselineKeys = ['name', 'age', 'gender', 'height', 'weight', 'occupation', 'activityLevel', 'conditions', 'food_preference', 'smoking', 'alcohol'];
        const newData = { ...state.data };
        if (baselineKeys.includes(questionId)) {
          (newData as any)[questionId] = value;
        }
        return {
          answers: { ...state.answers, [questionId]: value },
          data: newData
        };
      }),

      nextQuestion: (totalQuestions) => {
        const { currentQuestionIndex } = get();
        if (currentQuestionIndex < totalQuestions - 1) {
          set({ currentQuestionIndex: currentQuestionIndex + 1 });
        } else {
          get().submitQuestionnaire();
        }
      },

      prevQuestion: (universalQuestionCount) => {
        const { currentQuestionIndex } = get();
        if (currentQuestionIndex > 0) {
          set({ currentQuestionIndex: currentQuestionIndex - 1 });
        } else {
          set({ runtimeState: 'GOAL_SELECTION' });
        }
      },

      submitQuestionnaire: async () => {
        set({ runtimeState: 'CALCULATING' });
        setTimeout(() => {
          try {
            const { data, answers } = get();
            
            if (!data.goal) return;

            const assessment = ASSESSMENTS.find(a => a.id === data.goal);
            if (!assessment || !assessment.implemented) {
              throw new Error(`[CRITICAL] Assessment ${data.goal} is not implemented or missing from registry.`);
            }

            // Combine profile data (baseline) and questionnaire answers
            const allAnswers = { ...data, ...answers };

            // 1. Initialize Engine Components
            const rulesEngine = new RulesEngine();
            const synergyEngine = new SynergyEngine();
            const scoreEngine = new ScoreEngine();
            const reportBuilder = new ReportBuilder();

            // 2. Execute Rules Pipeline
            const rulesResult = rulesEngine.evaluate(allAnswers as any);

            // 3. Execute Synergy Pipeline
            const activeIndicators = new Set([...rulesResult.evidenceIds, ...rulesResult.findingIds]);
            const synergyResult = synergyEngine.evaluate(activeIndicators);

            // 4. Calculate Scores
            // The new config type is temporarily stored in assessment.config
            const scoreResult = scoreEngine.calculate(rulesResult, synergyResult, assessment.config as any);

            // 5. Build Report (Legacy Output format)
            const calculatedMetrics = reportBuilder.build(allAnswers, rulesResult, synergyResult, scoreResult);

            // Save to state
            set({
              calculatedMetrics,
              runtimeState: 'REPORT_READY'
            });
          } catch (error) {
            console.error('Engine Execution Error:', error);
            // Fallback or error state handling could go here
            set({ runtimeState: 'GOAL_SELECTION' });
          }
        }, 1500);
      },

      reset: () => {
        set({
          runtimeState: 'GOAL_SELECTION',
          answers: {},
          calculatedMetrics: null,
          currentQuestionIndex: 0,
        });
      },
    }),
    {
      name: 'welliqo-assessment-storage',
      partialize: (state) => ({ data: state.data }),
    }
  )
);
