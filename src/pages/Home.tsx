import { Link } from 'react-router-dom';
import { about } from '../data/about';
import { projects } from '../data/projects';

export function Home() {
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>

      {/* Hero */}
      <div style={{ marginBottom: '5rem' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 400,
          lineHeight: 1.15,
          marginBottom: '1.25rem',
          maxWidth: '560px',
        }}>
          {about.tagline}
        </h1>
        {about.bio.split('\n\n').map((para, i) => (
          <p key={i} style={{
            fontSize: '0.95rem',
            color: 'var(--ink-light)',
            maxWidth: '440px',
            marginBottom: '0.75rem',
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            {para}
          </p>
        ))}
      </div>

      {/* Recent projects */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Projects
          </span>
          <Link to="/projects" style={{ fontSize: '0.78rem', color: 'var(--ink-faint)', borderBottom: '1px solid var(--border)', transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-faint)'; }}>
            All {projects.length}
          </Link>
        </div>

        {projects.map(p => (
          <Link key={p.id} to={`/projects/${p.id}`} style={{ display: 'block', textDecoration: 'none' }}>
            <div
              style={{ padding: '1.1rem 0', borderBottom: '1px solid var(--border)', transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.55')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.2rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--ink)' }}>
                  {p.title}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {p.date}
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-light)', marginBottom: '0.5rem' }}>
                {p.subtitle}
              </p>
              <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                {p.typeTags.map(t => (
                  <span key={t} style={{ fontSize: '0.68rem', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid var(--border)', borderRadius: '3px', padding: '0.1rem 0.45rem' }}>{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
