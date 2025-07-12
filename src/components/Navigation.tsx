import React, { useState } from 'react';
import AresLogo from './AresLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Works', href: '#portfolio' },
    { label: 'Philosophy', href: '#manifesto' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleStartProject = () => {
    document.getElementById('project-inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const elementId = href.substring(1); // Remove the # symbol
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <AresLogo size="sm" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="font-sans text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button className="premium-button-outline text-sm py-2 px-4 group" onClick={handleStartProject}>
              <span className="flex items-center gap-2">
                Start Project
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-border/30">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="font-sans text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
              <button className="premium-button-outline text-sm py-2 px-4 self-start mt-4" onClick={handleStartProject}>
                Start Project
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
