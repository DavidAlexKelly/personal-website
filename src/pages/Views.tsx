import { viewGroups } from '../data/views';

export function Views() {
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>

      {/* Page header */}
      <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: '0.5rem',
        }}>
          Personal Views
        </h1>
        <p style={{
          fontSize: '1rem',
          color: 'var(--ink-light)',
          fontStyle: 'italic',
          fontFamily: 'var(--font-display)',
          maxWidth: '480px',
          lineHeight: 1.6,
        }}>
          Opinions, not policies. Held with conviction but open to revision.
        </p>
      </div>

      {/* Groups */}
      {viewGroups.map((group, i) => (
        <div key={i} style={{ marginBottom: '3rem' }}>

          {/* Section label */}
          <div style={{
            marginBottom: '1.25rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid var(--ink-light)',
          }}>
            <span style={{
              fontSize: '0.72rem',
              color: 'var(--ink)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
            }}>
              {group.title}
            </span>
          </div>

          {/* Optional intro */}
          {group.intro && (
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--ink-faint)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
              marginBottom: '1rem',
              lineHeight: 1.6,
            }}>
              {group.intro}
            </p>
          )}

          {/* View items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {group.views.map((view, j) => (
              <div key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{
                  color: 'var(--ink-faint)',
                  flexShrink: 0,
                  fontSize: '0.78rem',
                  marginTop: '0.3em',
                  userSelect: 'none',
                }}>
                  —
                </span>
                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--ink-light)',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  margin: 0,
                }}>
                  {view.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}