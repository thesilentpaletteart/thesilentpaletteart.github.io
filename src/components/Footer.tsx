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
