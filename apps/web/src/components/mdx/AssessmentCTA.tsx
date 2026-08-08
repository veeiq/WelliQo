import Link from "next/link";
import { ArrowRight, ClipboardList } from "lucide-react";

interface AssessmentCTAProps {
  id: string;
  title: string;
  description: string;
  buttonText?: string;
}

export function AssessmentCTA({ id, title, description, buttonText = "Take Assessment" }: AssessmentCTAProps) {
  return (
    <div className="not-prose my-10 bg-slate-900 text-white rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-xl">
      {/* Background Graphic */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-4">
            <ClipboardList className="w-3.5 h-3.5" />
            Recommended Assessment
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
          <p className="text-slate-300 text-lg">{description}</p>
        </div>
        
        <div className="shrink-0">
          <Link 
            href={`/assessments/${id}`}
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-full transition-colors whitespace-nowrap"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
