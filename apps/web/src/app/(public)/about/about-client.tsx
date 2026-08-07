"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { AssessmentRegistry } from '@/assessments/registry';
import { ArrowDown, Shield, Brain, HeartPulse, LineChart, Sparkles } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full bg-[#030712] min-h-screen font-sans overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-900/10 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-900/10 blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-12"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">The WelliQo Philosophy</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-[1.1] text-balance">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block"
              >
                Health advice is everywhere.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 mt-2 font-medium"
              >
                Understanding your body is rare.
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-3xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed text-balance mt-12"
            >
              WelliQo wasn't built to tell everyone the same thing.<br/>
              It was built to understand one person at a time.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs uppercase tracking-widest font-semibold">Discover</span>
            <div className="w-px h-12 bg-gradient-to-b from-emerald-500/50 to-transparent" />
          </motion.div>
        </section>

        {/* BUILT BY ALOK */}
        <section className="px-4 py-32 relative">
          <FadeIn className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700" />
                <img 
                  src="/alok.jpg" 
                  alt="Alok" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-20 pointer-events-none" />
              </div>
              
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
                  Hi, I'm Alok.
                </h2>
                <div className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed space-y-6">
                  <p>
                    I spent years watching people receive generic advice that rarely fit their lives.
                  </p>
                  <p className="text-slate-200">
                    I wanted to build something different. Something that listens before it teaches.
                  </p>
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm md:text-base text-emerald-400 uppercase tracking-widest font-semibold text-balance">
                    Built by Alok.<br/>For everyone who's tired of generic wellness advice.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* WHY WELLIQO EXISTS */}
        <section className="px-4 py-40 max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-24">
              <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-500">Why WelliQo Exists</h2>
              <div className="w-12 h-px bg-emerald-500/50 mx-auto mt-6" />
            </div>
          </FadeIn>

          <div className="space-y-32">
            {[
              { wrong: "Most health advice starts with answers.", right: "We start with questions.", align: "left" },
              { wrong: "Most apps track numbers.", right: "We explain patterns.", align: "right" },
              { wrong: "Most plans tell you what to do.", right: "We help you understand why.", align: "left" }
            ].map((statement, idx) => (
              <FadeIn key={idx} className={statement.align === "right" ? "md:text-right" : "text-left"}>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-600 mb-6 text-balance tracking-tight">
                  {statement.wrong}
                </h3>
                <p className="text-4xl md:text-6xl lg:text-7xl font-medium text-white text-balance tracking-tight">
                  {statement.right}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* HOW WELLIQO THINKS (Visual Journey) */}
        <section className="px-4 py-40 relative">
          <div className="absolute inset-0 bg-slate-900/50 border-y border-white/5" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <FadeIn className="text-center mb-24">
              <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-500">How WelliQo Thinks</h2>
            </FadeIn>
            
            <div className="relative">
              {/* Animated Progress Line */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className="w-full bg-gradient-to-b from-emerald-400 via-teal-500 to-emerald-600 origin-top"
                  style={{ scaleY: scrollYProgress }}
                />
              </div>

              <div className="flex flex-col items-center justify-between min-h-[800px] text-2xl md:text-4xl font-light text-slate-400 py-12">
                <FadeIn><div className="bg-[#030712] px-6 py-2 rounded-full border border-white/10 text-white shadow-xl">You</div></FadeIn>
                <FadeIn delay={0.1}><div className="bg-[#030712] px-6 py-2">Assessment</div></FadeIn>
                <FadeIn delay={0.1}><div className="bg-[#030712] px-6 py-2">Understanding</div></FadeIn>
                <FadeIn delay={0.1}><div className="bg-[#030712] px-6 py-2">Body Intelligence</div></FadeIn>
                <FadeIn delay={0.1}><div className="bg-[#030712] px-6 py-2">Nutrition Intelligence</div></FadeIn>
                <FadeIn delay={0.1}><div className="bg-[#030712] px-6 py-2">Daily Blueprint</div></FadeIn>
                <FadeIn delay={0.1}><div className="bg-[#030712] px-6 py-2">Small Habits</div></FadeIn>
                <FadeIn delay={0.2}><div className="bg-emerald-950/50 border border-emerald-500/30 px-8 py-3 rounded-full text-emerald-400 font-medium shadow-[0_0_30px_rgba(16,185,129,0.2)] backdrop-blur-md">Long-term Health</div></FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PRINCIPLES (Bento Grid) */}
        <section className="px-4 py-40 max-w-6xl mx-auto">
          <FadeIn className="text-center mb-24">
            <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-500">Our Principles</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="p-12 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 hover:border-emerald-500/30 transition-colors duration-500 h-full group">
                <Brain className="w-8 h-8 text-emerald-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-3xl font-medium text-white mb-4">Evidence before opinion.</h3>
                <p className="text-xl text-slate-400 font-light leading-relaxed">Every recommendation should have a reason.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="p-12 rounded-[2rem] bg-gradient-to-bl from-slate-900 to-slate-950 border border-white/5 hover:border-emerald-500/30 transition-colors duration-500 h-full group">
                <HeartPulse className="w-8 h-8 text-emerald-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-3xl font-medium text-white mb-4">Compassion before motivation.</h3>
                <p className="text-xl text-slate-400 font-light leading-relaxed">People don't change because they are judged.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-12 rounded-[2rem] bg-gradient-to-tr from-slate-900 to-slate-950 border border-white/5 hover:border-emerald-500/30 transition-colors duration-500 h-full group">
                <LineChart className="w-8 h-8 text-emerald-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-3xl font-medium text-white mb-4">Progress before perfection.</h3>
                <p className="text-xl text-slate-400 font-light leading-relaxed">Small improvements matter.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-12 rounded-[2rem] bg-gradient-to-tl from-slate-900 to-slate-950 border border-white/5 hover:border-emerald-500/30 transition-colors duration-500 h-full group">
                <Shield className="w-8 h-8 text-emerald-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-3xl font-medium text-white mb-4">Privacy by design.</h3>
                <p className="text-xl text-slate-400 font-light leading-relaxed">Your health belongs to you.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* THE TECHNOLOGY */}
        <section className="px-4 py-40 bg-white/5 border-y border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-500 mb-16">The Intelligence Behind WelliQo</h2>
              
              <h3 className="text-4xl md:text-6xl font-light text-white leading-tight mb-16">
                WelliQo combines
              </h3>
            </FadeIn>
            
            <div className="flex flex-col items-center gap-6 text-2xl md:text-4xl font-medium mb-16 text-slate-200">
              <FadeIn delay={0.1}><div className="flex items-center gap-6"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">✓</span> behavioral science</div></FadeIn>
              <FadeIn delay={0.2}><div className="flex items-center gap-6"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">✓</span> nutrition science</div></FadeIn>
              <FadeIn delay={0.3}><div className="flex items-center gap-6"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">✓</span> health mathematics</div></FadeIn>
              <FadeIn delay={0.4}><div className="flex items-center gap-6"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">✓</span> personalized reasoning</div></FadeIn>
            </div>
            
            <FadeIn delay={0.5}>
              <p className="text-2xl md:text-4xl font-light text-slate-400 text-balance">
                to produce one report built specifically for you.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* DEFINING SENTENCE */}
        <section className="px-4 py-40 md:py-60 max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] text-balance tracking-tight">
              "We don't tell you what's healthy.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 font-light italic block mt-4">
                We help you understand what's healthy for you.
              </span>"
            </h2>
          </FadeIn>
        </section>

        {/* OUR PROMISE & CTA */}
        <section className="px-4 py-32 relative">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              
              <h2 className="text-sm font-bold tracking-widest uppercase text-emerald-500 mb-16">Our Promise</h2>
              
              <div className="text-2xl md:text-3xl font-light text-slate-400 leading-relaxed space-y-8 mb-24 max-w-3xl mx-auto">
                <p>We will never sell your health data.</p>
                <p>We will never recommend something because it pays us.</p>
                <p>We will never replace medical professionals.</p>
                <p className="font-medium text-white text-balance pt-8">We will always try to help you understand yourself better than yesterday.</p>
              </div>
              
              <div className="pt-16 border-t border-white/10">
                <h3 className="text-4xl md:text-5xl font-medium text-white mb-10 tracking-tight">
                  Ready to understand your body?
                </h3>
                <Link 
                  href={AssessmentRegistry.getDirectoryRoute()}
                  className="group relative inline-flex items-center justify-center h-16 md:h-20 px-12 rounded-full bg-white text-slate-950 text-xl font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  Start Free Assessment
                  <div className="ml-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowDown className="w-5 h-5 -rotate-90" />
                  </div>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </div>
  );
}
