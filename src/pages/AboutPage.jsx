import React from 'react';
import { ArrowUpRight } from '../components/Icons';

export function AboutPage({ navigate }) {
  const handleLink = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <main className="detail-page">
      <section className="subhero about-hero">
        <div className="subhero-copy">
          <div className="eyebrow light">
            ABOUT MODHAUS <span>05 / 06</span>
          </div>
          <h1>
            A different way<br />
            to <em>see a place.</em>
          </h1>
          <p>
            MODHAUS by M/Y Realty &amp; Housing brings property, building, and interior thinking into one vision.
          </p>
        </div>
        <div
          className="subhero-image"
          style={{ backgroundImage: "url('/modhaus-interior.webp')" }}
        ></div>
      </section>

      <section className="about-body section-pad">
        <div className="section-kicker">
          OUR POINT OF VIEW <span>THE BIGGER PICTURE</span>
        </div>
        <div className="statement-grid">
          <h2>
            Good spaces begin<br />
            with <i>good questions.</i>
          </h2>
          <div>
            <p>
              Where do you want to be? What should the space make possible? How should it feel years from now? We start with those questions and connect the answers across real estate, construction, and interior design.
            </p>
            <p>
              The result is a more considered path from first idea to a place that feels complete.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values section-pad">
        <div>
          <span>01 / PLACE</span>
          <h3>See the opportunity.</h3>
        </div>
        <div>
          <span>02 / FORM</span>
          <h3>Build the idea.</h3>
        </div>
        <div>
          <span>03 / FEELING</span>
          <h3>Make it yours.</h3>
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
