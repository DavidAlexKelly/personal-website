import { Link } from 'react-router-dom';
import { about } from '../data/about';
import { ideas } from '../data/ideas';
import { projects } from '../data/projects';
import { essays } from '../data/essays';
import { navItems } from '../data/nav';


export function Home() {
  const allItems = [
    ...ideas.map(i => ({ ...i, type: 'Idea', path: `/ideas/${i.id}` })),
    ...projects.map(p => ({ ...p, type: 'Built', path: `/built/${p.id}` })),
    ...essays.map(e => ({ ...e, type: 'Essay', path: `/writing/${e.id}` })),
  ].sort(() => 0); // maintain insertion order; sort by date if desired

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
          maxWidth: '600px',
        }}>
          {about.tagline}
        </h1>
        {about.bio.split('\n\n').map((para, i) => (
          <p key={i} style={{ fontSize: '0.95rem', color: 'var(--ink-light)', maxWidth: '480px', marginBottom: '0.75rem', lineHeight: 1.7 }}>
            {para}
          </p>
        ))}
      </div>

      {/* Section nav */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
        {navItems.filter(n => n.category !== 'about').map(item => (
          <Link key={item.path} to={item.path} style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 1rem',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            fontSize: '0.85rem',
            color: 'var(--ink-light)',
            transition: 'all 0.15s ease',
            background: 'var(--bg-card)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.style.color = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--ink-light)'; }}
          >
            {item.label}
            <span style={{ color: 'var(--ink-faint)', fontSize: '0.75rem' }}>
              {item.category === 'ideas' ? ideas.length : item.category === 'built' ? projects.length : essays.length}
            </span>
          </Link>
        ))}
      </div>

      {/* Recent */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Recent</span>
        </div>
        {allItems.slice(0, 6).map(item => (
          <Link key={item.path} to={item.path} style={{ display: 'block', textDecoration: 'none' }}>
            <div
              style={{ padding: '1.1rem 0', borderBottom: '1px solid var(--border)', transition: 'opacity 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>
                    {item.type}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--ink)' }}>
                    {item.title}
                  </span>
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--ink-faint)', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.date}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-light)', marginTop: '0.2rem', paddingLeft: '0' }}>
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
