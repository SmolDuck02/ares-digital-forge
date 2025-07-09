
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-ares-black text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="manifesto">
          <Manifesto />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Background particles/effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ares-red animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-ares-blue animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-ares-green animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-ares-violet animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Index;
