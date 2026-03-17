import React, { useState, useEffect } from 'react';
import {
  contactHero,
  contactIntro,
  contactDetails,
  socialLinks,
} from '../data/content';
import type { ContactDetail, SocialLink, ContactFormData } from '../types';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <p className="section-title animate-fadeInUp">{contactHero.tagline}</p>
          <h1
            className="contact-hero-title animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            {contactHero.titleLine1}
            <br />
            <span className="accent">{contactHero.titleLine2}</span>
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Info Side */}
            <div className="contact-info reveal">
              <h2>{contactIntro.title}</h2>
              <p>{contactIntro.description}</p>

              <div className="contact-details">
                {contactDetails.map((detail: ContactDetail) => (
                  <div className="contact-item" key={detail.label}>
                    <div className="contact-icon">{detail.icon}</div>
                    <div>
                      <span className="contact-label">{detail.label}</span>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="contact-value"
                          {...(detail.isExternal
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <span className="contact-value">{detail.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <span className="social-label">Follow Along</span>
                <div className="social-links">
                  {socialLinks.map((link: SocialLink) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="contact-form-wrapper reveal">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about what you're looking for..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-filled form-submit">
                  Send Message
                </button>
                {submitted && (
                  <p className="form-success">
                    ✓ Thank you! Your message has been sent. I&apos;ll get back to
                    you soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
