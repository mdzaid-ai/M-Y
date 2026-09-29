import React, { useState } from 'react';
import { ArrowUpRight } from './Icons';

export function BriefForm() {
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `MODHAUS project enquiry
Name: ${data.get('name')}
Email or phone: ${data.get('contact')}
Interested in: ${data.get('service')}
Project: ${data.get('message')}`;

    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
        return;
      }
      throw new Error('Clipboard API unavailable');
    } catch {
      try {
        const el = document.createElement('textarea');
        el.value = text;
        el.style.position = 'fixed';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
      } catch {
        window.prompt('Copy your project brief:', text);
      }
    }
  }

  return (
    <form className="brief-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input required placeholder="Your name" name="name" />
        </label>
        <label>
          Email or phone
          <input required placeholder="How to reach you" name="contact" />
        </label>
      </div>

      <label>
        What are you planning?
        <select name="service" defaultValue="" required>
          <option value="" disabled>Select an area</option>
          <option>Real estate</option>
          <option>Construction</option>
          <option>Interior design</option>
          <option>A combination</option>
        </select>
      </label>

      <label>
        Tell us a little about it
        <textarea
          name="message"
          required
          rows={5}
          placeholder="The place, the idea, the next step…"
        />
      </label>

      <button className="form-submit" type="submit">
        {copied ? 'BRIEF COPIED' : 'COPY PROJECT BRIEF'}{' '}
        <ArrowUpRight size={19} />
      </button>

      <p className="form-note" aria-live="polite">
        {copied
          ? 'Your brief is copied. Share it with MODHAUS through your preferred contact channel.'
          : 'This prepares a project brief for you to share. It does not submit your details.'}
      </p>
    </form>
  );
}
