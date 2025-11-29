import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="bg-brand-charcoal text-brand-cream border-b border-brand-charcoal/10">
      <div className="grid md:grid-cols-12 min-h-screen">
         
         <div className="md:col-span-8 border-r border-white/10 p-8 md:p-16 flex flex-col justify-center">
            <Reveal>
               <span className="font-mono text-xs text-brand-clay uppercase tracking-widest mb-8 block">02 / Solution</span>
               <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-12">
                  Semantic analysis meets <br/> <span className="italic text-brand-clay">generative AI.</span>
               </h2>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
                  <div className="border-l border-white/20 pl-6">
                     <h4 className="font-mono text-sm uppercase tracking-wider mb-2 text-brand-clay">Ingest</h4>
                     <p className="text-white/60 text-sm leading-relaxed">Upload PDFs, Docs, or plain text. Our engine processes semantic structures, not just keywords.</p>
                  </div>
                  <div className="border-l border-white/20 pl-6">
                     <h4 className="font-mono text-sm uppercase tracking-wider mb-2 text-brand-clay">Generate</h4>
                     <p className="text-white/60 text-sm leading-relaxed">Create bloom-taxonomy aligned questions: Multiple choice, open ended, and scenario-based.</p>
                  </div>
                  <div className="border-l border-white/20 pl-6">
                     <h4 className="font-mono text-sm uppercase tracking-wider mb-2 text-brand-clay">Adapt</h4>
                     <p className="text-white/60 text-sm leading-relaxed">The system learns from user responses, adjusting difficulty in real-time to optimize retention.</p>
                  </div>
                  <div className="border-l border-white/20 pl-6">
                     <h4 className="font-mono text-sm uppercase tracking-wider mb-2 text-brand-clay">Verify</h4>
                     <p className="text-white/60 text-sm leading-relaxed">Every generated question is cross-referenced with source material citations for accuracy.</p>
                  </div>
               </div>
            </Reveal>
         </div>

         <div className="md:col-span-4 bg-brand-charcoal relative overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(224,120,86,0.15),transparent_70%)]" />
            
            <div className="relative w-full aspect-[9/16] max-w-[300px] border border-white/10 bg-white/5 backdrop-blur-sm rounded-none p-6 flex flex-col gap-4">
               <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-clay/20 flex items-center justify-center text-brand-clay text-xs font-mono">Q1</div>
                  <div className="text-[10px] font-mono text-white/40">DIFFICULTY: HARD</div>
               </div>
               <div className="space-y-2">
                  <div className="h-2 bg-white/20 w-3/4 rounded-full"></div>
                  <div className="h-2 bg-white/20 w-full rounded-full"></div>
                  <div className="h-2 bg-white/20 w-1/2 rounded-full"></div>
               </div>
               <div className="mt-auto space-y-2">
                  <div className="p-3 border border-white/10 hover:border-brand-clay/50 cursor-pointer transition-colors">
                     <div className="h-1.5 bg-white/10 w-full rounded-full"></div>
                  </div>
                  <div className="p-3 border border-brand-clay bg-brand-clay/10 cursor-pointer transition-colors relative">
                     <div className="h-1.5 bg-white/40 w-2/3 rounded-full"></div>
                     <div className="absolute top-1/2 right-3 -translate-y-1/2 w-2 h-2 bg-brand-clay rounded-full shadow-[0_0_10px_rgba(224,120,86,1)]"></div>
                  </div>
                  <div className="p-3 border border-white/10 hover:border-brand-clay/50 cursor-pointer transition-colors">
                     <div className="h-1.5 bg-white/10 w-3/4 rounded-full"></div>
                  </div>
               </div>
            </div>
         </div>

      </div>
    </section>
  );
};