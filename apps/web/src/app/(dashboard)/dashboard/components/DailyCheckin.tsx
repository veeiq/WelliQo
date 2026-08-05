import React from 'react';
import { GlassWater, Moon, Activity, Zap, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export function DailyCheckin() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white mb-1">Daily Check-in</h3>
        <p className="text-slate-500 text-sm mb-6">Complete your daily check-in</p>
        
        <div className="grid grid-cols-4 gap-2 text-center">
          
          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">Energy</span>
            <div className="w-12 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex flex-col justify-end p-1 relative overflow-hidden border border-blue-100 dark:border-blue-900/50">
              <div className="w-full bg-blue-400 rounded-full flex items-center justify-center text-white pb-1" style={{ height: '40%' }}>
                <GlassWater className="w-4 h-4 mb-2" />
              </div>
            </div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-2">3/8</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">Water</span>
            <div className="w-12 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center relative border border-emerald-100 dark:border-emerald-900/50 text-emerald-600 cursor-pointer hover:bg-emerald-100 transition-colors">
              <span className="text-lg font-bold">7<span className="text-xs">g</span></span>
              <div className="absolute -bottom-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white border-2 border-white dark:border-slate-900 shadow-sm">
                +
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">Sleep</span>
            <div className="w-12 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center relative border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 cursor-pointer hover:bg-indigo-100 transition-colors">
              <span className="text-lg font-bold">7<span className="text-xs">h</span></span>
              <div className="absolute -bottom-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white border-2 border-white dark:border-slate-900 shadow-sm">
                +
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">Exercise</span>
            <div className="w-12 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center relative border border-slate-100 dark:border-slate-700 text-slate-400 cursor-pointer hover:bg-emerald-50 transition-colors group">
               <Check className="w-5 h-5 text-emerald-500 opacity-100" />
            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
        <Link href="#" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 flex items-center gap-1">
          View History <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
