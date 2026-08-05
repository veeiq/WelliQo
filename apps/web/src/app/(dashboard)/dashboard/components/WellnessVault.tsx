import React from 'react';
import { useUserStore } from '@/store/user-store';
import { Download, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function WellnessVault() {
  const { savedReports } = useUserStore();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-900 dark:text-white">Wellness Vault</h3>
          <Link href="#" className="text-sm font-semibold text-slate-500 hover:text-emerald-600 flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-3">
          {savedReports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 group-hover:text-emerald-600 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm capitalize flex items-center gap-2">
                    {report.goal.replace('_', ' ')} Report
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1 group-hover:text-emerald-600 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30">
                PDF
              </button>
            </div>
          ))}

          {/* Mock Reports for UI fullness if < 3 */}
          {savedReports.length < 3 && (
            <>
              <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 group-hover:text-emerald-600 transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Energy Report</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Jul 18, 2026</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 bg-slate-100 rounded-lg flex items-center gap-1">
                  PDF
                </button>
              </div>
              <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 group-hover:text-emerald-600 transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Sleep Report</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Jul 1, 2026</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 bg-slate-100 rounded-lg flex items-center gap-1">
                  PDF
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
        <button className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 flex items-center gap-2">
          <Download className="w-4 h-4" /> Export All Reports
        </button>
      </div>
    </div>
  );
}
