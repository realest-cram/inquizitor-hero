import React from 'react';
import { Reveal } from './Reveal';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-brand-cream border-b border-brand-charcoal/10 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-brand-charcoal/5"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <span className="font-mono text-xs text-brand-clay uppercase tracking-widest mb-8 block">04 / Vision</span>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.15] text-brand-charcoal">
            "The future of education is not about consuming more content. It's about <span className="inline-block border-b-2 border-brand-clay text-brand-clay italic px-2">interacting</span> with what we already have."
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
           <div className="mt-16 inline-flex border border-brand-charcoal/10 bg-white px-8 py-4 gap-12 rounded-full">
              <div className="text-center">
                 <span className="block text-2xl font-serif text-brand-charcoal">10x</span>
                 <span className="block text-[10px] font-mono uppercase text-brand-charcoal/40 tracking-wider">Speed</span>
              </div>
              <div className="w-[1px] bg-brand-charcoal/10 h-auto"></div>
              <div className="text-center">
                 <span className="block text-2xl font-serif text-brand-charcoal">85%</span>
                 <span className="block text-[10px] font-mono uppercase text-brand-charcoal/40 tracking-wider">Retention</span>
              </div>
              <div className="w-[1px] bg-brand-charcoal/10 h-auto"></div>
              <div className="text-center">
                 <span className="block text-2xl font-serif text-brand-charcoal">0.0</span>
                 <span className="block text-[10px] font-mono uppercase text-brand-charcoal/40 tracking-wider">Manual Work</span>
              </div>
           </div>
        </Reveal>
      </div>
    </section>
  );
};