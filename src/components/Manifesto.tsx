
import React from 'react';
import { Compass, Target, Zap, Shield } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif font-bold text-display-md mb-8 text-foreground">
            Engineered <span className="text-gradient">Elegance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Ares, we don't just develop. We distill ideas into engineered elegance — 
            systems designed to perform, evolve, and endure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="elegant-card floating-accent p-8 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <Compass className="text-primary" size={32} />
              <h3 className="text-2xl font-serif font-semibold text-foreground">Visionary</h3>
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed">
              We see beyond the immediate requirements to architect solutions that anticipate 
              tomorrow's challenges. Every system we design carries the DNA of forward-thinking.
            </p>
          </div>

          <div className="elegant-card floating-accent p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-6">
              <Target className="text-accent" size={32} />
              <h3 className="text-2xl font-serif font-semibold text-foreground">Precise</h3>
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed">
              Precision isn't just about accuracy — it's about intentionality. Every line of code, 
              every design decision, every interaction is purposefully crafted.
            </p>
          </div>

          <div className="elegant-card floating-accent p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <Zap className="text-primary" size={32} />
              <h3 className="text-2xl font-serif font-semibold text-foreground">Dynamic</h3>
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed">
              Our solutions pulse with life. They respond, adapt, and evolve with your business, 
              creating digital experiences that feel alive and intuitive.
            </p>
          </div>

          <div className="elegant-card floating-accent p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="text-accent" size={32} />
              <h3 className="text-2xl font-serif font-semibold text-foreground">Enduring</h3>
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed">
              We build for longevity. Our architectures are foundations, not quick fixes — 
              engineered to scale, secure, and serve for years to come.
            </p>
          </div>
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="elegant-card p-12 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-serif font-medium text-foreground leading-relaxed mb-8">
              "In the intersection of artistry and engineering, we find not just solutions, 
              but statements — digital works that speak to both function and form."
            </blockquote>
            <div className="text-primary font-display font-medium tracking-luxury">
              — The Ares Philosophy
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
