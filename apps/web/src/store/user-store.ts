import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AssessmentData, CalculatedMetrics } from './assessment-store';

export interface SavedReport {
  id: string;
  date: string;
  goal: string;
  data: AssessmentData;
  answers: Record<string, any>;
  metrics: CalculatedMetrics;
}

export interface UserProfile {
  phone: string;
  email?: string;
  name: string;
  password?: string;
}

export interface GoalProgress {
  id: string;
  title: string;
  subtitle: string;
  current: number;
  target: number;
  unit: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

export interface TrendPoint {
  month: string;
  score: number;
}

interface UserState {
  profile: UserProfile | null;
  savedReports: SavedReport[];
  
  // Mock gamification/history data for prototype
  streak: number;
  wellnessAgeOffset: number; // e.g. -5 means 5 years younger
  activeGoals: GoalProgress[];
  achievements: Achievement[];
  scoreTrend: TrendPoint[];
}

interface UserActions {
  login: (phone: string, password?: string, email?: string, name?: string) => void;
  logout: () => void;
  saveReport: (report: Omit<SavedReport, 'id' | 'date'>) => string;
  deleteReport: (id: string) => void;
}

export const useUserStore = create<UserState & UserActions>()(
  persist(
    (set, get) => ({
      profile: null,
      savedReports: [],
      streak: 6,
      wellnessAgeOffset: -5,
      activeGoals: [
        { id: '1', title: 'Lose Weight', subtitle: '4.2 kg completed', current: 4.2, target: 8, unit: 'kg' },
        { id: '2', title: 'Build Strength', subtitle: 'Workout: 4x per week', current: 2, target: 4, unit: 'workouts' },
        { id: '3', title: 'Better Sleep', subtitle: '7-8 hours every night', current: 5, target: 7, unit: 'days' }
      ],
      achievements: [
        { id: '1', title: '5 Assessments', subtitle: 'Completed', icon: '🏅', color: 'from-blue-400 to-indigo-500' },
        { id: '2', title: '7 Day', subtitle: 'Streak', icon: '🔥', color: 'from-orange-400 to-red-500' },
        { id: '3', title: 'Nutrition', subtitle: 'Master', icon: '🥗', color: 'from-emerald-400 to-green-500' },
        { id: '4', title: 'Hydration', subtitle: 'Hero', icon: '💧', color: 'from-sky-400 to-blue-500' }
      ],
      scoreTrend: [
        { month: 'Mar', score: 71 },
        { month: 'Apr', score: 74 },
        { month: 'May', score: 76 },
        { month: 'Jun', score: 79 },
        { month: 'Jul', score: 82 },
        { month: 'Aug', score: 82 }
      ],

      login: (phone, password, email, name = 'User') => set({
        profile: { phone, email, name, password }
      }),

      logout: () => set({
        profile: null,
        savedReports: []
      }),

      saveReport: (reportData) => {
        const newReport: SavedReport = {
          ...reportData,
          id: Math.random().toString(36).substring(2, 9) + Date.now().toString(36),
          date: new Date().toISOString(),
        };

        set((state) => ({
          savedReports: [newReport, ...state.savedReports],
          streak: state.streak + 1, // gamification mock increment
        }));

        return newReport.id;
      },

      deleteReport: (id) => set((state) => ({
        savedReports: state.savedReports.filter(r => r.id !== id)
      }))
    }),
    {
      name: 'welliqo-user-storage',
    }
  )
);
