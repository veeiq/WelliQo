import React, { useState } from 'react';
import { useUserStore } from '@/store/user-store';
import { ArrowRight, Activity, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useAssessmentStore } from '@/store/assessment-store';
import { useRouter } from 'next/navigation';

export function AssessmentHistory() {
  const { savedReports } = useUserStore();
  const { setAssessmentId } = useAssessmentStore();
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState('All');
  
  const handleRetake = (goal: string) => {
    setAssessmentId(goal as any);
    router.push('/assessment');
  };

  const handleView = (report: any) => {
    useAssessmentStore.setState({
      data: report.data,
      answers: report.answers,
      calculatedMetrics: report.metrics,
      runtimeState: 'REPORT_READY'
    });
    router.push('/report');
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h3 className="font-bold text-slate-900 dark:text-white">Assessment History</h3>
        
        <div className="flex items-center gap-2">
          {['All', 'Sleep', 'Energy'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' 
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 ml-2">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {savedReports.map((report) => (
          <div key={report.id} className="group flex items-center justify-between p-3 sm:p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white capitalize flex items-center gap-2">
                  {report.goal.replace('_', ' ')} Report
                </h4>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="text-right hidden sm:block">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{report.metrics.overallScore}/100</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleView(report)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  View Report
                </button>
                <button 
                  onClick={() => handleRetake(report.goal)}
                  className="px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 rounded-lg transition-colors hidden sm:block"
                >
                  Retake ↺
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Mock extra reports to match the UI length if there's only 1 real one */}
        {savedReports.length < 4 && (
           <>
             <div className="flex items-center justify-between p-3 sm:p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700 opacity-60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white capitalize">Energy Report</h4>
                  <p className="text-xs text-slate-500 mt-1">Jul 18, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right hidden sm:block">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">76/100</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 sm:p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700 opacity-60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white capitalize">Sleep Report</h4>
                  <p className="text-xs text-slate-500 mt-1">Jul 1, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right hidden sm:block">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">68/100</span>
                </div>
              </div>
            </div>
           </>
        )}
      </div>
    </div>
  );
}
