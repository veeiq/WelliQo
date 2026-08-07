import React, { useState, useEffect } from 'react';
import { useAssessmentStore } from '../../../../../store/assessment-store';
import { CoachCallToAction } from './CoachCallToAction';
import { SaveReportModal } from './SaveReportModal';
import { CheckCircle2, Download, Home, Save, Share } from 'lucide-react';
import Link from 'next/link';
import { saveAssessmentResultAction } from '../../actions';
import { useSession } from 'next-auth/react';
import { BlockRenderer } from './blocks/BlockRenderer';

const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

export function ReportDashboard({ hideActions = false }: { hideActions?: boolean }) {
  const { calculatedMetrics, experienceBlocks, data, answers, reset, clientReportId } = useAssessmentStore();
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const { data: session } = useSession();
  const [isSaved, setIsSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Exit intent detection (simple beforeunload for refreshing/closing tab)
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ''; // Required for Chrome to show a prompt
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Recommendations now handled by ResourcesBlock via engine if needed
  // Removing old local fetchRecs logic
  const { synced, setSynced } = useAssessmentStore();

  useEffect(() => {
    if (session?.user && calculatedMetrics && !synced && !isSaved) {
      const saveReport = async () => {
        setSynced(true); // Optimistic lock to prevent Strict Mode duplicates
        const reportId = clientReportId || `report_${Date.now()}`;
        const res = await saveAssessmentResultAction(
          reportId,
          data.assessmentId || 'weight-loss',
          'Weight Management Assessment',
          answers,
          { clinical: calculatedMetrics, experience: experienceBlocks }
        );
        if (res.success) {
          setIsSaved(true);
          setToastMessage('✓ Report saved successfully');
          setShowToast(true);
          setTimeout(() => setShowToast(false), 2000);
        } else {
          // Revert lock if failed
          setSynced(false);
        }
      };
      saveReport();
    }
  }, [session, calculatedMetrics, isSaved, synced, setSynced, data, answers, clientReportId]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Wellness Report',
          text: 'Check out my personalized wellness report on WelliQo!',
          url: window.location.href,
        });
      } catch (e) {
        console.error('Error sharing:', e);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setToastMessage('✓ Link copied to clipboard');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  const handleDownloadPDF = () => {
    setToastMessage('Download PDF (Coming Soon)');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  if (!calculatedMetrics || !experienceBlocks) return null;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto space-y-2 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-700 relative">
      
      {/* The Experience Engine controls the UI sequence completely */}
      {experienceBlocks.map((block) => (
        <BlockRenderer key={block.meta.id} block={block} />
      ))}

      {/* Restart Button */}
      {!hideActions && (
        <div className="flex justify-center mt-12 pb-12">
          <button
            onClick={reset}
            className="px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-semibold transition-all shadow-sm"
          >
            Retake Assessment
          </button>
        </div>
      )}
      </div>

      {/* Sticky Save Action Bar */}
      {!hideActions && (
        <>
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-40 animate-in slide-in-from-bottom-24 duration-1000 delay-500 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)]">
            <div className="max-w-4xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-3">
              {session?.user ? (
                <>
                  <button className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-xl font-bold border border-emerald-200 dark:border-emerald-800 flex items-center justify-center gap-2 cursor-default">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="hidden sm:inline">Saved ✓</span>
                  </button>
                  <button onClick={handleDownloadPDF} className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download PDF</span>
                    <span className="sm:hidden">PDF</span>
                  </button>
                  <button onClick={handleShare} className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <Share className="w-4 h-4" />
                    Share
                  </button>
                  <Link href="/dashboard" className="w-full md:flex-1 px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-500 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 order-first md:order-last">
                    <Home className="w-5 h-5" />
                    Go to Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <button onClick={() => setIsSaveModalOpen(true)} className="w-full md:w-auto md:flex-1 px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-500 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 order-first md:order-none">
                    <Save className="w-5 h-5" />
                    Save Report
                  </button>
                  <button onClick={() => setIsSaveModalOpen(true)} className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download PDF</span>
                    <span className="sm:hidden">PDF</span>
                  </button>
                  <button onClick={() => setIsSaveModalOpen(true)} className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <Share className="w-4 h-4" />
                    Share
                  </button>
                </>
              )}
            </div>
          </div>

          <SaveReportModal 
            isOpen={isSaveModalOpen} 
            onClose={() => setIsSaveModalOpen(false)} 
          />
        </>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-24 right-4 z-50 animate-in slide-in-from-bottom-5 fade-in bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-slate-800">
          <span className="text-emerald-400 font-bold">{toastMessage.includes('✓') ? '✓' : 'ℹ'}</span>
          <span className="text-sm font-medium">{toastMessage.replace('✓ ', '')}</span>
        </div>
      )}
    </>
  );
}
