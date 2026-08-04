import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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

export interface CalculatedMetrics {
  bmi: string;
  bmr: number;
  fatPercentage: string;
  idealWeight: string;
  pillarScores: PillarScore[];
  targetPillars: PillarScore[];
  weightDifferenceKg: number;
  weightDirection: 'lose' | 'gain' | 'maintain';
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
        // If we already have baseline data, show intercept
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
        currentQuestionIndex: universalQuestionCount, // Skip the baseline questions
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
        const { currentQuestionIndex, data } = get();
        
        // If they pressed back ON the first specific question AND they used a saved profile
        // we should probably take them back to PROFILE_INTERCEPT.
        // For simplicity, if we hit index 0, we go to GOAL_SELECTION.
        // If they hit index == universalQuestionCount and they had skipped, they would theoretically go to intercept,
        // but if they just naturally go back, let's just let them decrement normally.
        // Actually, if we just decrement, it lets them edit their saved profile, which is fine!
        
        if (currentQuestionIndex > 0) {
          set({ currentQuestionIndex: currentQuestionIndex - 1 });
        } else {
          set({ runtimeState: 'GOAL_SELECTION' });
        }
      },

      submitQuestionnaire: async () => {
        set({ runtimeState: 'CALCULATING' });
        setTimeout(() => {
          const { data, answers } = get();
          
          const heightM = (data.height || 170) / 100;
          const weightKg = data.weight || 70;
          const age = data.age || 30;
          const gender = data.gender || 'female';

          const bmi = weightKg / (heightM * heightM);
          
          let bmr = 10 * weightKg + 6.25 * (heightM * 100) - 5 * age;
          bmr = gender === 'male' ? bmr + 5 : bmr - 161;

          let fatPercentage = 1.2 * bmi + 0.23 * age - 5.4;
          if (gender === 'male') fatPercentage -= 10.8;

          let baseScore = 70;
          if (bmi > 25 || bmi < 18.5) baseScore -= 10;
          if (age > 40) baseScore -= 5;
          if (age > 60) baseScore -= 5;
          
          const calcScore = (modifier: number) => Math.min(100, Math.max(0, baseScore + modifier));

          const actLvl = data.activityLevel || answers.activityLevel;
          const isSedentary = actLvl === 'sedentary';
          const isActive = actLvl === 'active' || actLvl === 'moderate';
          
          const sleepHours = answers.sleep_hours || 7;
          const stressLvl = answers.stress_level || 5;

          const pillars: PillarScore[] = [
            { id: 'weight', label: 'Weight Management', icon: '⚖️', score: calcScore(bmi >= 18.5 && bmi <= 24.9 ? +20 : -15) },
            { id: 'muscle', label: 'Muscle Gain & Tone', icon: '💪', score: calcScore(isActive ? +20 : isSedentary ? -20 : 0) },
            { id: 'sleep', label: 'Sleep & Recovery', icon: '😴', score: calcScore(sleepHours >= 7 && sleepHours <= 9 ? +15 : sleepHours < 6 ? -25 : -5) },
            { id: 'nutrition', label: 'Nutrition', icon: '🥗', score: calcScore(answers.diet_type?.includes('none') ? -10 : +5) },
            { id: 'hydration', label: 'Hydration', icon: '💧', score: calcScore(0) },
            { id: 'gut', label: 'Gut Health', icon: '🦠', score: calcScore(answers.gut_symptom?.includes('none') ? +15 : -15) },
            { id: 'stress', label: 'Stress & Mental Wellbeing', icon: '😌', score: calcScore(stressLvl <= 3 ? +15 : stressLvl >= 7 ? -25 : 0) },
            { id: 'energy', label: 'Energy Levels', icon: '⚡', score: calcScore(answers.energy_dip === 'never' ? +20 : -10) },
            { id: 'heart', label: 'Heart & Metabolic', icon: '❤️', score: calcScore(isActive && bmi < 25 ? +15 : -10) },
            { id: 'activity', label: 'Physical Activity', icon: '🏃', score: calcScore(isActive ? +25 : isSedentary ? -25 : +5) },
            { id: 'aging', label: 'Healthy Aging', icon: '🦴', score: calcScore(age < 35 ? +10 : isActive ? +15 : -10) },
          ];

          if (gender === 'female') {
            pillars.push({ id: 'women', label: 'Women\'s Wellness', icon: '👩', score: calcScore(answers.cycle_status === 'regular' ? +15 : -5) });
          }

          const goal = data.goal || 'weight';
          let targetPillarIds: string[] = [];

          switch (goal) {
            case 'weight':
            case 'gain':
              targetPillarIds = ['weight', 'nutrition', 'energy', 'activity'];
              break;
            case 'muscle':
            case 'fitness':
              targetPillarIds = ['muscle', 'nutrition', 'activity', 'sleep'];
              break;
            case 'energy':
            case 'sleep':
              targetPillarIds = ['energy', 'sleep', 'stress', 'nutrition'];
              break;
            case 'stress':
              targetPillarIds = ['stress', 'sleep', 'gut', 'energy'];
              break;
            case 'gut':
            case 'nutrition':
              targetPillarIds = ['gut', 'nutrition', 'hydration', 'energy'];
              break;
            case 'heart':
            case 'sugar':
              targetPillarIds = ['heart', 'weight', 'nutrition', 'activity'];
              break;
            case 'womens':
              targetPillarIds = ['women', 'stress', 'sleep', 'weight'];
              break;
            case 'aging':
            case 'immunity':
              targetPillarIds = ['aging', 'nutrition', 'activity', 'sleep'];
              break;
            default:
              targetPillarIds = ['weight', 'nutrition', 'energy', 'sleep'];
          }

          const targetPillars = pillars.filter(p => targetPillarIds.includes(p.id));

          const targetWeightKg = 22 * (heightM * heightM);
          const minIdealKg = 18.5 * (heightM * heightM);
          const maxIdealKg = 24.9 * (heightM * heightM);
          
          let weightDiff = 0;
          let direction: 'lose' | 'gain' | 'maintain' = 'maintain';

          if (weightKg > maxIdealKg) {
            weightDiff = weightKg - targetWeightKg;
            direction = 'lose';
          } else if (weightKg < minIdealKg) {
            weightDiff = targetWeightKg - weightKg;
            direction = 'gain';
          } else {
            weightDiff = 0;
            direction = 'maintain';
          }

          set({
            calculatedMetrics: {
              bmi: bmi.toFixed(1),
              bmr: Math.round(bmr),
              fatPercentage: fatPercentage.toFixed(1),
              idealWeight: `${Math.round(minIdealKg)} - ${Math.round(maxIdealKg)} kg`,
              pillarScores: pillars,
              targetPillars: targetPillars,
              weightDifferenceKg: Math.round(weightDiff),
              weightDirection: direction
            },
            runtimeState: 'REPORT_READY'
          });
        }, 1500);
      },

      reset: () => {
        set({
          runtimeState: 'GOAL_SELECTION',
          // Do NOT clear data here so we keep the baseline profile for next time
          // Just clear answers and metrics
          answers: {},
          calculatedMetrics: null,
          currentQuestionIndex: 0,
        });
      },
    }),
    {
      name: 'welliqo-assessment-storage',
      // Only persist the baseline data so users can pick up easily, don't persist runtime state
      partialize: (state) => ({ data: state.data }),
    }
  )
);
