import React from 'react';
import { Metadata } from 'next';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = {
  title: 'Login | WelliQo',
  description: 'Sign in to access your personalized wellness dashboard.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">
          WelliQo
        </h2>
      </div>
      <LoginForm />
    </div>
  );
}
