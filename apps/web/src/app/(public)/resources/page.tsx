import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Sparkles, ArrowRight, Book, Video, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources | WelliQo',
  description: 'Coming soon: A comprehensive library of wellness resources, guides, and masterclasses.',
};

export default function ResourcesPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:py-32 max-w-5xl text-center">
        
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-8 shadow-inner">
          <BookOpen className="h-10 w-10" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 text-balance">
          Our knowledge library is <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">coming soon.</span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          We are currently curating the most comprehensive, science-backed wellness resources. From in-depth guides to video masterclasses, everything you need to support your journey is on the way.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 text-left">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-70">
            <Book className="h-8 w-8 text-slate-400 mb-4" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Detailed Guides</h3>
            <p className="text-sm text-slate-500">Comprehensive articles on nutrition, sleep, and recovery.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-70">
            <Video className="h-8 w-8 text-slate-400 mb-4" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Masterclasses</h3>
            <p className="text-sm text-slate-500">Video sessions led by our certified wellness experts.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-70">
            <FileText className="h-8 w-8 text-slate-400 mb-4" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cheat Sheets</h3>
            <p className="text-sm text-slate-500">Quick-reference PDFs for grocery shopping and meal prep.</p>
          </div>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400">
            <Sparkles className="h-5 w-5" />
            <h3 className="font-bold">In the meantime...</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            You can still get personalized insights by taking one of our wellness assessments today.
          </p>
          <Link
            href="/assessments"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-500 hover:shadow-lg"
          >
            Explore Assessments
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
