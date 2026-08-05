import React from 'react';
import { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | WelliQo',
  description: 'Important medical disclaimer regarding WelliQo services.',
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:py-32 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-6 shadow-inner">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Medical Disclaimer
          </h1>
          <p className="text-slate-500">Last updated: August 2026</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm prose prose-slate dark:prose-invert max-w-none">
          <h2>Not Medical Advice</h2>
          <p>
            The information, including but not limited to, text, graphics, images and other material contained on this website are for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis or treatment.
          </p>
          
          <h2>Consult Your Physician</h2>
          <p>
            Always seek the advice of your physician or other qualified health care provider with any questions you may have regarding a medical condition or treatment and before undertaking a new health care regimen, and never disregard professional medical advice or delay in seeking it because of something you have read on this website.
          </p>

          <h2>Emergencies</h2>
          <p>
            If you think you may have a medical emergency, call your doctor, go to the emergency department, or call emergency services immediately. WelliQo does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the website.
          </p>
        </div>
      </div>
    </div>
  );
}
