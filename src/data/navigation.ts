import type { NavItem, FooterLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Portfolio',
    path: '/portfolio',
    children: [
      { label: 'Category 1', path: '/portfolio/category-1' },
      { label: 'Category 2', path: '/portfolio/category-2' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

export const footerNavLinks: FooterLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Category 1', path: '/portfolio/category-1' },
  { label: 'Category 2', path: '/portfolio/category-2' },
  { label: 'Contact', path: '/contact' },
];

export const footerConnectLinks: FooterLink[] = [
  {
    label: 'artist@thesilentpalette.com',
    path: 'mailto:artist@thesilentpalette.com',
  },
  {
    label: 'WhatsApp',
    path: 'https://wa.me/1234567890',
    isExternal: true,
  },
  {
    label: 'Instagram',
    path: 'https://instagram.com',
    isExternal: true,
  },
  {
    label: 'Pinterest',
    path: 'https://pinterest.com',
    isExternal: true,
  },
];
