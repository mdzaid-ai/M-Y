import React from 'react';
import { ArrowUpRight } from '../components/Icons';
import './ManagementPage.css';

export function ManagementPage({ navigate }) {
  const handleLink = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <main className="management-page">
      <section className="management-hero">
        <div className="management-hero-image" role="img" aria-label="Contemporary villa in a landscaped setting" />
        <div className="management-hero-shade" />
        <div className="management-hero-content">
          <div className="management-hero-top">MODHAUS / PROPERTY MANAGEMENT <span>05 — BEYOND THE BUILD</span></div>
          <div className="management-hero-bottom">
            <div>
              <p className="management-overline">VILLAS · HOMES · SPACES TO LIVE</p>
              <h1>The place is yours.<br /><em>We help care for it.</em></h1>
              <p className="management-hero-intro">Thoughtful attention for the home after the keys are handed over. From everyday upkeep to the details that make a place feel ready.</p>
              <a href="/contact" className="management-hero-cta" onClick={(e) => handleLink(e, '/contact')}>
                Discuss your property <ArrowUpRight size={19} />
              </a>
            </div>
            <span className="management-hero-index">01 / 05 <span>SCROLL TO EXPLORE ↓</span></span>
          </div>
        </div>
      </section>

      <section className="management-intro section-pad">
        <div className="section-kicker">THE IDEA <span>01 — CARE IS PART OF THE VISION</span></div>
        <div className="management-intro-grid">
          <h2>Good places deserve<br /><i>good care.</i></h2>
          <div>
            <p>Building a home is one chapter. Looking after it is the next. MODHAUS brings the same attention to the life of a property as it does to the making of it.</p>
            <span>FOR THE HOME YOU LIVE IN, OR THE ONE YOU RETURN TO.</span>
          </div>
        </div>
      </section>

      <section className="management-care section-pad" id="care">
        <div className="management-care-heading">
          <div>
            <div className="section-kicker">WHAT WE LOOK AFTER <span>02 — THE DETAILS</span></div>
            <h2>Considered care.<br /><i>Every day.</i></h2>
          </div>
          <p>A connected approach for villas and homes, shaped around the property and the way it is used.</p>
        </div>
        <div className="management-care-grid">
          <article className="management-care-card management-care-card-large">
            <div className="management-care-photo management-care-photo-villa" role="img" aria-label="Villa exterior and landscaped grounds" />
            <div className="management-care-card-copy">
              <span>01 / PROPERTY CARE</span>
              <h3>A home kept at its best.</h3>
              <p>Regular attention to the condition, presentation, and smaller details of the property.</p>
            </div>
          </article>
          <article className="management-care-card">
            <div className="management-care-photo management-care-photo-interior" role="img" aria-label="Warm residential interior" />
            <div className="management-care-card-copy">
              <span>02 / UPKEEP</span>
              <h3>Details handled.</h3>
              <p>Coordinating the maintenance and care that helps a home work as beautifully as it looks.</p>
            </div>
          </article>
          <article className="management-care-card">
            <div className="management-care-photo management-care-photo-place" role="img" aria-label="Modern home in a residential setting" />
            <div className="management-care-card-copy">
              <span>03 / PEACE OF MIND</span>
              <h3>Ready when you are.</h3>
              <p>A thoughtful rhythm of checks and preparation for homes that are not occupied every day.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Places Under Care: Villas & Beyond */}
      <section className="management-portfolio section-pad">
        <div className="section-kicker">
          PLACES UNDER CARE <span>03 — THE PORTFOLIO</span>
        </div>
        <div className="management-portfolio-head">
          <h2>
            Villas, residences,<br />
            <i>and places of sanctuary.</i>
          </h2>
          <p>
            Whether an expansive hillside estate, a beachfront villa, or an architectural residence, we shape custom care protocols that match the architecture, climate, and lifestyle of the owners.
          </p>
        </div>

        <div className="management-places-grid">
          <div className="management-place-item">
            <div className="management-place-img" style={{ backgroundImage: "url('/modhaus-site-building-dusk.webp')" }}>
              <span className="management-place-pill">PRIVATE VILLAS</span>
            </div>
            <div className="management-place-info">
              <h3>Hillside &amp; Valley Villas</h3>
              <p>Pool filtration, landscape architecture, stone patio sealing, and seasonal storm preparation.</p>
            </div>
          </div>

          <div className="management-place-item">
            <div className="management-place-img" style={{ backgroundImage: "url('/modhaus-place.webp')" }}>
              <span className="management-place-pill">COASTAL HOMES</span>
            </div>
            <div className="management-place-info">
              <h3>Modern Seaside Residences</h3>
              <p>Specialized marine climate protection, glass and joinery care, and high-salinity resistance audits.</p>
            </div>
          </div>

          <div className="management-place-item">
            <div className="management-place-img" style={{ backgroundImage: "url('/modhaus-living-room.webp')" }}>
              <span className="management-place-pill">BESPOKE INTERIORS</span>
            </div>
            <div className="management-place-info">
              <h3>Architectural Living Spaces</h3>
              <p>Preservation of custom woodwork, natural marble polish, HVAC zoning, and delicate textile care.</p>
            </div>
          </div>

          <div className="management-place-item">
            <div className="management-place-img" style={{ backgroundImage: "url('/modhaus-belong.webp')" }}>
              <span className="management-place-pill">FAMILY COMPOUNDS</span>
            </div>
            <div className="management-place-info">
              <h3>Private Enclaves &amp; Compounds</h3>
              <p>Perimeter security, shared amenities, access management, and coordinated staff housekeeping.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="management-continuity">
        <div className="management-continuity-image" role="img" aria-label="Sunlit living room with warm natural materials" />
        <div className="management-continuity-copy">
          <div className="section-kicker">ONE CONTINUOUS VISION <span>04 — THE CONNECTION</span></div>
          <h2>From first plans<br />to <i>everyday living.</i></h2>
          <p>Finding the place, shaping it, and caring for it belong to the same story. Management extends the MODHAUS approach beyond the finished project.</p>
          <div className="management-continuity-links">
            <a href="/real-estate" onClick={(e) => handleLink(e, '/real-estate')}>Real estate <ArrowUpRight size={17} /></a>
            <a href="/construction" onClick={(e) => handleLink(e, '/construction')}>Construction <ArrowUpRight size={17} /></a>
            <a href="/interiors" onClick={(e) => handleLink(e, '/interiors')}>Interiors <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="management-final section-pad">
        <div className="section-kicker">LET'S BEGIN <span>05 — YOUR PROPERTY</span></div>
        <div className="management-final-row">
          <h2>Let's look after<br /><i>what matters.</i></h2>
          <a href="/contact" className="management-final-link" onClick={(e) => handleLink(e, '/contact')}>
            <span>Tell us about your property</span><ArrowUpRight size={23} />
          </a>
        </div>
      </section>
    </main>
  );
}
