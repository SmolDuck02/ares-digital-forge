
import React from 'react';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.open('mailto:ursonalj@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+639171234567', '_blank');
  };

  const handleScheduleConsultation = () => {
    window.open('https://calendly.com/ares-digital', '_blank');
  };

  const handleViewCaseStudies = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-display-md mb-6 text-foreground">
            Start a Precise <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We don't just build — we shape. Let's discuss how precision engineering 
            can elevate your digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <div className="elegant-card floating-accent p-8">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Connect Directly
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={handleEmailClick}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm font-display text-muted-foreground uppercase tracking-luxury">Email</div>
                  <div className="font-sans text-foreground">ursonalj@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={handlePhoneClick}>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <div className="text-sm font-display text-muted-foreground uppercase tracking-luxury">Direct</div>
                  <div className="font-sans text-foreground">+63 917 123 4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={handleScheduleConsultation}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm font-display text-muted-foreground uppercase tracking-luxury">Consultation</div>
                  <div className="font-sans text-foreground">Schedule Strategy Call</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <div className="text-sm font-display text-muted-foreground uppercase tracking-luxury">Studio</div>
                  <div className="font-sans text-foreground">Cebu City, Philippines</div>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Approach */}
          <div className="elegant-card floating-accent p-8">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Our Approach
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-display font-medium text-foreground mb-2">Discovery Phase</h4>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of your objectives, constraints, and vision.
                </p>
              </div>
              
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-display font-medium text-foreground mb-2">Strategic Planning</h4>
                <p className="text-sm text-muted-foreground">
                  Architectural blueprint with clear milestones and success metrics.
                </p>
              </div>
              
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-display font-medium text-foreground mb-2">Precision Execution</h4>
                <p className="text-sm text-muted-foreground">
                  Iterative development with continuous refinement and optimization.
                </p>
              </div>
              
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-display font-medium text-foreground mb-2">Lasting Partnership</h4>
                <p className="text-sm text-muted-foreground">
                  Ongoing support, evolution, and strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="elegant-card p-12">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-6">
              Technology with a Pulse
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your digital infrastructure with precision, artistry, and strategic insight? 
              Let's begin the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="premium-button" onClick={handleScheduleConsultation}>
                Schedule Consultation
              </button>
              <button className="premium-button-outline" onClick={handleViewCaseStudies}>
                View Case Studies
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="section-divider mb-8"></div>
            <div className="font-sans text-muted-foreground text-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-gentle-pulse"></div>
                <span>Available for Strategic Partnerships</span>
              </div>
              <div className="text-muted-foreground/70">
                © 2025 Ares Digital • Precision by Design • Excellence by Execution
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
