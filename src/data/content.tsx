import React from 'react';
import type {
  HeroContent,
  ProcessStep,
  CTAContent,
  AboutBio,
  PhilosophyItem,
  Achievement,
  ContactDetail,
  SocialLink,
} from '../types';
import { siteConfig } from './config';

/* ===== HOME PAGE ===== */

export const homeHero: HeroContent = {
  tagline: 'Art That Speaks in Silence',
  titleLine1: 'The Silent',
  titleLine2: 'Palette Art',
  description:
    'Where every brushstroke tells a story, every color whispers an emotion, and every canvas becomes a window to the soul.',
};

export const statementQuote: string =
  'Art is the silent language of the soul — it needs no words to be understood, only eyes willing to see and hearts ready to feel.';

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Inspiration',
    desc: 'Every piece begins with a moment — a fleeting light, a forgotten memory, or the quiet beauty of everyday life.',
  },
  {
    num: '02',
    title: 'Composition',
    desc: "Carefully balancing form and emptiness, creating a visual rhythm that guides the viewer's eye across the canvas.",
  },
  {
    num: '03',
    title: 'Creation',
    desc: 'Layer by layer, the painting reveals itself — each brushstroke intentional, each color chosen to evoke a specific emotion.',
  },
  {
    num: '04',
    title: 'Reflection',
    desc: 'The final stage is knowing when to stop — when the silence of the piece speaks louder than any addition could.',
  },
];

export const homeCTA: CTAContent = {
  title: 'Interested in a Piece?',
  description:
    'Each artwork is a unique creation. Reach out to discuss acquisitions, commissions, or simply to share your thoughts on the work.',
};

/* ===== ABOUT PAGE ===== */

export const aboutHero: HeroContent = {
  tagline: 'About the Artist',
  titleLine1: 'The Story Behind',
  titleLine2: 'The Silent Palette Art',
  description: '',
};

export const aboutBio: AboutBio = {
  title: 'A Journey Through Color & Silence',
  paragraphs: [
    'Art has always been my language — a way to express what words cannot capture. My journey began in a small studio filled with natural light, where I first discovered the power of a single brushstroke to convey an entire world of emotion.',
    'Working primarily in oils and watercolors, I find inspiration in the quiet moments of life — the way light dances across water at dusk, the silent dignity of ancient landscapes, and the ethereal beauty of fog-wrapped mountains.',
    'Each painting is an invitation to pause, to breathe, and to connect with something deeper within ourselves. My work explores the space between what is seen and what is felt, creating visual meditations that resonate with viewers on a personal level.',
  ],
};

export const philosophyItems: PhilosophyItem[] = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#c9a96e" strokeWidth="1" opacity="0.5" />
        <circle cx="24" cy="24" r="8" fill="#c9a96e" opacity="0.3" />
        <path d="M24 4 L24 8 M24 40 L24 44 M4 24 L8 24 M40 24 L44 24" stroke="#c9a96e" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    title: 'Intentional Simplicity',
    desc: 'Every element in my work serves a purpose. I believe in the power of restraint — saying more with less, letting negative space speak volumes.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4 Q44 24 24 44 Q4 24 24 4Z" stroke="#c9a96e" strokeWidth="1" opacity="0.5" />
        <path d="M16 24 Q24 16 32 24 Q24 32 16 24Z" fill="#c9a96e" opacity="0.3" />
      </svg>
    ),
    title: 'Emotional Resonance',
    desc: 'Art should move you. My goal is to create work that connects with viewers on an emotional level, evoking memories and feelings they may have forgotten.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" stroke="#c9a96e" strokeWidth="1" opacity="0.5" rx="2" />
        <path d="M14 34 Q20 20 26 28 Q32 36 38 14" stroke="#c9a96e" strokeWidth="1.5" opacity="0.6" />
      </svg>
    ),
    title: 'Timeless Beauty',
    desc: 'I draw inspiration from classical techniques while embracing contemporary expression, creating pieces that feel both eternal and present.',
  },
];

export const achievements: Achievement[] = [
  { number: '150+', label: 'Artworks Created' },
  { number: '40+', label: 'Exhibitions' },
  { number: '12', label: 'Years Experience' },
  { number: '200+', label: 'Happy Collectors' },
];

/* ===== CONTACT PAGE ===== */

export const contactHero: HeroContent = {
  tagline: 'Get in Touch',
  titleLine1: "Let's Start a",
  titleLine2: 'Conversation',
  description: '',
};

export const contactIntro: CTAContent = {
  title: "I'd Love to Hear From You",
  description:
    "Whether you're interested in acquiring a piece, commissioning custom work, or simply want to share your thoughts — I'm always happy to connect.",
};

export const contactDetails: ContactDetail[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13L2 4" />
      </svg>
    ),
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#c9a96e">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: siteConfig.whatsappDisplay,
    href: `https://wa.me/${siteConfig.whatsappNumber}`,
    isExternal: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Studio',
    value: siteConfig.studioInfo,
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
    href: 'https://pinterest.com',
    label: 'Pinterest',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: 'https://facebook.com',
    label: 'Facebook',
  },
];
