import { Metadata } from 'next';
import { Search as SearchIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'Search results for WelliQo assessments and resources.',
};

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl min-h-[60vh]">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Search Results
        </h1>
        {query ? (
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Showing results for "<span className="font-semibold text-slate-900 dark:text-white">{query}</span>"
          </p>
        ) : (
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Enter a search term to find assessments, goals, and resources.
          </p>
        )}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-12 text-center flex flex-col items-center">
        <div className="rounded-full bg-slate-100 dark:bg-slate-800 p-4 mb-4">
          <SearchIcon className="h-8 w-8 text-slate-400 dark:text-slate-500" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Search is currently in beta</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          We are upgrading our global search engine to better serve you. In the meantime, please use the navigation above to explore our assessments and goals.
        </p>
      </div>
    </div>
  );
}
