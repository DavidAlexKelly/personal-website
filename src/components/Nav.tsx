import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../data/nav';
import { useSearch } from '../hooks/useSearch';

export function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const results = useSearch(query);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--nav-h)',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(250,250,248,0.94)',
      backdropFilter: 'blur(12px)',
      display: 'flex', alignItems: 'center',
      padding: '0 2rem',
      gap: '2rem',
    }}>
      {/* Wordmark */}
      <Link to="/" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.05rem',
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        color: 'var(--ink)',
      }}>
        David Zarraga Kelly
      </Link>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '0.25rem', flexShrink: 0 }}>
        {navItems.map(item => {
          const active = location.pathname.startsWith(item.path);
          return (
            <Link key={item.path} to={item.path} style={{
              fontSize: '0.8rem',
              fontWeight: active ? '500' : '300',
              color: active ? 'var(--ink)' : 'var(--ink-light)',
              padding: '0.35rem 0.75rem',
              borderRadius: '4px',
              background: active ? 'var(--tag-bg)' : 'transparent',
              transition: 'all 0.15s ease',
              letterSpacing: '0.02em',
            }}>
              {item.label}
            </Link>
          );
        })}
      </div>

      <div style={{ flex: 1 }} />

      {/* Search */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search..."
          style={{
            width: focused ? '220px' : '140px',
            padding: '0.4rem 0.75rem',
            fontSize: '0.8rem',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            background: 'var(--bg-card)',
            color: 'var(--ink)',
            outline: 'none',
            transition: 'width 0.2s ease',
          }}
        />
        {focused && query && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 8px)', right: 0,
            width: '300px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}>
            {results.length === 0 ? (
              <div style={{ padding: '1rem', fontSize: '0.8rem', color: 'var(--ink-faint)' }}>
                No results for "{query}"
              </div>
            ) : results.map(r => (
              <button
                key={r.id}
                onClick={() => { navigate(`/projects/${r.id}`); setQuery(''); }}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '0.75rem 1rem',
                  borderBottom: '1px solid var(--border)',
                  background: 'transparent',
                  transition: 'background 0.1s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--tag-bg)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '3px', flexWrap: 'wrap' }}>
                  {r.typeTags.map(t => (
                    <span key={t} style={{ fontSize: '0.68rem', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t}</span>
                  ))}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--ink)' }}>{r.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--ink-light)', marginTop: '2px' }}>{r.subtitle}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
