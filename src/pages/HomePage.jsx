import React from 'react';
import { ArrowUpRight } from '../components/Icons';
import { FloorExplorer } from '../components/FloorExplorer';
import { NewHero } from '../components/NewHero';
import './ManagementPage.css';

export function HomePage({ navigate }) {
  const handleLink = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <main>
      <NewHero navigate={navigate} />

      <section className="statement section-pad">
        <div className="section-kicker">
          THE MODHAUS IDEA <span>001 — PERSPECTIVE</span>
        </div>
        <div className="statement-grid">
          <h2>
            Every great place<br />
            starts with <i>a vision.</i>
          </h2>
          <div>
            <p>
              Some see a plot. We see the life that could unfold there. MODHAUS brings the search, the structure, and the space together—so each decision belongs to a bigger picture.
            </p>
            <a
              href="/about"
              className="text-link"
              onClick={(e) => handleLink(e, '/about')}
            >
              Discover our approach <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>

      <section className="journey-section section-pad" id="journey">
        <div className="journey-head">
          <div>
            <div className="section-kicker">
              A SITE, REIMAGINED <span>002 — THE JOURNEY</span>
            </div>
            <h2>
              Watch an idea<br />
              <i>take shape.</i>
            </h2>
          </div>
          <p>Explore each stage, from the land beneath your feet to the rooms you make your own.</p>
        </div>

        <FloorExplorer compact={true} navigate={navigate} />

        <div className="journey-footer">
          <span>SELECT A STAGE TO EXPLORE</span>
          <a
            href="/services"
            className="text-link inverse"
            onClick={(e) => handleLink(e, '/services')}
          >
            See the full journey <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      <section className="services-home section-pad">
        <div className="section-kicker">
          WHAT WE DO <span>003 — EXPERTISE</span>
        </div>
        <div className="services-title-row">
          <h2>
            One vision.<br />
            <i>Three disciplines.</i>
          </h2>
          <p>A more complete way to think about property—from possibility to place.</p>
        </div>
        <div className="service-grid">
          <a
            href="/real-estate"
            className="service-card"
            onClick={(e) => handleLink(e, '/real-estate')}
          >
            <div
              className="service-photo"
              style={{ backgroundImage: 'url(/modhaus-site.webp)' }}
            >
              <span className="service-counter">01 / 03</span>
              <span className="service-arrow">
                <ArrowUpRight size={24} />
              </span>
            </div>
            <div className="service-card-text">
              <h3>Real estate</h3>
              <p>Find the right address, understand its potential, and make a considered move.</p>
            </div>
          </a>

          <a
            href="/construction"
            className="service-card"
            onClick={(e) => handleLink(e, '/construction')}
          >
            <div
              className="service-photo"
              style={{ backgroundImage: 'url(/modhaus-build.webp)' }}
            >
              <span className="service-counter">02 / 03</span>
              <span className="service-arrow">
                <ArrowUpRight size={24} />
              </span>
            </div>
            <div className="service-card-text">
              <h3>Construction</h3>
              <p>From the first drawing to the final structural detail, build with intention.</p>
            </div>
          </a>

          <a
            href="/interiors"
            className="service-card"
            onClick={(e) => handleLink(e, '/interiors')}
          >
            <div
              className="service-photo"
              style={{ backgroundImage: 'url(/modhaus-interior.webp)' }}
            >
              <span className="service-counter">03 / 03</span>
              <span className="service-arrow">
                <ArrowUpRight size={24} />
              </span>
            </div>
            <div className="service-card-text">
              <h3>Interiors</h3>
              <p>Spaces shaped around the way you live, with every finish given its place.</p>
            </div>
          </a>
        </div>
      </section>

      <section className="editorial-band">
        <div
          className="band-photo"
          role="img"
          aria-label="MODHAUS architecture and community living"
        ></div>
        <div className="band-copy">
          <div className="section-kicker">
            A PLACE TO BELONG <span>004 — DETAIL</span>
          </div>
          <h2>
            Made to be<br />
            <i>lived in.</i>
          </h2>
          <p>
            Architecture makes the first impression. The details make it feel like yours. Our approach considers both, from the outline of a space to the way light settles in a room.
          </p>
          <a
            href="/interiors"
            className="text-link"
            onClick={(e) => handleLink(e, '/interiors')}
          >
            Explore interiors <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      <section className="management-teaser" aria-labelledby="management-teaser-title">
        <div className="management-teaser-image" role="img" aria-label="Contemporary villa at dusk" />
        <div className="management-teaser-copy">
          <div className="section-kicker">AFTER THE KEYS <span>005 — MANAGEMENT</span></div>
          <p className="management-overline">PROPERTY MANAGEMENT · VILLAS & HOMES</p>
          <h2 id="management-teaser-title">Made to last.<br /><i>Made to live in.</i></h2>
          <p>A place deserves care long after it is built. Explore a thoughtful way to look after the home, its details, and the people who live there.</p>
          <a href="/management" className="text-link" onClick={(e) => handleLink(e, '/management')}>
            Explore management <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      <section className="closing-cta section-pad">
        <div className="section-kicker">
          YOUR NEXT CHAPTER <span>006 — BEGIN</span>
        </div>
        <h2>
          What could we<br />
          <i>make possible?</i>
        </h2>
        <a
          href="/contact"
          className="round-link light-link"
          onClick={(e) => handleLink(e, '/contact')}
        >
          <span>Start a conversation</span>
          <span className="round-icon">
            <ArrowUpRight size={20} />
          </span>
        </a>
      </section>
    </main>
  );
}
