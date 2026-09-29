import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from './Icons';
import './SiteHeader.css';

export function SiteHeader({ navigate }) {
  const detailsRef = useRef(null);
  const [scrollShrink, setScrollShrink] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVanished, setIsVanished] = useState(false);
  const [isPoppedUp, setIsPoppedUp] = useState(false);
  const [isMouseNearTop, setIsMouseNearTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (detailsRef.current && detailsRef.current.open) {
      detailsRef.current.open = false;
      setMenuOpen(false);
    }
    navigate(path);
  };

  // Close mobile menu on outside click or tap
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (detailsRef.current && detailsRef.current.open && !detailsRef.current.contains(e.target)) {
        detailsRef.current.open = false;
        setMenuOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = Math.max(0, window.scrollY);
    let ticking = false;

    const calculateThreshold = () => {
      // 3rd page arrives: Journey section (#journey) or ~1.25 viewports
      const journey = document.getElementById('journey');
      if (journey) {
        const rect = journey.getBoundingClientRect();
        return Math.max(600, rect.top + window.scrollY - Math.min(window.innerHeight * 0.5, 450));
      }
      return Math.max(600, window.innerHeight * 1.25);
    };

    const updateScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const threshold = calculateThreshold();

      // Progressive shrink calculation (0 to 1 over first 400px of scrolling)
      const shrinkFactor = Math.min(1, Math.max(0, currentScrollY / 400));
      setScrollShrink(shrinkFactor);
      setIsScrolled(currentScrollY > 40);

      const diff = currentScrollY - lastScrollY;
      const isScrollingUp = diff < -5;
      const isScrollingDown = diff > 5;

      const isMenuCurrentlyOpen = detailsRef.current?.open;

      // Auto-close open menu if user scrolls
      if (Math.abs(diff) > 15 && isMenuCurrentlyOpen) {
        if (detailsRef.current) detailsRef.current.open = false;
        setMenuOpen(false);
      }

      if (currentScrollY < 80) {
        // At the top of the page: always fully visible and unvanished
        setIsVanished(false);
        setIsPoppedUp(false);
      } else if (currentScrollY >= threshold) {
        // Past the 3rd page threshold:
        if (isScrollingDown && !isMenuCurrentlyOpen) {
          setIsVanished(true);
          setIsPoppedUp(false);
        } else if (isScrollingUp) {
          // "pop up when i make it backwards"
          setIsVanished(false);
          setIsPoppedUp(true);
        }
      } else {
        // Between 80px and threshold
        setIsVanished(false);
        if (isScrollingUp) {
          setIsPoppedUp(true);
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    // Mouse near top detection: "if i make my mouse near the header it should pop up"
    let leaveTimeout = null;
    const onMouseMove = (e) => {
      if (e.clientY <= 75) {
        if (leaveTimeout) clearTimeout(leaveTimeout);
        setIsMouseNearTop(true);
      } else if (e.clientY > 120) {
        if (!leaveTimeout) {
          leaveTimeout = setTimeout(() => {
            setIsMouseNearTop(false);
            leaveTimeout = null;
          }, 180);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      if (leaveTimeout) clearTimeout(leaveTimeout);
    };
  }, []);

  const isHidden = isVanished && !isPoppedUp && !isMouseNearTop && !menuOpen;

  return (
    <>
      {/* Invisible hover trigger strip at the very top of the viewport */}
      <div
        className="header-top-trigger-zone"
        onMouseEnter={() => setIsMouseNearTop(true)}
        aria-hidden="true"
      />

      <header
        className={`floating-header-wrapper ${isScrolled ? 'is-scrolled' : ''} ${isHidden ? 'is-hidden' : 'is-visible'} ${isPoppedUp || isMouseNearTop ? 'is-popped-up' : ''}`}
        style={{ '--scroll-shrink': scrollShrink }}
        onMouseEnter={() => setIsMouseNearTop(true)}
        onMouseLeave={(e) => {
          if (e.clientY > 90) setIsMouseNearTop(false);
        }}
      >
        <div className="floating-site-header">
          <a
            href="/"
            className="brand"
            aria-label="MODHAUS home"
            onClick={(e) => handleLinkClick(e, '/')}
          >
            <img src="/modhaus-mark.png" alt="" />
            <span className="brand-word">
              MODHAUS<small>BY M/Y REALTY &amp; HOUSING</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>The journey</a>
            <a href="/real-estate" onClick={(e) => handleLinkClick(e, '/real-estate')}>Real estate</a>
            <a href="/construction" onClick={(e) => handleLinkClick(e, '/construction')}>Construction</a>
            <a href="/interiors" onClick={(e) => handleLinkClick(e, '/interiors')}>Interiors</a>
            <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>About</a>
          </nav>

          <div className="header-actions">
            <a
              href="/contact"
              className="header-pill-btn"
              onClick={(e) => handleLinkClick(e, '/contact')}
            >
              <span>LET'S TALK</span>
              <ArrowUpRight size={17} />
            </a>

            <details
              className="mobile-menu"
              ref={detailsRef}
              onToggle={(e) => setMenuOpen(e.currentTarget.open)}
            >
              <summary aria-label="Open navigation">
                <span></span>
                <span></span>
              </summary>
              <nav aria-label="Mobile navigation">
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')}>The journey</a>
                <a href="/real-estate" onClick={(e) => handleLinkClick(e, '/real-estate')}>Real estate</a>
                <a href="/construction" onClick={(e) => handleLinkClick(e, '/construction')}>Construction</a>
                <a href="/interiors" onClick={(e) => handleLinkClick(e, '/interiors')}>Interiors</a>
                <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>About</a>
                <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>Contact</a>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
