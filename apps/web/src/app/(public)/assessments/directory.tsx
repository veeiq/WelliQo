'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ASSESSMENTS } from '@/assessments/registry';
import { GOALS } from '@/goals/registry';
import { AssessmentRegistry } from '@/assessments/registry';
import { ArrowRight, Clock, Search } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Foundation Wellness',
  'Weight Management',
  'Metabolic Health',
  'Lifestyle Health',
  'Mental & Emotional',
  'Beauty & Healthy Aging',
  'Men & Women',
  'Food & Eating',
  'Special Lifestyle'
];

export function AssessmentDirectory({ initialGoal }: { initialGoal?: string }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const filteredAssessments = ASSESSMENTS.filter((assessment) => {
    if (!assessment.enabled) return false;
    
    if (initialGoal && (!assessment.goals || !assessment.goals.includes(initialGoal as any))) return false;
    
    const matchesCategory = activeCategory === 'All' || assessment.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || 
      assessment.title.toLowerCase().includes(searchLower) || 
      assessment.description.toLowerCase().includes(searchLower);
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Active Goal Filter */}
      {initialGoal && (
        <div className="flex items-center gap-2 max-w-xl mx-auto mb-6">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Showing:</span>
          <Link 
            href={AssessmentRegistry.getDirectoryRoute()}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors"
          >
            <span className="font-semibold text-emerald-500">🏷</span> {GOALS.find(g => g.id === initialGoal)?.title || initialGoal}
            <span className="ml-1 text-emerald-600 font-bold">✕</span>
          </Link>
        </div>
      )}

      {/* Search */}
      <div className="w-full max-w-xl mx-auto mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search assessments..."
          className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-sm placeholder:text-slate-400"
        />
      </div>

      {/* Filters */}
      <div className="relative flex w-full mb-8 items-center max-w-5xl mx-auto">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 z-10 h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors -ml-4"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        )}
        
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto items-center gap-2 pb-4 mx-auto max-w-full snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 sm:px-4"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 whitespace-nowrap snap-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 z-10 h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors -mr-4"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredAssessments.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No assessments found</h3>
          <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or category filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssessments.map((assessment) => (
          <Link
            key={assessment.id}
            href={AssessmentRegistry.getRoute(assessment.id)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 active:scale-[0.98] active:translate-y-0"
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-2xl shadow-inner">
                  {assessment.emoji}
                </div>
                {assessment.status === 'coming-soon' ? (
                  <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400">
                    Coming Soon
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-emerald-700 dark:text-emerald-400">
                    Available
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {assessment.title}
              </h3>
              <p className="text-slate-500 font-light dark:text-slate-400 text-sm line-clamp-2 mb-6">
                {assessment.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>3 min</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                <span>Start</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
        </div>
      )}
    </div>
  );
}
