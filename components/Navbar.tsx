import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-brand-cream border-b border-brand-charcoal/10 px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold font-serif italic tracking-tight text-brand-charcoal">
            Inquizitor<span className="text-brand-clay">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-xs font-mono uppercase tracking-widest text-brand-charcoal hover:text-brand-clay transition-colors"
            >
              <span className="text-brand-clay/50 mr-1">0{index + 1}</span> {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
           <span className="text-xs font-mono text-brand-charcoal/40">V 1.0.2</span>
           <button className="bg-brand-charcoal text-brand-cream px-5 py-2 text-xs font-mono uppercase tracking-wider hover:bg-brand-clay transition-colors">
            Get Access
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-cream pt-20 px-6 flex flex-col gap-6">
          {NAV_ITEMS.map((item, index) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-2xl font-serif text-brand-charcoal border-b border-brand-charcoal/10 pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-xs font-mono text-brand-clay block mb-2">0{index + 1}</span>
              {item.label}
            </a>
          ))}
           <button className="bg-brand-charcoal text-brand-cream px-5 py-4 text-sm font-mono uppercase tracking-wider w-full mt-4">
            Get Access
          </button>
        </div>
      )}
    </>
  );
};