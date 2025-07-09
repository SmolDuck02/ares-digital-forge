
import React, { useState } from 'react';
import AresLogo from './AresLogo';
import { Menu, X, Terminal } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'FORGE', href: '#hero' },
    { label: 'MANIFESTO', href: '#manifesto' },
    { label: 'ARSENAL', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ares-black/90 backdrop-blur-sm border-b border-ares-green/30">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <AresLogo size="sm" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-terminal text-ares-green hover:text-ares-red transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ares-red group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="flex items-center gap-2 px-4 py-2 border border-ares-blue text-ares-blue hover:bg-ares-blue hover:text-ares-black transition-all duration-200 font-terminal">
              <Terminal size={16} />
              TERMINAL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ares-green hover:text-ares-red transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-ares-green/30">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-terminal text-ares-green hover:text-ares-red transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <button className="flex items-center gap-2 px-4 py-2 border border-ares-blue text-ares-blue hover:bg-ares-blue hover:text-ares-black transition-all duration-200 font-terminal self-start">
                <Terminal size={16} />
                TERMINAL
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
