import React from 'react';
import { ArrowRight, ChevronDown, ArrowUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function CompareReports() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-900 dark:text-white">Compare Reports</h3>
          <button className="flex items-center gap-1 text-sm font-medium text-slate-500 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
            Weight Report <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-[1.5fr_0.5fr_1fr] gap-4 mb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800">
          <div>Metric</div>
          <div className="text-center">VS</div>
          <div className="text-right flex flex-col">
            <span>Aug 2026</span>
            <span className="text-[10px] text-emerald-500 font-normal">(Current)</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-[1.5fr_0.5fr_1fr] gap-4 items-center">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Overall Score</span>
            <span className="text-sm text-center font-bold text-slate-400">77</span>
            <div className="text-right flex items-center justify-end gap-2">
               <span className="font-bold text-slate-900 dark:text-white">82</span>
               <span className="flex items-center text-xs font-bold text-emerald-500"><ArrowUp className="w-3 h-3"/> 5</span>
            </div>
          </div>
          
          <div className="grid grid-cols-[1.5fr_0.5fr_1fr] gap-4 items-center">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Body Fat %</span>
            <span className="text-sm text-center font-bold text-slate-400">28%</span>
            <div className="text-right flex items-center justify-end gap-2">
               <span className="font-bold text-slate-900 dark:text-white">24%</span>
               <span className="flex items-center text-xs font-bold text-emerald-500"><ArrowDown className="w-3 h-3"/> 4%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-[1.5fr_0.5fr_1fr] gap-4 items-center">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Muscle Mass</span>
            <span className="text-sm text-center font-bold text-slate-400">32 kg</span>
            <div className="text-right flex items-center justify-end gap-2">
               <span className="font-bold text-slate-900 dark:text-white">34.5 kg</span>
               <span className="flex items-center text-xs font-bold text-emerald-500"><ArrowUp className="w-3 h-3"/> 2.5 kg</span>
            </div>
          </div>
          
          <div className="grid grid-cols-[1.5fr_0.5fr_1fr] gap-4 items-center">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Metabolism</span>
            <span className="text-sm text-center font-bold text-slate-400">1520</span>
            <div className="text-right flex items-center justify-end gap-2">
               <span className="font-bold text-slate-900 dark:text-white">1620</span>
               <span className="flex items-center text-xs font-bold text-emerald-500"><ArrowUp className="w-3 h-3"/> 100</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
        <Link href="#" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 flex items-center gap-1">
          View Full Comparison <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
