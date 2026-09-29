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

      {/* Property Management Showcase - Placed directly below "Watch an idea take shape" */}
      <section className="home-management section-pad" id="management">
        <div className="section-kicker">
          PROPERTY MANAGEMENT <span>003 — CARE BEYOND THE BUILD</span>
        </div>

        <div className="home-management-header">
          <div className="home-management-titles">
            <span className="home-management-tag">VILLAS · PRIVATE RESIDENCES · ESTATES</span>
            <h2>
              Care for your villa.<br />
              <i>And every place you call home.</i>
            </h2>
          </div>
          <div className="home-management-intro">
            <p>
              Handing over the keys is only the beginning. MODHAUS provides continuous, meticulous management for private villas, architect-designed residences, and seasonal estates—preserving the beauty, craft, and function of your home through every season.
            </p>
            <a
              href="/management"
              className="text-link inverse"
              onClick={(e) => handleLink(e, '/management')}
            >
              Explore all property management <ArrowUpRight size={19} />
            </a>
          </div>
        </div>

        {/* Villa & Property Showcase Grid */}
        <div className="home-management-grid">
          <article className="home-management-card">
            <div className="home-management-photo-wrap">
              <div
                className="home-management-photo"
                style={{ backgroundImage: 'url(/modhaus-site-building-dusk.webp)' }}
                role="img"
                aria-label="Private luxury villa at dusk"
              />
              <span className="home-management-badge">01 / PRIVATE VILLAS</span>
            </div>
            <div className="home-management-content">
              <h3>Private Villas &amp; Estates</h3>
              <p>
                Complete grounds and building stewardship. Pool systems, landscape architecture, climate control, and weekly checks keep your villa immaculate year-round.
              </p>
              <ul className="home-management-features">
                <li>Grounds &amp; Pool Maintenance</li>
                <li>Preventive Climate &amp; MEP Audits</li>
                <li>Full 24/7 Security &amp; Monitoring</li>
              </ul>
            </div>
          </article>

          <article className="home-management-card">
            <div className="home-management-photo-wrap">
              <div
                className="home-management-photo"
                style={{ backgroundImage: 'url(/modhaus-living-room.webp)' }}
                role="img"
                aria-label="Finished interior living room"
              />
              <span className="home-management-badge">02 / INTERIORS &amp; FINISHES</span>
            </div>
            <div className="home-management-content">
              <h3>Interior &amp; Finish Preservation</h3>
              <p>
                Craft preservation for high-end materials. Specialist care for bespoke woodwork, natural marble, acoustic walls, and luxury lighting fixtures.
              </p>
              <ul className="home-management-features">
                <li>Marble &amp; Natural Stone Care</li>
                <li>Fine Woodwork &amp; Joinery Polish</li>
                <li>Smart Home &amp; Lighting Upkeep</li>
              </ul>
            </div>
          </article>

          <article className="home-management-card">
            <div className="home-management-photo-wrap">
              <div
                className="home-management-photo"
                style={{ backgroundImage: 'url(/modhaus-place.webp)' }}
                role="img"
                aria-label="Modern architectural residence"
              />
              <span className="home-management-badge">03 / RETREATS &amp; RESIDENCES</span>
            </div>
            <div className="home-management-content">
              <h3>Seasonal &amp; Vacation Homes</h3>
              <p>
                Turnkey arrival and departure protocol. We air out the home, stock essentials, calibrate temperatures, and ready every room before you or your guests arrive.
              </p>
              <ul className="home-management-features">
                <li>Pre-Arrival Welcome Staging</li>
                <li>Seasonal Winterizing &amp; Spring Opening</li>
                <li>Keyholding &amp; Concierge Access</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="home-management-footer">
          <div className="home-management-cta-text">
            <h4>Have a villa or residence in mind?</h4>
            <p>We tailor care schedules to individual properties across the region.</p>
          </div>
          <a
            href="/management"
            className="round-link light-link"
            onClick={(e) => handleLink(e, '/management')}
          >
            <span>Learn about villa management</span>
            <span className="round-icon">
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>
      </section>

      <section className="services-home section-pad">
        <div className="section-kicker">
          WHAT WE DO <span>004 — EXPERTISE</span>
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
            A PLACE TO BELONG <span>005 — DETAIL</span>
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
