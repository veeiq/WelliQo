import React from 'react';
import { Metadata } from 'next';
import { Cookie } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | WelliQo',
  description: 'How we use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:py-32 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6 shadow-inner">
            <Cookie className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-slate-500">Last updated: August 2026</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm prose prose-slate dark:prose-invert max-w-none">
          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs.
          </p>
          
          <h2>2. How do we use cookies?</h2>
          <p>
            As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
          </p>
          <p>
            The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience.
          </p>

          <h2>3. Manage your cookie preferences</h2>
          <p>
            You can change your cookie preferences any time by clicking the Cookie Settings button on our website. This will let you revisit the cookie consent banner and change your preferences or withdraw your consent right away.
          </p>
        </div>
      </div>
    </div>
  );
}
