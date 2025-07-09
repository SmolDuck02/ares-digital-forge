
import React from 'react';
import { Zap, Code, Flame } from 'lucide-react';

const AresLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <Flame className="text-ares-red animate-flicker" size={32} />
        <Zap className="absolute top-0 left-0 text-ares-blue opacity-70" size={32} />
      </div>
      <h1 className={`font-brutalist font-black ${sizeClasses[size]} text-white tracking-wider group-hover:animate-glitch`}>
        <span className="text-ares-red">A</span>
        <span className="text-ares-blue">R</span>
        <span className="text-ares-green">E</span>
        <span className="text-ares-violet">S</span>
      </h1>
      <Code className="text-ares-green animate-pulse" size={24} />
    </div>
  );
};

export default AresLogo;
