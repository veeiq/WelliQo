import React, { useState, useEffect, useRef } from 'react';
import { useAssessmentStore } from '../../../../../store/assessment-store';
import { CoachCallToAction } from './CoachCallToAction';
import { SaveReportModal } from './SaveReportModal';
import { CheckCircle2, Download, Home, Save, Share } from 'lucide-react';
import Link from 'next/link';
import { saveAssessmentResultAction } from '../../actions';
import { useSession } from 'next-auth/react';
import { BlockRenderer } from './blocks/BlockRenderer';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

export function ReportDashboard({ hideActions = false }: { hideActions?: boolean }) {
  const { calculatedMetrics, experienceBlocks, data, answers, reset, clientReportId } = useAssessmentStore();
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const { data: session } = useSession();
  const [isSaved, setIsSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // Exit intent detection (simple beforeunload for refreshing/closing tab)
  // Disable it when the save modal is open (so Google OAuth redirect doesn't trigger it) or if already saved.
  useEffect(() => {
    if (isSaveModalOpen || isSaved) return;
    
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ''; // Required for Chrome to show a prompt
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isSaveModalOpen, isSaved]);

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

  const handleDownloadPDF = async () => {
    if (!reportRef.current || isGeneratingPDF) return;
    
    setIsGeneratingPDF(true);
    setToastMessage('Preparing PDF... Please wait.');
    setShowToast(true);

    try {
      // Temporarily expand the element to its full height before capturing
      // (This helps if there are hidden scrollable areas, though our page is fully expanded)
      const canvas = await html2canvas(reportRef.current, {
        scale: 2, // Higher resolution
        useCORS: true, // Allow external images
        logging: false,
        backgroundColor: document.documentElement.classList.contains('dark') ? '#020617' : '#f8fafc',
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Calculate PDF dimensions (A4)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // If the report is taller than one A4 page, we can either scale it down to fit one long page (not standard PDF) 
      // or just let it flow across multiple pages. For simplicity and best visual quality of an infographic report,
      // we'll print it as a continuous scroll by setting the PDF height to exactly match the image ratio.
      // A standard A4 might cut off text in the middle of a line. 
      const customPdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight]
      });

      customPdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      customPdf.save(`WelliQo_Report_${data.name || 'User'}.pdf`);
      
      setToastMessage('✓ PDF Downloaded');
      setTimeout(() => setShowToast(false), 2000);
    } catch (error) {
      console.error('PDF Generation failed:', error);
      setToastMessage('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  if (!calculatedMetrics || !experienceBlocks) return null;

  return (
    <>
      {/* Premium WelliQo Watermark for PDF/Web */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center opacity-[0.02] dark:opacity-[0.04] z-0 overflow-hidden">
        <span className="text-[15rem] font-black tracking-tighter text-slate-900 dark:text-white rotate-[-30deg] select-none whitespace-nowrap">
          WelliQo
        </span>
      </div>

      <div ref={reportRef} className="w-full max-w-4xl mx-auto space-y-2 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10">
      
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

      {/* Legal Disclaimer Footer */}
      <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center pb-12">
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          This report was built from your answers.<br />
          <br />
          It is designed to educate, not diagnose.<br />
          <br />
          If something doesn't feel accurate, your coach can help refine your plan.
        </p>
        <div className="mt-8 flex justify-center">
           <div className="h-1 w-12 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        </div>
      </div>
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
                  <button onClick={handleDownloadPDF} disabled={isGeneratingPDF} className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">{isGeneratingPDF ? 'Generating...' : 'Download PDF'}</span>
                    <span className="sm:hidden">{isGeneratingPDF ? '...' : 'PDF'}</span>
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
                  <button onClick={handleDownloadPDF} disabled={isGeneratingPDF} className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">{isGeneratingPDF ? 'Generating...' : 'Download PDF'}</span>
                    <span className="sm:hidden">{isGeneratingPDF ? '...' : 'PDF'}</span>
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
