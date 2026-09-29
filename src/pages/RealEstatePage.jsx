import React from 'react';
import { ArrowUpRight } from '../components/Icons';

export function RealEstatePage({ navigate }) {
  const handleLink = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <main className="detail-page">
      <section className="subhero">
        <div className="subhero-copy">
          <div className="eyebrow light">
            REAL ESTATE <span>01 / 06</span>
          </div>
          <h1>
            The right place<br />
            <em>changes everything.</em>
          </h1>
          <p>
            A place begins with possibility. We look beyond an address to how a property can support what comes next.
          </p>
          <div className="subhero-scroll">EXPLORE THE APPROACH ↓</div>
        </div>
        <div
          className="subhero-image"
          role="img"
          aria-label="Conceptual land and modern residential development"
          style={{ backgroundImage: 'url(/modhaus-site.webp)' }}
        ></div>
      </section>

      <section className="detail-statement section-pad">
        <div className="section-kicker">
          THE APPROACH <span>01 — MODHAUS</span>
        </div>
        <div className="statement-grid">
          <h2>The best address is the one that fits the life ahead.</h2>
          <p>
            Every project has its own starting point. Our focus is on the choices that make the whole place work together, from the first decision through the final detail.
          </p>
        </div>
      </section>

      <section className="detail-steps section-pad">
        <div className="section-kicker">
          HOW IT TAKES SHAPE <span>THREE MOMENTS</span>
        </div>
        <div className="steps-grid">
          <article>
            <span>01 / 03</span>
            <h3>Understand the brief</h3>
            <p>
              Begin with your priorities, preferences, and the kind of life the property needs to hold.
            </p>
          </article>
          <article>
            <span>02 / 03</span>
            <h3>See the potential</h3>
            <p>
              Consider the setting, space, and possibilities before making the next move.
            </p>
          </article>
          <article>
            <span>03 / 03</span>
            <h3>Move with clarity</h3>
            <p>
              Bring the property decision into the wider vision for building and living.
            </p>
          </article>
        </div>
      </section>

      <section className="related-panel">
        <div
          className="related-image"
          style={{ backgroundImage: 'url(/modhaus-interior.webp)' }}
        ></div>
        <div className="related-copy">
          <span className="section-kicker">THE WHOLE PICTURE</span>
          <h2>
            One part of<br />
            <i>something more.</i>
          </h2>
          <p>
            See how this discipline connects to every other step of the MODHAUS journey.
          </p>
          <a
            href="/services"
            className="text-link"
            onClick={(e) => handleLink(e, '/services')}
          >
            Explore the journey <ArrowUpRight size={19} />
          </a>
        </div>
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
