import React from 'react';
import { ArrowUpRight } from '../components/Icons';
import { FloorExplorer } from '../components/FloorExplorer';

export function ServicesPage({ navigate }) {
  const handleLink = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <main className="detail-page">
      <section className="subhero subhero-services">
        <div className="subhero-copy">
          <div className="eyebrow light">
            THE MODHAUS JOURNEY <span>01 / 06</span>
          </div>
          <h1>
            From the ground up.<br />
            <em>All the way home.</em>
          </h1>
          <p>
            One site. Many layers of thought. Explore how a piece of land becomes a place to live.
          </p>
        </div>
        <div
          className="subhero-image"
          style={{ backgroundImage: "url('/modhaus-site.webp')" }}
        ></div>
      </section>

      <section className="service-journey section-pad">
        <div className="section-kicker">
          EXPLORE THE STAGES <span>THE MODHAUS METHOD</span>
        </div>
        <div className="journey-head">
          <h2>
            A vision in<br />
            <i>five moments.</i>
          </h2>
          <p>
            Select a stage to see how each decision shapes the next. The journey moves from the site to the rooms within it.
          </p>
        </div>

        <FloorExplorer compact={false} navigate={navigate} />
      </section>

      <section className="discipline-list section-pad">
        <div className="section-kicker">
          THREE DISCIPLINES <span>ONE DIRECTION</span>
        </div>
        <a
          href="/real-estate"
          className="discipline-row"
          onClick={(e) => handleLink(e, '/real-estate')}
        >
          <span>01</span>
          <h3>Real estate</h3>
          <p>The possibility of place.</p>
          <ArrowUpRight size={24} />
        </a>
        <a
          href="/construction"
          className="discipline-row"
          onClick={(e) => handleLink(e, '/construction')}
        >
          <span>02</span>
          <h3>Construction</h3>
          <p>The strength of the structure.</p>
          <ArrowUpRight size={24} />
        </a>
        <a
          href="/interiors"
          className="discipline-row"
          onClick={(e) => handleLink(e, '/interiors')}
        >
          <span>03</span>
          <h3>Interiors</h3>
          <p>The meaning in the details.</p>
          <ArrowUpRight size={24} />
        </a>
      </section>

      <section className="closing-cta section-pad">
        <div className="section-kicker">
          MAKE IT YOURS <span>THE NEXT STEP</span>
        </div>
        <h2>
          Let's begin<br />
          <i>with your idea.</i>
        </h2>
        <a
          href="/contact"
          className="round-link light-link"
          onClick={(e) => handleLink(e, '/contact')}
        >
          <span>Plan your project</span>
          <span className="round-icon">
            <ArrowUpRight size={20} />
          </span>
        </a>
      </section>
    </main>
  );
}
