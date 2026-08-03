import Link from 'next/link';
import { GlobalSearch } from '@/components/search/global-search';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-xl tracking-tighter">W</span>
          </div>
          <span className="font-semibold text-2xl tracking-tight text-slate-900 dark:text-white hidden sm:inline-block">
            WelliQo
          </span>
        </Link>

        <div className="hidden lg:flex flex-1 justify-center px-8">
          <nav className="flex items-center gap-8 bg-slate-100/50 dark:bg-slate-900/50 px-6 py-2 rounded-full border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
            <Link href="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <Link href="/coaches" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Experts
            </Link>
            <Link href="/goals" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Goals
            </Link>
            <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700"></div>
            <div className="w-48">
              <GlobalSearch />
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/assessment"
            className="group relative flex h-11 items-center justify-center overflow-hidden rounded-full bg-slate-900 dark:bg-white px-8 font-medium text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 shadow-md shadow-slate-900/10"
          >
            <span className="relative z-10 text-[15px]">Get Started</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 ml-2 group-hover:text-white transition-colors duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
