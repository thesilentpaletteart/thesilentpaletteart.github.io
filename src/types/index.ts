import { ReactNode } from 'react';

/* ===== Site Configuration ===== */
export interface SiteConfig {
  siteName: string;
  tagline: string;
  footerTagline: string;
  email: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  studioInfo: string;
}

/* ===== Navigation ===== */
export interface NavLink {
  label: string;
  path: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export interface FooterLink {
  label: string;
  path: string;
  isExternal?: boolean;
}

/* ===== Artwork ===== */
export interface Artwork {
  id: number;
  title: string;
  medium: string;
  size: string;
  price: string;
  svg: ReactNode;
}

export interface CategoryTab {
  slug: string;
  label: string;
}

/* ===== Page Content ===== */
export interface HeroContent {
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface PhilosophyItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface Achievement {
  number: string;
  label: string;
}

export interface CTAContent {
  title: string;
  description: string;
}

export interface AboutBio {
  title: string;
  paragraphs: string[];
}

/* ===== Contact ===== */
export interface ContactDetail {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  isExternal?: boolean;
}

export interface SocialLink {
  icon: ReactNode;
  href: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
