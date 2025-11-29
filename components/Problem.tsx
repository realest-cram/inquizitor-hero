import React from 'react';
import { Reveal } from './Reveal';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="border-b border-brand-charcoal/10 bg-brand-cream">
      <div className="grid md:grid-cols-2">
        
        {/* Sticky Header Side */}
        <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-brand-charcoal/10 md:sticky md:top-16 md:h-[calc(100vh-64px)] flex flex-col justify-between">
           <Reveal>
             <div>
                <span className="font-mono text-xs text-brand-clay uppercase tracking-widest mb-4 block">01 / Problem</span>
                <h2 className="text-5xl md:text-7xl font-serif text-brand-charcoal leading-none mt-4">
                   The <br/> <span className="text-outline">Retention</span> <br/> Gap
                </h2>
             </div>
           </Reveal>
           <Reveal delay={0.2}>
              <div className="mt-12 md:mt-0">
                 <p className="font-mono text-xs text-brand-charcoal/50 uppercase tracking-widest mb-2">Issue Detected</p>
                 <p className="text-xl font-light text-brand-charcoal">Passive consumption leads to active forgetting.</p>
              </div>
           </Reveal>
        </div>

        {/* Scrolling Content Side */}
        <div className="bg-white">
           <div className="p-8 md:p-16 border-b border-brand-charcoal/10 min-h-[50vh] flex flex-col justify-center">
              <Reveal>
                 <span className="text-6xl font-serif text-brand-charcoal/10 mb-6 block">01</span>
                 <h3 className="text-2xl font-medium text-brand-charcoal mb-4">The "Illusion of Competence"</h3>
                 <p className="text-brand-charcoal/70 leading-relaxed max-w-md">
                    Readers often mistake familiarity with the text for mastery of the concepts. Just because you read it doesn't mean you know it.
                 </p>
              </Reveal>
           </div>
           <div className="p-8 md:p-16 border-b border-brand-charcoal/10 min-h-[50vh] flex flex-col justify-center">
              <Reveal>
                 <span className="text-6xl font-serif text-brand-charcoal/10 mb-6 block">02</span>
                 <h3 className="text-2xl font-medium text-brand-charcoal mb-4">Time Constraint</h3>
                 <p className="text-brand-charcoal/70 leading-relaxed max-w-md">
                    Creating high-quality quizzes takes 5-10x longer than reading the source material. Manual validation is slow and error-prone.
                 </p>
              </Reveal>
           </div>
           <div className="p-8 md:p-16 min-h-[50vh] flex flex-col justify-center">
              <Reveal>
                 <span className="text-6xl font-serif text-brand-charcoal/10 mb-6 block">03</span>
                 <h3 className="text-2xl font-medium text-brand-charcoal mb-4">Static Content</h3>
                 <p className="text-brand-charcoal/70 leading-relaxed max-w-md">
                    Standard documents don't talk back. They don't challenge you or adapt to your specific learning gaps.
                 </p>
              </Reveal>
           </div>
        </div>

      </div>
    </section>
  );
};