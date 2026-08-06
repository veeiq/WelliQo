"use client";

import { CreditCard, CheckCircle2 } from "lucide-react";

export function Membership() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
          <CreditCard className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Membership</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Current Plan */}
        <div className="rounded-2xl border-2 border-emerald-500 relative overflow-hidden bg-white dark:bg-slate-900 flex flex-col">
          <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Current Plan
          </div>
          <div className="p-6 flex-1">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Free</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Essential wellness tracking and assessments.</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                Unlimited basic assessments
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                Wellness score tracking
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                Access to Health Library
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex flex-col opacity-80">
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Premium</h3>
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">Coming Soon</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Advanced insights and personalized coaching.</p>
            
            <ul className="space-y-3 mb-6 flex-1">
              <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                Advanced biomarkers & integrations
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                1-on-1 expert coaching
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                Premium meal & fitness plans
              </li>
            </ul>
            
            <button disabled className="w-full py-3 bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-xl font-bold cursor-not-allowed">
              Upgrade to Premium
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
