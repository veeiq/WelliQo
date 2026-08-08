import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = {
  title: 'Login | WelliQo',
  description: 'Sign in to access your personalized wellness dashboard.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Home
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <Link href="/" className="block text-center hover:opacity-80 transition-opacity">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Welli<span className="text-emerald-500">Q</span>o
          </h2>
        </Link>
      </div>
      <LoginForm />
    </div>
  );
}
