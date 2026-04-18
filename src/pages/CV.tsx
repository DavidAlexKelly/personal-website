import { cv } from '../data/cv';

// ── Print styles injected once into <head> ────────────────────────────────

const PRINT_STYLES = `
@media print {
  /* Hide everything except the CV content */
  body > * { display: none !important; }
  #cv-print-root { display: block !important; }

  /* Reset page */
  @page {
    margin: 15mm 16mm;
    size: A4;
  }

  #cv-print-root {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 10pt;
    color: #1a1a1a;
    background: #ffffff;
  }

  /* Hide the download button itself when printing */
  #cv-download-btn { display: none !important; }

  /* Section dividers */
  .cv-section-label {
    border-bottom: 1.5pt solid #6b6b6b !important;
    margin-bottom: 8pt !important;
    padding-bottom: 3pt !important;
  }

  /* Project blocks */
  .cv-project-block {
    border-left: 1.5pt solid #e8e8e4 !important;
    padding-left: 8pt !important;
    margin-bottom: 8pt !important;
  }

  /* Avoid page breaks inside blocks */
  .cv-job-block, .cv-project-block, .cv-edu-block {
    page-break-inside: avoid;
  }

  /* Ensure colours print */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
`;

function injectPrintStyles() {
  if (document.getElementById('cv-print-styles')) return;
  const style = document.createElement('style');
  style.id = 'cv-print-styles';
  style.textContent = PRINT_STYLES;
  document.head.appendChild(style);
}

function handleDownload() {
  injectPrintStyles();
  // Give the browser a tick to apply styles before opening print dialog
  requestAnimationFrame(() => {
    window.print();
  });
}

// ── Section label ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      className="cv-section-label"
      style={{
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        borderBottom: '2px solid var(--ink-light)',
      }}
    >
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
    <div
      className="cv-project-block"
      style={{
        marginBottom: '1.6rem',
        paddingLeft: '1rem',
        borderLeft: '2px solid var(--border)',
      }}
    >
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
    <div id="cv-print-root" style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>

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
          <div key={i} className="cv-job-block" style={{ marginBottom: '3rem' }}>
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
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--ink-light)',
              marginBottom: '1.25rem',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
            }}>
              {job.role}
            </p>
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
          <div key={i} className="cv-edu-block" style={{ marginBottom: '2rem' }}>
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
        <button
          id="cv-download-btn"
          onClick={handleDownload}
          style={{
            fontSize: '0.78rem',
            color: 'var(--ink-faint)',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.15s',
            fontFamily: 'var(--font-body)',
          } as React.CSSProperties}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--ink)';
            e.currentTarget.style.borderBottomColor = 'var(--ink)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--ink-faint)';
            e.currentTarget.style.borderBottomColor = 'var(--border)';
          }}
        >
          Download PDF ↓
        </button>
      </div>
    </div>
  );
}