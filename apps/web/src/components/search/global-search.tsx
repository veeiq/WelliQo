'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
// import { SearchIndexNode } from '@welliqo/content';

export function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      setHasSearched(false);
      setSelectedIndex(-1);
      return;
    }

    const fetchResults = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data);
        setHasSearched(true);
        setSelectedIndex(-1);
      } catch (error) {
        console.error('Search failed', error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selected = results[selectedIndex];
      if (selected) {
        router.push(`/health-library/${selected.type.toLowerCase()}/${selected.id}`);
        setIsOpen(false);
        setQuery('');
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={containerRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 rounded-full border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-500"
          placeholder="Search WelliQo"
          value={query}
          onChange={(e) => {
             setQuery(e.target.value);
             setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {isLoading && (
          <div className="absolute right-3 top-2.5">
            <div className="animate-spin h-5 w-5 border-2 border-[var(--color-accent-primary)] border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>

      {isOpen && query.length >= 2 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-950 rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-black/50 border border-slate-200 dark:border-slate-800 overflow-hidden z-[100]">
          {!isLoading && hasSearched && results.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <p className="font-semibold text-slate-900 dark:text-white">No results found.</p>
              <p className="text-sm mt-1 text-slate-500 dark:text-slate-400">Try adjusting your keywords.</p>
            </div>
          ) : (
            <ul className="max-h-[60vh] sm:max-h-80 overflow-y-auto py-2">
              {results.map((result, index) => (
                <li key={result.id}>
                  <Link
                    href={`/health-library/${result.type.toLowerCase()}/${result.id}`}
                    className={`block px-5 py-4 transition-colors border-b border-slate-100 dark:border-slate-800/50 last:border-0 ${
                      index === selectedIndex
                        ? 'bg-slate-50 dark:bg-slate-800/50'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                    onClick={() => {
                      setQuery('');
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="font-medium text-slate-900 dark:text-white mb-1">
                      {result.title}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span className="uppercase tracking-wider text-emerald-600 dark:text-emerald-400">{result.type}</span>
                      <span>•</span>
                      <span className="capitalize">{result.domain}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
