import React from 'react';
import Link from 'next/link';
import { HelpCircle, Heart, Shield, Activity } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 mb-4">
            <HelpCircle className="w-6 h-6" />
            <span className="font-semibold tracking-widest uppercase text-sm">About WelliQo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-balance">
            Your lifelong wellness companion.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed text-balance">
            We believe that true wellness isn&apos;t a destination—it&apos;s a continuous journey of
            understanding your body and making supportive choices.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Our Philosophy
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  WelliQo was built on the premise that wellness should be deeply personal, yet
                  universally accessible. The human body is complex, and standard, one-size-fits-all
                  advice rarely results in long-term success.
                </p>
                <p className="mt-4">
                  By combining our holistic intelligence engine with compassionate, human-centered
                  coaching principles, we provide you with a framework to understand your baseline,
                  set achievable goals, and sustain meaningful progress.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                The Companion Approach
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="p-3 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-xl inline-flex mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Empathy First
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    We start by listening. Your assessment answers inform everything we do, allowing
                    us to meet you exactly where you are.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl inline-flex mb-4">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Science-Backed
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our knowledge library and intelligence engine are built upon verified
                    nutritional science and behavioral psychology.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-900 dark:bg-white p-8 rounded-3xl text-white dark:text-slate-900">
              <Shield className="w-10 h-10 mb-6 text-emerald-400 dark:text-emerald-600" />
              <h3 className="text-xl font-semibold mb-4">Privacy & Trust</h3>
              <p className="text-slate-300 dark:text-slate-600 mb-6 leading-relaxed">
                Your personal health data is sacred. We utilize state-of-the-art encryption to
                ensure your assessment results and wellness goals remain entirely private.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center font-medium text-emerald-400 dark:text-emerald-600 hover:underline"
              >
                Read our Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
