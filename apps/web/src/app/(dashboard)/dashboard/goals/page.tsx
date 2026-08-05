import { getUserSettings } from "../actions";
import Link from "next/link";
import { Target, TrendingUp, Edit3 } from "lucide-react";

export default async function GoalsPage() {
  const { profile } = await getUserSettings();

  const goals = profile?.goals || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            My Goals
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Track and manage your primary wellness objectives.</p>
        </div>
        <Link 
          href="/dashboard/profile"
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
        >
          <Edit3 className="w-4 h-4" /> Edit Goals
        </Link>
      </div>

      {goals.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center max-w-md mx-auto py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
          <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
            <Target className="w-10 h-10 text-emerald-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No goals set</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 px-4">
            Setting clear goals is the first step to achieving them. Define what you want to accomplish on your wellness journey.
          </p>
          <Link 
            href="/dashboard/profile" 
            className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-500 transition-colors"
          >
            Set Your First Goal
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 capitalize">
                {goal.replace(/-/g, ' ')}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Active Focus Area
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
