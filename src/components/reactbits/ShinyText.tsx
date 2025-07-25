/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React from 'react';
import Typography from '../custom/typography';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  icon?: React.ReactNode;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '', icon }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text ${disabled ? '' : 'animate-shine'} ${className} ${icon ? 'flex items-center gap-2' : ''}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 0) 90%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {icon && <span>{icon}</span>}
      {text}
    </div>
  );
};

export default ShinyText;
