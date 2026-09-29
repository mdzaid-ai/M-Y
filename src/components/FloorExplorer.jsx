import React, { useState } from 'react';
import { ArrowUpRight } from './Icons';
import './FloorExplorer.css';

const stages = [
  {
    n: "00",
    tag: "THE GROUND",
    title: "The site",
    body: "It starts with the right piece of land and a clear understanding of what it can become.",
    image: "/modhaus-site.webp",
    href: "/real-estate"
  },
  {
    n: "01",
    tag: "THE VISION",
    title: "The plan",
    body: "Needs, possibilities, and spatial ideas become a direction worth building.",
    image: "/modhaus-plan.webp",
    href: "/services"
  },
  {
    n: "02",
    tag: "THE FRAME",
    title: "Construction",
    body: "The lines rise off the page. Structure, materials, and craft make the vision tangible.",
    image: "/modhaus-build.webp",
    href: "/construction"
  },
  {
    n: "03",
    tag: "THE SPACE",
    title: "Interiors",
    body: "Light, texture, and function give each room a character of its own.",
    image: "/modhaus-interior.webp",
    href: "/interiors"
  },
  {
    n: "04",
    tag: "THE LIFE",
    title: "Your place",
    body: "The final details come together. A space is ready to hold the life you imagined.",
    image: "/modhaus-your-place.webp",
    href: "/contact"
  }
];

export function FloorExplorer({ compact = false, navigate, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const current = stages[activeTab] || stages[0];

  return (
    <div className={`floor-explorer ${compact ? 'compact' : ''}`}>
      <div className="floor-list" role="tablist" aria-label="Project stages">
        {stages.map((stage, idx) => (
          <button
            key={stage.n}
            type="button"
            role="tab"
            aria-selected={activeTab === idx}
            aria-controls="stage-panel"
            id={`stage-tab-${idx}`}
            className={`floor-tab ${activeTab === idx ? 'selected' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            <span>{stage.n}</span>
            <strong>{stage.title}</strong>
            <span className="floor-plus">{activeTab === idx ? '—' : '+'}</span>
          </button>
        ))}
      </div>

      <div
        id="stage-panel"
        role="tabpanel"
        aria-labelledby={`stage-tab-${activeTab}`}
        className="floor-visual"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className="floor-visual-overlay"></div>
        <div className="stage-card">
          <span className="stage-index">
            STAGE {current.n} <span>/ 04</span>
          </span>
          <span className="stage-tag">{current.tag}</span>
          <h3>{current.title}</h3>
          <p>{current.body}</p>
          <a
            href={current.href}
            aria-label={`Explore ${current.title}`}
            className="stage-card-link"
            onClick={(e) => {
              e.preventDefault();
              navigate(current.href);
            }}
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
