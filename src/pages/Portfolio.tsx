import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoryTabs, artworksByCategory } from '../data/artworks';
import { siteConfig } from '../data/config';
import type { Artwork, CategoryTab } from '../types';
import '../styles/Portfolio.css';

const InstagramIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const EmailIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13L2 4" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Portfolio: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState<string>(
    category || categoryTabs[0].slug
  );
  const [selectedWork, setSelectedWork] = useState<Artwork | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  useEffect(() => {
    if (category) setActiveCategory(category);
  }, [category]);

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
  }, [activeCategory]);

  const currentWorks: Artwork[] = artworksByCategory[activeCategory] || [];

  const getInstagramLink = (): string => {
    return siteConfig.instagramUrl;
  };

  const getEmailLink = (title: string): string => {
    const subject = encodeURIComponent(
      `Inquiry about "${title}" — The Silent Palette Art`
    );
    const body = encodeURIComponent(
      `Hello,\n\nI'm interested in purchasing "${title}" from your collection. Could you please share more details including availability and shipping options?\n\nThank you!`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const openLightbox = (work: Artwork): void => {
    setSelectedWork(work);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = (): void => {
    setIsLightboxOpen(false);
    setSelectedWork(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="portfolio">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <p className="section-title animate-fadeInUp">The Collection</p>
          <h1
            className="portfolio-hero-title animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            Portfolio
          </h1>
        </div>
      </section>

      {/* Category Tabs — data-driven */}
      <section className="portfolio-tabs">
        <div className="container">
          <div className="tabs-wrapper">
            {categoryTabs.map((tab: CategoryTab) => (
              <Link
                key={tab.slug}
                to={`/portfolio/${tab.slug}`}
                className={`tab ${activeCategory === tab.slug ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab.slug)}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="portfolio-gallery section">
        <div className="container">
          <div className="gallery-grid" key={activeCategory}>
            {currentWorks.map((work: Artwork, index: number) => (
              <div
                key={work.id}
                className="gallery-card reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gallery-image" onClick={() => openLightbox(work)}>
                  <img src={work.image} alt={work.title} loading="lazy" />
                  <div className="gallery-hover">
                    <span className="gallery-view">View</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <div className="gallery-details">
                    <h3>{work.title}</h3>
                    <p className="gallery-medium">{work.medium}</p>
                    <p className="gallery-size">{work.size}</p>
                    <p className="gallery-price">{work.price}</p>
                  </div>
                  <div className="gallery-actions">
                    <a
                      href={getInstagramLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-btn instagram-btn"
                      title="Buy via Instagram"
                    >
                      <InstagramIcon />
                      <span>Buy Now</span>
                    </a>
                    <a
                      href={getEmailLink(work.title)}
                      className="buy-btn email-btn"
                      title="Buy via Email"
                    >
                      <EmailIcon />
                      <span>Buy Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && selectedWork && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <CloseIcon />
          </button>
          <div
            className="lightbox-content"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <div className="lightbox-image">
              <img src={selectedWork.image} alt={selectedWork.title} />
            </div>
            <div className="lightbox-info">
              <h2>{selectedWork.title}</h2>
              <p className="lightbox-medium">{selectedWork.medium}</p>
              <p className="lightbox-size">{selectedWork.size}</p>
              <p className="lightbox-price">{selectedWork.price}</p>
              <div className="lightbox-actions">
                <a
                  href={getInstagramLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-filled instagram-full"
                >
                  <InstagramIcon />
                  Buy via Instagram
                </a>
                <a
                  href={getEmailLink(selectedWork.title)}
                  className="btn email-full"
                >
                  <EmailIcon />
                  Buy via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
