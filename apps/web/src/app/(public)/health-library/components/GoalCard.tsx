import Link from "next/link";
import { ReactNode } from "react";

interface GoalCardProps {
  goalId: string;
  label: string;
  icon?: ReactNode;
}

export function GoalCard({ goalId, label, icon }: GoalCardProps) {
  return (
    <Link 
      href={`/health-library?goal=${goalId}`}
      className="group flex items-center gap-4 px-6 py-4 rounded-full bg-[#1A1A1A] border border-[#333] hover:border-emerald-500 hover:bg-[#222] transition-colors duration-300 flex-shrink-0 snap-center min-w-[160px] justify-center outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      {icon && <span className="text-emerald-500 text-xl">{icon}</span>}
      <span className="font-medium text-slate-100 whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
}
