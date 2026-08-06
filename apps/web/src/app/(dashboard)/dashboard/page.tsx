import { getUserDashboardData } from "./actions";
import { getDailyFocus } from "@/lib/knowledge-engine";
import { quickActionsConfig } from "../config/quick-actions";
import Link from "next/link";
import { 
  Activity, 
  ArrowRight, 
  BarChart2, 
  BookOpen, 
  PlayCircle, 
  PlusCircle, 
  Target 
} from "lucide-react";

export default async function DashboardOverview() {
  const { user, latestAssessment, profile } = await getUserDashboardData();
  const dailyFocus = user ? await getDailyFocus(user.id) : null;

  if (!latestAssessment) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-lg mx-auto">
        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
          <Activity className="w-12 h-12 text-slate-400 dark:text-slate-500" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">No assessments yet.</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Start your first wellness assessment to unlock your personalized dashboard and discover your unique insights.
        </p>
        <Link 
          href="/assessments" 
          className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-600/20 flex items-center gap-2"
        >
          <PlayCircle className="w-5 h-5" />
          Start Assessment
        </Link>
      </div>
    );
  }

  // Parse clinical report if possible for score, otherwise fallback to defaults
  let score = 0;
  try {
    if (latestAssessment.clinicalReport && typeof latestAssessment.clinicalReport === 'object' && 'overallScore' in latestAssessment.clinicalReport) {
      score = (latestAssessment.clinicalReport as any).overallScore;
    }
  } catch (e) {
    // ignore
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Welcome back, {user?.name?.split(' ')[0] || 'User'}
        </h1>
        <p className="text-slate-600 dark:text-slate-400">Here's your wellness overview for today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Latest Wellness Score */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Latest Wellness Score</h3>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black text-slate-900 dark:text-white">{score || '--'}</span>
              <span className="text-slate-500 mb-1">/100</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href={`/dashboard/report/${latestAssessment.id}`} className="text-emerald-600 dark:text-emerald-400 font-medium text-sm flex items-center hover:underline">
              View full report <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Your Current Goal */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Your Current Goal
            </h3>
            <p className="text-xl font-bold text-slate-900 dark:text-white">
              {profile?.goals?.[0] ? profile.goals[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'General Wellness'}
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/dashboard/profile" className="text-emerald-600 dark:text-emerald-400 font-medium text-sm flex items-center hover:underline">
              Update goals <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Today's Focus */}
        <div className="bg-emerald-600 dark:bg-emerald-900/50 rounded-2xl p-6 border border-emerald-500 dark:border-emerald-800 shadow-sm flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Activity className="w-24 h-24" />
          </div>
          <div className="relative z-10">
            <h3 className="text-sm font-semibold text-emerald-100 uppercase tracking-wider mb-2">Today's Focus: {dailyFocus?.habit?.title || 'Habit'}</h3>
            <p className="text-lg font-bold leading-tight line-clamp-3">
              {dailyFocus?.habit?.summary || 'Stay hydrated and aim for at least 8 hours of quality sleep tonight.'}
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-emerald-500/50 relative z-10">
            <Link href={`/health-library/habit/${dailyFocus?.habit?.id || ''}`} className="text-emerald-100 font-medium text-sm flex items-center hover:text-white transition-colors">
              View habit guide <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        
        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Quick Actions</h2>
          <div className="grid gap-3">
            {quickActionsConfig.map((action) => {
              const ActionIcon = action.icon;
              let bgColor, textColor;
              
              switch(action.color) {
                case 'emerald': 
                  bgColor = "bg-emerald-100 dark:bg-emerald-900/30"; 
                  textColor = "text-emerald-600 dark:text-emerald-400"; 
                  break;
                case 'blue': 
                  bgColor = "bg-blue-100 dark:bg-blue-900/30"; 
                  textColor = "text-blue-600 dark:text-blue-400"; 
                  break;
                case 'purple': 
                  bgColor = "bg-purple-100 dark:bg-purple-900/30"; 
                  textColor = "text-purple-600 dark:text-purple-400"; 
                  break;
                case 'orange':
                  bgColor = "bg-orange-100 dark:bg-orange-900/30";
                  textColor = "text-orange-600 dark:text-orange-400";
                  break;
                default:
                  bgColor = "bg-slate-100 dark:bg-slate-900/30";
                  textColor = "text-slate-600 dark:text-slate-400";
              }

              const href = typeof action.href === 'function' 
                ? action.href({ latestAssessmentId: latestAssessment.id })
                : action.href;

              return (
                <Link key={action.id} href={href} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${bgColor} ${textColor} flex items-center justify-center`}>
                      <ActionIcon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{action.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Continue Learning */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Continue Learning</h2>
            <Link href="/health-library" className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline">
              View all
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dailyFocus?.article && (
              <Link href={`/health-library/article/${dailyFocus.article.id}`} className="block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group">
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative">
                  <img src={dailyFocus.article.thumbnail || "/logo.jpg"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Article thumbnail" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{dailyFocus.article.category || 'Education'}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mt-1 mb-2 group-hover:text-emerald-600 transition-colors">{dailyFocus.article.title || 'Loading...'}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{dailyFocus.article.summary}</p>
                </div>
              </Link>
            )}
            
            {dailyFocus?.recipe && (
              <Link href={`/health-library/recipe/${dailyFocus.recipe.id}`} className="block bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group">
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative">
                  <img src={dailyFocus.recipe.thumbnail || "/logo.jpg"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Recipe thumbnail" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">{dailyFocus.recipe.category || 'Nutrition'}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white mt-1 mb-2 group-hover:text-orange-600 transition-colors">{dailyFocus.recipe.title || 'Loading...'}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{dailyFocus.recipe.summary}</p>
                </div>
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
