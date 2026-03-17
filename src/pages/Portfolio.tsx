import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoryTabs, artworksByCategory } from '../data/artworks';
import { siteConfig } from '../data/config';
import type { Artwork, CategoryTab } from '../types';
import '../styles/Portfolio.css';

const WhatsAppIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

  const getWhatsAppLink = (title: string): string => {
    const message = encodeURIComponent(
      `Hi! I'm interested in purchasing "${title}" from The Silent Palette Art. Could you share more details?`
    );
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
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
                  {work.svg}
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
                      href={getWhatsAppLink(work.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-btn whatsapp-btn"
                      title="Buy via WhatsApp"
                    >
                      <WhatsAppIcon />
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
            <div className="lightbox-image">{selectedWork.svg}</div>
            <div className="lightbox-info">
              <h2>{selectedWork.title}</h2>
              <p className="lightbox-medium">{selectedWork.medium}</p>
              <p className="lightbox-size">{selectedWork.size}</p>
              <p className="lightbox-price">{selectedWork.price}</p>
              <div className="lightbox-actions">
                <a
                  href={getWhatsAppLink(selectedWork.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-filled whatsapp-full"
                >
                  <WhatsAppIcon />
                  Buy via WhatsApp
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
