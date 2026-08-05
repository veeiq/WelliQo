"use client";

import { useState } from "react";
import { BookOpen, Search, Bookmark, Utensils, Activity, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import { KnowledgeContent } from "@/types/knowledge";

export function SavedClient({ savedResources }: { savedResources: KnowledgeContent[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { name: "All", icon: Bookmark, type: "ALL" },
    { name: "Articles", icon: BookOpen, type: "ARTICLE" },
    { name: "Recipes", icon: Utensils, type: "RECIPE" },
    { name: "Habits", icon: Leaf, type: "HABIT" },
    { name: "Exercise Guides", icon: Activity, type: "EXERCISE_GUIDE" },
  ];

  const filteredResources = savedResources.filter(res => {
    // Filter by type
    if (activeFilter !== "All") {
      const activeType = filters.find(f => f.name === activeFilter)?.type;
      if (res.type !== activeType) return false;
    }
    // Filter by search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      if (!res.title.toLowerCase().includes(q) && !res.summary.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Saved Resources
        </h1>
        <p className="text-slate-600 dark:text-slate-400">Your personal library of wellness guides, recipes, and insights.</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Filters */}
        <div className="flex overflow-x-auto pb-2 -mb-2 sm:pb-0 sm:mb-0 gap-2 hide-scrollbar">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.name;
            return (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-emerald-600 text-white shadow-sm" 
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-emerald-100" : "text-slate-400"}`} />
                {filter.name}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search saved..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow text-sm"
          />
        </div>
      </div>

      {filteredResources.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center max-w-md mx-auto py-12">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
            <Bookmark className="w-10 h-10 text-slate-400 dark:text-slate-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {searchQuery ? "No matching resources found" : `No saved ${activeFilter === 'All' ? 'resources' : activeFilter.toLowerCase()} yet`}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {searchQuery ? "Try adjusting your search terms." : "When you read an article, recipe, or guide, tap the bookmark icon to save it to your library."}
          </p>
          {!searchQuery && (
            <Link 
              href="/health-library" 
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-md flex items-center gap-2"
            >
              Explore Library <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(rec => (
            <Link key={rec.id} href={`/health-library/${rec.type.toLowerCase()}/${rec.id}`} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group flex flex-col">
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative">
                <img src={rec.thumbnail} alt={rec.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
  );
}
