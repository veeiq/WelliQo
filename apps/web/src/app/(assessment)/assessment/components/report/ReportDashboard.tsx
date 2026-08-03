import React from 'react';
import { useAssessmentStore } from '../../../../../store/assessment-store';
import { PillarScores } from './PillarScores';
import { CurrentVsIdeal } from './CurrentVsIdeal';
import { PersonalizedPlan } from './PersonalizedPlan';
import { HubUpsellCards } from './HubUpsellCards';

export function ReportDashboard() {
  const { calculatedMetrics, data, answers, reset } = useAssessmentStore();

  if (!calculatedMetrics) return null;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Header Section */}
      <div className="text-center space-y-4 pt-10">
        <div className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
          Your Personalized Blueprint
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Hi {answers.name || 'there'}, here's your <span className="text-emerald-600 dark:text-emerald-400">Wellness Report</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          We analyzed your {data.goal} profile across 12 critical pillars of health to create your optimal path forward.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Scores & Metrics */}
        <div className="lg:col-span-2 space-y-8">
          <PillarScores metrics={calculatedMetrics} />
          <CurrentVsIdeal metrics={calculatedMetrics} data={data} answers={answers} />
        </div>

        {/* Right Column: Plans & Hubs */}
        <div className="space-y-8">
          <PersonalizedPlan metrics={calculatedMetrics} answers={answers} />
          <HubUpsellCards />
        </div>

      </div>

      {/* Restart Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={reset}
          className="px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-semibold transition-all shadow-sm"
        >
          Retake Assessment
        </button>
      </div>

    </div>
  );
}
