import React, { useEffect } from 'react';
import { AboutArt } from '../assets/images/Illustrations';
import {
  aboutHero,
  aboutBio,
  philosophyItems,
  achievements,
} from '../data/content';
import type { PhilosophyItem, Achievement } from '../types';
import '../styles/About.css';

const About: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="container">
          <p className="section-title animate-fadeInUp">{aboutHero.tagline}</p>
          <h1
            className="about-hero-title animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            {aboutHero.titleLine1}
            <br />
            <span className="accent">{aboutHero.titleLine2}</span>
          </h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio section">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-image reveal">
              <AboutArt />
              <div className="bio-image-frame"></div>
            </div>
            <div className="bio-text reveal">
              <h2>{aboutBio.title}</h2>
              {aboutBio.paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="bio-signature">
                <svg width="120" height="40" viewBox="0 0 120 40">
                  <path
                    d="M10 30 Q20 5 40 25 Q50 35 60 15 Q70 0 80 20 Q90 35 100 10 L110 15"
                    fill="none"
                    stroke="#c9a96e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy section">
        <div className="container">
          <div className="philosophy-content reveal">
            <p className="section-title">Philosophy</p>
            <h2 className="section-heading">Art Is a Whisper, Not a Shout</h2>
            <div className="philosophy-grid">
              {philosophyItems.map((item: PhilosophyItem, index: number) => (
                <div
                  key={item.title}
                  className="philosophy-card reveal"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="philosophy-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements section">
        <div className="container">
          <div className="achievements-grid">
            {achievements.map((item: Achievement, index: number) => (
              <div
                key={item.label}
                className="achievement-item reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="achievement-number">{item.number}</span>
                <span className="achievement-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
