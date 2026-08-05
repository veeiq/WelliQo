import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Utensils, Target } from "lucide-react";

interface CollectionCardProps {
  id: string;
  title: string;
  image: string;
  stats: {
    articles: number;
    recipes: number;
    habits: number;
  };
}

export function CollectionCard({ id, title, image, stats }: CollectionCardProps) {
  return (
    <Link 
      href={`/health-library/collection/${id}`}
      className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-[#1A1A1A] border border-[#333] flex-shrink-0 snap-center w-[320px] aspect-[3/4] transition-transform duration-300 hover:scale-[1.02] outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      <Image 
        src={image} 
        alt={title} 
        fill
        sizes="320px"
        className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      
      <div className="relative z-10 p-8 flex flex-col gap-4">
        <div className="uppercase tracking-widest text-xs font-semibold text-emerald-500 mb-2">Collection</div>
        <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h3>
        
        <div className="flex flex-col gap-4 mt-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4 mb-2">
            {stats.articles > 0 && <span className="flex items-center gap-1.5 text-xs font-medium text-slate-300"><BookOpen className="w-4 h-4 text-emerald-500" /> {stats.articles}</span>}
            {stats.recipes > 0 && <span className="flex items-center gap-1.5 text-xs font-medium text-slate-300"><Utensils className="w-4 h-4 text-emerald-500" /> {stats.recipes}</span>}
            {stats.habits > 0 && <span className="flex items-center gap-1.5 text-xs font-medium text-slate-300"><Target className="w-4 h-4 text-emerald-500" /> {stats.habits}</span>}
          </div>
          <div className="flex items-center text-sm font-semibold text-white">
            Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}
