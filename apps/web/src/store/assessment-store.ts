import { create } from 'zustand';

export type SimpleAssessmentState = 'GOAL_SELECTION' | 'QUESTIONNAIRE' | 'CALCULATING' | 'REPORT_READY';

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
  score: number; // 0 - 100
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
  data: AssessmentData; // Baseline
  answers: Record<string, any>; // Dynamic answers
  calculatedMetrics: CalculatedMetrics | null;
  currentQuestionIndex: number;
}

interface AssessmentActions {
  setGoal: (goal: AssessmentData['goal']) => void;
  updateData: <K extends keyof AssessmentData>(key: K, value: AssessmentData[K]) => void;
  recordAnswer: (questionId: string, value: any) => void;
  nextQuestion: (totalQuestions: number) => void;
  prevQuestion: () => void;
  submitQuestionnaire: () => void;
  reset: () => void;
}

export const useAssessmentStore = create<AssessmentState & AssessmentActions>((set, get) => ({
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

  setGoal: (goal) => set((state) => ({
    data: { ...state.data, goal },
    runtimeState: 'QUESTIONNAIRE',
    currentQuestionIndex: 0,
    answers: {},
  })),

  updateData: (key, value) => set((state) => ({
    data: { ...state.data, [key]: value },
  })),

  recordAnswer: (questionId, value) => set((state) => {
    // If it's a baseline metric, also sync it to data for calculation
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

  prevQuestion: () => {
    const { currentQuestionIndex } = get();
    if (currentQuestionIndex > 0) {
      set({ currentQuestionIndex: currentQuestionIndex - 1 });
    } else {
      // Go back to goal selection
      set({ runtimeState: 'GOAL_SELECTION' });
    }
  },

  submitQuestionnaire: async () => {
    set({ runtimeState: 'CALCULATING' });
    
    // Simulate a brief calculation delay for premium feel
    setTimeout(() => {
      const { data, answers } = get();
      
      // Basic fallback logic
      const heightM = (data.height || 170) / 100;
      const weightKg = data.weight || 70;
      const age = data.age || 30;
      const gender = data.gender || 'female';

      const bmi = weightKg / (heightM * heightM);
      
      // Mifflin-St Jeor Equation
      let bmr = 10 * weightKg + 6.25 * (heightM * 100) - 5 * age;
      bmr = gender === 'male' ? bmr + 5 : bmr - 161;

      // Simple body fat estimation (Deurenberg)
      let fatPercentage = 1.2 * bmi + 0.23 * age - 5.4;
      if (gender === 'male') fatPercentage -= 10.8;

      // Calculate the 12 Pillars
      // Initialize with base scores based on age and basic BMI
      let baseScore = 70;
      if (bmi > 25 || bmi < 18.5) baseScore -= 10;
      if (age > 40) baseScore -= 5;
      if (age > 60) baseScore -= 5;
      
      const calcScore = (modifier: number) => Math.min(100, Math.max(0, baseScore + modifier));

      // Specific Modifiers from answers
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
        { id: 'hydration', label: 'Hydration', icon: '💧', score: calcScore(0) }, // Default fallback
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

      // 1. Identify Target Pillars based on selected goal
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

      // 2. Calculate the Weight Gap (Current vs Ideal)
      // Standard healthy BMI is 18.5 to 24.9.
      // Target BMI is ~22 for calculating the exact difference.
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
      calculatedMetrics: null,
    });
  },
}));
