import Link from 'next/link';
import { Search, Home, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/30 p-6 mb-8">
        <FileQuestion className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm mx-auto">
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors"
        >
          <Home className="h-4 w-4" />
          Return Home
        </Link>
        <Link 
          href="/assessments"
          className="flex items-center justify-center gap-2 rounded-full bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          <Search className="h-4 w-4" />
          Explore Assessments
        </Link>
      </div>
    </main>
  );
}
