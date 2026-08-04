import React from 'react';
import { useUserStore } from '@/store/user-store';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function GoalsProgress() {
  const { activeGoals } = useUserStore();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white mb-6">Goals Progress</h3>
        
        <div className="space-y-6">
          {activeGoals.map((goal) => {
            const percentage = Math.round((goal.current / goal.target) * 100);
            
            return (
              <div key={goal.id}>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{goal.title}</h4>
                <div className="flex justify-between text-xs text-slate-500 font-medium mb-2">
                  <span>{goal.subtitle}</span>
                  <span>{percentage}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
        <Link href="#" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
          View All Goals <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
