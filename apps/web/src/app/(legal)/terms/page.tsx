import React from 'react';
import { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | WelliQo',
  description: 'Terms and conditions for using WelliQo services.',
};

export default function TermsPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:py-32 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6 shadow-inner">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-slate-500">Last updated: August 2026</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm prose prose-slate dark:prose-invert max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing our website, you agree to be bound by these Terms of Service and to use our services in accordance with these Terms, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the website or to products and services available through the website or from WelliQo.
          </p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
          </p>

          <h2>3. User Representations</h2>
          <p>
            By using the website, you represent and warrant that all registration information you submit will be true, accurate, current, and complete.
          </p>

          <h2>4. Limitations of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the website.
          </p>
        </div>
      </div>
    </div>
  );
}
