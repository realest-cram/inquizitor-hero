import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-16 flex flex-col justify-between border-b border-brand-charcoal/10">
      
      <div className="flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 w-full py-20">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
             <div className="h-[1px] w-12 bg-brand-charcoal/20"></div>
             <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-charcoal/60">System 01</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-[12vw] md:text-[8rem] font-serif leading-[0.85] text-brand-charcoal tracking-tight mb-8">
            <span className="block">Active</span>
            <span className="block italic text-brand-clay ml-[10vw] md:ml-32">Recall</span>
            <span className="block text-right">Engine</span>
          </h1>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-8 mt-12 border-t border-brand-charcoal/10 pt-12">
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl font-light text-brand-charcoal leading-relaxed">
                Inquizitor uses advanced language models to digest your reading materials and generate adaptive quizzes instantly. 
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-3 md:col-start-7">
             <Reveal delay={0.3}>
                <div className="space-y-4">
                   <div className="flex justify-between border-b border-brand-charcoal/10 pb-2">
                      <span className="font-mono text-xs text-brand-charcoal/50 uppercase">Input</span>
                      <span className="font-mono text-xs text-brand-charcoal uppercase">PDF / DOCX</span>
                   </div>
                   <div className="flex justify-between border-b border-brand-charcoal/10 pb-2">
                      <span className="font-mono text-xs text-brand-charcoal/50 uppercase">Process</span>
                      <span className="font-mono text-xs text-brand-charcoal uppercase">Semantic Analysis</span>
                   </div>
                   <div className="flex justify-between border-b border-brand-charcoal/10 pb-2">
                      <span className="font-mono text-xs text-brand-charcoal/50 uppercase">Output</span>
                      <span className="font-mono text-xs text-brand-charcoal uppercase">Active Quiz</span>
                   </div>
                </div>
             </Reveal>
          </div>
          <div className="md:col-span-3">
             <Reveal delay={0.4}>
                <button className="w-full h-full min-h-[100px] bg-brand-clay text-white rounded-none hover:bg-brand-charcoal transition-colors flex flex-col items-center justify-center gap-2 group">
                   <span className="font-mono text-xs uppercase tracking-widest">Start Engine</span>
                   <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </button>
             </Reveal>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 border-t border-brand-charcoal/10 divide-x divide-brand-charcoal/10">
         <div className="p-4 text-center">
            <span className="font-mono text-xs block text-brand-charcoal/40 mb-1">Users</span>
            <span className="font-serif text-xl">5,000+</span>
         </div>
         <div className="p-4 text-center">
            <span className="font-mono text-xs block text-brand-charcoal/40 mb-1">Docs Processed</span>
            <span className="font-serif text-xl">1.2M</span>
         </div>
         <div className="p-4 text-center">
            <span className="font-mono text-xs block text-brand-charcoal/40 mb-1">Accuracy</span>
            <span className="font-serif text-xl">99.8%</span>
         </div>
         <div className="p-4 text-center bg-brand-charcoal text-brand-cream">
            <span className="font-mono text-xs block opacity-50 mb-1">Status</span>
            <span className="font-serif text-xl italic">Online</span>
         </div>
      </div>
    </section>
  );
};