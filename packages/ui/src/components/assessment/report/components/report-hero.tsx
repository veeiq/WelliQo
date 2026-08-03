import React from 'react';
import type { ReportHeroData } from '../types';

interface ReportHeroProps {
  data: ReportHeroData;
}

export function ReportHero({ data }: ReportHeroProps) {
  return (
    <div className="w-full bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/40 dark:to-emerald-950/40 py-24 px-6 rounded-b-3xl text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-balance">
          Let&apos;s look at your wellness journey together.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 text-balance">
          You&apos;ve taken a wonderful first step. Let&apos;s explore where you are right now and where we can go next.
        </p>
      </div>
    </div>
  );
}
