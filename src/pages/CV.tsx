import { cv } from '../data/cv';

// ── Section label ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{
      marginBottom: '1.5rem',
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
        {children}
      </span>
    </div>
  );
}

// ── Project sub-section (Decho) ───────────────────────────────────────────

function ProjectBlock({
  title,
  client,
  bullets,
}: {
  title: string;
  client: string | null;
  bullets: string[];
}) {
  return (
    <div style={{
      marginBottom: '1.6rem',
      paddingLeft: '1rem',
      borderLeft: '2px solid var(--border)',
    }}>
      <p style={{
        fontSize: '0.85rem',
        fontWeight: 500,
        color: 'var(--ink)',
        marginBottom: client ? '0.15rem' : '0.55rem',
      }}>
        {title}
      </p>
      {client && (
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--ink-faint)',
          marginBottom: '0.55rem',
          fontStyle: 'italic',
        }}>
          {client}
        </p>
      )}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{
            display: 'flex',
            gap: '0.6rem',
            marginBottom: '0.4rem',
            lineHeight: 1.65,
          }}>
            <span style={{ color: 'var(--ink-faint)', flexShrink: 0, fontSize: '0.78rem', marginTop: '0.15em' }}>—</span>
            <span style={{ fontSize: '0.86rem', color: 'var(--ink-light)', fontWeight: 300 }}>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Standard bullet list ──────────────────────────────────────────────────

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {bullets.map((b, i) => (
        <li key={i} style={{
          display: 'flex',
          gap: '0.65rem',
          marginBottom: '0.5rem',
          lineHeight: 1.65,
        }}>
          <span style={{ color: 'var(--ink-faint)', flexShrink: 0, fontSize: '0.78rem', marginTop: '0.15em' }}>—</span>
          <span style={{ fontSize: '0.88rem', color: 'var(--ink-light)', fontWeight: 300 }}>{b}</span>
        </li>
      ))}
    </ul>
  );
}

// ── CV page ───────────────────────────────────────────────────────────────

export function CV() {
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '0.35rem',
            }}>
              {cv.name}
            </h1>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--ink-light)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
            }}>
              {cv.title}
            </p>
          </div>
          <div style={{ textAlign: 'right', paddingTop: '0.25rem' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--ink-light)', marginBottom: '0.2rem' }}>
              {cv.contact.phone}
            </p>
            <a
              href={`mailto:${cv.contact.email}`}
              style={{
                fontSize: '0.82rem',
                color: 'var(--ink-light)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '1px',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              {cv.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div style={{ marginBottom: '3rem' }}>
        <SectionLabel>Professional Summary</SectionLabel>
        <p style={{
          fontSize: '0.92rem',
          color: 'var(--ink-light)',
          lineHeight: 1.8,
          fontWeight: 300,
          maxWidth: '640px',
        }}>
          {cv.summary}
        </p>
      </div>

      {/* Experience */}
      <div style={{ marginBottom: '3rem' }}>
        <SectionLabel>Experience</SectionLabel>

        {cv.experience.map((job, i) => (
          <div key={i} style={{ marginBottom: '3rem' }}>
            {/* Company name + period */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '0.2rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 500,
                color: 'var(--ink)',
              }}>
                {job.company}
              </span>
              <span style={{
                fontSize: '0.78rem',
                color: 'var(--ink-faint)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                fontStyle: 'italic',
              }}>
                {job.period}
              </span>
            </div>

            {/* Role */}
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--ink-light)',
              marginBottom: '1.25rem',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
            }}>
              {job.role}
            </p>

            {/* Projects or flat bullets */}
            {job.projects
              ? job.projects.map((proj, j) => (
                  <ProjectBlock key={j} title={proj.title} client={proj.client} bullets={proj.bullets} />
                ))
              : job.bullets && <BulletList bullets={job.bullets as string[]} />
            }
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginBottom: '3rem' }}>
        <SectionLabel>Education</SectionLabel>

        {cv.education.map((edu, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '0.2rem',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 500,
                color: 'var(--ink)',
              }}>
                {edu.institution}
              </span>
              <span style={{
                fontSize: '0.78rem',
                color: 'var(--ink-faint)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                fontStyle: 'italic',
              }}>
                {edu.period}
              </span>
            </div>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--ink-light)',
              marginBottom: '0.9rem',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
            }}>
              {edu.degree}
              {edu.classification && (
                <span style={{ color: 'var(--ink)', fontWeight: 500, fontStyle: 'normal' }}>
                  {' '}— {edu.classification}
                </span>
              )}
            </p>
            <BulletList bullets={edu.bullets} />
          </div>
        ))}
      </div>

      {/* Skills */}
      <div style={{ marginBottom: '3rem' }}>
        <SectionLabel>Skills</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {cv.skills.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', fontSize: '0.88rem', lineHeight: 1.5 }}>
              <span style={{
                color: 'var(--ink)',
                fontWeight: 500,
                minWidth: '140px',
                flexShrink: 0,
              }}>
                {s.label}
              </span>
              <span style={{ color: 'var(--ink-light)', fontWeight: 300 }}>
                {s.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Download */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <a
          href="/David_Kelly_CV.pdf"
          download
          style={{
            fontSize: '0.78rem',
            color: 'var(--ink-faint)',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1px',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-faint)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
        >
          Download PDF ↓
        </a>
      </div>
    </div>
  );
}