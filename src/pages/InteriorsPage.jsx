import React from 'react';
import { ArrowUpRight } from '../components/Icons';

export function InteriorsPage({ navigate }) {
  const handleLink = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <main className="detail-page">
      <section className="subhero">
        <div className="subhero-copy">
          <div className="eyebrow light">
            INTERIOR DESIGN <span>03 / 06</span>
          </div>
          <h1>
            Spaces that<br />
            <em>feel like yours.</em>
          </h1>
          <p>
            Interiors are where architecture becomes personal. Material, light, proportion, and function come together in rooms made for living.
          </p>
          <div className="subhero-scroll">EXPLORE THE APPROACH ↓</div>
        </div>
        <div
          className="subhero-image"
          role="img"
          aria-label="Conceptual warm luxury residential interior"
          style={{ backgroundImage: 'url(/modhaus-interior.webp)' }}
        ></div>
      </section>

      <section className="detail-statement section-pad">
        <div className="section-kicker">
          THE APPROACH <span>03 — MODHAUS</span>
        </div>
        <div className="statement-grid">
          <h2>The details turn a space into a place.</h2>
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
            <h3>Discover how you live</h3>
            <p>
              Understand the rhythms, needs, and atmosphere you want each space to support.
            </p>
          </article>
          <article>
            <span>02 / 03</span>
            <h3>Shape the experience</h3>
            <p>
              Explore layouts, finishes, furniture direction, and the details that connect them.
            </p>
          </article>
          <article>
            <span>03 / 03</span>
            <h3>Bring it all together</h3>
            <p>
              Create a coherent space, from larger decisions to the final tactile touches.
            </p>
          </article>
        </div>
      </section>

      <section className="related-panel">
        <div
          className="related-image"
          style={{ backgroundImage: 'url(/modhaus-site.webp)' }}
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
