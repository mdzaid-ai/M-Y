import React, { useState } from 'react';
import { InstagramIcon, LinkedInIcon, YouTubeIcon, XIcon } from './Icons';
import './Footer.css';

export function Footer({ navigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (path.startsWith('http') || path.startsWith('mailto')) {
      window.open(path, '_blank', 'noopener,noreferrer');
      return;
    }
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="footer" className="luxury-marble-footer">
      <div className="footer-inner-container">
        {/* Main 5-Column Grid framed by top and bottom borders */}
        <div className="footer-main-grid">
          {/* Column 1: MODHAUS Brand & Disciplines */}
          <div className="footer-col footer-col-brand">
            <a
              href="/"
              className="footer-logo-link"
              onClick={(e) => handleLinkClick(e, '/')}
              aria-label="MODHAUS home"
            >
              <svg
                viewBox="0 0 520 88"
                width="100%"
                height="auto"
                preserveAspectRatio="xMinYMid meet"
                className="footer-brand-cutout-svg"
                aria-label="MODHAUS"
              >
                <defs>
                  <clipPath id="footer-modhaus-brand-clip">
                    <text
                      x="0"
                      y="70"
                      fontFamily="Georgia, 'Times New Roman', serif"
                      fontWeight="900"
                      fontSize="78"
                      letterSpacing="3"
                    >
                      MODHAUS
                    </text>
                  </clipPath>
                </defs>
                <image
                  href="/footer-text-mask.webp"
                  width="520"
                  height="88"
                  preserveAspectRatio="xMinYMid slice"
                  clipPath="url(#footer-modhaus-brand-clip)"
                />
              </svg>
            </a>

            <div className="footer-disciplines-row">
              <a href="/real-estate" onClick={(e) => handleLinkClick(e, '/real-estate')}>
                REAL ESTATE
              </a>
              <span className="footer-pipe">|</span>
              <a href="/construction" onClick={(e) => handleLinkClick(e, '/construction')}>
                CONSTRUCTION
              </a>
              <span className="footer-pipe">|</span>
              <a href="/interiors" onClick={(e) => handleLinkClick(e, '/interiors')}>
                INTERIOR DESIGN
              </a>
              <span className="footer-pipe">|</span>
              <a href="/construction" onClick={(e) => handleLinkClick(e, '/construction')}>
                DEVELOPMENTS
              </a>
              <span className="footer-pipe">|</span>
              <a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>
                ARCHITECTURE
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="footer-col footer-col-explore">
            <h4 className="footer-col-heading">EXPLORE</h4>
            <nav className="footer-col-nav" aria-label="Explore links">
              <a href="/real-estate" onClick={(e) => handleLinkClick(e, '/real-estate')}>
                Properties
              </a>
              <a href="/construction" onClick={(e) => handleLinkClick(e, '/construction')}>
                Developments
              </a>
              <a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>
                Services
              </a>
              <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>
                Insights
              </a>
            </nav>
          </div>

          {/* Column 3: EXPERTISE */}
          <div className="footer-col footer-col-expertise">
            <h4 className="footer-col-heading">EXPERTISE</h4>
            <nav className="footer-col-nav" aria-label="Expertise links">
              <a href="/real-estate" onClick={(e) => handleLinkClick(e, '/real-estate')}>
                Real Estate
              </a>
              <a href="/construction" onClick={(e) => handleLinkClick(e, '/construction')}>
                Construction
              </a>
              <a href="/interiors" onClick={(e) => handleLinkClick(e, '/interiors')}>
                Interior Design
              </a>
              <a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>
                Architecture
              </a>
            </nav>
          </div>

          {/* Column 4: COMPANY */}
          <div className="footer-col footer-col-company">
            <h4 className="footer-col-heading">COMPANY</h4>
            <nav className="footer-col-nav" aria-label="Company links">
              <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>
                About
              </a>
              <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>
                Contact
              </a>
              <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>
                Careers
              </a>
            </nav>
          </div>

          {/* Column 5: STAY IN THE LOOP */}
          <div className="footer-col footer-col-loop">
            <h4 className="footer-col-heading">STAY IN THE LOOP</h4>
            <p className="footer-loop-desc">
              Get updates on new properties, projects and design insights.
            </p>

            <form className="footer-email-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="footer-email-input"
                aria-label="Your email address"
              />
              <button
                type="submit"
                className="footer-email-submit-btn"
                aria-label="Submit newsletter subscription"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>

            {subscribed && (
              <div className="footer-subscribe-confirm">
                Thank you for subscribing.
              </div>
            )}

            <div className="footer-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="YouTube"
              >
                <YouTubeIcon size={19} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="X (Twitter)"
              >
                <XIcon size={16} />
              </a>
            </div>

            <a
              href="mailto:hello@modhaus.com"
              className="footer-contact-email"
            >
              hello@modhaus.com
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Principles */}
        <div className="footer-bottom-row">
          <div className="footer-copyright">
            &copy; 2026 MODHAUS by M/Y Realty &amp; Housing. All rights reserved.
          </div>
          <div className="footer-principles">
            <span>PEOPLE</span>
            <span className="footer-pipe">|</span>
            <span>PLACES</span>
            <span className="footer-pipe">|</span>
            <span>A BETTER TOMORROW</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
