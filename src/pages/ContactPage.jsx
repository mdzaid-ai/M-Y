import React from 'react';
import { BriefForm } from '../components/BriefForm';

export function ContactPage() {
  return (
    <main className="detail-page contact-page">
      <section className="contact-intro section-pad">
        <div className="eyebrow light">
          BEGIN WITH AN IDEA <span>06 / 06</span>
        </div>
        <h1>
          Tell us what<br />
          <em>you imagine.</em>
        </h1>
        <p>
          Whether it starts with a site, a structure, or a single room, put the first thoughts into words.
        </p>
      </section>

      <section className="contact-content section-pad">
        <div>
          <div className="section-kicker">
            YOUR PROJECT <span>A PLACE TO START</span>
          </div>
          <h2>
            Every detail<br />
            <i>starts somewhere.</i>
          </h2>
          <p>
            Use this brief to gather the essentials and put your project into focus.
          </p>
        </div>

        <BriefForm />
      </section>
    </main>
  );
}
