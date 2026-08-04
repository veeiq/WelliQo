'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { User, LogIn, LogOut, Settings, Moon, Sun, Globe, X } from 'lucide-react';
import { useUserStore } from '@/store/user-store';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

export function GlobalProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { profile, logout } = useUserStore();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    router.push('/');
  };

  return (
    <div className="relative z-50" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        {profile ? (
          <span className="font-bold text-sm">{profile.name.charAt(0)}</span>
        ) : (
          <User className="w-5 h-5" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
          
          <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 mb-2">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {profile ? profile.name : 'Guest User'}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              {profile ? profile.phone : 'Not signed in'}
            </p>
          </div>

          <div className="space-y-1 px-2">
            {!profile ? (
              <button onClick={() => { setIsOpen(false); /* trigger login modal here later if needed, or navigate */ }} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <LogIn className="w-4 h-4" /> Sign In / Register
              </button>
            ) : (
              <Link href="/dashboard" onClick={() => setIsOpen(false)} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <User className="w-4 h-4" /> My Dashboard
              </Link>
            )}

            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <Settings className="w-4 h-4" /> Settings
            </button>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} 
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </div>
              <div className={`w-7 h-4 rounded-full flex items-center px-0.5 transition-colors ${theme === 'dark' ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                <div className={`w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform ${theme === 'dark' ? 'translate-x-3' : 'translate-x-0'}`} />
              </div>
            </button>
            <button 
              onClick={() => alert("Language switching will be available in V2!")}
              className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3"><Globe className="w-4 h-4" /> Language</div>
              <span className="text-xs font-semibold text-slate-400">EN</span>
            </button>

            <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />

            <Link href="/" onClick={() => setIsOpen(false)} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <X className="w-4 h-4" /> Save & Exit
            </Link>
            
            {profile && (
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
