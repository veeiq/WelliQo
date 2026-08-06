"use client";

import { Lock, Download, Trash2, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Privacy({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
          <Lock className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Privacy</h2>
      </div>

      <div className="space-y-4">
        
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Download My Data</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">Get a copy of your personal data and assessment history.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
            <Download className="w-4 h-4" /> Request Data
          </button>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Delete Assessment History</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">Permanently remove all your past assessment reports.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm font-medium transition-colors">
            <Trash2 className="w-4 h-4" /> Delete History
          </button>
        </div>

        <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">Delete Account</h4>
            <p className="text-sm text-red-600/80 dark:text-red-400/80">Permanently delete your account and all associated data.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors">
            Delete Account
          </button>
        </div>

      </div>

      <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
        <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:underline">
          <FileText className="w-4 h-4" /> Read our Privacy Policy <ExternalLink className="w-3 h-3" />
        </Link>
        <Link href="/terms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:underline">
          <FileText className="w-4 h-4" /> Read our Terms of Service <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

    </div>
  );
}
