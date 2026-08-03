import Link from 'next/link';
import { ArrowRight, Activity, BookOpen, Utensils, ShoppingBag, Briefcase } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-slate-50 to-slate-50 dark:from-emerald-900/20 dark:via-slate-950 dark:to-slate-950"></div>
        <div className="relative z-10 mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="mb-6 inline-block rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 px-4 py-1.5 text-sm font-medium tracking-wide text-emerald-700 dark:text-emerald-400">
            Welcome to WelliQo
          </span>
          <h1 className="mb-8 text-balance text-5xl font-light tracking-tight text-slate-900 dark:text-slate-50 sm:text-7xl lg:text-8xl">
            A calmer approach to your wellness.
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-xl leading-relaxed text-slate-600 dark:text-slate-400 sm:text-2xl">
            No fads. No crash diets. Just personalized insights, science-backed nutrition, and a companion for your lifelong journey.
          </p>
        </div>
      </section>

      {/* Primary Pathway: Assessment */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 lg:flex-row">
          <div className="flex flex-col justify-center p-12 lg:w-1/2 lg:p-20">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <Activity className="h-7 w-7" />
            </div>
            <h2 className="mb-6 text-3xl font-medium text-slate-900 dark:text-slate-50 sm:text-4xl">
              It begins with understanding your baseline.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Our holistic assessment analyzes your sleep, nutrition, and daily habits to build a comprehensive wellness profile tailored just for you.
            </p>
            <div>
              <Link
                href="/assessment"
                className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-white"
              >
                Take the Assessment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-950 lg:w-1/2">
            {/* Minimalist illustration area (placeholder) */}
            <div className="flex h-64 items-center justify-center lg:h-full">
              <div className="relative h-48 w-48 rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="absolute inset-8 rounded-full border border-dashed border-emerald-200 bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-500/5"></div>
                <div className="absolute inset-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Pathways: Explore */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Explore what you need, when you need it.
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            WelliQo is designed to support every aspect of your day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Link
            href="/learn"
            className="group flex flex-col rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-blue-200 dark:bg-slate-900 dark:ring-slate-800 dark:hover:ring-blue-900/50"
          >
            <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-medium text-slate-900 dark:text-slate-50">Knowledge</h3>
            <p className="mb-8 flex-1 text-slate-600 dark:text-slate-400 leading-relaxed">
              Read expert guides, learn about the science of nutrition, and discover actionable daily protocols.
            </p>
            <span className="flex items-center font-medium text-blue-600 dark:text-blue-400">
              Read articles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/recipes"
            className="group flex flex-col rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-orange-200 dark:bg-slate-900 dark:ring-slate-800 dark:hover:ring-orange-900/50"
          >
            <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
              <Utensils className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-medium text-slate-900 dark:text-slate-50">Recipes</h3>
            <p className="mb-8 flex-1 text-slate-600 dark:text-slate-400 leading-relaxed">
              Find macro-balanced, delicious meals designed to fuel your body and support your goals.
            </p>
            <span className="flex items-center font-medium text-orange-600 dark:text-orange-400">
              View recipes <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/products"
            className="group flex flex-col rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-purple-200 dark:bg-slate-900 dark:ring-slate-800 dark:hover:ring-purple-900/50"
          >
            <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-medium text-slate-900 dark:text-slate-50">Products</h3>
            <p className="mb-8 flex-1 text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore science-backed nutritional supplements targeted for energy, recovery, and core health.
            </p>
            <span className="flex items-center font-medium text-purple-600 dark:text-purple-400">
              Shop products <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* Tertiary Pathway: Business */}
      <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-teal-50 px-8 py-16 text-center dark:bg-teal-900/20 md:flex-row md:px-16 md:text-left">
          <div className="md:w-2/3">
            <h2 className="mb-4 text-3xl font-medium text-slate-900 dark:text-slate-50">
              Turn your passion into purpose.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Join a global community of wellness coaches. Build a sustainable business by helping others achieve their goals.
            </p>
          </div>
          <div className="md:w-1/3 md:text-right">
            <Link
              href="/business"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-8 py-4 text-base font-medium text-white transition-all hover:bg-teal-700 hover:shadow-lg dark:bg-teal-500 dark:hover:bg-teal-400"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Discover the Opportunity
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
