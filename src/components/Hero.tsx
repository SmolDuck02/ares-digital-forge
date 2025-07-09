
import React, { useState, useEffect } from 'react';
import GlitchText from './GlitchText';
import TypewriterEffect from './TypewriterEffect';
import { AlertTriangle, Terminal, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowWarning(true), 500);
    const timer2 = setTimeout(() => setShowTypewriter(true), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-ares-green"></div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-20 text-ares-red opacity-20 animate-pulse">
        <Terminal size={120} />
      </div>
      <div className="absolute bottom-20 right-20 text-ares-blue opacity-20 animate-bounce">
        <Zap size={80} />
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-4">
        {/* Warning Symbol */}
        {showWarning && (
          <div className="flex justify-center mb-8 animate-slide-up">
            <AlertTriangle 
              size={80} 
              className="text-ares-red animate-neon-pulse" 
            />
          </div>
        )}

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-brutalist font-black mb-6">
          <GlitchText 
            text="⚠️ YOU'RE ENTERING" 
            className="block text-ares-red mb-4"
          />
          <span className="text-transparent bg-gradient-to-r from-ares-blue via-ares-green to-ares-violet bg-clip-text animate-neon-pulse">
            THE FORGE
          </span>
        </h1>

        {/* Subtitle */}
        <div className="text-xl md:text-2xl font-terminal text-ares-green mb-12 max-w-4xl mx-auto">
          {showTypewriter && (
            <TypewriterEffect 
              text="Where your ideas are melted, reforged, and deployed into digital legends."
              speed={30}
            />
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="brutalist-btn text-lg">
            ENTER THE CHAOS
          </button>
          <button className="px-6 py-3 border-2 border-ares-blue text-ares-blue font-brutalist uppercase tracking-wider hover:bg-ares-blue hover:text-ares-black transition-all duration-200">
            VIEW MANIFESTO
          </button>
        </div>

        {/* Terminal Status */}
        <div className="mt-16 font-terminal text-ares-green text-sm">
          <div className="flex justify-center items-center gap-2">
            <span className="animate-terminal-blink">█</span>
            <span>SYSTEM STATUS: READY FOR CHAOS</span>
          </div>
          <div className="mt-2 opacity-70">
            Connection established • Terminal active • Ready to deploy
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
