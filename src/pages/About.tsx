import { about } from '../data/about';

export function About() {
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
      <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: '0.5rem',
        }}>
          {about.name}
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--ink-light)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
          {about.tagline}
        </p>
      </div>

      <div style={{ maxWidth: '520px', marginBottom: '3rem' }}>
        {about.bio.split('\n\n').map((para, i) => (
          <p key={i} style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink)', fontWeight: 300, marginBottom: '1.25rem' }}>
            {para}
          </p>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Contact
        </p>
        <a href={`mailto:${about.contact.email}`}
          style={{ fontSize: '0.95rem', color: 'var(--ink)', borderBottom: '1px solid var(--border)', paddingBottom: '2px', transition: 'border-color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
          {about.contact.email}
        </a>
      </div>
    </div>
  );
}
