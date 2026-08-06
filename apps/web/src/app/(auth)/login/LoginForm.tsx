'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { loginAction, registerAction } from '../actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { syncGuestDataToUser } from '@/utils/auth-sync';

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps = {}) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    
    if (isRegistering) {
      const res = await registerAction(formData);
      if (res.error) {
        setError(res.error);
        setLoading(false);
      } else {
        setIsRegistering(false);
        setError('Account created successfully! Please log in.');
        setLoading(false);
      }
    } else {
      const res = await loginAction(formData);
      if (res.error) {
        setError(res.error);
        setLoading(false);
      } else {
        await syncGuestDataToUser();
        if (onSuccess) {
          onSuccess();
        } else {
          router.push('/dashboard');
          router.refresh();
        }
      }
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-800 p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {isRegistering ? 'Create Account' : 'Welcome Back'}
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          {isRegistering 
            ? 'Start your personalized wellness journey.' 
            : 'Sign in to access your personalized dashboard.'}
        </p>
      </div>

      <button
        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors mb-6 shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
        Continue with Google
      </button>

      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
        </div>
        <div className="relative px-4 bg-white dark:bg-slate-900 text-sm text-slate-500">
          Or continue with
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className={`p-3 text-sm rounded-lg ${error.includes('successfully') ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
            {error}
          </div>
        )}

        {isRegistering && (
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
            <input 
              name="name" 
              type="text" 
              required 
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900 dark:text-white"
            />
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
          <input 
            name="password" 
            type="password" 
            required 
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900 dark:text-white"
          />
        </div>

        {isRegistering && (
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Confirm Password</label>
            <input 
              name="confirm" 
              type="password" 
              required 
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-900 dark:text-white"
            />
          </div>
        )}

        {!isRegistering && (
          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
              Forgot Password?
            </Link>
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl shadow-md transition-colors disabled:opacity-70 mt-2"
        >
          {loading ? 'Processing...' : (isRegistering ? 'Create Account' : 'Continue')}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {isRegistering ? 'Already have an account?' : 'New here?'}
        </p>
        <button 
          onClick={() => {
            setIsRegistering(!isRegistering);
            setError(null);
          }}
          className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-xl transition-colors"
        >
          {isRegistering ? 'Sign In Instead' : 'Create Account'}
        </button>
      </div>

      <div className="mt-8 text-center text-xs text-slate-500">
        By continuing you agree to our <br/>
        <Link href="/terms" className="underline hover:text-slate-700 dark:hover:text-slate-300">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-slate-700 dark:hover:text-slate-300">Privacy Policy</Link>
      </div>
    </div>
  );
}
