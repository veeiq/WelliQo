import Link from 'next/link';
import { Home, Compass, Search, ClipboardList } from 'lucide-react';
import { AssessmentRegistry } from '@/assessments/registry';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-xl animate-in fade-in zoom-in duration-500">
        <h1 className="text-9xl font-bold text-slate-200 dark:text-slate-800 tracking-tighter">404</h1>
        <div className="relative -mt-16 sm:-mt-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white mb-4">Page not found</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            The wellness journey you're looking for seems to have wandered off the path.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <Link 
            href="/"
            className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-md transition-all group"
          >
            <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:group-hover:bg-emerald-500/10 dark:group-hover:text-emerald-400 transition-colors">
              <Home className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">Return Home</h3>
              <p className="text-sm text-slate-500">Back to the dashboard</p>
            </div>
          </Link>
          
          <Link 
            href={AssessmentRegistry.getDirectoryRoute()}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-md transition-all group"
          >
            <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:group-hover:bg-emerald-500/10 dark:group-hover:text-emerald-400 transition-colors">
              <ClipboardList className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">Explore Assessments</h3>
              <p className="text-sm text-slate-500">Find your path to wellness</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
