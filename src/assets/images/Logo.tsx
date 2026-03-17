import React from 'react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="52" rx="42" ry="38" fill="none" stroke="#c9a96e" strokeWidth="1.5" />
    <circle cx="30" cy="38" r="5" fill="#c9a96e" opacity="0.9" />
    <circle cx="45" cy="30" r="4" fill="#e8d5a8" opacity="0.7" />
    <circle cx="60" cy="32" r="4.5" fill="#8b7340" opacity="0.8" />
    <circle cx="70" cy="42" r="3.5" fill="#c9a96e" opacity="0.6" />
    <circle cx="35" cy="52" r="3" fill="#a89f91" opacity="0.5" />
    <ellipse cx="55" cy="65" rx="8" ry="7" fill="none" stroke="#c9a96e" strokeWidth="1" opacity="0.5" />
    <line x1="72" y1="20" x2="88" y2="4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M69 22 L75 18 L74 24 Z" fill="#c9a96e" opacity="0.8" />
  </svg>
);

export default Logo;
