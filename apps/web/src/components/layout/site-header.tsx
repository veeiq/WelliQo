"use client";

import Link from 'next/link';
import { GlobalSearch } from '@/components/search/global-search';
import { Activity, Menu, X, User, LogOut, Settings, BarChart3, LayoutDashboard, Brain, ChevronRight, Goal, ShieldCheck, Dumbbell, ClipboardList, Home, Target, Library, Info, Mail, LogIn, FileText, Heart, Bell } from 'lucide-react';
import { AssessmentRegistry } from '@/assessments/registry';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

interface SiteHeaderProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function SiteHeader({ user }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavItem = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
    <Link 
      href={href} 
      className={`text-[14px] transition-all font-medium flex items-center ${
        isActive 
          ? 'text-emerald-600 dark:text-emerald-400' 
          : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
      }`}
    >
      {isActive && <span className="mr-1.5 text-[8px]">●</span>}
      {children}
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
        {/* Changed h-[72px] to h-[64px] based on feedback */}
        <div className="container mx-auto px-4 md:px-8 flex h-[64px] items-center justify-between">
          
          <button 
            className="lg:hidden p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link href="/" className="flex items-center gap-3 group lg:ml-0 ml-2 mr-auto">
            <div className="relative h-10 w-10 hidden sm:flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.jpg" 
                alt="WelliQo" 
                className="w-full h-full object-contain rounded-xl shadow-lg shadow-emerald-500/20"
              />
            </div>
            <span className="font-bold text-[22px] tracking-tight text-slate-900 dark:text-white">
              Welli<span className="text-emerald-500">Q</span>o
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center px-8">
            {/* Increased gap from gap-6 to gap-8 */}
            <nav className="flex items-center gap-8 bg-slate-100/50 dark:bg-slate-900/50 px-6 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
              {user ? (
                <>
                  <NavItem href="/dashboard" isActive={pathname === '/dashboard'}>Dashboard</NavItem>
                  <NavItem href="/dashboard/reports" isActive={pathname?.startsWith('/dashboard/reports')}>My Reports</NavItem>
                  <NavItem href="/progress" isActive={pathname?.startsWith('/progress')}>Progress</NavItem>
                  <NavItem href="/health-library" isActive={pathname?.startsWith('/health-library')}>Library</NavItem>
                  <NavItem href="/coach" isActive={pathname?.startsWith('/coach')}>Coach</NavItem>
                </>
              ) : (
                <>
                  <NavItem href={AssessmentRegistry.getDirectoryRoute()} isActive={pathname?.startsWith(AssessmentRegistry.getDirectoryRoute())}>Assessments</NavItem>
                  <NavItem href="/goals" isActive={pathname?.startsWith('/goals')}>Goals</NavItem>
                  <NavItem href="/coaches" isActive={pathname?.startsWith('/coaches')}>Coaches</NavItem>
                  <NavItem href="/health-library" isActive={pathname?.startsWith('/health-library')}>Library</NavItem>
                  <NavItem href="/about" isActive={pathname?.startsWith('/about')}>About</NavItem>
                  <NavItem href="/contact" isActive={pathname?.startsWith('/contact')}>Contact</NavItem>
                </>
              )}
              <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700 mx-1"></div>
              {/* Reduced width from w-48 to w-40 */}
              <div className="w-40"><GlobalSearch /></div>
            </nav>
          </div>

          <div className="flex items-center gap-3 relative" ref={dropdownRef}>
            {user ? (
              <>
                <button className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full text-slate-500 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors mr-1">
                  <Bell className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800/50 p-1 rounded-full transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700 active:scale-95"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400 overflow-hidden shadow-sm">
                    {user.image ? <img src={user.image} alt={user.name || "User"} className="w-full h-full object-cover"/> : <User className="w-4 h-4" />}
                  </div>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-3 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 animate-in fade-in slide-in-from-top-2">
                    <Link href="/dashboard" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      <Home className="w-4 h-4 text-slate-400" /> Dashboard
                    </Link>
                    <Link href="/dashboard/settings" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      <Settings className="w-4 h-4 text-slate-400" /> Settings
                    </Link>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
                    <button onClick={() => signOut({ callbackUrl: '/login' })} className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium w-full text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link href="/login" className="hidden sm:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mr-1">
                  Log in
                </Link>
                <Link
                  href={AssessmentRegistry.getDirectoryRoute()}
                  className="group relative flex h-9 md:h-10 items-center justify-center overflow-hidden rounded-full bg-slate-900 dark:bg-white px-5 md:px-6 font-medium text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 shadow-md shadow-slate-900/10"
                >
                  <span className="relative z-10 text-[13px] md:text-[14px]">Get Started</span>
                  {/* Increased hover animation scale */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-150 group-hover:scale-100" />
                  <span className="relative z-10 ml-1.5 group-hover:translate-x-1 transition-transform duration-300 hidden md:inline group-hover:text-white">→</span>
                </Link>
              </>
            )}
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
            <div className="h-8 w-8">
              <img src="/logo.jpg" alt="WelliQo" className="w-full h-full object-contain rounded-lg shadow-sm" />
            </div>
            <span className="font-bold text-[20px] tracking-tight text-slate-900 dark:text-white">
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
          
          <nav className="flex flex-col gap-2">
            {user ? (
              <>
                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname === '/dashboard' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <LayoutDashboard className={`w-5 h-5 ${pathname === '/dashboard' ? 'text-emerald-500' : 'text-slate-400'}`} /> Dashboard
                </Link>
                <Link href="/dashboard/reports" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith('/dashboard/reports') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <FileText className={`w-5 h-5 ${pathname?.startsWith('/dashboard/reports') ? 'text-emerald-500' : 'text-slate-400'}`} /> My Reports
                </Link>
                <Link href="/progress" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith('/progress') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <Target className={`w-5 h-5 ${pathname?.startsWith('/progress') ? 'text-emerald-500' : 'text-slate-400'}`} /> Progress
                </Link>
                <Link href="/health-library" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith('/health-library') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <Library className={`w-5 h-5 ${pathname?.startsWith('/health-library') ? 'text-emerald-500' : 'text-slate-400'}`} /> Library
                </Link>
                <Link href="/coach" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith('/coach') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <User className={`w-5 h-5 ${pathname?.startsWith('/coach') ? 'text-emerald-500' : 'text-slate-400'}`} /> Coach
                </Link>
              </>
            ) : (
              <>
                <Link href={AssessmentRegistry.getDirectoryRoute()} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith(AssessmentRegistry.getDirectoryRoute()) ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <ClipboardList className={`w-5 h-5 ${pathname?.startsWith(AssessmentRegistry.getDirectoryRoute()) ? 'text-emerald-500' : 'text-slate-400'}`} /> Assessments
                </Link>
                <Link href="/goals" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith('/goals') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <Target className={`w-5 h-5 ${pathname?.startsWith('/goals') ? 'text-emerald-500' : 'text-slate-400'}`} /> Goals
                </Link>
                <Link href="/coaches" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith('/coaches') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <User className={`w-5 h-5 ${pathname?.startsWith('/coaches') ? 'text-emerald-500' : 'text-slate-400'}`} /> Coaches
                </Link>
                <Link href="/health-library" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith('/health-library') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <Library className={`w-5 h-5 ${pathname?.startsWith('/health-library') ? 'text-emerald-500' : 'text-slate-400'}`} /> Library
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith('/about') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <Info className={`w-5 h-5 ${pathname?.startsWith('/about') ? 'text-emerald-500' : 'text-slate-400'}`} /> About
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-xl text-[15px] font-medium transition-colors ${pathname?.startsWith('/contact') ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                  <Mail className={`w-5 h-5 ${pathname?.startsWith('/contact') ? 'text-emerald-500' : 'text-slate-400'}`} /> Contact
                </Link>
              </>
            )}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          {!user && (
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-colors">
              <LogIn className="w-5 h-5 text-emerald-500" /> Log in
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
