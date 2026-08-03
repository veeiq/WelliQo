import React from 'react';
import type { BaseContent } from '@welliqo/content';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

interface ExploreFurtherProps {
  concepts: BaseContent[];
}

export function ExploreFurther({ concepts }: ExploreFurtherProps) {
  if (!concepts || concepts.length === 0) return null;

  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950/50 py-24 mt-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        {/* Science Bridge */}
        <div className="mb-12 text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
            Curious Why?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">
            "You don't need to understand the science for this to work. But if you're curious,
            here's why we recommended it."
          </p>
        </div>

        <div className="grid gap-6">
          {concepts.map((concept) => (
            <Link
              key={concept.id}
              href={`/learn/${concept.id}`}
              prefetch={true}
              className="group bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex gap-6 items-start block"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500 group-hover:scale-110 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-all">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 block">
                  {concept.topic}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {concept.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                  When your rhythm is aligned, you wake up energized and fall asleep easily. When it
                  is broken, you feel exhausted all day but wired at night. Learn how light sets
                  your internal clock.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
