import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo';
import { siteConfig } from '../data/config';
import { footerNavLinks, footerConnectLinks } from '../data/navigation';
import type { FooterLink } from '../types';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const renderLink = (link: FooterLink): React.ReactNode => {
    if (link.isExternal) {
      return (
        <a href={link.path} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }
    if (link.path.startsWith('mailto:')) {
      return <a href={link.path}>{link.label}</a>;
    }
    return <Link to={link.path}>{link.label}</Link>;
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <Logo size={36} />
                <span>{siteConfig.siteName}</span>
              </Link>
              <p className="footer-tagline">{siteConfig.footerTagline}</p>
            </div>

            {/* Navigation */}
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                {footerNavLinks.map((link) => (
                  <li key={link.path}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="footer-connect">
              <h4>Connect</h4>
              <ul>
                {footerConnectLinks.map((link) => (
                  <li key={link.path}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe for new artwork announcements and exclusive previews.</p>
              <form
                className="newsletter-form"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
              >
                <input type="email" placeholder="Your email" />
                <button type="submit" aria-label="Subscribe">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {currentYear} {siteConfig.siteName}. All rights reserved.
          </p>
          <p className="footer-credit">Crafted with passion &amp; purpose</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
