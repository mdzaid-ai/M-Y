import React from 'react';
import { ArrowUpRight } from '../components/Icons';

export function ConstructionPage({ navigate }) {
  const handleLink = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <main className="detail-page">
      <section className="subhero">
        <div className="subhero-copy">
          <div className="eyebrow light">
            CONSTRUCTION <span>02 / 06</span>
          </div>
          <h1>
            Ideas made<br />
            <em>tangible.</em>
          </h1>
          <p>
            From the clarity of a plan to the character of a finished structure, construction is where intention becomes real.
          </p>
          <div className="subhero-scroll">EXPLORE THE APPROACH ↓</div>
        </div>
        <div
          className="subhero-image"
          role="img"
          aria-label="Conceptual modern concrete building frame under construction"
          style={{ backgroundImage: 'url(/modhaus-build.webp)' }}
        ></div>
      </section>

      <section className="detail-statement section-pad">
        <div className="section-kicker">
          THE APPROACH <span>02 — MODHAUS</span>
        </div>
        <div className="statement-grid">
          <h2>A strong vision deserves a thoughtful foundation.</h2>
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
            <h3>Plan with purpose</h3>
            <p>
              Define the scope, spatial direction, materials, and essential details before work begins.
            </p>
          </article>
          <article>
            <span>02 / 03</span>
            <h3>Build the structure</h3>
            <p>
              Translate drawings into a physical space through a deliberate sequence of work.
            </p>
          </article>
          <article>
            <span>03 / 03</span>
            <h3>Finish with care</h3>
            <p>
              Bring the details together so the final result feels considered at every scale.
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
