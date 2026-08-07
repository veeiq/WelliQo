"use client";

import { Info, ExternalLink } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
          <Info className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">About WelliQo</h2>
      </div>

      <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Welli<span className="text-emerald-500">Q</span>o
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Your Intelligent Health Companion</p>
        <div className="bg-white dark:bg-slate-900 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          Version 1.0.0 (Build 827)
        </div>
      </div>

      <div className="space-y-2">
        <Link href="/contact" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
          <span className="font-medium text-slate-700 dark:text-slate-300">Support Center & FAQ</span>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
        </Link>
        <Link href="/contact" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
          <span className="font-medium text-slate-700 dark:text-slate-300">Contact Us</span>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
        </Link>
        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
          <span className="font-medium text-slate-700 dark:text-slate-300">Rate WelliQo</span>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
          <span className="font-medium text-slate-700 dark:text-slate-300">Open Source Licenses</span>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
        </a>
      </div>
      
      <div className="pt-8 text-center">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} VeeiQ Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
}
