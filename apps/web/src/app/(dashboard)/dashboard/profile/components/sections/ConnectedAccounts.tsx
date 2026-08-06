"use client";

import { Link as LinkIcon, Plus } from "lucide-react";

export function ConnectedAccounts({ user }: { user: any }) {
  // Mock connected accounts
  const isGoogleConnected = true;
  const isAppleConnected = false;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
          <LinkIcon className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Connected Accounts</h2>
      </div>

      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
        Connect external accounts to sign in easily and sync your health data.
      </p>

      <div className="space-y-4">
        {/* Google */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Google</h4>
              {isGoogleConnected ? (
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Connected</p>
              ) : (
                <p className="text-sm text-slate-500">Not connected</p>
              )}
            </div>
          </div>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isGoogleConnected ? 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90'}`}>
            {isGoogleConnected ? 'Disconnect' : 'Connect'}
          </button>
        </div>

        {/* Apple */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 16.32c-.05 1.5.9 2.5 1.8 3.04-.62 1.54-1.63 3.06-2.88 3.48-1.2.37-2.31-.22-3.32-.22-1.03 0-2.22.65-3.37.28-1.2-.4-2.19-1.92-2.82-3.37-1.32-3.07-1.28-6.14.07-7.79.8-1.03 1.94-1.6 3.12-1.6 1.15 0 2.22.58 2.92.58.74 0 1.98-.68 3.32-.61 1.25.04 2.22.42 2.89 1.1-.9.65-1.74 1.52-1.73 3.11M15.43 6.94c.66-.82 1.1-1.96.98-3.1-.99.04-2.19.68-2.87 1.52-.6.73-1.12 1.9-.98 3.02 1.1.08 2.22-.61 2.87-1.44z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Apple</h4>
              {isAppleConnected ? (
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Connected</p>
              ) : (
                <p className="text-sm text-slate-500">Not connected</p>
              )}
            </div>
          </div>
          <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${isAppleConnected ? 'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90'}`}>
            {isAppleConnected ? 'Disconnect' : (
              <>
                <Plus className="w-4 h-4" /> Connect
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
