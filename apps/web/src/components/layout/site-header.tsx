"use client";

import Link from 'next/link';
import { GlobalSearch } from '@/components/search/global-search';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 flex h-[72px] items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <Link href="/" className="flex items-center gap-3 group lg:ml-0 ml-2 mr-auto">
          <div className="relative h-11 w-11 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo.jpg" 
              alt="WelliQo" 
              className="w-full h-full object-contain rounded-xl shadow-lg shadow-emerald-500/20"
            />
          </div>
          <span className="font-semibold text-2xl tracking-tight text-slate-900 dark:text-white hidden sm:block">
            Welli<span className="text-emerald-500">Q</span>o
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center px-8">
          <nav className="flex items-center gap-6 bg-slate-100/50 dark:bg-slate-900/50 px-6 py-2 rounded-full border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
            <Link href="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Home</Link>
            <Link href="/assessments" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Assessments</Link>
            <Link href="/goals" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Goals</Link>
            <Link href="/health-library" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Library</Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</Link>
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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl px-4 py-6 flex flex-col gap-4">
          <div className="mb-4">
            <GlobalSearch />
          </div>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white hover:text-emerald-500">Home</Link>
          <Link href="/assessments" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white hover:text-emerald-500">Assessments</Link>
          <Link href="/goals" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white hover:text-emerald-500">Goals</Link>
          <Link href="/health-library" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white hover:text-emerald-500">Library</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white hover:text-emerald-500">About</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white hover:text-emerald-500">Contact</Link>
          <Link href="/api/auth/signin" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">Sign In</Link>
        </div>
      )}
    </header>
  );
}
