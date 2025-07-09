
import React from 'react';
import Navigation from '../components/Navigation';
import { ArrowLeft, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DigitalTransformation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/#portfolio');
  };

  return (
    <div className="min-h-screen bg-ares-black text-white">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>

          {/* Hero Section */}
          <div className="mb-16">
            <div className="text-sm font-display text-muted-foreground uppercase tracking-luxury mb-4">
              Case Study 003
            </div>
            <h1 className="font-serif font-bold text-display-lg mb-6 text-foreground">
              Digital Transformation Strategy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Six-month strategic engagement with a traditional Filipino manufacturing company, 
              resulting in 40% operational efficiency increase and comprehensive technology modernization.
            </p>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Client</h3>
              <p className="text-muted-foreground">Manufacturing Company</p>
            </div>
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground">6 Months</p>
            </div>
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Team Size</h3>
              <p className="text-muted-foreground">5 Consultants</p>
            </div>
          </div>

          {/* Challenge Section */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-display-sm mb-8 text-foreground">
              The Challenge
            </h2>
            <div className="elegant-card p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A 50-year-old manufacturing company was struggling with manual processes, 
                disconnected systems, and declining competitiveness. They needed a comprehensive 
                digital transformation strategy to compete with newer, more agile competitors.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Users className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Legacy Processes</h4>
                    <p className="text-sm text-muted-foreground">Paper-based workflows and manual inventory</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Competition</h4>
                    <p className="text-sm text-muted-foreground">Market share loss to digital-first competitors</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-display-sm mb-8 text-foreground">
              Our Approach
            </h2>
            <div className="space-y-8">
              <div className="elegant-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <CheckCircle className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Strategic Assessment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Conducted comprehensive analysis of existing processes, technology stack, 
                      and organizational readiness. Identified key pain points and opportunities for automation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <TrendingUp className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Phased Implementation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Designed a 3-phase transformation roadmap focusing on ERP integration, 
                      workflow automation, and data analytics. Included comprehensive training programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-display-sm mb-8 text-foreground">
              Results
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Efficiency Increase</div>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-2">₱3.2M</div>
                <div className="text-sm text-muted-foreground">Annual Cost Savings</div>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Process Automation</div>
              </div>
            </div>
          </section>

          {/* Deliverables */}
          <section>
            <h2 className="font-serif font-bold text-display-sm mb-8 text-foreground">
              Key Deliverables
            </h2>
            <div className="elegant-card p-8">
              <div className="flex flex-wrap gap-3">
                {['Strategic Roadmap', 'ERP Integration', 'Process Automation', 'Staff Training', 'Performance Metrics', 'Change Management', 'Technology Architecture', 'Data Analytics'].map((deliverable) => (
                  <span
                    key={deliverable}
                    className="px-4 py-2 bg-muted/30 border border-border/30 text-sm font-display text-muted-foreground rounded-full"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DigitalTransformation;
