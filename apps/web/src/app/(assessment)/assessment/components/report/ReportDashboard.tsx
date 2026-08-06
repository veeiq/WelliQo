import React, { useState, useEffect } from 'react';
import { useAssessmentStore } from '../../../../../store/assessment-store';
import { CurrentVsIdeal } from './CurrentVsIdeal';
import { CoachCallToAction } from './CoachCallToAction';
import { SaveReportModal } from './SaveReportModal';
import { CheckCircle2, AlertTriangle, ChevronRight, Activity, Beaker, Leaf, TrendingUp, ShieldCheck, BookOpen, PlayCircle, Share, Download, Home, Save } from 'lucide-react';
import Link from 'next/link';
import { HealthWheel } from './HealthWheel';
import { getRecommendationsAction, saveAssessmentResultAction } from '../../actions';
import { KnowledgeContent } from '@/types/knowledge';
import { useSession } from 'next-auth/react';

const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

export function ReportDashboard({ hideActions = false }: { hideActions?: boolean }) {
  const { calculatedMetrics, data, answers, reset, setAssessmentId, clientReportId } = useAssessmentStore();
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<KnowledgeContent[]>([]);
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

  useEffect(() => {
    if (calculatedMetrics) {
      const fetchRecs = async () => {
        try {
          const findings = calculatedMetrics.scoreExplanation?.map(f => f.label || (f as any).title) || [];
          const recs = await getRecommendationsAction([data.assessmentId || 'weight-loss'], findings);
          setRecommendations(recs);
        } catch (e) {
          console.error('Failed to fetch recommendations:', e);
        }
      };
      fetchRecs();
    }
  }, [calculatedMetrics, data.assessmentId]);

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
          calculatedMetrics
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

  if (!calculatedMetrics) return null;

  const {
    overallScore,
    scoreMeaning,
    timeline,
    strengths,
    improvements,
    scoreExplanation,
    priorityPlan,
    nutritionPlan,
    recommendedAssessments
  } = calculatedMetrics;

  return (
    <>
      <div className="w-full max-w-4xl mx-auto space-y-12 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-700 relative">
      
      {/* Header & Overall Score */}
      <div className="text-center space-y-6 pt-10">
        <div className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
          Your Personalized Blueprint
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
          Hi {data.name || 'there'}, your Wellness Score is <span className="text-emerald-600 dark:text-emerald-400">{overallScore}/100</span>
        </h1>
        <div className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg text-lg font-semibold mb-4">
          Status: {scoreMeaning}
        </div>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto whitespace-pre-line">
          {calculatedMetrics.overallSummary || 'We analyzed your profile to identify exactly what is holding you back and what you need to focus on right now.'}
        </p>
      </div>

      {/* Your Biggest Health Challenges */}
      {scoreExplanation && scoreExplanation.length > 0 && (
        <div className="max-w-3xl mx-auto mt-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Your Biggest Health Challenges
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {scoreExplanation.map((finding, i) => {
              const severity = i === 0 ? 'High' : 'Medium';
              const severityColor = severity === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
              let icon = '⚠️';
              const labelStr = (finding.label || (finding as any).title || '');
              if (labelStr.toLowerCase().includes('sugar') || labelStr.toLowerCase().includes('drink')) icon = '🍹';
              else if (labelStr.toLowerCase().includes('portion')) icon = '🍔';
              else if (labelStr.toLowerCase().includes('craving') || labelStr.toLowerCase().includes('late')) icon = '🌙';
              else if (labelStr.toLowerCase().includes('sleep')) icon = '🥱';
              
              // Simplify the title from the label text
              let title = labelStr.split(' ')[0].replace(/[^a-zA-Z]/g, '');
              if (finding.id.includes('SUGAR')) title = 'Sugary Drinks';
              else if (finding.id.includes('PORTION')) title = 'Portion Size';
              else if (finding.id.includes('CRAVING') || finding.id.includes('LATE')) title = 'Late Night Cravings';
              else if (finding.id.includes('SLEEP')) title = 'Sleep Quality';
              else if (finding.id.includes('SNACK')) title = 'Frequent Snacking';
              else if (finding.id.includes('STRESS') || finding.id.includes('EMOTIONAL')) title = 'Emotional Eating';
              else title = labelStr.substring(0, 20) + '...';

              return (
                <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{icon}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${severityColor}`}>
                      {severity} Impact
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {finding.label || (finding as any).title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Biggest Opportunity */}
      {calculatedMetrics.biggestOpportunity && calculatedMetrics.biggestOpportunityExplanation && (
        <div className={cn(
          "border p-6 md:p-8 rounded-3xl max-w-3xl mx-auto mt-6",
          overallScore >= 75 ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30" : 
          overallScore >= 60 ? "bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-900/30" : 
          "bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30"
        )}>
          <h3 className={cn(
            "text-xl font-bold mb-2 flex items-center gap-2",
            overallScore >= 75 ? "text-emerald-800 dark:text-emerald-400" :
            overallScore >= 60 ? "text-orange-800 dark:text-orange-400" :
            "text-red-800 dark:text-red-400"
          )}>
            <TrendingUp className="w-5 h-5" />
            Biggest Opportunity: {calculatedMetrics.biggestOpportunity}
          </h3>
          <div className={cn(
            "mt-4 pt-4 border-t",
            overallScore >= 75 ? "border-emerald-200/50 dark:border-emerald-800/50" :
            overallScore >= 60 ? "border-orange-200/50 dark:border-orange-800/50" :
            "border-red-200/50 dark:border-red-800/50"
          )}>
            <span className={cn(
              "font-bold block mb-2",
              overallScore >= 75 ? "text-emerald-900 dark:text-emerald-300" :
              overallScore >= 60 ? "text-orange-900 dark:text-orange-300" :
              "text-red-900 dark:text-red-300"
            )}>Why this matters most:</span>
            <div className={cn(
              "text-sm md:text-base leading-relaxed whitespace-pre-line",
              overallScore >= 75 ? "text-emerald-800 dark:text-emerald-400/90" :
              overallScore >= 60 ? "text-orange-800 dark:text-orange-400/90" :
              "text-red-800 dark:text-red-400/90"
            )}>
              {calculatedMetrics.biggestOpportunityExplanation}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-12">
        {/* Body Summary */}
        <CurrentVsIdeal metrics={calculatedMetrics} data={data} answers={answers} timeline={timeline} />
        
        {/* Health Wheel */}
        <HealthWheel pillarScores={calculatedMetrics.pillarScores} />

        {/* Nutrition Recommendations */}
        {nutritionPlan && (
          <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-slate-800 dark:border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-emerald-900/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Leaf className="w-8 h-8 text-emerald-400" />
                Targeted Nutrition Profile
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-emerald-300 font-semibold mb-2">Daily Protein Goal</div>
                  <div className="text-lg font-bold">{nutritionPlan.protein}</div>
                  {nutritionPlan.proteinGrams && (
                    <div className="text-emerald-100 text-sm mt-1">≈{nutritionPlan.proteinGrams} g/day</div>
                  )}
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-emerald-300 font-semibold mb-2">Carb Strategy</div>
                  <div className="text-lg">{nutritionPlan.carbs}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-emerald-300 font-semibold mb-2">Fat Strategy</div>
                  <div className="text-lg">{nutritionPlan.fats}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-emerald-200">Recommended Natural Sources</h4>
                  <ul className="space-y-2">
                    {nutritionPlan.naturalSources.map((src, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {src}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
                  <h4 className="text-xl font-semibold mb-4 text-emerald-200 flex items-center gap-2">
                    <Beaker className="w-5 h-5" />
                    Targeted Supplements
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {nutritionPlan.supplements.state === 'NOT_RECOMMENDED' ? (
                      <li className="text-slate-300 italic">{nutritionPlan.supplements.reason || 'No supplements recommended.'}</li>
                    ) : (
                      nutritionPlan.supplements.products.map((sup, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {sup}
                        </li>
                      ))
                    )}
                  </ul>
                  <a href="#coach-cta" className="inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                    Consult a Wellness Coach for exact dosages →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Priority Plan */}
        <div>
          <div className="text-center mb-8">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              Your Personalized Priority Plan
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              The highest impact actions you need to take right now.
            </p>
          </div>
          
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {priorityPlan.map((action, index) => (
              <a href="#coach-cta" key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-lg">
                  {index + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm group-hover:shadow-lg group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-all text-left">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-block px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                          Priority #{index + 1}
                        </div>
                        {action.difficulty && (
                          <div className={cn(
                            "inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                            action.difficulty === 'Easy' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                            action.difficulty === 'Moderate' ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                            "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          )}>
                            Difficulty: {action.difficulty}
                          </div>
                        )}
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">{action.title}</h4>
                      
                      <div className="space-y-4 text-sm">
                        {action.why && (
                          <div>
                            <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">Why this matters</span>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{action.why}</p>
                          </div>
                        )}
                        {action.action && (
                          <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                            <span className="font-semibold text-emerald-900 dark:text-emerald-300 block mb-1">Action</span>
                            <p className="text-emerald-800 dark:text-emerald-400/90 leading-relaxed">{action.action}</p>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {action.expectedBenefit && (
                            <div>
                              <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">Expected Benefit</span>
                              <p className="text-slate-600 dark:text-slate-400">{action.expectedBenefit}</p>
                            </div>
                          )}
                          {action.timeline && (
                            <div>
                              <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-1">Expected improvement</span>
                              <p className="text-slate-600 dark:text-slate-400">{action.timeline}</p>
                            </div>
                          )}
                        </div>

                        {action.successIndicators && action.successIndicators.length > 0 && (
                          <div className="pt-2">
                            <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-2">Success Indicators</span>
                            <ul className="space-y-2">
                              {action.successIndicators.map((indicator, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                  <span className="text-emerald-500 mt-0.5">✓</span>
                                  {indicator}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Recommended Assessments */}
        {recommendedAssessments.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-emerald-500" />
              Recommended Follow-Up Assessments
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recommendedAssessments.map((assessment, idx) => (
                <button 
                  key={idx}
                  onClick={() => setAssessmentId(assessment.id as any)}
                  className="flex items-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500 hover:shadow-md transition-all group text-left w-full"
                >
                   <div className="text-3xl mr-3">{assessment.icon}</div>
                   <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{assessment.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Continue Learning */}
        {recommendations.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-500" />
              Continue Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendations.map(rec => (
                <Link key={rec.id} href={`/health-library/${rec.type.toLowerCase()}/${rec.id}`} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group">
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative">
                    <img src={rec.thumbnail} alt={rec.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{rec.category}</span>
                      <span className="text-xs text-slate-500">{rec.estimatedMinutes} min</span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">{rec.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{rec.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* The Solution & Call to Action */}
        <div id="coach-cta" className="scroll-mt-24">
          <CoachCallToAction />
        </div>

      </div>

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
