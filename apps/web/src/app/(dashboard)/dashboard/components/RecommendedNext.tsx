import React from 'react';
import { Target, Zap, ShieldCheck, Moon, ArrowRight } from 'lucide-react';
import { useAssessmentStore } from '@/store/assessment-store';
import { useRouter } from 'next/navigation';
import { AssessmentRegistry } from '@/assessments/registry';

export function RecommendedNext() {
  const router = useRouter();

  const handleStart = () => {
    // Ideally this asks the Registry what to do. For MVP, we hardcode the intent but use the Registry for the route.
    router.push(AssessmentRegistry.getRoute('sleep'));
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white mb-6">Recommended Next</h3>
        
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-500 flex-shrink-0">
            <Moon className="w-7 h-7" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-lg">Sleep Assessment</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Improve your sleep score and boost your recovery.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4 text-sm font-semibold">
          <span className="text-slate-500">Estimated Impact</span>
          <span className="text-emerald-600">+7 Points</span>
        </div>
        <button 
          onClick={handleStart}
          className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20"
        >
          Take Assessment <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
