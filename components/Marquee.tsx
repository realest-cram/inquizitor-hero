import React from 'react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  className?: string;
  speed?: 'slow' | 'fast';
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  items, 
  direction = 'left', 
  className = "",
  speed = 'slow'
}) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap border-y border-brand-charcoal/10 bg-brand-cream ${className}`}>
      <div className={`flex animate-${direction === 'left' ? 'marquee' : 'marquee-reverse'}`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {items.map((item, idx) => (
              <span key={idx} className="mx-8 text-sm font-mono uppercase tracking-widest text-brand-charcoal/60 flex items-center py-3">
                {item} <span className="ml-8 text-brand-clay">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};