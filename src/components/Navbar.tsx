import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Logo';
import { navItems } from '../data/navigation';
import type { NavItem } from '../types';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [portfolioOpen, setPortfolioOpen] = useState<boolean>(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setPortfolioOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPortfolioOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string): boolean => location.pathname === path;
  const isPortfolioActive: boolean = location.pathname.startsWith('/portfolio');

  const renderNavItem = (item: NavItem): React.ReactNode => {
    if (item.children) {
      return (
        <li className="dropdown" key={item.path} ref={dropdownRef}>
          <button
            className={`dropdown-toggle ${isPortfolioActive ? 'active' : ''}`}
            onClick={() => setPortfolioOpen(!portfolioOpen)}
          >
            {item.label}
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={`chevron ${portfolioOpen ? 'rotated' : ''}`}
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <ul className={`dropdown-menu ${portfolioOpen ? 'open' : ''}`}>
            {item.children.map((child) => (
              <li key={child.path}>
                <Link
                  to={child.path}
                  className={location.pathname === child.path ? 'active' : ''}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    return (
      <li key={item.path}>
        <Link to={item.path} className={isActive(item.path) ? 'active' : ''}>
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Logo />
          <span className="logo-text">The Silent Palette Art</span>
        </Link>

        <button
          className={`hamburger ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map(renderNavItem)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
