
import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);
  
  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let intervalId: ReturnType<typeof setInterval>;
    
    const startGlitch = () => {
      intervalId = setInterval(() => {
        if (Math.random() > 0.8) {
          const randomIndex = Math.floor(Math.random() * text.length);
          const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          const glitched = text.split('').map((char, index) => 
            index === randomIndex ? randomChar : char
          ).join('');
          
          setGlitchText(glitched);
          
          setTimeout(() => setGlitchText(text), 100);
        }
      }, 150);
    };

    startGlitch();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [text]);

  return (
    <span 
      className={`glitch-text ${className}`}
      data-text={text}
    >
      {glitchText}
    </span>
  );
};

export default GlitchText;
