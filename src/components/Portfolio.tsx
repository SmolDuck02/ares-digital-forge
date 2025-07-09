
import React, { useState } from 'react';
import { ArrowUpRight, Code, Database, Cog, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  category: 'architecture' | 'engineering' | 'consultation';
  description: string;
  technologies: string[];
  accent: string;
  route: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  
  const projects: Project[] = [
    {
      id: '001',
      title: 'Enterprise Data Architecture',
      category: 'architecture',
      description: 'Complete system redesign for a leading Philippine banking institution, handling millions of daily transactions with zero downtime migration.',
      technologies: ['Microservices', 'Cloud Native', 'Event Sourcing', 'CQRS'],
      accent: 'primary',
      route: '/enterprise-architecture'
    },
    {
      id: '002', 
      title: 'Real-time Analytics Platform',
      category: 'engineering',
      description: 'High-performance analytics dashboard for a Cebu-based e-commerce platform, processing terabytes of data with sub-second response times.',
      technologies: ['React', 'Node.js', 'Redis', 'WebSocket'],
      accent: 'accent',
      route: '/analytics-platform'
    },
    {
      id: '003',
      title: 'Digital Transformation Strategy',
      category: 'consultation',
      description: 'Six-month strategic engagement with a traditional Filipino manufacturing company, resulting in 40% operational efficiency increase.',
      technologies: ['Strategy', 'Architecture', 'Change Management', 'Training'],
      accent: 'primary',
      route: '/digital-transformation'
    },
    {
      id: '004',
      title: 'Distributed Computing Platform',
      category: 'architecture',
      description: 'Scalable computing infrastructure for a Cebu-based AI research lab, supporting machine learning workloads across multiple cloud providers.',
      technologies: ['Kubernetes', 'Terraform', 'ML Ops', 'Multi-Cloud'],
      accent: 'accent',
      route: '/computing-platform'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: Layers },
    { key: 'architecture', label: 'System Architecture', icon: Database },
    { key: 'engineering', label: 'Web Engineering', icon: Code },
    { key: 'consultation', label: 'Consultation & R&D', icon: Cog }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    navigate(project.route);
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-display-md mb-6 text-foreground">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated collection of our most impactful digital solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="elegant-card p-6 mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`flex items-center gap-3 px-6 py-3 rounded-md font-display font-medium tracking-wide transition-all duration-300 ${
                  activeFilter === key
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="elegant-card floating-accent p-8 group cursor-pointer transition-all duration-500 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className={`text-2xl font-serif font-semibold mb-2 text-${project.accent} group-hover:text-gradient transition-all duration-300`}>
                    {project.title}
                  </h3>
                  <div className="text-sm font-display text-muted-foreground uppercase tracking-luxury">
                    {project.category.replace('-', ' & ')}
                  </div>
                </div>
                <ArrowUpRight 
                  size={24} 
                  className={`text-${project.accent} opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`} 
                />
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted/30 border border-border/30 text-xs font-display text-muted-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project ID */}
              <div className="text-xs font-display text-muted-foreground/50 text-right mt-4">
                {project.id}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="elegant-card p-8">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Ready to Create Something Exceptional?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project begins with understanding your vision. Let's discuss how we can 
              bring precision and artistry to your next digital initiative.
            </p>
            <button 
              className="premium-button"
              onClick={() => window.open('mailto:ursonalj@gmail.com', '_blank')}
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
