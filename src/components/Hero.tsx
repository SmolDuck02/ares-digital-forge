import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleExploreWork = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartConversation = () => {
    window.open('mailto:ursonalj@gmail.com', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-subtle-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-subtle-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 right-20 text-primary/20 animate-gentle-pulse">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-32 left-20 text-accent/20 animate-gentle-pulse" style={{ animationDelay: '1s' }}>
        <Zap size={40} />
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-4">
        {showContent && (
          <>
            {/* Main Heading */}
            <div className="animate-fade-in-up">
              <h1 className="font-serif font-bold text-display-xl mb-8 text-foreground tracking-luxury">
                Digital Systems.
                <br />
                <span className="text-gradient">Artistic Precision.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl font-sans text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Ares crafts high-impact digital solutions with vision, strategy, and execution. 
                <br className="hidden md:block" />
                Rooted in art, backed by logic.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="premium-button group" onClick={handleExploreWork}>
                <span className="flex items-center gap-2">
                  Explore Our Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              <button className="premium-button-outline" onClick={handleStartConversation}>
                Start a Conversation
              </button>
            </div>

            {/* Refined status indicator */}
            <div className="mt-20 font-sans text-muted-foreground text-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex justify-center items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-gentle-pulse"></div>
                <span className="tracking-wide">Available for Select Projects</span>
              </div>
              <div className="opacity-70">
                Precision Engineering • Strategic Design • Lasting Impact
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
