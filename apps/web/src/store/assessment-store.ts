import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AssessmentConfig, Finding, Recommendation, MetricCardConfig } from '../types/assessment';
import { ASSESSMENTS } from '../assessments/registry';
import { RulesEngine } from '../engine/rules-engine';
import { SynergyEngine } from '../engine/synergy-engine';
import { ScoreEngine } from '../engine/score-engine';
import { ReportBuilder } from '../engine/report-builder';
import { ExperienceEngineV1 } from '../engine/experience-engine-v1';
import { ExperienceBlock } from '../engine/types/experience-blocks';

export type SimpleAssessmentState = 'GOAL_SELECTION' | 'PROFILE_INTERCEPT' | 'QUESTIONNAIRE' | 'CALCULATING' | 'REPORT_READY';

export interface AssessmentData {
  assessmentId: string | null;
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
  overallSummary: string;
  rootCauseAttribution?: string;
  recognition?: {
    headline: string;
    body: string;
  };
  patternHeadline?: string;
  goodNews?: {
    s1: string;
    s2: string;
    highlight: string;
  };
  score?: {
    headline: string;
    body: string;
    showScore: boolean;
  };
  closingPhilosophy?: string;
  timeline: string;
  
  // New: Body Intelligence
  bodyIntelligence?: {
    age: number;
    heightCm: number;
    weightKg: number;
    bmi: string;
    bmiCategory: string;
    healthyWeightRange: string;
    bmr: number;
    tdee: number;
    targetCalories: number;
    targetProtein: number;
    targetWater: number;
    targetFiber: number;
    targetSleep: number;
    targetSteps: number;
  };

  // New: Nutrition Intelligence
  nutritionIntelligence?: {
    nutrients: {
      id: string;
      label: string;
      target: string;
      current: string;
      gap: string;
      status: 'green' | 'yellow' | 'red';
      whyItMatters: string;
      foods: { category: string; items: string[] }[];
      companionSupport: string[];
    }[];
  };

  // New: Daily Blueprint
  dailyBlueprint?: {
    meals: {
      name: string;
      calories: number;
      protein: number;
    }[];
  };
  
  metricCards: MetricCardData[];
  
  strengths: string[];
  improvements: string[];
  scoreExplanation: Finding[]; // Why did I get this score
  biggestOpportunity?: string;
  biggestOpportunityExplanation?: string;
  priorityPlan: Recommendation[];
  
  nutritionPlan: {
    protein: string;
    proteinGrams?: number;
    carbs: string;
    fats: string;
    naturalSources: string[];
    supplements: {
      state: 'RECOMMENDED' | 'OPTIONAL' | 'NOT_RECOMMENDED';
      reason?: string;
      products: string[];
    };
  };
  recommendedAssessments: { id: string; label: string; icon: string }[];
}

export interface AssessmentState {
  runtimeState: SimpleAssessmentState;
  data: AssessmentData; 
  answers: Record<string, any>; 
  calculatedMetrics: CalculatedMetrics | null;
  experienceBlocks: ExperienceBlock[] | null;
  currentQuestionIndex: number;
  clientReportId: string | null;
  synced: boolean;
}

interface AssessmentActions {
  setAssessmentId: (assessmentId: AssessmentData['assessmentId']) => void;
  updateData: <K extends keyof AssessmentData>(key: K, value: AssessmentData[K]) => void;
  recordAnswer: (questionId: string, value: any) => void;
  nextQuestion: (totalQuestions: number) => void;
  prevQuestion: (universalQuestionCount: number) => void;
  submitQuestionnaire: () => void;
  continueWithProfile: (universalQuestionCount: number) => void;
  resetProfile: () => void;
  reset: () => void;
  setSynced: (synced: boolean) => void;
}


export const useAssessmentStore = create<AssessmentState & AssessmentActions>()(
  persist(
    (set, get) => ({
      runtimeState: 'GOAL_SELECTION',
      data: {
        assessmentId: null,
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
      experienceBlocks: null,
      currentQuestionIndex: 0,
      clientReportId: null,
      synced: false,

      setAssessmentId: (assessmentId) => set((state) => {
        const hasBaseline = !!state.data.age && !!state.data.height && !!state.data.weight;
        return {
          data: { ...state.data, assessmentId },
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
            
            if (!data.assessmentId) return;

            const assessment = ASSESSMENTS.find(a => a.id === data.assessmentId);
            if (!assessment || assessment.status !== 'available') {
              throw new Error(`[CRITICAL] Assessment ${data.assessmentId} is not available or missing from registry.`);
            }

            // Combine profile data (baseline) and questionnaire answers
            const allAnswers = { ...data, ...answers };

            // 1. Initialize Engine Components
            const rulesEngine = new RulesEngine();
            const synergyEngine = new SynergyEngine();
            const scoreEngine = new ScoreEngine();
            const reportBuilder = new ReportBuilder();
            const experienceEngine = new ExperienceEngineV1();

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

            // 6. Experience Engine V1 (Transforms facts into structured experience blocks)
            const experienceBlocks = experienceEngine.generate(allAnswers, calculatedMetrics);

            const clientReportId = `wm_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

            // Save to state
            set({
              calculatedMetrics,
              experienceBlocks,
              clientReportId,
              synced: false,
              runtimeState: 'REPORT_READY'
            });
          } catch (error) {
            console.error('Engine Execution Error:', error);
            // Fallback or error state handling could go here
            set({ runtimeState: 'GOAL_SELECTION' });
          }
        }, 4000);
      },

      reset: () => {
        set({
          runtimeState: 'GOAL_SELECTION',
          answers: {},
          calculatedMetrics: null,
          experienceBlocks: null,
          currentQuestionIndex: 0,
          clientReportId: null,
          synced: false,
        });
      },

      setSynced: (synced: boolean) => set({ synced }),
    }),
    {
      name: 'welliqo-assessment-storage',
      partialize: (state) => ({ 
        data: state.data,
        answers: state.answers,
        calculatedMetrics: state.calculatedMetrics,
        experienceBlocks: state.experienceBlocks,
        runtimeState: state.runtimeState,
        clientReportId: state.clientReportId,
        synced: state.synced
      }),
    }
  )
);
