
import React from 'react';
import Navigation from '../components/Navigation';
import { ArrowLeft, Cloud, Cpu, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComputingPlatform = () => {
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
              Case Study 004
            </div>
            <h1 className="font-serif font-bold text-display-lg mb-6 text-foreground">
              Distributed Computing Platform
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Scalable computing infrastructure for a Cebu-based AI research lab, 
              supporting machine learning workloads across multiple cloud providers.
            </p>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Client</h3>
              <p className="text-muted-foreground">AI Research Laboratory</p>
            </div>
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Duration</h3>
              <p className="text-muted-foreground">10 Months</p>
            </div>
            <div className="elegant-card p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">Team Size</h3>
              <p className="text-muted-foreground">6 Engineers</p>
            </div>
          </div>

          {/* Challenge Section */}
          <section className="mb-16">
            <h2 className="font-serif font-bold text-display-sm mb-8 text-foreground">
              The Challenge
            </h2>
            <div className="elegant-card p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The research lab needed a flexible, cost-effective computing platform that could 
                scale from small experiments to large-scale model training. They required multi-cloud 
                deployment to avoid vendor lock-in and optimize costs across different workload types.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Cpu className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Resource Scaling</h4>
                    <p className="text-sm text-muted-foreground">Dynamic GPU allocation for ML workloads</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cloud className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-display font-medium text-foreground mb-1">Multi-Cloud</h4>
                    <p className="text-sm text-muted-foreground">AWS, Google Cloud, and Azure integration</p>
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
                  <Shield className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Kubernetes Orchestration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Built a multi-cluster Kubernetes platform with automated resource scheduling, 
                      GPU sharing, and workload isolation for different research teams and projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Zap className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Infrastructure as Code</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Implemented Terraform-based infrastructure automation with CI/CD pipelines 
                      for reproducible deployments and cost optimization across cloud providers.
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
                <div className="text-3xl font-serif font-bold text-primary mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-2">5x</div>
                <div className="text-sm text-muted-foreground">Faster Deployment</div>
              </div>
              <div className="elegant-card p-6 text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">99.5%</div>
                <div className="text-sm text-muted-foreground">Platform Availability</div>
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
                {['Kubernetes', 'Terraform', 'Docker', 'Prometheus', 'Grafana', 'Istio', 'Helm', 'GitLab CI'].map((tech) => (
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

export default ComputingPlatform;
