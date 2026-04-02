import type { NavItem, FooterLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Portfolio',
    path: '/portfolio',
    children: [
      { label: 'Nature & Greenery', path: '/portfolio/nature' },
      { label: 'Seascapes & Horizons', path: '/portfolio/seascapes' },
      { label: 'Warm Palette & Abstracts', path: '/portfolio/warm' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

export const footerNavLinks: FooterLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Nature & Greenery', path: '/portfolio/nature' },
  { label: 'Seascapes & Horizons', path: '/portfolio/seascapes' },
  { label: 'Warm Palette & Abstracts', path: '/portfolio/warm' },
  { label: 'Contact', path: '/contact' },
];

export const footerConnectLinks: FooterLink[] = [
  {
    label: 'artist@thesilentpalette.com',
    path: 'mailto:artist@thesilentpalette.com',
  },
  {
    label: 'Instagram',
    path: 'https://instagram.com/thesilentpaletteart',
    isExternal: true,
  },
];
