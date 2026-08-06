import Link from 'next/link';
import { ArrowRight, Activity, ShieldCheck, Zap, Heart, Leaf, Sparkles, Scale, Brain, Lock, CheckCircle2, Star, Plus } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WelliQo | Intelligent Wellness, Science-Informed',
  description: 'Achieve your health goals with customized nutrition plans, expert coaching, and high-quality wellness products.',
  openGraph: {
    title: 'WelliQo | Intelligent Wellness, Science-Informed',
    description: 'Discover your wellness baseline and get a customized nutrition plan.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'WelliQo Logo' }],
  },
};

export default function HomePage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-100">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[85svh] sm:min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden px-6 sm:px-6 lg:px-8 pt-4 sm:pt-2 pb-20 sm:pb-16 text-center bg-white dark:bg-slate-950">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/50 via-white to-white dark:from-emerald-900/10 dark:via-slate-950 dark:to-slate-950"></div>
        
        {/* Soft noise texture */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        {/* Very subtle hint of emerald glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-400/5 dark:bg-emerald-500/5 rounded-[100%] blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center mt-0 sm:mt-0">
          <div className="mb-6 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-emerald-500" />
            <span>Intelligent Wellness, Science-Informed</span>
          </div>
          
          <h1 className="mb-6 sm:mb-4 text-[clamp(2.25rem,10.5vw,4rem)] sm:text-[5rem] lg:text-[6.25rem] font-medium tracking-tighter text-slate-900 dark:text-white leading-[1.1] sm:leading-[1.05]">
            <span className="block mb-4 sm:mb-8 text-slate-800 dark:text-slate-200">Stop guessing.</span>
            <span className="block">Start understanding</span>
            <span className="block">your <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-400 dark:to-emerald-300">wellness.</span></span>
          </h1>
          
          <p className="mx-auto w-[90%] sm:w-full max-w-2xl text-balance text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg mb-8 sm:mb-8">
            Take our free 3-minute wellness assessment and receive a personalized wellness report with science-backed nutrition and lifestyle recommendations.
          </p>
          
          <Link
            href="/assessments"
            className="group relative inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white rounded-[24px] px-8 py-5 sm:px-10 sm:py-7 text-base sm:text-lg font-semibold shadow-[0_8px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-[3px] active:scale-[0.96] active:translate-y-0 active:shadow-[0_4px_15px_rgba(16,185,129,0.2)]"
          >
            Start Free Assessment
            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
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
              <p className="font-semibold text-slate-900 dark:text-white text-lg">🤖 Your Personalized Wellness Report</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Based on your goals and lifestyle</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECTORY PREVIEW (The Core Pillars) */}
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
          <Link href="/assessments/weight-management" className="group lg:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 md:p-12 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
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

          <Link href="/assessments/daily-energy" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 mb-8">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Daily Energy</h3>
            <p className="text-slate-600 dark:text-slate-400">Feel energized throughout the day without relying on caffeine.</p>
          </Link>

          <Link href="/assessments/digestion-gut" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 mb-8">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Digestion & Gut</h3>
            <p className="text-slate-600 dark:text-slate-400">Support a healthier gut, smoother digestion, and better nutrient absorption.</p>
          </Link>

          <Link href="/assessments/stress-sleep" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 mb-8">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Stress & Sleep</h3>
            <p className="text-slate-600 dark:text-slate-400">Reduce stress and improve sleep for better recovery and focus.</p>
          </Link>

          <Link href="/assessments/womens-wellness" className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 mb-8">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Women's Wellness</h3>
            <p className="text-slate-600 dark:text-slate-400">Support hormonal balance, vitality, and healthy aging through every stage of life.</p>
          </Link>

          <Link href="/categories" className="group lg:col-span-3 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700/50 p-8 transition-all hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div className="flex items-center gap-6 flex-col md:flex-row">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 dark:bg-slate-700 text-white shadow-inner">
                <Sparkles className="h-8 w-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Explore All Categories</h3>
                <p className="text-slate-400 text-lg">Browse our directory of 40+ personalized wellness assessments.</p>
              </div>
            </div>
            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. WHY WELLIQO? */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl my-12 border border-slate-200/50 dark:border-slate-800/50">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Why WelliQo?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">Personalized</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Your body is unique. We provide recommendations tailored to your specific profile.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">Science-Informed</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Our assessments are built on evidence-based research, not fads.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Zap className="h-6 w-6 text-emerald-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">Actionable</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Clear, realistic steps you can take today to improve your health.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Lock className="h-6 w-6 text-emerald-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">Privacy-First</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Your data is secure and never sold. We prioritize your privacy above all else.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (THE JOURNEY) */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            Your personalized journey starts here.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Just three simple steps to discover your wellness score.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>

          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:border-emerald-500 transition-colors duration-500 relative z-10">
              <span className="text-3xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors duration-500">1</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Assess</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Answer a few simple questions about your lifestyle.</p>
          </div>

          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:border-teal-500 transition-colors duration-500 relative z-10">
              <span className="text-3xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-teal-500 transition-colors duration-500">2</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Analyze</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Our Wellness Analysis identifies your unique strengths based on your responses.</p>
          </div>

          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center mb-6 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:border-emerald-500 transition-colors duration-500 relative z-10">
              <span className="text-3xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors duration-500">3</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Achieve</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Receive a personalized plan and optional coaching support.</p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Early Feedback
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            See what our beta users are saying about the WelliQo platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <div className="flex gap-1 text-amber-400 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"The wellness report gave me actionable steps I hadn't even considered. Finally, something that makes sense of my daily fatigue."</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-500 dark:text-slate-400">R</div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Rahul M.</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Beta User</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <div className="flex gap-1 text-amber-400 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"I've tried multiple diets before. The personalized nutrition recommendations here were actually tailored to my specific lifestyle and goals."</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-500 dark:text-slate-400">S</div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Sneha K.</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Beta User</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <div className="flex gap-1 text-amber-400 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 italic">"The privacy-first approach is what sold me. It's rare to find a platform that provides this much value without selling your data."</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-500 dark:text-slate-400">A</div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Amit P.</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Beta User</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          <details className="group rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200/50 dark:border-slate-800/50 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 dark:text-white">
              <h2 className="font-semibold text-lg">Are the assessments really free?</h2>
              <span className="shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 p-1.5 text-slate-900 dark:text-white sm:p-3">
                <Plus className="h-5 w-5 transition duration-300 group-open:-rotate-45" />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              Yes, our core wellness assessments and the personalized insight reports are completely free. We believe everyone deserves access to science-informed baseline metrics.
            </p>
          </details>
          <details className="group rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200/50 dark:border-slate-800/50 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 dark:text-white">
              <h2 className="font-semibold text-lg">Is my data secure?</h2>
              <span className="shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 p-1.5 text-slate-900 dark:text-white sm:p-3">
                <Plus className="h-5 w-5 transition duration-300 group-open:-rotate-45" />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              Absolutely. We use enterprise-grade encryption for all data and strictly adhere to privacy-first principles. We never sell your personal information.
            </p>
          </details>
          <details className="group rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200/50 dark:border-slate-800/50 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 dark:text-white">
              <h2 className="font-semibold text-lg">What happens after the assessment?</h2>
              <span className="shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 p-1.5 text-slate-900 dark:text-white sm:p-3">
                <Plus className="h-5 w-5 transition duration-300 group-open:-rotate-45" />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              You will receive your personalized wellness report with actionable recommendations. You can choose to implement these yourself or connect with one of our certified wellness coaches for guided support.
            </p>
          </details>
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
            View all FAQs →
          </Link>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/50 mb-12">
        <div className="relative overflow-hidden flex flex-col items-center justify-between gap-8 rounded-[3rem] bg-gradient-to-br from-emerald-900 to-slate-900 px-8 py-20 text-center md:flex-row md:px-20 md:text-left shadow-2xl">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 md:w-2/3">
            <h2 className="mb-6 text-4xl sm:text-5xl font-light text-white leading-tight">
              Ready to discover your <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">wellness score?</span>
            </h2>
            <p className="text-xl text-emerald-100/80 max-w-xl leading-relaxed">
              Take the first step towards a healthier, more energized you in just 3 minutes.
            </p>
          </div>
          <div className="relative z-10 md:w-1/3 md:text-right flex flex-col items-center md:items-end gap-4">
            <Link
              href="/assessments"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-5 text-lg font-semibold text-slate-900 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
