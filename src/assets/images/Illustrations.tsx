import React from 'react';

export const HeroArt: React.FC = () => (
  <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" className="hero-art">
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a1a2e" />
        <stop offset="50%" stopColor="#2d1b4e" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect width="600" height="500" fill="url(#heroGrad)" rx="8" />
    <circle cx="300" cy="250" r="120" fill="none" stroke="#c9a96e" strokeWidth="0.5" opacity="0.3" />
    <circle cx="300" cy="250" r="90" fill="none" stroke="#c9a96e" strokeWidth="0.5" opacity="0.4" />
    <circle cx="300" cy="250" r="60" fill="none" stroke="#e8d5a8" strokeWidth="0.5" opacity="0.5" />
    <path d="M100 350 Q200 200 350 300 Q450 360 550 250" fill="none" stroke="#c9a96e" strokeWidth="2" opacity="0.5" filter="url(#glow)" />
    <path d="M80 380 Q220 250 380 320 Q480 370 560 280" fill="none" stroke="#e8d5a8" strokeWidth="1" opacity="0.3" />
    <ellipse cx="300" cy="250" rx="80" ry="60" fill="none" stroke="#c9a96e" strokeWidth="1" opacity="0.4" />
    <circle cx="260" cy="230" r="12" fill="#c9a96e" opacity="0.4" />
    <circle cx="300" cy="210" r="10" fill="#8b4367" opacity="0.4" />
    <circle cx="340" cy="225" r="11" fill="#4a6741" opacity="0.4" />
    <circle cx="330" cy="265" r="9" fill="#4a5568" opacity="0.4" />
    <circle cx="275" cy="270" r="10" fill="#8b7340" opacity="0.4" />
    <circle cx="150" cy="120" r="3" fill="#c9a96e" opacity="0.5">
      <animate attributeName="cy" values="120;110;120" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="450" cy="150" r="2" fill="#e8d5a8" opacity="0.4">
      <animate attributeName="cy" values="150;140;150" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="500" cy="350" r="2.5" fill="#c9a96e" opacity="0.3">
      <animate attributeName="cy" values="350;340;350" dur="3.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="400" r="2" fill="#e8d5a8" opacity="0.35">
      <animate attributeName="cy" values="400;390;400" dur="2.8s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const AboutArt: React.FC = () => (
  <svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg" className="about-art">
    <defs>
      <linearGradient id="aboutGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1a2e" />
        <stop offset="100%" stopColor="#0d0d0d" />
      </linearGradient>
    </defs>
    <rect width="500" height="600" fill="url(#aboutGrad)" rx="8" />
    <line x1="200" y1="180" x2="160" y2="500" stroke="#c9a96e" strokeWidth="2" opacity="0.5" />
    <line x1="300" y1="180" x2="340" y2="500" stroke="#c9a96e" strokeWidth="2" opacity="0.5" />
    <line x1="250" y1="200" x2="250" y2="520" stroke="#c9a96e" strokeWidth="2" opacity="0.5" />
    <line x1="175" y1="380" x2="325" y2="380" stroke="#c9a96e" strokeWidth="1.5" opacity="0.4" />
    <rect x="185" y="200" width="130" height="160" fill="#1a1a1a" stroke="#c9a96e" strokeWidth="1" opacity="0.6" />
    <circle cx="250" cy="270" r="30" fill="#c9a96e" opacity="0.2" />
    <path d="M210 300 Q250 260 290 300" fill="none" stroke="#e8d5a8" strokeWidth="1" opacity="0.4" />
    <circle cx="235" cy="255" r="5" fill="#8b4367" opacity="0.3" />
    <circle cx="265" cy="260" r="4" fill="#4a6741" opacity="0.3" />
    <circle cx="100" cy="300" r="15" fill="#c9a96e" opacity="0.15" />
    <circle cx="400" cy="250" r="20" fill="#c9a96e" opacity="0.1" />
    <circle cx="120" cy="450" r="10" fill="#e8d5a8" opacity="0.1" />
    <circle cx="380" cy="420" r="12" fill="#c9a96e" opacity="0.12" />
    <circle cx="150" cy="150" r="4" fill="#c9a96e" opacity="0.4">
      <animate attributeName="cy" values="150;140;150" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="380" cy="180" r="3" fill="#e8d5a8" opacity="0.3">
      <animate attributeName="cy" values="180;170;180" dur="4s" repeatCount="indefinite" />
    </circle>
  </svg>
);
