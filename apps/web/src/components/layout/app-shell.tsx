import type { ReactNode } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/site-header';
import { SkipLink } from '@welliqo/ui/components/skip-link';

export function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SkipLink targetId="main-content" />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <footer className="w-full bg-slate-900 text-slate-400 py-12 px-4 text-xs leading-relaxed border-t border-slate-800 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4 max-w-sm text-left">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 flex items-center justify-center">
                <img 
                  src="/logo.jpg" 
                  alt="WelliQo" 
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">
                Welli<span className="text-emerald-500">Q</span>o
              </span>
            </div>
            <p className="text-sm font-medium text-emerald-400">Intelligent Wellness, Science-Informed</p>
            <div className="space-y-2 pt-2 text-slate-500">
              <p>
                <strong>Independent Wellness Coach:</strong><br/> Alok Kumar Mahapatra
              </p>
              <p>
                © {new Date().getFullYear()} WelliQo. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl space-y-4 md:text-right flex flex-col justify-between h-full">
            <p className="text-slate-500">
              These products are not intended to diagnose, treat, cure, or prevent any disease. Results are not typical. Individual results will vary depending on starting point, goals, and effort. This website is operated by independent wellness coaches.
            </p>
            <p className="text-slate-600 pt-8">Built with ❤️ in India by <a href="https://veeiq.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-500 font-medium transition-colors">VeeiQ</a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
