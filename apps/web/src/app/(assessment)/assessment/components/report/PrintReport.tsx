import React from 'react';
import { useAssessmentStore } from '../../../../../store/assessment-store';
import { 
  PrintRecognitionBlock, PrintReflectionBlock, PrintStrengthBlock, PrintUnderstandingBlock, 
  PrintRealityBlock, PrintJourneyBlock, PrintActionsBlock, PrintScoreBlock,
  PrintBodyIntelligenceBlock, PrintNutritionIntelligenceBlock, PrintDailyBlueprintBlock, PrintCompanionNutritionBlock
} from './blocks/PrintBlockComponents';

// Renders the specific block using the Print Theme components
const PrintBlockRenderer = ({ block }: { block: any }) => {
  if (block.meta?.visibilityRules?.hidden) return null;

  switch (block.meta.type) {
    case 'recognition': return <PrintRecognitionBlock block={block} />;
    case 'reflection': return <PrintReflectionBlock block={block} />;
    case 'strength': return <PrintStrengthBlock block={block} />;
    case 'understanding': return <PrintUnderstandingBlock block={block} />;
    case 'reality': return <PrintRealityBlock block={block} />;
    case 'journey': return <PrintJourneyBlock block={block} />;
    case 'actions': return <PrintActionsBlock block={block} />;
    case 'score': return <PrintScoreBlock block={block} />;
    case 'body-intelligence': return <PrintBodyIntelligenceBlock block={block} />;
    case 'nutrition-intelligence': return <PrintNutritionIntelligenceBlock block={block} />;
    case 'daily-blueprint': return <PrintDailyBlueprintBlock block={block} />;
    case 'companion-nutrition': return <PrintCompanionNutritionBlock block={block} />;
    // We intentionally skip resources/coach CTA in print layout as requested
    default: return null;
  }
};

export function PrintReport() {
  const { experienceBlocks, data } = useAssessmentStore();
  const userName = data.name || 'Valued User';
  const dateStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  if (!experienceBlocks) return null;

  return (
    <div className="hidden print:block w-full bg-white text-slate-900 font-sans print-report-container">
      
      {/* 1. Print Watermark (Fixed on every page) */}
      <div className="fixed inset-0 flex items-center justify-center z-[-1] pointer-events-none" style={{ opacity: 0.04 }}>
        <div className="text-[200px] font-black tracking-tighter text-slate-900 rotate-[-45deg] whitespace-nowrap">
          WelliQo
        </div>
      </div>

      {/* 2. Print Header (Fixed on every page) */}
      <div className="fixed top-0 inset-x-0 h-16 border-b border-slate-200 flex items-end pb-4 px-12 z-50 bg-white" style={{ position: 'fixed', top: 0 }}>
        <div className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-2 text-slate-900">
            <span className="w-5 h-5 bg-slate-900 rounded-md block"></span> {/* Logo Placeholder */}
            WelliQo
          </div>
          <div>Personal Wellness Report</div>
          <div className="flex items-center gap-6">
            <span>{userName}</span>
            <span>{dateStr}</span>
          </div>
        </div>
      </div>

      {/* 3. Print Footer (Fixed on every page) */}
      <div className="fixed bottom-0 inset-x-0 h-16 border-t border-slate-200 flex items-start pt-4 px-12 z-50 bg-white text-xs font-bold text-slate-400 uppercase tracking-widest" style={{ position: 'fixed', bottom: 0 }}>
        <div className="w-full flex items-center justify-between">
          <div>© WelliQo</div>
          <div>www.WelliQo.com</div>
          <div className="print-page-number"></div> {/* Can be handled by standard browser margins if needed */}
        </div>
      </div>

      {/* Content wrapper with spacing for fixed header/footer */}
      <div className="pt-24 pb-24 px-12 relative z-10">
        
        {/* PREMIUM COVER PAGE */}
        <div className="flex flex-col items-center justify-center min-h-[90vh] text-center" style={{ breakAfter: 'page' }}>
          <div className="w-24 h-24 mb-12">
            <img src="/logo.jpg" alt="WelliQo" className="w-full h-full object-contain rounded-3xl" />
          </div>
          
          <div className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase mb-8">
            Confidential Report
          </div>
          
          <h1 className="text-[48px] font-black tracking-tighter text-slate-900 mb-16 uppercase">
            Personal Health<br/>Blueprint
          </h1>
          
          <div className="h-px w-32 bg-slate-200 mb-16"></div>
          
          <div className="space-y-2 mb-16">
            <div className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">Prepared For</div>
            <div className="text-[24px] font-bold text-slate-900 uppercase tracking-widest">{userName}</div>
          </div>
          
          <div className="space-y-2 mb-24">
            <div className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">Generated</div>
            <div className="text-[16px] font-bold text-slate-600">{dateStr}</div>
          </div>
          
          <div className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase mt-auto">
            Powered by WelliQo
          </div>
        </div>

        {/* REPORT CONTENT */}
        <div className="max-w-5xl mx-auto">
          {experienceBlocks.map((block) => (
            <PrintBlockRenderer key={block.meta.id} block={block} />
          ))}

          {/* PRINT-ONLY CALL TO ACTION */}
          <div className="text-center my-24 p-12 bg-slate-50 rounded-3xl mx-auto max-w-3xl" style={{ border: '1px solid #e2e8f0', breakInside: 'avoid' }}>
            <h3 className="text-[24px] font-bold text-slate-900 mb-4">Need help understanding this report?</h3>
            <p className="text-lg text-slate-600 mb-8">Schedule a WelliQo Coaching Session</p>
            <div className="text-emerald-700 font-bold tracking-widest uppercase">www.WelliQo.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
