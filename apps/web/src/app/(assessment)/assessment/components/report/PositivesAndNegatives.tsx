import React from 'react';
import { CalculatedMetrics, AssessmentData } from '../../../../../store/assessment-store';

export function PositivesAndNegatives({ answers, data }: { answers: Record<string, any>, data: AssessmentData }) {
  
  // Simple heuristic logic to generate insights
  const positives = [];
  const negatives = [];

  if (answers.sleep_hours >= 7) {
    positives.push("You're getting adequate sleep, which is critical for hormone balance.");
  } else {
    negatives.push("Your sleep is lacking, which spikes cortisol and makes fat loss harder.");
  }

  if (answers.energy_dip === 'never') {
    positives.push("Your energy levels remain stable throughout the day.");
  } else if (answers.energy_dip) {
    negatives.push("You experience energy crashes, suggesting blood sugar instability.");
  }

  if (data.activityLevel === 'active' || data.activityLevel === 'very_active') {
    positives.push("Your active lifestyle gives you a great baseline metabolism.");
  } else if (data.activityLevel === 'sedentary') {
    negatives.push("Your sedentary lifestyle is slowing down your metabolic rate.");
  }

  // Fallbacks if not enough data
  if (positives.length === 0) positives.push("You've taken the first step by assessing your health.");
  if (negatives.length === 0) negatives.push("Small nutritional adjustments could optimize your results.");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* What you're doing right */}
      <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-3xl p-6 md:p-8 border border-emerald-100 dark:border-emerald-900/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-50">What you're doing right</h3>
        </div>
        <ul className="space-y-4">
          {positives.slice(0, 2).map((text, i) => (
            <li key={i} className="flex gap-3 text-emerald-800 dark:text-emerald-200/80">
              <span className="text-emerald-500 mt-1">•</span>
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Where you need help */}
      <div className="bg-amber-50 dark:bg-amber-950/20 rounded-3xl p-6 md:p-8 border border-amber-100 dark:border-amber-900/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-amber-900 dark:text-amber-50">What's holding you back</h3>
        </div>
        <ul className="space-y-4">
          {negatives.slice(0, 2).map((text, i) => (
            <li key={i} className="flex gap-3 text-amber-800 dark:text-amber-200/80">
              <span className="text-amber-500 mt-1">•</span>
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
