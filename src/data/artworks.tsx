import React from 'react';
import type { Artwork, CategoryTab } from '../types';

/* ===== Category Tabs ===== */

export const categoryTabs: CategoryTab[] = [
  { slug: 'category-1', label: 'Category 1' },
  { slug: 'category-2', label: 'Category 2' },
];

/* ===== Artwork Data ===== */

const category1Works: Artwork[] = [
  {
    id: 1,
    title: 'Golden Horizon',
    medium: 'Oil on Canvas',
    size: '24" × 36"',
    price: '₹850',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a0a2e" />
            <stop offset="40%" stopColor="#4a1942" />
            <stop offset="70%" stopColor="#c9a96e" />
            <stop offset="100%" stopColor="#e8d5a8" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#sky1)" />
        <circle cx="200" cy="280" r="40" fill="#e8d5a8" opacity="0.9" />
        <ellipse cx="200" cy="400" rx="250" ry="120" fill="#1a1a1a" opacity="0.6" />
        <path d="M0 380 Q100 340 200 370 Q300 400 400 360 L400 500 L0 500Z" fill="#0d0d0d" opacity="0.8" />
        <path d="M0 420 Q150 390 250 410 Q350 430 400 400 L400 500 L0 500Z" fill="#1a0a2e" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Whisper of Dawn',
    medium: 'Watercolor',
    size: '18" × 24"',
    price: '₹620',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dawn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d1b4e" />
            <stop offset="50%" stopColor="#8b4367" />
            <stop offset="80%" stopColor="#e89e6d" />
            <stop offset="100%" stopColor="#f4d7a8" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#dawn)" />
        <circle cx="320" cy="200" r="35" fill="#f4d7a8" opacity="0.8" />
        <path d="M0 350 Q80 300 160 330 Q240 360 320 310 Q360 290 400 310 L400 500 L0 500Z" fill="#2d1b4e" opacity="0.7" />
        <path d="M0 400 Q100 370 200 390 Q300 410 400 380 L400 500 L0 500Z" fill="#1a0a2e" opacity="0.8" />
        <rect x="80" y="300" width="3" height="50" fill="#1a0a2e" opacity="0.6" />
        <ellipse cx="82" cy="290" rx="15" ry="20" fill="#2d1b4e" opacity="0.7" />
        <rect x="300" y="270" width="3" height="60" fill="#1a0a2e" opacity="0.6" />
        <ellipse cx="302" cy="260" rx="12" ry="18" fill="#2d1b4e" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Silent Waters',
    medium: 'Acrylic on Canvas',
    size: '30" × 40"',
    price: '₹1,200',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a1628" />
            <stop offset="40%" stopColor="#1a3a5c" />
            <stop offset="100%" stopColor="#0d2137" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#water)" />
        <circle cx="200" cy="100" r="30" fill="#e8d5a8" opacity="0.6" />
        <ellipse cx="200" cy="350" rx="3" ry="80" fill="#e8d5a8" opacity="0.2" />
        <ellipse cx="200" cy="350" rx="1" ry="80" fill="#e8d5a8" opacity="0.4" />
        <ellipse cx="200" cy="300" rx="60" ry="3" fill="none" stroke="#c9a96e" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="200" cy="340" rx="80" ry="3" fill="none" stroke="#c9a96e" strokeWidth="0.5" opacity="0.2" />
        <ellipse cx="200" cy="380" rx="100" ry="3" fill="none" stroke="#c9a96e" strokeWidth="0.5" opacity="0.15" />
        <ellipse cx="200" cy="420" rx="120" ry="3" fill="none" stroke="#c9a96e" strokeWidth="0.5" opacity="0.1" />
        <path d="M0 250 L100 180 L180 220 L250 160 L320 200 L400 170 L400 280 L0 280Z" fill="#0a1628" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Amber Fields',
    medium: 'Oil on Canvas',
    size: '20" × 30"',
    price: '₹780',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="amber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="30%" stopColor="#4a3728" />
            <stop offset="60%" stopColor="#c9a96e" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#amber)" />
        <circle cx="300" cy="120" r="45" fill="#e8d5a8" opacity="0.7" />
        <path d="M0 320 Q200 280 400 320 L400 500 L0 500Z" fill="#8b6914" opacity="0.4" />
        <path d="M0 360 Q200 330 400 360 L400 500 L0 500Z" fill="#6b4f10" opacity="0.5" />
        <path d="M0 400 Q200 380 400 400 L400 500 L0 500Z" fill="#4a3708" opacity="0.6" />
        <line x1="60" y1="380" x2="65" y2="320" stroke="#c9a96e" strokeWidth="1" opacity="0.4" />
        <circle cx="65" cy="318" r="2" fill="#c9a96e" opacity="0.5" />
        <line x1="120" y1="375" x2="125" y2="312" stroke="#c9a96e" strokeWidth="1" opacity="0.4" />
        <circle cx="125" cy="310" r="2" fill="#c9a96e" opacity="0.5" />
        <line x1="180" y1="370" x2="185" y2="304" stroke="#c9a96e" strokeWidth="1" opacity="0.4" />
        <circle cx="185" cy="302" r="2" fill="#c9a96e" opacity="0.5" />
        <line x1="240" y1="365" x2="245" y2="296" stroke="#c9a96e" strokeWidth="1" opacity="0.4" />
        <circle cx="245" cy="294" r="2" fill="#c9a96e" opacity="0.5" />
        <line x1="300" y1="360" x2="305" y2="288" stroke="#c9a96e" strokeWidth="1" opacity="0.4" />
        <circle cx="305" cy="286" r="2" fill="#c9a96e" opacity="0.5" />
        <line x1="340" y1="355" x2="345" y2="280" stroke="#c9a96e" strokeWidth="1" opacity="0.4" />
        <circle cx="345" cy="278" r="2" fill="#c9a96e" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Ethereal Mist',
    medium: 'Mixed Media',
    size: '24" × 24"',
    price: '₹920',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="mist" cx="50%" cy="40%">
            <stop offset="0%" stopColor="#e8d5a8" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#4a3f5c" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1a1a2e" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="#1a1a2e" />
        <rect width="400" height="500" fill="url(#mist)" />
        <circle cx="200" cy="200" r="80" fill="#c9a96e" opacity="0.1" />
        <circle cx="200" cy="200" r="60" fill="#c9a96e" opacity="0.15" />
        <circle cx="200" cy="200" r="40" fill="#c9a96e" opacity="0.2" />
        <circle cx="200" cy="200" r="20" fill="#c9a96e" opacity="0.3" />
        <circle cx="100" cy="150" r="3" fill="#e8d5a8" opacity="0.4" />
        <circle cx="300" cy="100" r="2" fill="#e8d5a8" opacity="0.3" />
        <circle cx="150" cy="350" r="2.5" fill="#e8d5a8" opacity="0.35" />
        <circle cx="280" cy="300" r="2" fill="#e8d5a8" opacity="0.25" />
        <circle cx="350" cy="250" r="3" fill="#e8d5a8" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Crimson Reverie',
    medium: 'Oil on Linen',
    size: '28" × 36"',
    price: '₹1,050',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crimson" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a0a0a" />
            <stop offset="50%" stopColor="#5c1a1a" />
            <stop offset="100%" stopColor="#8b3a2a" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#crimson)" />
        <circle cx="200" cy="250" r="50" fill="#8b3a2a" opacity="0.6" />
        <circle cx="200" cy="250" r="35" fill="#a84432" opacity="0.5" />
        <circle cx="200" cy="250" r="20" fill="#c9a96e" opacity="0.4" />
        <circle cx="200" cy="250" r="8" fill="#e8d5a8" opacity="0.6" />
        <ellipse cx="200" cy="180" rx="20" ry="35" fill="#8b3a2a" opacity="0.4" transform="rotate(0, 200, 250)" />
        <ellipse cx="200" cy="180" rx="20" ry="35" fill="#8b3a2a" opacity="0.4" transform="rotate(60, 200, 250)" />
        <ellipse cx="200" cy="180" rx="20" ry="35" fill="#8b3a2a" opacity="0.4" transform="rotate(120, 200, 250)" />
        <ellipse cx="200" cy="180" rx="20" ry="35" fill="#8b3a2a" opacity="0.4" transform="rotate(180, 200, 250)" />
        <ellipse cx="200" cy="180" rx="20" ry="35" fill="#8b3a2a" opacity="0.4" transform="rotate(240, 200, 250)" />
        <ellipse cx="200" cy="180" rx="20" ry="35" fill="#8b3a2a" opacity="0.4" transform="rotate(300, 200, 250)" />
      </svg>
    ),
  },
];

const category2Works: Artwork[] = [
  {
    id: 7,
    title: 'Urban Solitude',
    medium: 'Charcoal & Ink',
    size: '16" × 20"',
    price: '₹480',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="500" fill="#0d0d0d" />
        <rect x="20" y="200" width="40" height="300" fill="#1a1a1a" />
        <rect x="70" y="150" width="35" height="350" fill="#222" />
        <rect x="115" y="180" width="50" height="320" fill="#1a1a1a" />
        <rect x="175" y="120" width="45" height="380" fill="#252525" />
        <rect x="230" y="160" width="55" height="340" fill="#1a1a1a" />
        <rect x="295" y="140" width="40" height="360" fill="#222" />
        <rect x="345" y="190" width="55" height="310" fill="#1a1a1a" />
        {/* Windows - fixed values instead of random */}
        <rect x="30" y="220" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="30" y="250" width="4" height="6" fill="#c9a96e" opacity="0.1" />
        <rect x="30" y="280" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="30" y="310" width="4" height="6" fill="#c9a96e" opacity="0.1" />
        <rect x="30" y="340" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="40" y="220" width="4" height="6" fill="#c9a96e" opacity="0.1" />
        <rect x="40" y="250" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="40" y="280" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="40" y="310" width="4" height="6" fill="#c9a96e" opacity="0.1" />
        <rect x="40" y="340" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="185" y="140" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="185" y="170" width="4" height="6" fill="#c9a96e" opacity="0.1" />
        <rect x="185" y="200" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="200" y="140" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="200" y="170" width="4" height="6" fill="#c9a96e" opacity="0.6" />
        <rect x="200" y="200" width="4" height="6" fill="#c9a96e" opacity="0.1" />
        <circle cx="320" cy="60" r="25" fill="#e8d5a8" opacity="0.8" />
        <circle cx="330" cy="55" r="22" fill="#0d0d0d" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Geometric Dreams',
    medium: 'Digital Art Print',
    size: '20" × 20"',
    price: '₹350',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="500" fill="#0d0d0d" />
        <polygon points="200,80 320,250 80,250" fill="none" stroke="#c9a96e" strokeWidth="1" opacity="0.6" />
        <polygon points="200,120 290,240 110,240" fill="none" stroke="#e8d5a8" strokeWidth="0.5" opacity="0.4" />
        <polygon points="200,160 260,230 140,230" fill="#c9a96e" opacity="0.1" />
        <circle cx="200" cy="300" r="80" fill="none" stroke="#c9a96e" strokeWidth="1" opacity="0.4" />
        <circle cx="200" cy="300" r="60" fill="none" stroke="#c9a96e" strokeWidth="0.5" opacity="0.3" />
        <circle cx="200" cy="300" r="40" fill="none" stroke="#e8d5a8" strokeWidth="0.5" opacity="0.2" />
        <line x1="50" y1="400" x2="350" y2="400" stroke="#c9a96e" strokeWidth="0.5" opacity="0.3" />
        <line x1="100" y1="420" x2="300" y2="420" stroke="#c9a96e" strokeWidth="0.5" opacity="0.2" />
        <line x1="150" y1="440" x2="250" y2="440" stroke="#c9a96e" strokeWidth="0.5" opacity="0.15" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Portrait in Shadows',
    medium: 'Graphite on Paper',
    size: '14" × 18"',
    price: '₹560',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="portrait" cx="50%" cy="35%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#portrait)" />
        <ellipse cx="200" cy="180" rx="70" ry="90" fill="#1a1a1a" />
        <ellipse cx="200" cy="180" rx="65" ry="85" fill="#222" />
        <ellipse cx="175" cy="165" rx="8" ry="5" fill="#0d0d0d" opacity="0.8" />
        <ellipse cx="225" cy="165" rx="8" ry="5" fill="#0d0d0d" opacity="0.8" />
        <path d="M185 200 Q200 210 215 200" fill="none" stroke="#0d0d0d" strokeWidth="1.5" opacity="0.6" />
        <path d="M170 265 L170 310 Q100 320 50 350 L50 500 L350 500 L350 350 Q300 320 230 310 L230 265" fill="#1a1a1a" />
        <ellipse cx="200" cy="140" rx="30" ry="10" fill="#c9a96e" opacity="0.05" />
      </svg>
    ),
  },
  {
    id: 10,
    title: 'Abstract Motion',
    medium: 'Acrylic on Canvas',
    size: '36" × 48"',
    price: '₹1,400',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="500" fill="#0d0d0d" />
        <path d="M0 200 Q100 100 200 250 Q300 400 400 200" fill="none" stroke="#c9a96e" strokeWidth="2" opacity="0.6" />
        <path d="M0 220 Q100 120 200 270 Q300 420 400 220" fill="none" stroke="#e8d5a8" strokeWidth="1" opacity="0.3" />
        <path d="M0 240 Q100 140 200 290 Q300 440 400 240" fill="none" stroke="#8b7340" strokeWidth="1.5" opacity="0.4" />
        <path d="M0 300 Q150 200 250 350 Q350 450 400 300" fill="none" stroke="#c9a96e" strokeWidth="1" opacity="0.2" />
        <circle cx="120" cy="180" r="8" fill="#c9a96e" opacity="0.3" />
        <circle cx="280" cy="320" r="12" fill="#c9a96e" opacity="0.2" />
        <circle cx="180" cy="380" r="6" fill="#e8d5a8" opacity="0.25" />
        <circle cx="320" cy="150" r="10" fill="#8b7340" opacity="0.2" />
        <circle cx="80" cy="350" r="5" fill="#c9a96e" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 11,
    title: 'Midnight Garden',
    medium: 'Oil on Canvas',
    size: '24" × 30"',
    price: '₹890',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="night" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0a1a" />
            <stop offset="100%" stopColor="#1a2a1a" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#night)" />
        {/* Stars */}
        <circle cx="50" cy="40" r="1.2" fill="#e8d5a8" opacity="0.6" />
        <circle cx="150" cy="60" r="0.8" fill="#e8d5a8" opacity="0.5" />
        <circle cx="300" cy="30" r="1.5" fill="#e8d5a8" opacity="0.7" />
        <circle cx="250" cy="80" r="0.6" fill="#e8d5a8" opacity="0.4" />
        <circle cx="100" cy="100" r="1.0" fill="#e8d5a8" opacity="0.5" />
        <circle cx="350" cy="70" r="0.9" fill="#e8d5a8" opacity="0.6" />
        <circle cx="80" cy="130" r="1.3" fill="#e8d5a8" opacity="0.4" />
        <circle cx="200" cy="50" r="0.7" fill="#e8d5a8" opacity="0.5" />
        <circle cx="380" cy="120" r="1.1" fill="#e8d5a8" opacity="0.3" />
        {/* Garden stems and flowers */}
        <path d="M60 500 Q70 400 55 300" fill="none" stroke="#2a4a2a" strokeWidth="2" />
        <circle cx="55" cy="295" r="8" fill="#c9a96e" opacity="0.6" />
        <circle cx="55" cy="295" r="4" fill="#e8d5a8" opacity="0.3" />
        <path d="M130 500 Q120 400 135 300" fill="none" stroke="#2a4a2a" strokeWidth="2" />
        <circle cx="135" cy="295" r="10" fill="#8b5a3a" opacity="0.6" />
        <circle cx="135" cy="295" r="5" fill="#e8d5a8" opacity="0.3" />
        <path d="M200 500 Q210 400 195 300" fill="none" stroke="#2a4a2a" strokeWidth="2" />
        <circle cx="195" cy="295" r="12" fill="#c9a96e" opacity="0.6" />
        <circle cx="195" cy="295" r="6" fill="#e8d5a8" opacity="0.3" />
        <path d="M270 500 Q260 400 275 300" fill="none" stroke="#2a4a2a" strokeWidth="2" />
        <circle cx="275" cy="295" r="14" fill="#8b5a3a" opacity="0.6" />
        <circle cx="275" cy="295" r="7" fill="#e8d5a8" opacity="0.3" />
        <path d="M340 500 Q350 400 335 300" fill="none" stroke="#2a4a2a" strokeWidth="2" />
        <circle cx="335" cy="295" r="16" fill="#c9a96e" opacity="0.6" />
        <circle cx="335" cy="295" r="8" fill="#e8d5a8" opacity="0.3" />
        {/* Leaves */}
        <ellipse cx="90" cy="400" rx="15" ry="6" fill="#2a4a2a" opacity="0.5" transform="rotate(-30, 90, 400)" />
        <ellipse cx="250" cy="380" rx="12" ry="5" fill="#2a4a2a" opacity="0.4" transform="rotate(20, 250, 380)" />
      </svg>
    ),
  },
  {
    id: 12,
    title: 'Dusk Serenity',
    medium: 'Pastel on Paper',
    size: '18" × 24"',
    price: '₹540',
    svg: (
      <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2e1065" />
            <stop offset="35%" stopColor="#7c3aed" />
            <stop offset="65%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#dusk)" />
        <ellipse cx="100" cy="120" rx="60" ry="20" fill="#e8d5a8" opacity="0.15" />
        <ellipse cx="300" cy="100" rx="50" ry="15" fill="#e8d5a8" opacity="0.1" />
        <ellipse cx="200" cy="180" rx="70" ry="18" fill="#e8d5a8" opacity="0.12" />
        <rect x="0" y="350" width="400" height="150" fill="#2e1065" opacity="0.5" />
        <line x1="0" y1="360" x2="400" y2="360" stroke="#fbbf24" strokeWidth="0.5" opacity="0.2" />
        <line x1="0" y1="380" x2="400" y2="380" stroke="#f97316" strokeWidth="0.5" opacity="0.15" />
        <line x1="0" y1="400" x2="400" y2="400" stroke="#7c3aed" strokeWidth="0.5" opacity="0.1" />
        <polygon points="250,280 250,330 230,330" fill="#1a0a2e" opacity="0.8" />
        <polygon points="250,290 250,330 280,330" fill="#1a0a2e" opacity="0.6" />
        <line x1="250" y1="270" x2="250" y2="340" stroke="#1a0a2e" strokeWidth="1.5" />
        <path d="M225 335 Q250 340 275 335 Q255 345 225 335Z" fill="#1a0a2e" opacity="0.8" />
      </svg>
    ),
  },
];

/* ===== Exported Map ===== */

export const artworksByCategory: Record<string, Artwork[]> = {
  'category-1': category1Works,
  'category-2': category2Works,
};

/* ===== Helper ===== */

export const getFeaturedArtworks = (total: number = 3): Artwork[] => {
  const allWorks: Artwork[] = categoryTabs.flatMap((tab) =>
    artworksByCategory[tab.slug] || []
  );
  return allWorks.slice(0, total);
};
