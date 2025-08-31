import React from 'react';

interface HexagonBadgeProps {
  label: string;
  className?: string;
}

const HexagonBadge: React.FC<HexagonBadgeProps> = ({ label, className }) => {
  return (
    <div className={`relative w-36 h-40 flex items-center justify-center text-white font-bold ${className}`}>
      <svg className="absolute w-full h-full" viewBox="0 0 100 115.47" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>
        <polygon 
          points="50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87 50,0" 
          className="fill-current text-white/20"
        />
        <polygon 
          points="50,2 98,30.37 98,85.1 50,113.47 2,85.1 2,30.37 50,2" 
          stroke="rgba(255, 255, 255, 0.3)" 
          strokeWidth="1" 
          fill="none"
        />
      </svg>
      <span className="z-10 tracking-wider">{label}</span>
    </div>
  );
};

export default HexagonBadge;
