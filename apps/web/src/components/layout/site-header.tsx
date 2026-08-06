"use client";

import Link from 'next/link';
import { GlobalSearch } from '@/components/search/global-search';
import { Menu, X, Home, ClipboardList, Target, Library, Info, Mail, LogIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 flex h-[72px] items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link href="/" className="flex items-center gap-3 group lg:ml-0 ml-2 mr-auto">
            <div className="relative h-11 w-11 hidden sm:flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.jpg" 
                alt="WelliQo" 
                className="w-full h-full object-contain rounded-xl shadow-lg shadow-emerald-500/20"
              />
            </div>
            <span className="font-bold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white">
              Welli<span className="text-emerald-500">Q</span>o
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center px-8">
            <nav className="flex items-center gap-6 bg-slate-100/50 dark:bg-slate-900/50 px-6 py-2 rounded-full border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
              <Link href="/" className={`text-sm font-medium transition-colors ${pathname === '/' ? 'text-emerald-600 dark:text-emerald-400 underline underline-offset-[6px] decoration-2 decoration-emerald-500/40 dark:decoration-emerald-400/40' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>Home</Link>
              <Link href="/assessments" className={`text-sm font-medium transition-colors ${pathname?.startsWith('/assessments') ? 'text-emerald-600 dark:text-emerald-400 underline underline-offset-[6px] decoration-2 decoration-emerald-500/40 dark:decoration-emerald-400/40' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>Assessments</Link>
              <Link href="/goals" className={`text-sm font-medium transition-colors ${pathname?.startsWith('/goals') ? 'text-emerald-600 dark:text-emerald-400 underline underline-offset-[6px] decoration-2 decoration-emerald-500/40 dark:decoration-emerald-400/40' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>Goals</Link>
              <Link href="/health-library" className={`text-sm font-medium transition-colors ${pathname?.startsWith('/health-library') ? 'text-emerald-600 dark:text-emerald-400 underline underline-offset-[6px] decoration-2 decoration-emerald-500/40 dark:decoration-emerald-400/40' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>Health Library</Link>
              <Link href="/about" className={`text-sm font-medium transition-colors ${pathname?.startsWith('/about') ? 'text-emerald-600 dark:text-emerald-400 underline underline-offset-[6px] decoration-2 decoration-emerald-500/40 dark:decoration-emerald-400/40' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>About</Link>
              <Link href="/contact" className={`text-sm font-medium transition-colors ${pathname?.startsWith('/contact') ? 'text-emerald-600 dark:text-emerald-400 underline underline-offset-[6px] decoration-2 decoration-emerald-500/40 dark:decoration-emerald-400/40' : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>Contact</Link>
              <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700 mx-2"></div>
              <div className="w-48"><GlobalSearch /></div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/api/auth/signin" className="hidden sm:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Sign In
            </Link>
            <Link
              href="/assessments"
              className="group relative flex h-10 md:h-11 items-center justify-center overflow-hidden rounded-full bg-slate-900 dark:bg-white px-5 md:px-8 font-medium text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 shadow-md shadow-slate-900/10"
            >
              <span className="relative z-10 text-[14px] md:text-[15px]">Get Started</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 ml-2 group-hover:text-white transition-colors duration-300 hidden md:inline">→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 left-0 bottom-0 z-50 w-[80%] max-w-[320px] bg-white dark:bg-slate-950 shadow-2xl flex flex-col lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
            <div className="h-9 w-9">
              <img src="/logo.jpg" alt="WelliQo" className="w-full h-full object-contain rounded-lg shadow-sm" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Welli<span className="text-emerald-500">Q</span>o
            </span>
          </Link>
          <button 
            className="p-2 text-slate-500 hover:text-emerald-500 transition-colors bg-slate-100 dark:bg-slate-800 rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto flex-1">
          <div className="mb-6">
            <GlobalSearch />
          </div>
          
          <nav className="flex flex-col gap-3">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-colors ${pathname === '/' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>
              <Home className={`w-[22px] h-[22px] ${pathname === '/' ? 'text-emerald-500' : ''}`} /> Home
            </Link>
            <Link href="/assessments" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-colors ${pathname?.startsWith('/assessments') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>
              <ClipboardList className={`w-[22px] h-[22px] ${pathname?.startsWith('/assessments') ? 'text-emerald-500' : ''}`} /> Assessments
            </Link>
            <Link href="/goals" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-colors ${pathname?.startsWith('/goals') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>
              <Target className={`w-[22px] h-[22px] ${pathname?.startsWith('/goals') ? 'text-emerald-500' : ''}`} /> Goals
            </Link>
            <Link href="/health-library" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-colors ${pathname?.startsWith('/health-library') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>
              <Library className={`w-[22px] h-[22px] ${pathname?.startsWith('/health-library') ? 'text-emerald-500' : ''}`} /> Health Library
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-colors ${pathname?.startsWith('/about') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>
              <Info className={`w-[22px] h-[22px] ${pathname?.startsWith('/about') ? 'text-emerald-500' : ''}`} /> About Us
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-colors ${pathname?.startsWith('/contact') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400'}`}>
              <Mail className={`w-[22px] h-[22px] ${pathname?.startsWith('/contact') ? 'text-emerald-500' : ''}`} /> Contact
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Link href="/api/auth/signin" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-colors">
            <LogIn className="w-[22px] h-[22px] text-emerald-500" /> Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
