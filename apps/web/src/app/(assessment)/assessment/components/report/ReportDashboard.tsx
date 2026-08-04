import React, { useState } from 'react';
import { useAssessmentStore } from '../../../../../store/assessment-store';
import { CurrentVsIdeal } from './CurrentVsIdeal';
import { CoachCallToAction } from './CoachCallToAction';
import { SaveReportModal } from './SaveReportModal';
import { CheckCircle2, AlertTriangle, ChevronRight, Activity, Beaker, Leaf, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

export function ReportDashboard() {
  const { calculatedMetrics, data, answers, reset, setGoal } = useAssessmentStore();
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  // Exit intent detection (simple beforeunload for refreshing/closing tab)
  React.useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ''; // Required for Chrome to show a prompt
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  if (!calculatedMetrics) return null;

  const {
    overallScore,
    scoreMeaning,
    timeline,
    strengths,
    improvements,
    scoreExplanation,
    priorityPlan,
    nutritionPlan,
    recommendedAssessments
  } = calculatedMetrics;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto space-y-12 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-700 relative">
      
      {/* Header & Overall Score */}
      <div className="text-center space-y-6 pt-10">
        <div className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
          Your Personalized Blueprint
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
          Hi {data.name || 'there'}, your Wellness Score is <span className="text-emerald-600 dark:text-emerald-400">{overallScore}/100</span>
        </h1>
        <div className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg text-lg font-semibold mb-4">
          Status: {scoreMeaning}
        </div>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          We analyzed your profile to identify exactly what is holding you back and what you need to focus on right now.
        </p>
      </div>

      {/* Why did I get this score? */}
      {scoreExplanation && scoreExplanation.length > 0 && (
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-6 md:p-8 rounded-3xl max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Why did I get this score?
          </h3>
          <p className="text-red-700/80 dark:text-red-400/80 mb-4 text-sm md:text-base">
            Your score decreased mainly because:
          </p>
          <ul className="space-y-2">
            {scoreExplanation.map((finding, i) => (
              <li key={i} className="flex items-center gap-3 text-red-900 dark:text-red-300 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                {finding.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Biggest Opportunity */}
      {calculatedMetrics.biggestOpportunity && calculatedMetrics.biggestOpportunityExplanation && (
        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 p-6 md:p-8 rounded-3xl max-w-2xl mx-auto mt-6">
          <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-2 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Biggest Opportunity: {calculatedMetrics.biggestOpportunity}
          </h3>
          <div className="mt-4 pt-4 border-t border-emerald-200/50 dark:border-emerald-800/50">
            <span className="font-bold text-emerald-900 dark:text-emerald-300 block mb-2">Why this matters most:</span>
            <p className="text-emerald-800 dark:text-emerald-400/90 text-sm md:text-base leading-relaxed">
              {calculatedMetrics.biggestOpportunityExplanation}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-12">
        {/* Body Summary */}
        <CurrentVsIdeal metrics={calculatedMetrics} data={data} answers={answers} timeline={timeline} />
        
        {/* Strengths & Improvements */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-500">✨</span> Top Strengths
            </h3>
            <ul className="space-y-4">
              {strengths.map((str, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-lg leading-tight pt-0.5">{str}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-amber-500">⚠️</span> Improvement Areas
            </h3>
            <ul className="space-y-4">
              {improvements.map((imp, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                  <span className="text-lg leading-tight pt-0.5">{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nutrition Recommendations */}
        {nutritionPlan && (
          <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-slate-800 dark:border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-emerald-900/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Leaf className="w-8 h-8 text-emerald-400" />
                Targeted Nutrition Profile
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-emerald-300 font-semibold mb-2">Protein Strategy</div>
                  <div className="text-lg">{nutritionPlan.protein}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-emerald-300 font-semibold mb-2">Carb Strategy</div>
                  <div className="text-lg">{nutritionPlan.carbs}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-emerald-300 font-semibold mb-2">Fat Strategy</div>
                  <div className="text-lg">{nutritionPlan.fats}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-emerald-200">Recommended Natural Sources</h4>
                  <ul className="space-y-2">
                    {nutritionPlan.naturalSources.map((src, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {src}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
                  <h4 className="text-xl font-semibold mb-4 text-emerald-200 flex items-center gap-2">
                    <Beaker className="w-5 h-5" />
                    Targeted Supplements
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {nutritionPlan.supplements.map((sup, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {sup}
                      </li>
                    ))}
                  </ul>
                  <a href="#coach-cta" className="inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                    Consult a Wellness Coach for exact dosages →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Priority Plan */}
        <div>
          <div className="text-center mb-8">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              Your Personalized Priority Plan
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              The highest impact actions you need to take right now.
            </p>
          </div>
          
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {priorityPlan.map((action, index) => (
              <a href="#coach-cta" key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-lg">
                  {index + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm group-hover:shadow-lg group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-all text-left">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-block px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                          {action.priority} Priority
                        </div>
                        {action.difficulty && (
                          <div className={cn(
                            "inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                            action.difficulty === 'Easy' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                            action.difficulty === 'Moderate' ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                            "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          )}>
                            Difficulty: {action.difficulty}
                          </div>
                        )}
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">{action.title}</h4>
                      
                      <div className="space-y-4 text-sm">
                        {action.why && (
                          <div>
                            <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">Why this matters</span>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{action.why}</p>
                          </div>
                        )}
                        {action.action && (
                          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                            <span className="font-semibold text-emerald-900 dark:text-emerald-300 block mb-1">Action</span>
                            <p className="text-emerald-800 dark:text-emerald-400/90 leading-relaxed">{action.action}</p>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {action.expectedBenefit && (
                            <div>
                              <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">Expected Benefit</span>
                              <p className="text-slate-600 dark:text-slate-400">{action.expectedBenefit}</p>
                            </div>
                          )}
                          {action.timeline && (
                            <div>
                              <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">Timeline</span>
                              <p className="text-slate-600 dark:text-slate-400">{action.timeline}</p>
                            </div>
                          )}
                        </div>

                        {action.successIndicators && action.successIndicators.length > 0 && (
                          <div className="pt-2">
                            <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-2">Success Indicators</span>
                            <ul className="space-y-2">
                              {action.successIndicators.map((indicator, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                  <span className="text-emerald-500 mt-0.5">✓</span>
                                  {indicator}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Recommended Assessments */}
        {recommendedAssessments.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-emerald-500" />
              Recommended Follow-Up Assessments
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recommendedAssessments.map((assessment) => (
                <button 
                  key={assessment.id} 
                  onClick={() => setGoal(assessment.id as any)}
                  className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer w-full"
                >
                   <div className="text-3xl">{assessment.icon}</div>
                   <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{assessment.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* The Solution & Call to Action */}
        <div id="coach-cta" className="scroll-mt-24">
          <CoachCallToAction />
        </div>

      </div>

      {/* Restart Button */}
      <div className="flex justify-center mt-12 pb-12">
        <button
          onClick={reset}
          className="px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-semibold transition-all shadow-sm"
        >
          Retake Assessment
        </button>
      </div>
      </div>

      {/* Sticky Save Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-40 animate-in slide-in-from-bottom-24 duration-1000 delay-500">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Save your AI Report
            </h4>
            <p className="text-xs text-slate-500 mt-1">Don't lose your insights. Access your personalized plan anytime.</p>
          </div>
          <button 
            onClick={() => setIsSaveModalOpen(true)}
            className="flex-1 sm:flex-none px-8 py-3.5 bg-emerald-600 text-white hover:bg-emerald-500 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
          >
            Unlock My Vault
          </button>
        </div>
      </div>

      <SaveReportModal 
        isOpen={isSaveModalOpen} 
        onClose={() => setIsSaveModalOpen(false)} 
      />
    </>
  );
}
