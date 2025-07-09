
import React from 'react';
import Navigation from '../components/Navigation';
import { ArrowLeft, Database, Shield, Zap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnterpriseArchitecture = () => {
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
              Case Study 001
            </div>
            <h1 className="font-serif font-bold text-display-lg mb-6 text-foreground">
              Enterprise Data Architecture
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Complete system redesign for a leading Philippine banking institution, 
              handling millions of daily transactions with zero downtime migration.
            </p>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Client</h3>
              <p className="text-muted-foreground">Leading Financial Institution</p>
            </div>
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground">8 Months</p>
            </div>
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Team Size</h3>
              <p className="text-muted-foreground">12 Engineers</p>
            </div>
          </div>

          {/* Challenge Section */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-display-sm mb-8 text-foreground">
              The Challenge
            </h2>
            <div className="elegant-card p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The client's legacy banking system was struggling with increasing transaction volumes, 
                frequent downtime, and compliance requirements. Their monolithic architecture couldn't 
                scale with the growing demands of digital banking in the Philippines.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Database className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Legacy System</h4>
                    <p className="text-sm text-muted-foreground">30-year-old COBOL-based core banking system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Compliance</h4>
                    <p className="text-sm text-muted-foreground">BSP regulatory requirements and audit trails</p>
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
                    <h3 className="font-display font-semibold text-foreground mb-2">Microservices Architecture</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Decomposed the monolithic system into 47 independent microservices, each responsible 
                      for specific business domains like payments, accounts, and customer management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Users className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Zero Downtime Migration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Implemented a strangler fig pattern with event sourcing and CQRS to gradually 
                      migrate functionality while maintaining 100% uptime during business hours.
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
                <div className="text-3xl font-serif font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-2">10x</div>
                <div className="text-sm text-muted-foreground">Performance Improvement</div>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">₱2.5M</div>
                <div className="text-sm text-muted-foreground">Monthly Cost Savings</div>
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
                {['Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Terraform'].map((tech) => (
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

export default EnterpriseArchitecture;
