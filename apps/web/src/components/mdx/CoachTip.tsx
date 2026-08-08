import { ReactNode } from "react";
import { MessageCircleHeart } from "lucide-react";

interface CoachTipProps {
  title?: string;
  children: ReactNode;
}

export function CoachTip({ title = "Coach's Tip", children }: CoachTipProps) {
  return (
    <div className="not-prose my-10 relative">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white dark:border-slate-950 z-10">
        <MessageCircleHeart className="w-6 h-6" />
      </div>
      <div className="bg-white dark:bg-slate-900 border-2 border-emerald-100 dark:border-emerald-900/50 rounded-2xl p-6 pl-10 md:pl-12 shadow-sm">
        <h4 className="text-emerald-800 dark:text-emerald-300 font-bold text-lg mb-2">{title}</h4>
        <div className="text-slate-700 dark:text-slate-300 italic font-medium">
          {children}
        </div>
      </div>
    </div>
  );
}
