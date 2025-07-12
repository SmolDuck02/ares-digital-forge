
import React, { useState } from 'react';
import { Send, Calendar, Clock, Target } from 'lucide-react';

const ProjectInquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Project Inquiry: ${formData.projectType} - ${formData.company || formData.name}`;
    const body = `
Project Inquiry Details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Project Description:
${formData.description}

---
Sent from Ares Digital Project Inquiry Form
    `.trim();

    const mailtoLink = `mailto:ursonalj@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleScheduleCall = () => {
    window.open('https://calendly.com/ursonalj/project-discussion?hide_gdpr_banner=1&primary_color=b8860b', '_blank');
  };

  return (
    <section className="py-24 px-4 relative" id="project-inquiry">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-display-md mb-6 text-foreground">
            Start Your <span className="text-gradient">Project</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Share your project details and let's craft 
            something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="elegant-card p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
                Project Details
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-display text-muted-foreground uppercase tracking-luxury mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-display text-muted-foreground uppercase tracking-luxury mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-display text-muted-foreground uppercase tracking-luxury mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-display text-muted-foreground uppercase tracking-luxury mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                    >
                      <option value="">Select project type</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Enterprise System">Enterprise System</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Analytics Platform">Analytics Platform</option>
                      <option value="API Development">API Development</option>
                      <option value="Consultation">Strategic Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-display text-muted-foreground uppercase tracking-luxury mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                    >
                      <option value="">Select budget range</option>
                      <option value="₱50K - ₱150K">₱50K - ₱150K</option>
                      <option value="₱150K - ₱300K">₱150K - ₱300K</option>
                      <option value="₱300K - ₱500K">₱300K - ₱500K</option>
                      <option value="₱500K+">₱500K+</option>
                      <option value="To be discussed">To be discussed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-display text-muted-foreground uppercase tracking-luxury mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                  >
                    <option value="">Select timeline</option>
                    <option value="Rush (1-2 months)">Rush (1-2 months)</option>
                    <option value="Standard (2-4 months)">Standard (2-4 months)</option>
                    <option value="Extended (4-6 months)">Extended (4-6 months)</option>
                    <option value="Long-term (6+ months)">Long-term (6+ months)</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-display text-muted-foreground uppercase tracking-luxury mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground resize-vertical"
                    placeholder="Describe your project goals, requirements, and any specific features you have in mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="premium-button w-full group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Project Inquiry
                    <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="elegant-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-primary" size={24} />
                <h4 className="font-display font-medium text-foreground">Schedule Discussion</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Book a strategic call to discuss your project in detail.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground/70 mb-4">
                <Clock size={14} />
                <span>Saturdays: 10AM - 5PM</span>
              </div>
              <button
                onClick={handleScheduleCall}
                className="premium-button-outline w-full text-sm"
              >
                Book Strategy Call
              </button>
            </div>

            <div className="elegant-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-accent" size={24} />
                <h4 className="font-display font-medium text-foreground">Project Scope</h4>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Web Applications & Platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Enterprise Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Digital Transformation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Strategic Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInquiry;
