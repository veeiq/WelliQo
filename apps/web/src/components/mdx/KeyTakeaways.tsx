import { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

interface KeyTakeawaysProps {
  children: ReactNode;
}

export function KeyTakeaways({ children }: KeyTakeawaysProps) {
  return (
    <div className="not-prose my-8 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl p-6 md:p-8 border border-emerald-100 dark:border-emerald-900/50 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white m-0">Key Takeaways</h3>
      </div>
      <div className="space-y-3 text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}
