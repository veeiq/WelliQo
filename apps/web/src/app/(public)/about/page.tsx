import React from 'react';
import Link from 'next/link';
import { HelpCircle, Heart, Shield, Activity, Users, Target, Sparkles } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | WelliQo',
  description: 'Learn about WelliQo, our founder Alok Kumar Mahapatra, and our expert wellness coaches Priya & Dipti.',
};

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center justify-center gap-3 text-emerald-600 dark:text-emerald-400 mb-6">
            <Sparkles className="w-6 h-6" />
            <span className="font-semibold tracking-widest uppercase text-sm">About WelliQo</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-balance">
            Your lifelong <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">wellness companion.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed text-balance">
            We believe that true wellness isn't a destination—it's a continuous journey of
            understanding your body and making supportive choices.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Our Story / Founder */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Story</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-lg leading-relaxed space-y-6">
                <p>
                  WelliQo was founded by <strong>Alok Kumar Mahapatra</strong> with a clear vision: to bridge the gap between complex nutritional science and everyday lifestyle choices. Recognizing that standard, one-size-fits-all advice rarely results in long-term success, Alok set out to build a platform that treats every individual as unique.
                </p>
                <p>
                  By combining holistic wellness principles with modern technology, WelliQo provides a framework to understand your baseline, set achievable goals, and sustain meaningful progress. The human body is incredibly complex, but understanding what it needs shouldn't be.
                </p>
              </div>
            </section>

            {/* Our Team */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Meet Our Experts</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Behind our intelligence engine is a team of dedicated human experts. Our certified Wellness Coaches ensure that our recommendations are not just scientifically accurate, but practical, empathetic, and sustainable.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center">
                  <div className="w-24 h-24 bg-slate-200 dark:bg-slate-800 rounded-full mb-6 flex items-center justify-center text-3xl font-bold text-slate-400">P</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Priya</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">Lead Wellness Coach</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Specializing in holistic nutrition and behavioral change. Priya helps translate complex wellness goals into simple daily habits.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center">
                  <div className="w-24 h-24 bg-slate-200 dark:bg-slate-800 rounded-full mb-6 flex items-center justify-center text-3xl font-bold text-slate-400">D</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Dipti</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">Senior Wellness Coach</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Focusing on metabolic health and recovery. Dipti brings years of experience in guiding individuals through transformational journeys.
                  </p>
                </div>
              </div>
            </section>

            {/* The Companion Approach */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                The Companion Approach
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="p-3 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-xl inline-flex mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Empathy First
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    We start by listening. Your assessment answers inform everything we do, allowing
                    us to meet you exactly where you are.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <div className="p-3 bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-xl inline-flex mb-4">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Science-Backed
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Our knowledge library and intelligence engine are built upon verified
                    nutritional science and behavioral psychology.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-900 dark:bg-slate-900 p-8 rounded-3xl text-white shadow-xl shadow-slate-900/10">
              <Shield className="w-10 h-10 mb-6 text-emerald-400" />
              <h3 className="text-xl font-bold mb-4">Privacy & Trust</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Your personal health data is sacred. We utilize state-of-the-art encryption to
                ensure your assessment results and wellness goals remain entirely private.
              </p>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Read our Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
