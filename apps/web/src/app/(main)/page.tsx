import Link from 'next/link';
import { ArrowRight, Activity, ShieldCheck, Zap, Heart, Leaf, Sparkles, Scale, Brain } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden px-4 pb-24 text-center sm:px-6 lg:px-8">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200/40 via-slate-50 to-slate-50 dark:from-emerald-900/40 dark:via-slate-950 dark:to-slate-950"></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center mt-12 sm:mt-0">
          <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-wide text-emerald-800 dark:text-emerald-300 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Intelligent Wellness, Science-Informed</span>
          </div>
          
          <h1 className="mb-4 sm:mb-8 text-balance text-5xl font-light tracking-tight text-slate-900 dark:text-white sm:text-7xl lg:text-[5.5rem] leading-[1.1]">
            Stop guessing. Start understanding your <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">wellness.</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-balance text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-2xl mb-8 sm:mb-12 px-2">
            Take our free 3-minute wellness assessment and receive a personalized AI wellness report with science-backed nutrition and lifestyle recommendations.
          </p>
          
          <Link
            href="/assessment"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-1"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
            <span className="relative flex items-center gap-2 rounded-full bg-slate-900/10 dark:bg-black/20 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold text-white transition-all duration-300 group-hover:bg-transparent">
              Start Free Assessment
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* 2. SOCIAL PROOF / TRUST STRIP */}
      <section className="relative z-20 -mt-10 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-8 shadow-2xl shadow-emerald-900/5">
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white text-lg">👨‍⚕️ Guided by Certified Wellness Coaches</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Personalized support when you need it</p>
            </div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white text-lg">🤖 AI-Powered Personalized Report</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Based on your goals and lifestyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (THE JOURNEY) */}
      <section className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            Your personalized wellness journey starts here.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Just three simple steps to discover your wellness score and personalized action plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>

          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:border-emerald-500 transition-colors duration-500 relative z-10">
              <span className="text-3xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors duration-500">1</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Assess</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Answer a few simple questions to understand your current wellness.</p>
          </div>

          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:border-teal-500 transition-colors duration-500 relative z-10">
              <span className="text-3xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-teal-500 transition-colors duration-500">2</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Analyze</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Our AI analyzes your responses and identifies your strengths and improvement areas.</p>
          </div>

          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:border-emerald-500 transition-colors duration-500 relative z-10">
              <span className="text-3xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors duration-500">3</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Achieve</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Receive your personalized wellness plan and optional coach guidance.</p>
          </div>
        </div>
      </section>

      {/* 4. THE CORE PILLARS (Bento Box) */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            Choose your wellness goal.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore personalized wellness programs designed around your goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card 1 */}
          <Link href="/assessment" className="group lg:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 md:p-12 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-5 group-hover:opacity-20 transition-opacity">
              <Scale className="w-48 h-48" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 mb-8">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">Weight & Body Composition</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">Lose fat, build lean muscle, and achieve a healthier body composition.</p>
              </div>
            </div>
          </Link>

          {/* Regular Card 2 */}
          <Link href="/assessment" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 mb-8">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Daily Energy</h3>
            <p className="text-slate-600 dark:text-slate-400">Feel energized throughout the day without relying on caffeine.</p>
          </Link>

          {/* Regular Card 3 */}
          <Link href="/assessment" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 mb-8">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Digestion & Gut</h3>
            <p className="text-slate-600 dark:text-slate-400">Support a healthier gut, smoother digestion, and better nutrient absorption.</p>
          </Link>

          {/* Regular Card 4 */}
          <Link href="/assessment" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 mb-8">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Stress & Sleep</h3>
            <p className="text-slate-600 dark:text-slate-400">Reduce stress and improve sleep for better recovery and focus.</p>
          </Link>

          {/* Regular Card 5 */}
          <Link href="/assessment" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 mb-8">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Women's Wellness</h3>
            <p className="text-slate-600 dark:text-slate-400">Support hormonal balance, vitality, and healthy aging through every stage of life.</p>
          </Link>

          {/* New Explore All Card */}
          <Link href="/assessment" className="group lg:col-span-3 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700/50 p-8 transition-all hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div className="flex items-center gap-6 flex-col md:flex-row">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 dark:bg-slate-700 text-white shadow-inner">
                <Sparkles className="h-8 w-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Explore All Assessments</h3>
                <p className="text-slate-400 text-lg">Browse 40+ personalized wellness assessments.</p>
              </div>
            </div>
            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 dark:bg-slate-50 px-8 py-4 text-base font-medium text-white dark:text-slate-900 transition-all hover:bg-emerald-600 dark:hover:bg-emerald-400"
          >
            Explore Assessments
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 5. THE BUSINESS OPPORTUNITY (Footer CTA) */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="relative overflow-hidden flex flex-col items-center justify-between gap-8 rounded-[3rem] bg-gradient-to-br from-teal-900 to-slate-900 px-8 py-20 text-center md:flex-row md:px-20 md:text-left shadow-2xl">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 md:w-2/3">
            <h2 className="mb-6 text-4xl sm:text-5xl font-light text-white leading-tight">
              Turn your passion into <br/><span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">purpose.</span>
            </h2>
            <p className="text-xl text-teal-100/80 max-w-xl leading-relaxed">
              Join a global community of wellness coaches. Build a sustainable business by helping others achieve their goals, on your own terms.
            </p>
          </div>
          <div className="relative z-10 md:w-1/3 md:text-right">
            <Link
              href="/business"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-5 text-lg font-semibold text-slate-900 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Discover the Opportunity
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
