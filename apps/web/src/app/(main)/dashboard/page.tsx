'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/user-store';
import { useAssessmentStore } from '@/store/assessment-store';
import { 
  LayoutDashboard, ClipboardList, FileText, Target, Users, BookOpen, 
  CalendarCheck, Lightbulb, Trophy, Settings, Search, Bell, ChevronDown,
  ArrowUp, Calendar, Flame, HelpCircle, User, Activity
} from 'lucide-react';
import Link from 'next/link';
import { GlobalProfileMenu } from '@/app/(assessment)/assessment/components/GlobalProfileMenu';
import { OverallWellness } from './components/OverallWellness';
import { TodaysFocus } from './components/TodaysFocus';
import { WellnessRadar } from './components/WellnessRadar';
import { GoalsProgress } from './components/GoalsProgress';
import { LatestInsights } from './components/LatestInsights';

import { AssessmentHistory } from './components/AssessmentHistory';
import { WellnessScoreTrend } from './components/WellnessScoreTrend';
import { RecommendedNext } from './components/RecommendedNext';
import { Achievements } from './components/Achievements';
import { ConnectCoach } from './components/ConnectCoach';
import { DailyCheckin } from './components/DailyCheckin';
import { CompareReports } from './components/CompareReports';
import { WellnessVault } from './components/WellnessVault';

export default function DashboardPage() {
  const router = useRouter();
  const { profile, savedReports, logout, streak, wellnessAgeOffset } = useUserStore();
  const { setGoal } = useAssessmentStore();

  useEffect(() => {
    if (!profile) {
      router.push('/');
    }
  }, [profile, router]);

  if (!profile) return null;

  const latestReport = savedReports.length > 0 ? savedReports[0] : null;
  const currentScore = latestReport ? latestReport.metrics.overallScore : 0;
  const actualAge = Number(latestReport?.data?.age) || 39;
  const wellnessAge = actualAge + wellnessAgeOffset;

  return (
    <div className="flex h-screen bg-[#f8fafc] dark:bg-slate-950 font-sans overflow-hidden">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden lg:flex h-full overflow-y-auto hide-scrollbar">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden shadow-sm">
            <img src="/logo.jpg" alt="WelliQo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            Welli<span className="text-emerald-500">Q</span>o
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-xl font-medium">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/dashboard/assessments" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <ClipboardList className="w-5 h-5" /> Assessments
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <FileText className="w-5 h-5" /> Reports
          </Link>
          <Link href="/dashboard/goals" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <Target className="w-5 h-5" /> Goals
          </Link>
          <Link href="/dashboard/coach" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <Users className="w-5 h-5" /> Coach
          </Link>
          <Link href="/dashboard/programs" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <BookOpen className="w-5 h-5" /> Programs
          </Link>
          <Link href="/dashboard/check-in" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <CalendarCheck className="w-5 h-5" /> Daily Check-in
          </Link>
          <Link href="/dashboard/insights" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <Lightbulb className="w-5 h-5" /> Insights
          </Link>
          <Link href="/dashboard/achievements" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <Trophy className="w-5 h-5" /> Achievements
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>

        <div className="p-6 mt-auto">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Upgrade to<br/>WelliQo Premium</h4>
            <ul className="text-xs text-slate-500 dark:text-slate-400 text-left space-y-2 mb-4">
              <li className="flex items-center gap-2">✓ Advanced Insights</li>
              <li className="flex items-center gap-2">✓ Priority Coach Access</li>
              <li className="flex items-center gap-2">✓ Custom Meal Plans</li>
            </ul>
            <button className="w-full py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
              Upgrade Now
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 w-full mt-4 text-sm text-slate-500 hover:text-slate-800 transition-colors font-medium">
            <HelpCircle className="w-4 h-4" /> Need Help?
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* TOP HEADER */}
        <header className="h-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-8 border-b border-slate-200 dark:border-slate-800 z-10 sticky top-0">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search recipes, habits, experts..." 
                className="w-full h-11 pl-12 pr-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 ml-4">
            <button className="relative p-2 text-slate-500 hover:text-slate-800 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
              <GlobalProfileMenu />
            </div>
          </div>
        </header>

        {/* SCROLLABLE DASHBOARD CONTENT */}
        <div className="flex-1 overflow-y-auto hide-scrollbar p-6 md:p-8">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            {/* ROW 1: Hero & Wellness Age */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              
              {/* Hero Card */}
              <div className="xl:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-500">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Welcome back, {profile.name.split(' ')[0]}! 👋</h1>
                    <p className="text-slate-500 mt-1">Here&apos;s your wellness overview</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1"><Activity className="w-3.5 h-3.5"/> Wellness Score</p>
                    <p className="text-3xl font-bold text-emerald-600">{currentScore}/100</p>
                    <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1 font-medium"><ArrowUp className="w-3 h-3"/> 4 points since last assessment</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1"><Calendar className="w-3.5 h-3.5"/> Last Assessment</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">Aug 4, 2026</p>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">⚖️ Weight Report</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1"><Target className="w-3.5 h-3.5"/> Current Goal</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">Lose Weight</p>
                    <p className="text-xs text-slate-500 mt-1">Progressing well</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1"><Flame className="w-3.5 h-3.5"/> Streak</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">{streak} days</p>
                    <p className="text-xs text-slate-500 mt-1">Keep it up!</p>
                  </div>
                </div>
              </div>
              
              {/* Wellness Age Card */}
              <div className="bg-[#0f172a] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-center">
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                   <Activity className="w-64 h-64" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-300 flex items-center gap-2">Wellness Age <HelpCircle className="w-4 h-4"/></h3>
                  </div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-7xl font-bold text-emerald-400">{wellnessAge}</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-6">Actual Age: {actualAge}</p>
                  
                  <div className="flex gap-1 text-amber-400 mb-4">
                    ★ ★ ★ ★ ★
                  </div>
                  
                  <p className="text-lg font-medium leading-tight">
                    You&apos;re living like someone <span className="text-emerald-400 font-bold">{Math.abs(wellnessAgeOffset)} years younger</span>. Amazing!
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 2: Overall Wellness & Today's Focus */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
               <div className="xl:col-span-2">
                  <OverallWellness />
               </div>
               <div>
                  <TodaysFocus />
               </div>
            </div>

            {/* ROW 3: Radar, Goals, Insights */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
               <div>
                  <WellnessRadar />
               </div>
               <div>
                  <GoalsProgress />
               </div>
               <div>
                  <LatestInsights />
               </div>
            </div>

            {/* ROW 4: Assessment History & Score Trend */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
               <div>
                  <AssessmentHistory />
               </div>
               <div>
                  <WellnessScoreTrend />
               </div>
            </div>
            {/* ROW 5: Next, Achievements, Coach */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
               <div className="xl:col-span-1">
                  <RecommendedNext />
               </div>
               <div className="xl:col-span-2">
                  <Achievements />
               </div>
               <div className="xl:col-span-1">
                  <ConnectCoach />
               </div>
            </div>

            {/* ROW 6: Daily Check-in, Compare Reports, Vault */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
               <div>
                  <DailyCheckin />
               </div>
               <div>
                  <CompareReports />
               </div>
               <div>
                  <WellnessVault />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
