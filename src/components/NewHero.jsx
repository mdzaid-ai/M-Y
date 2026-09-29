import React, { useState, useRef } from 'react';
import './NewHero.css';

export function NewHero({ navigate }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const panelsRef = useRef(null);

  const panels = [
    {
      id: '01',
      title: 'REAL ESTATE',
      subtitle: 'Find opportunities',
      image: '/modhaus-site.webp',
      href: '/real-estate',
      ariaLabel: 'Real estate: Find opportunities'
    },
    {
      id: '02',
      title: 'CONSTRUCTION',
      subtitle: 'Build with purpose',
      image: '/modhaus-build.webp',
      href: '/construction',
      ariaLabel: 'Construction: Build with purpose'
    },
    {
      id: '03',
      title: 'INTERIOR DESIGN',
      subtitle: 'Create experiences',
      image: '/modhaus-interior.webp',
      href: '/interiors',
      ariaLabel: 'Interior design: Create experiences'
    }
  ];

  const scrollToPanel = (idx) => {
    setActiveIdx(idx);
    if (panelsRef.current && window.innerWidth <= 680) {
      const cards = panelsRef.current.querySelectorAll('.split-panel-card');
      if (cards[idx]) {
        cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const next = activeIdx === 0 ? panels.length - 1 : activeIdx - 1;
    scrollToPanel(next);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const next = activeIdx === panels.length - 1 ? 0 : activeIdx + 1;
    scrollToPanel(next);
  };

  const handlePanelClick = (e, path, idx) => {
    e.preventDefault();
    setActiveIdx(idx);
    navigate(path);
  };

  const handleScroll = () => {
    if (!panelsRef.current || window.innerWidth > 680) return;
    const container = panelsRef.current;
    const cards = container.querySelectorAll('.split-panel-card');
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeIdx) {
      setActiveIdx(closestIdx);
    }
  };

  return (
    <section className="split-hero">
      {/* Left Editorial Column */}
      <div className="split-hero-left">
        <div className="split-hero-left-content">
          <div className="split-hero-eyebrow">SERVICES</div>
          <h1 className="split-hero-title">
            FROM<br />
            LAND TO<br />
            LIVING.
          </h1>
          <div className="split-hero-sub">
            Real Estate · Construction · Interior Design
          </div>
          <p className="split-hero-desc">
            One team. Three disciplines. A complete vision for a better tomorrow.
          </p>
        </div>
      </div>

      {/* Right 3-Panel Discipline Showcase */}
      <div
        className="split-hero-panels"
        ref={panelsRef}
        onScroll={handleScroll}
      >
        {panels.map((panel, idx) => (
          <a
            key={panel.id}
            href={panel.href}
            className={`split-panel-card ${activeIdx === idx ? 'active' : ''}`}
            onClick={(e) => handlePanelClick(e, panel.href, idx)}
            aria-label={panel.ariaLabel}
          >
            <div
              className="split-panel-bg"
              style={{ backgroundImage: `url(${panel.image})` }}
            />
            <div className="split-panel-overlay" />

            <div className="split-panel-content">
              <span className="split-panel-tick" />
              <div className="split-panel-text">
                <h3 className="split-panel-title">{panel.title}</h3>
                <p className="split-panel-sub">{panel.subtitle}</p>
              </div>
            </div>
          </a>
        ))}

        {/* Carousel / Navigation Controls at bottom right */}
        <div className="split-hero-nav">
          <span className="split-hero-counter">
            {panels[activeIdx].id} / 03
          </span>
          <div className="split-hero-arrows">
            <button
              type="button"
              className="split-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              type="button"
              className="split-arrow-btn"
              onClick={handleNext}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
