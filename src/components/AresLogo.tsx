
import React from 'react';
import { Zap, Code, Triangle } from 'lucide-react';

const AresLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  const iconSize = {
    sm: 24,
    md: 32,
    lg: 48
  };

  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <Triangle className="text-primary animate-gentle-pulse" size={iconSize[size]} fill="currentColor" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 blur-sm"></div>
      </div>
      <h1 className={`font-serif font-bold ${sizeClasses[size]} text-foreground tracking-luxury group-hover:text-gradient transition-all duration-500`}>
        <span className="text-primary">A</span>
        <span className="text-accent">R</span>
        <span className="text-primary">E</span>
        <span className="text-accent">S</span>
      </h1>
      <Code className="text-accent/70 animate-gentle-pulse" size={iconSize[size] * 0.75} />
    </div>
  );
};

export default AresLogo;
