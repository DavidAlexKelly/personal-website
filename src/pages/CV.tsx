import { cv } from '../data/cv';

// ── Section header ────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{
      marginBottom: '1.25rem',
      paddingBottom: '0.4rem',
      borderBottom: '1px solid var(--border)',
    }}>
      <span style={{
        fontSize: '0.68rem',
        color: 'var(--ink-faint)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontFamily: 'var(--font-body)',
      }}>
        {children}
      </span>
    </div>
  );
}

// ── Experience block ──────────────────────────────────────────────────────

function ExperienceBlock({
  company,
  role,
  period,
  bullets,
}: {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '0.2rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          color: 'var(--ink)',
        }}>
          {company}
        </span>
        <span style={{
          fontSize: '0.78rem',
          color: 'var(--ink-faint)',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          fontStyle: 'italic',
        }}>
          {period}
        </span>
      </div>
      <p style={{
        fontSize: '0.82rem',
        color: 'var(--ink-light)',
        marginBottom: '0.85rem',
        fontStyle: 'italic',
        fontFamily: 'var(--font-display)',
      }}>
        {role}
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{
            display: 'flex',
            gap: '0.65rem',
            marginBottom: '0.55rem',
            fontSize: '0.88rem',
            color: 'var(--ink-light)',
            lineHeight: 1.65,
            fontWeight: 300,
          }}>
            <span style={{ color: 'var(--ink-faint)', flexShrink: 0, marginTop: '0.05em' }}>—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── CV page ───────────────────────────────────────────────────────────────

export function CV() {
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
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
              fontSize: '0.88rem',
              color: 'var(--ink-light)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
            }}>
              {cv.title}
            </p>
          </div>
          <div style={{ textAlign: 'right', paddingTop: '0.2rem' }}>
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

      {/* Experience */}
      <div style={{ marginBottom: '3rem' }}>
        <SectionLabel>Experience</SectionLabel>
        {cv.experience.map((job, i) => (
          <ExperienceBlock key={i} {...job} />
        ))}
      </div>

      {/* Education */}
      <div style={{ marginBottom: '3rem' }}>
        <SectionLabel>Education</SectionLabel>
        {cv.education.map((edu, i) => (
          <ExperienceBlock
            key={i}
            company={edu.institution}
            role={edu.degree}
            period={edu.period}
            bullets={edu.bullets}
          />
        ))}
      </div>

      {/* Skills */}
      <div style={{ marginBottom: '3rem' }}>
        <SectionLabel>Skills</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {cv.skills.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', fontSize: '0.88rem' }}>
              <span style={{
                color: 'var(--ink)',
                fontWeight: 400,
                minWidth: '130px',
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

      {/* Download link */}
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