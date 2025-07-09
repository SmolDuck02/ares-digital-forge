
import React from 'react';
import Navigation from '../components/Navigation';
import { ArrowLeft, BarChart3, Zap, Globe, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AnalyticsPlatform = () => {
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
              Case Study 002
            </div>
            <h1 className="font-serif font-bold text-display-lg mb-6 text-foreground">
              Real-time Analytics Platform
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              High-performance analytics dashboard for a leading Cebu-based e-commerce platform, 
              processing terabytes of data with sub-second response times.
            </p>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Client</h3>
              <p className="text-muted-foreground">E-commerce Platform</p>
            </div>
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground">6 Months</p>
            </div>
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Team Size</h3>
              <p className="text-muted-foreground">8 Engineers</p>
            </div>
          </div>

          {/* Challenge Section */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-display-sm mb-8 text-foreground">
              The Challenge
            </h2>
            <div className="elegant-card p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The client needed real-time insights into customer behavior, sales patterns, and inventory 
                management across multiple channels. Their existing reporting system took hours to generate 
                basic reports and couldn't handle the growing data volume from mobile commerce expansion.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <BarChart3 className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Data Volume</h4>
                    <p className="text-sm text-muted-foreground">5TB daily transaction and behavioral data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Multi-Channel</h4>
                    <p className="text-sm text-muted-foreground">Web, mobile app, and marketplace integrations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-display-sm mb-8 text-foreground">
              Our Solution
            </h2>
            <div className="space-y-8">
              <div className="elegant-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Zap className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Real-time Data Pipeline</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Built a streaming data pipeline using Apache Kafka and Redis for real-time data ingestion 
                      and processing, with React-based dashboards providing live updates via WebSocket connections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Database className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Advanced Caching Strategy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Implemented multi-layer caching with Redis and in-memory stores to achieve 
                      sub-200ms query response times for complex analytics queries.
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
                <div className="text-3xl font-serif font-bold text-primary mb-2">0.15s</div>
                <div className="text-sm text-muted-foreground">Average Query Time</div>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Faster Decision Making</div>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">₱1.8M</div>
                <div className="text-sm text-muted-foreground">Monthly Revenue Increase</div>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="font-serif font-bold text-display-sm mb-8 text-foreground">
              Technologies Used
            </h2>
            <div className="elegant-card p-8">
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'Apache Kafka', 'Redis', 'PostgreSQL', 'WebSocket', 'D3.js', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted/30 border border-border/30 text-sm font-display text-muted-foreground rounded-full"
                  >
                    {tech}
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

export default AnalyticsPlatform;
