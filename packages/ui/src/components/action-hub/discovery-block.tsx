import React from 'react';
import Link from 'next/link';
import type { BaseContent } from '@welliqo/content';

export function DiscoveryBlock({ recommendations }: { recommendations: BaseContent[] }) {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <section className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8 text-slate-900 dark:text-white tracking-tight">
          Continue Your Journey
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((node) => (
            <Link
              key={node.id}
              href={`/action-hub/${node.slug}`}
              className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:shadow-lg group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                  {node.type}
                </span>
                {node.readingTimeMinutes && (
                  <span className="text-xs text-slate-500">{node.readingTimeMinutes} min</span>
                )}
              </div>
              
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                {node.title}
              </h3>
              
              {node.author && (
                <p className="mt-auto pt-4 text-sm text-slate-500">By {node.author}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
