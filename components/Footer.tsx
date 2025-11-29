import React from 'react';
import { FOOTER_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream text-brand-charcoal pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {FOOTER_LINKS.map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="font-mono text-xs uppercase tracking-widest text-brand-charcoal/40 mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-lg font-serif hover:text-brand-clay hover:italic transition-all">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-1">
             <h4 className="font-mono text-xs uppercase tracking-widest text-brand-charcoal/40 mb-6">Social</h4>
             <ul className="space-y-4">
                <li><a href="#" className="text-lg font-serif hover:text-brand-clay hover:italic transition-all">Twitter</a></li>
                <li><a href="#" className="text-lg font-serif hover:text-brand-clay hover:italic transition-all">LinkedIn</a></li>
                <li><a href="#" className="text-lg font-serif hover:text-brand-clay hover:italic transition-all">Instagram</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-brand-charcoal/10 pt-8 flex justify-between items-end">
           <div className="text-[14vw] font-serif leading-[0.7] tracking-tighter text-brand-charcoal opacity-10 select-none pointer-events-none">
              Inquizitor
           </div>
           <div className="font-mono text-xs text-brand-charcoal/40 text-right pb-4 hidden md:block">
              © 2024 INQUIZITOR AI <br/> ALL RIGHTS RESERVED
           </div>
        </div>

      </div>
    </footer>
  );
};