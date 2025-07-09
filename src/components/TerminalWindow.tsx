
import React, { useState, useEffect } from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ 
  children, 
  title = "ares-terminal", 
  className = '' 
}) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot bg-ares-red"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-ares-green"></div>
        <span className="text-ares-green text-sm font-terminal ml-2">
          {title}
        </span>
      </div>
      <div className="p-4 font-terminal text-ares-green">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
