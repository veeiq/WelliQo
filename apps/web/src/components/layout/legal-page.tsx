import { ReactNode } from 'react';

export function LegalPage({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] py-24 px-4 sm:px-6 lg:px-8 selection:bg-emerald-500/30 selection:text-emerald-200">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white mb-2 tracking-tight">{title}</h1>
        <p className="text-xs text-slate-500 mb-12 uppercase tracking-wider font-medium">Last Updated: {lastUpdated}</p>
        
        <div className="
          text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-6
          [&>h2]:text-base [&>h2]:font-semibold [&>h2]:text-slate-900 [&>h2]:dark:text-slate-200 [&>h2]:mt-10 [&>h2]:mb-4
          [&>h3]:text-sm [&>h3]:font-medium [&>h3]:text-slate-800 [&>h3]:dark:text-slate-300 [&>h3]:mt-6 [&>h3]:mb-2
          [&>p]:mb-4
          [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:mb-6
          [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>ol]:mb-6
          [&_a]:text-emerald-600 [&_a]:dark:text-emerald-500 [&_a]:hover:underline
          [&>table]:w-full [&>table]:text-sm [&>table]:mb-6 [&>table]:border-collapse
          [&>table_th]:border [&>table_th]:border-slate-200 [&>table_th]:dark:border-slate-800 [&>table_th]:px-4 [&>table_th]:py-2 [&>table_th]:text-left
          [&>table_td]:border [&>table_td]:border-slate-200 [&>table_td]:dark:border-slate-800 [&>table_td]:px-4 [&>table_td]:py-2
        ">
          {children}
        </div>
      </div>
    </div>
  );
}
