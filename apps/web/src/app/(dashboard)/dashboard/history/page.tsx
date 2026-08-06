import { getUserHistory } from "../actions";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { AssessmentRegistry } from "@/assessments/registry";

export default async function AssessmentHistoryPage() {
  const history = await getUserHistory();

  if (!history || history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">No history yet.</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Complete your first wellness assessment to see your progress history here.
        </p>
        <Link 
          href={AssessmentRegistry.getDirectoryRoute()} 
          className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2"
        >
          <PlayCircle className="w-5 h-5" />
          Start Assessment
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Assessment History
        </h1>
        <p className="text-slate-600 dark:text-slate-400">Track your progress and revisit past wellness reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {history.map((assessment) => {
          let score = 0;
          try {
            if (assessment.clinicalReport && typeof assessment.clinicalReport === 'object' && 'overallScore' in assessment.clinicalReport) {
              score = (assessment.clinicalReport as any).overallScore;
            }
          } catch (e) {
            // ignore
          }

          return (
            <div key={assessment.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm flex flex-col hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Completed
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(assessment.createdAt))}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {assessment.assessmentName || 'General Wellness'}
                </h3>
                
                <div className="mt-6 flex items-end gap-2">
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Score:</div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white">{score || '--'}</div>
                </div>
              </div>
              
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <Link href={`/dashboard/report/${assessment.id}`} className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-semibold group">
                  View Full Report
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
