import { ReactNode } from "react";
import { HelpCircle } from "lucide-react";

interface FAQProps {
  question: string;
  children: ReactNode;
}

export function FAQ({ question, children }: FAQProps) {
  return (
    <details className="not-prose group my-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm open:bg-slate-50 dark:open:bg-slate-800/50 transition-colors">
      <summary className="flex items-center gap-3 p-5 font-semibold text-slate-900 dark:text-white cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
        <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
        <span className="flex-1 text-lg">{question}</span>
        <div className="shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-open:rotate-180 transition-transform duration-200">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </summary>
      <div className="p-5 pt-0 text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/50">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-p:mt-3 prose-p:mb-0">
          {children}
        </div>
      </div>
    </details>
  );
}
