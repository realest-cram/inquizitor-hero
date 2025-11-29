import React from 'react';
import { FEATURES } from '../constants';
import { Reveal } from './Reveal';

export const Features: React.FC = () => {
  return (
    <section id="features" className="bg-brand-cream border-b border-brand-charcoal/10">
      
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-brand-charcoal/10">
        <Reveal>
          <div className="flex justify-between items-end">
            <div>
               <span className="font-mono text-xs text-brand-charcoal/40 uppercase tracking-widest mb-4 block">03 / Features</span>
               <h2 className="text-4xl font-serif text-brand-charcoal">System Capabilities</h2>
            </div>
            <p className="font-mono text-xs text-brand-charcoal/60 uppercase hidden md:block">
               Scroll to explore
            </p>
          </div>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto border-x border-brand-charcoal/10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={index} delay={index * 0.05} className="h-full">
              <div className="group p-10 h-full bg-brand-cream border-b border-brand-charcoal/10 md:border-r border-brand-charcoal/10 hover:bg-white transition-colors duration-300 relative">
                <div className="absolute top-6 right-6 font-mono text-xs text-brand-charcoal/20">0{index + 1}</div>
                <div className="mb-8 text-brand-charcoal opacity-80 group-hover:text-brand-clay group-hover:opacity-100 transition-colors">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-brand-charcoal mb-4 group-hover:translate-x-1 transition-transform">
                  {feature.title}
                </h3>
                <p className="text-brand-charcoal/60 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};