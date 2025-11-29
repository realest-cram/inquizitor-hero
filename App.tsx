import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { Vision } from './components/Vision';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Marquee } from './components/Marquee';

function App() {
  const marqueeItems = [
    "Machine Learning", "Active Recall", "Bloom's Taxonomy", "Generative AI", "Semantic Analysis", "Adaptive Testing", "Instant Feedback", "Document Processing"
  ];

  return (
    <div className="bg-brand-cream min-h-screen font-sans selection:bg-brand-clay selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee items={marqueeItems} speed="slow" className="py-4" />
        <Problem />
        <Solution />
        <Features />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;