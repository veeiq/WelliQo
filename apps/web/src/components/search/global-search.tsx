'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SearchIndexNode } from '@welliqo/content';

export function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchIndexNode[]>([]);
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
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selected = results[selectedIndex];
      if (selected) {
        router.push(`/action-hub/${selected.slug}`);
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
        <input
          type="text"
          className="w-full px-4 py-2 bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)] transition-all"
          placeholder="Search recipes, habits, science..."
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
        <div className="absolute top-full mt-2 w-full bg-[var(--color-background-secondary)] rounded-xl shadow-lg border border-[var(--color-border-subtle)] overflow-hidden z-50">
          {!isLoading && hasSearched && results.length === 0 ? (
            <div className="px-4 py-6 text-center text-[var(--color-text-secondary)]">
              <p className="font-medium text-slate-700 dark:text-slate-300">No results found.</p>
              <p className="text-sm mt-1 text-slate-500">Try adjusting your keywords.</p>
            </div>
          ) : (
            <ul className="max-h-80 overflow-y-auto py-2">
              {results.map((result, index) => (
                <li key={result.id}>
                  <Link
                    href={`/action-hub/${result.slug}`}
                    className={`block px-4 py-3 transition-colors ${
                      index === selectedIndex 
                        ? 'bg-[var(--color-accent-primary)] text-white' 
                        : 'hover:bg-[var(--color-background-primary)] text-[var(--color-text-primary)]'
                    }`}
                    onClick={() => {
                      setQuery('');
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className={`font-semibold ${index === selectedIndex ? 'text-white' : ''}`}>
                      {result.title}
                    </div>
                    <div className={`text-xs capitalize mt-1 ${index === selectedIndex ? 'text-emerald-100' : 'text-[var(--color-text-secondary)]'}`}>
                      {result.type} • {result.domain}
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
