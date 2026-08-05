import { searchContent } from "@/lib/knowledge-engine";
import Link from "next/link";
import { BookOpen, Utensils, Activity, Leaf, Search, Filter } from "lucide-react";
import { KnowledgeContent } from "@/types/knowledge";

export default async function HealthLibraryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = typeof searchParams.q === 'string' ? searchParams.q : '';
  const type = typeof searchParams.type === 'string' ? searchParams.type : 'ALL';
  const goal = typeof searchParams.goal === 'string' ? searchParams.goal : 'ALL';

  const results = searchContent(query, { type, goal });

  const categories = [
    { name: "All Types", value: "ALL", icon: BookOpen },
    { name: "Articles", value: "ARTICLE", icon: BookOpen },
    { name: "Recipes", value: "RECIPE", icon: Utensils },
    { name: "Habits", value: "HABIT", icon: Leaf },
    { name: "Exercises", value: "EXERCISE_GUIDE", icon: Activity },
  ];

  const goalsList = [
    { name: "All Goals", value: "ALL" },
    { name: "Weight Loss", value: "weight-loss" },
    { name: "Better Sleep", value: "better-sleep" },
    { name: "More Energy", value: "energy" },
    { name: "Muscle Gain", value: "muscle-gain" },
    { name: "Healthy Aging", value: "healthy-aging" },
    { name: "Stress Management", value: "stress-management" },
    { name: "Gut Health", value: "gut-health" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Health Library
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Science-backed articles, recipes, and guides for your wellness journey.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <form className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                name="q"
                defaultValue={query}
                placeholder="Search articles, recipes, habits..." 
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
              />
            </div>
            <div className="flex gap-4">
              <select name="type" defaultValue={type} className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium">
                {categories.map(c => (
                  <option key={c.value} value={c.value}>{c.name}</option>
                ))}
              </select>
              <select name="goal" defaultValue={goal} className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 font-medium">
                {goalsList.map(g => (
                  <option key={g.value} value={g.value}>{g.name}</option>
                ))}
              </select>
              <button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-md flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {results.length} Results
            </h2>
          </div>
          
          {results.length === 0 ? (
            <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No results found</h3>
              <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
              <Link href="/health-library" className="mt-6 inline-block text-emerald-600 font-semibold hover:underline">
                Clear all filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {results.map(rec => (
                <Link key={rec.id} href={`/health-library/${rec.type.toLowerCase()}/${rec.id}`} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col">
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative">
                    <img src={rec.thumbnail} alt={rec.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {rec.featured && (
                      <div className="absolute top-2 left-2 px-2 py-1 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{rec.category}</span>
                      <span className="text-xs text-slate-500">{rec.estimatedMinutes} min</span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">{rec.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 flex-1">{rec.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                       {rec.goals.map((g, i) => (
                         <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[10px] uppercase font-bold tracking-wider">{g.replace(/-/g, ' ')}</span>
                       ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
