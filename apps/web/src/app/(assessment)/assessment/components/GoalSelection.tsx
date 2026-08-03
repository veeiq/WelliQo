import React, { useState } from 'react';
import { useAssessmentStore } from '@/store/assessment-store';

const GOALS = [
  { id: 'weight', label: 'Lose Weight & Burn Fat', icon: '📉', color: 'from-blue-400 to-indigo-500', shadow: 'shadow-blue-500/20' },
  { id: 'gain', label: 'Healthy Weight Gain', icon: '📈', color: 'from-sky-400 to-blue-500', shadow: 'shadow-sky-500/20' },
  { id: 'muscle', label: 'Build Muscle & Tone Up', icon: '💪', color: 'from-indigo-400 to-violet-500', shadow: 'shadow-indigo-500/20' },
  { id: 'energy', label: 'Boost Daily Energy', icon: '⚡', color: 'from-amber-400 to-orange-500', shadow: 'shadow-orange-500/20' },
  { id: 'sleep', label: 'Improve Sleep Quality', icon: '😴', color: 'from-violet-400 to-purple-500', shadow: 'shadow-violet-500/20' },
  { id: 'stress', label: 'Reduce Stress & Anxiety', icon: '🧘‍♂️', color: 'from-purple-400 to-fuchsia-500', shadow: 'shadow-purple-500/20' },
  { id: 'nutrition', label: 'Better Eating Habits', icon: '🥗', color: 'from-emerald-400 to-green-500', shadow: 'shadow-emerald-500/20' },
  { id: 'gut', label: 'Improve Gut Health', icon: '🦠', color: 'from-teal-400 to-cyan-500', shadow: 'shadow-cyan-500/20' },
  { id: 'hydration', label: 'Optimize Hydration', icon: '💧', color: 'from-cyan-400 to-blue-500', shadow: 'shadow-cyan-500/20' },
  { id: 'heart', label: 'Heart & Metabolic Health', icon: '❤️', color: 'from-red-400 to-rose-500', shadow: 'shadow-red-500/20' },
  { id: 'sugar', label: 'Blood Sugar Balance', icon: '🩸', color: 'from-rose-400 to-red-500', shadow: 'shadow-rose-500/20' },
  { id: 'womens', label: "Women's Hormone Health", icon: '🌸', color: 'from-pink-400 to-rose-500', shadow: 'shadow-pink-500/20' },
  { id: 'aging', label: 'Healthy Aging & Joints', icon: '🦴', color: 'from-orange-400 to-amber-500', shadow: 'shadow-orange-500/20' },
  { id: 'fitness', label: 'Active & Fit Lifestyle', icon: '🏃‍♂️', color: 'from-emerald-500 to-teal-500', shadow: 'shadow-emerald-500/20' },
  { id: 'immunity', label: 'Stronger Immunity', icon: '🛡️', color: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-500/20' },
];

export function GoalSelection() {
  const setGoal = useAssessmentStore((state) => state.setGoal);

  return (
    <div className="flex-1 flex flex-col pt-8 md:pt-16 px-4 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <div className="mb-12 text-center animate-in fade-in zoom-in-95 duration-1000 delay-150 fill-mode-both">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.2] text-balance">
            What brings you here today?
          </h2>
          <p className="mt-4 text-[19px] text-slate-500 dark:text-slate-400 font-medium">
            Select the area you'd most like to improve.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both px-2">
          {GOALS.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setGoal(goal.id)}
              className={`group relative flex flex-col items-center justify-center gap-4 p-6 md:p-8 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 overflow-hidden text-center hover:${goal.shadow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:bg-transparent transition-colors duration-300">
                <span className="text-5xl group-hover:scale-125 transition-transform duration-500 ease-out animate-bounce-in">{goal.icon}</span>
              </div>
              
              <span className="text-[17px] font-semibold text-slate-700 dark:text-slate-200 relative z-10 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {goal.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
