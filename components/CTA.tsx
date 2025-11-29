import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="bg-brand-charcoal text-brand-cream py-32 border-b border-brand-charcoal/10 relative overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
        
        <div className="max-w-2xl">
          <Reveal>
             <h2 className="text-[12vw] md:text-[8rem] font-serif leading-[0.8] tracking-tighter text-white mb-6">
                Start <br/> <span className="text-brand-clay italic">Now.</span>
             </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl font-light text-white/60 max-w-md mt-8">
              Join 5,000+ educators and students transforming their documents into interactive mastery.
            </p>
          </Reveal>
        </div>

        <div className="w-full md:w-auto">
           <Reveal delay={0.2}>
              <div className="flex flex-col gap-4">
                 <button className="bg-brand-clay hover:bg-white hover:text-brand-charcoal text-white px-12 py-6 text-lg font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-between gap-8 border border-transparent">
                    Get Early Access <ArrowRight size={20} />
                 </button>
                 <span className="text-xs font-mono text-white/40 uppercase text-center block">
                    No Credit Card Required
                 </span>
              </div>
           </Reveal>
        </div>

      </div>
    </section>
  );
};