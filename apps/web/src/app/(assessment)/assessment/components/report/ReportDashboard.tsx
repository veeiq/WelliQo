import React, { useState, useEffect, useRef } from 'react';
import { useAssessmentStore } from '../../../../../store/assessment-store';
import { CoachCallToAction } from './CoachCallToAction';
import { SaveReportModal } from './SaveReportModal';
import { CheckCircle2, Download, Home, Save, Share } from 'lucide-react';
import Link from 'next/link';
import { saveAssessmentResultAction } from '../../actions';
import { useSession } from 'next-auth/react';
import { BlockRenderer } from './blocks/BlockRenderer';
import { toJpeg } from 'html-to-image';
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
          title: 'WelliQo Assessment',
          text: 'I just took this wellness assessment on WelliQo. Try it yourself!',
          url: window.location.origin,
        });
      } catch (e) {
        console.error('Error sharing:', e);
      }
    } else {
      await navigator.clipboard.writeText(window.location.origin);
      setToastMessage('✓ Link copied to clipboard');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  const handleDownloadPDF = async () => {
    if (!session?.user) {
      setIsSaveModalOpen(true);
      return;
    }
    
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    setToastMessage('Preparing PDF... Please wait.');
    setShowToast(true);

    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4', compress: true });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 40; 
      const contentWidth = pageWidth - margin * 2;
      
      let currentY = margin + 20; // Start slightly below header

      // 1. Capture the Cover Page (We'll render a hidden one in the DOM just for this)
      const coverEl = document.getElementById('pdf-cover-page');
      if (coverEl) {
        const coverData = await toJpeg(coverEl, { 
          quality: 0.9, 
          pixelRatio: 1.5, 
          backgroundColor: '#ffffff',
          style: { opacity: '1', zIndex: '1' } // Override Tailwind opacity-0 during clone
        });
        
        if (coverData && coverData !== 'data:,') {
          const coverProps = pdf.getImageProperties(coverData);
          const coverHeight = contentWidth * (coverProps.height / coverProps.width);
          pdf.addImage(coverData, 'JPEG', margin, currentY, contentWidth, coverHeight, undefined, 'FAST');
          pdf.addPage();
          currentY = margin + 20;
        }
      }

      // 2. Iterate through each block to prevent splitting
      const blocks = document.querySelectorAll('.pdf-export-block');
      const isDark = document.documentElement.classList.contains('dark');
      const bgColor = isDark ? '#020617' : '#f8fafc';

      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i] as HTMLElement;
        
        // Skip empty blocks
        if (block.offsetHeight === 0) continue;

        const dataUrl = await toJpeg(block, { 
          quality: 0.9, 
          pixelRatio: 1.5, 
          backgroundColor: bgColor,
          style: { transform: 'none', margin: '0' }
        });
        
        if (!dataUrl || dataUrl === 'data:,') continue;

        const imgProps = pdf.getImageProperties(dataUrl);
        const ratio = imgProps.height / imgProps.width;
        const imgHeight = contentWidth * ratio;

        const maxContentHeight = pageHeight - (margin * 2) - 20;

        // Check if block fits on the current page
        if (currentY + imgHeight > pageHeight - margin - 30) {
          // It doesn't fit on this page.
          // Does it fit on a brand NEW page?
          if (imgHeight <= maxContentHeight) {
            // Yes, so just add a new page and don't split it.
            pdf.addPage();
            currentY = margin + 20;
            pdf.addImage(dataUrl, 'JPEG', margin, currentY, contentWidth, imgHeight, undefined, 'FAST');
            currentY += imgHeight + 20;
          } else {
            // No, the block is MASSIVE (taller than a full A4 page). We must slice it mathematically.
            let heightLeft = imgHeight;
            
            // Draw the first slice on the current page (filling the rest of the page)
            pdf.addImage(dataUrl, 'JPEG', margin, currentY, contentWidth, imgHeight, undefined, 'FAST');
            let printedOnThisPage = (pageHeight - margin) - currentY;
            heightLeft -= printedOnThisPage;
            
            // Draw subsequent slices on new pages
            while (heightLeft > 0) {
              pdf.addPage();
              // Shift the image UP by the amount we've already printed
              let yOffset = margin - (imgHeight - heightLeft);
              
              pdf.addImage(dataUrl, 'JPEG', margin, yOffset, contentWidth, imgHeight, undefined, 'FAST');
              
              if (heightLeft > maxContentHeight) {
                heightLeft -= maxContentHeight;
              } else {
                // We're done slicing
                currentY = yOffset + imgHeight + 20;
                heightLeft = 0;
              }
            }
          }
        } else {
          // Fits perfectly on current page
          pdf.addImage(dataUrl, 'JPEG', margin, currentY, contentWidth, imgHeight, undefined, 'FAST');
          currentY += imgHeight + 20; 
        }
      }

      // 3. Stamp Header, Footer on EVERY page (Removed Watermark as requested)
      const pageCount = pdf.getNumberOfPages();
      const dateStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      
      for (let i = 1; i <= pageCount; i++) {
        pdf.setPage(i);
        
        // Mask the top and bottom margins to hide any sliced image overlap
        if (isDark) {
          pdf.setFillColor(2, 6, 23); // slate-950
        } else {
          pdf.setFillColor(255, 255, 255); // white
        }
        pdf.rect(0, 0, pageWidth, margin, 'F'); // Top margin mask
        pdf.rect(0, pageHeight - margin, pageWidth, margin, 'F'); // Bottom margin mask
        
        // Header
        pdf.setTextColor(148, 163, 184); // slate-400
        pdf.setFontSize(8);
        pdf.text('WELLIQO', margin, margin);
        pdf.text('PERSONAL WELLNESS REPORT', pageWidth / 2, margin, { align: 'center' });
        pdf.text(dateStr, pageWidth - margin, margin, { align: 'right' });
        
        // Footer
        pdf.text('© WELLIQO', margin, pageHeight - margin);
        pdf.text('WWW.WELLIQO.COM', pageWidth / 2, pageHeight - margin, { align: 'center' });
        pdf.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - margin, { align: 'right' });
      }

      const safeName = (data.name || 'User').replace(/[^a-z0-9]/gi, '_');
      const isoDate = new Date().toISOString().split('T')[0];
      pdf.save(`WelliQo_Report_${safeName}_${isoDate}.pdf`);
      
      setToastMessage('✓ PDF Downloaded Successfully');
    } catch (error) {
      console.error('PDF Generation failed:', error);
      setToastMessage('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  if (!calculatedMetrics || !experienceBlocks) return null;

  return (
    <>
      {/* Hidden Cover Page optimized specifically for the PDF scraper */}
      <div id="pdf-cover-page" className="absolute top-0 left-0 w-[800px] -z-50 opacity-0 pointer-events-none bg-white text-slate-900 p-16 flex flex-col items-center justify-center min-h-[1100px] text-center">
        <div className="w-32 h-32 mb-12">
          <img src="/logo.jpg" alt="WelliQo" className="w-full h-full object-contain rounded-3xl" />
        </div>
        <div className="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase mb-8">
          Confidential Report
        </div>
        <h1 className="text-[56px] font-black tracking-tighter text-slate-900 mb-16 uppercase leading-tight">
          Personal Health<br/>Blueprint
        </h1>
        <div className="h-px w-48 bg-slate-200 mb-16"></div>
        <div className="space-y-4 mb-20">
          <div className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">Prepared For</div>
          <div className="text-[32px] font-bold text-slate-900 uppercase tracking-widest">{data.name || 'Valued User'}</div>
        </div>
        <div className="space-y-4 mb-32">
          <div className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">Generated</div>
          <div className="text-[20px] font-bold text-slate-600">{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
        </div>
        <div className="text-sm font-bold tracking-[0.3em] text-slate-400 uppercase mt-auto">
          Powered by Welli<span className="text-emerald-500">Q</span>o
        </div>
      </div>

      <div ref={reportRef} className="w-full max-w-4xl mx-auto space-y-2 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10 bg-slate-50 dark:bg-slate-950">
        
        <div className="relative z-10">
          {/* We wrap each BlockRenderer in .pdf-export-block so jsPDF can snapshot them perfectly without splitting */}
          {experienceBlocks.map((block) => (
            <div key={block.meta.id} className="pdf-export-block mb-2">
              <BlockRenderer block={block} />
            </div>
          ))}

          {/* Dedicated Final Page: Coach CTA & Disclaimer */}
          <div className="pdf-export-block mt-8 bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 border border-slate-200 dark:border-slate-800 rounded-3xl" style={{ breakBefore: 'page' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">Need help reaching your goals?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Talk to a real person. Connect with a certified Wellness Coach for personalized nutritional support and a step-by-step action plan.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-emerald-500/20">
                View Coaches
              </Link>
            </div>
            
            <div className="border-t border-slate-200 dark:border-slate-800 pt-12 text-sm text-slate-500 dark:text-slate-400 space-y-6">
              <h3 className="font-bold text-slate-900 dark:text-slate-300 uppercase tracking-wider mb-4">Important Disclaimer</h3>
              <p>
                <strong className="text-slate-700 dark:text-slate-300">Not Medical Advice:</strong> This report is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before altering your diet, exercise, or health regimen.
              </p>
              <p>
                <strong className="text-slate-700 dark:text-slate-300">No Affiliation & No Liability:</strong> WelliQo is an independent assessment tool. We are not officially endorsed by, affiliated with, or liable for any third-party brands, including Herbalife. Any product suggestions are provided purely as educational examples.
              </p>
              <p>
                <strong className="text-slate-700 dark:text-slate-300">Estimates Only:</strong> The metrics and insights provided are algorithmic estimations based strictly on your self-reported data. Individual results will vary significantly based on genetics, lifestyle, and adherence.
              </p>
            </div>
          </div>
        </div>

      {/* Restart Button */}
      {!hideActions && (
        <div className="flex justify-center mt-12 pb-8">
          <button
            onClick={reset}
            className="px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-semibold transition-all shadow-sm"
          >
            Retake Assessment
          </button>
        </div>
      )}

      {/* Coach CTA (Pops up Coach list) */}
      {!hideActions && (
        <div className="mb-12">
          <CoachCallToAction />
        </div>
      )}

      {/* Legal Disclaimer Footer */}
      <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center pb-12">
        <div className="max-w-2xl mx-auto text-left space-y-3">
          <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center mb-4">Important Disclaimer</h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            <strong>• Not Medical Advice:</strong> This report is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before altering your diet, exercise, or health regimen.
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            <strong>• No Affiliation & No Liability:</strong> WelliQo is an independent assessment tool. We are not officially endorsed by, affiliated with, or liable for any third-party brands, including Herbalife. Any product suggestions are provided purely as educational examples.
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            <strong>• Estimates Only:</strong> The metrics and insights provided are algorithmic estimations based strictly on your self-reported data. Individual results will vary significantly based on genetics, lifestyle, and adherence.
          </p>
        </div>
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
                  <button onClick={handleShare} className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
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
