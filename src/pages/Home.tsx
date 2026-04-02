import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HeroArt } from '../assets/images/Illustrations';
import { getFeaturedArtworks } from '../data/artworks';
import {
  homeHero,
  statementQuote,
  processSteps,
  homeCTA,
} from '../data/content';
import type { Artwork, ProcessStep } from '../types';
import '../styles/Home.css';

const Home: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const featuredWorks: Artwork[] = getFeaturedArtworks(3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-text">
            <p className="hero-tagline animate-fadeInUp">{homeHero.tagline}</p>
            <h1 className="hero-title animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {homeHero.titleLine1}
              <br />
              <span className="accent">{homeHero.titleLine2}</span>
            </h1>
            <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              {homeHero.description}
            </p>
            <div className="hero-cta animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <Link to="/portfolio" className="btn btn-filled">
                View Portfolio
              </Link>
              <Link to="/contact" className="btn">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="hero-visual animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="hero-art-wrapper">
              <HeroArt />
              <div className="hero-art-frame"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="statement section">
        <div className="container">
          <div className="statement-content reveal">
            <div className="statement-quote">
              <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path
                  d="M0 30V18C0 8 6 2 18 0L20 4C12 6 8 10 8 16H16V30H0ZM24 30V18C24 8 30 2 42 0L44 4C36 6 32 10 32 16H40V30H24Z"
                  fill="#c9a96e"
                  opacity="0.3"
                />
              </svg>
            </div>
            <h2 className="statement-text">{statementQuote}</h2>
            <div className="statement-line"></div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="featured section">
        <div className="container">
          <p className="section-title reveal">Selected Works</p>
          <h2 className="section-heading reveal">Featured Collection</h2>
          <div className="featured-grid">
            {featuredWorks.map((work: Artwork, index: number) => (
              <Link
                key={work.id}
                to="/portfolio/nature"
                className="featured-card reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="featured-image">
                  <img src={work.image} alt={work.title} loading="lazy" />
                  <div className="featured-overlay">
                    <span className="featured-medium">{work.medium}</span>
                    <span className="featured-size">{work.size}</span>
                  </div>
                </div>
                <div className="featured-info">
                  <h3>{work.title}</h3>
                  <p className="featured-price">{work.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="featured-cta reveal">
            <Link to="/portfolio" className="btn">
              View All Works
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process section">
        <div className="container">
          <p className="section-title reveal">The Journey</p>
          <h2 className="section-heading reveal">From Vision to Canvas</h2>
          <div className="process-steps">
            {processSteps.map((step: ProcessStep, index: number) => (
              <div
                key={step.num}
                className="process-step reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span className="step-number">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta section">
        <div className="container">
          <div className="cta-content reveal">
            <h2>{homeCTA.title}</h2>
            <p>{homeCTA.description}</p>
            <Link to="/contact" className="btn btn-filled">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
