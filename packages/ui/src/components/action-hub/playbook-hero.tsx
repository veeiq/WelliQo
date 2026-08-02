import React from 'react';
import type { BaseContent } from '@welliqo/content';

interface PlaybookHeroProps {
  primaryContent: BaseContent;
}

export function PlaybookHero({ primaryContent }: PlaybookHeroProps) {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/40 dark:to-slate-950 py-24 px-6">
      {/* Decorative calm backdrop */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-orange-100 to-indigo-50 dark:from-indigo-800 dark:to-transparent blur-3xl mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-indigo-700 bg-indigo-100/50 dark:text-indigo-300 dark:bg-indigo-900/30 rounded-full uppercase">
          Your Personal Playbook
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 dark:text-white mb-6 tracking-tight text-balance">
          {primaryContent.title}
        </h1>
        
        <div className="max-w-2xl mx-auto bg-white/60 dark:bg-slate-900/60 p-6 rounded-2xl border border-white/40 dark:border-slate-800/40 backdrop-blur-md shadow-sm">
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-balance">
            "From what you shared with us, we believe this is the one change most likely to improve your daily energy. It's manageable, and you can absolutely do this."
          </p>
        </div>
      </div>
    </section>
  );
}
