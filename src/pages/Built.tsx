import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Card, PageHeader, BackLink, BodyText, Tag, StatusBadge } from '../components/UI';

export function BuiltList() {
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
      <PageHeader
        title="Built"
        description="Things I've made, shipped, or put into the world."
        count={projects.length}
      />
      {projects.map(p => (
        <Card
          key={p.id}
          to={`/built/${p.id}`}
          title={p.title}
          subtitle={p.subtitle}
          date={p.date}
          tags={p.tags}
          status={p.status}
        />
      ))}
    </div>
  );
}

export function BuiltDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem', textAlign: 'center' }}>
      <p style={{ color: 'var(--ink-faint)' }}>Not found.</p>
    </div>
  );

  // ── Embedded project view ──────────────────────────────────────────────
  // If the project has an embedPath, render it in an iframe with your nav
  // pinned above. The iframe src points to the sub-app's built output which
  // Vite serves from /public/projects/<id>/
  if (project.embedPath) {
    return (
      <div style={{
        position: 'fixed',
        top: 'var(--nav-h)',
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Context bar */}
        <div style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          padding: '0 1.5rem',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexShrink: 0,
        }}>
          <BackLink to="/built" label="Built" />
          <span style={{
            fontSize: '0.78rem',
            color: 'var(--ink-light)',
            fontFamily: 'var(--font-display)',
          }}>
            {project.title}
          </span>
          <div style={{ flex: 1 }} />
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.75rem',
                color: 'var(--ink-faint)',
                borderBottom: '1px solid transparent',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderBottomColor = 'var(--ink)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-faint)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
            >
              GitHub ↗
            </a>
          )}
          <a
            href={project.embedPath}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.75rem',
              color: 'var(--ink-faint)',
              borderBottom: '1px solid transparent',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderBottomColor = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-faint)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
          >
            Full screen ↗
          </a>
        </div>

        {/* The project iframe — fills remaining space */}
        <iframe
          src={project.embedPath}
          title={project.title}
          style={{
            flex: 1,
            border: 'none',
            display: 'block',
            width: '100%',
          }}
        />
      </div>
    );
  }

  // ── Standard detail page ───────────────────────────────────────────────
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
      <BackLink to="/built" label="Built" />

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {project.status && <StatusBadge status={project.status} />}
          <span style={{ fontSize: '0.8rem', color: 'var(--ink-faint)' }}>{project.date}</span>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: '0.75rem',
        }}>
          {project.title}
        </h1>
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--ink-light)',
          fontStyle: 'italic',
          fontFamily: 'var(--font-display)',
          marginBottom: '1.25rem',
        }}>
          {project.subtitle}
        </p>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {project.tags.map(t => <Tag key={t} label={t} />)}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{ marginLeft: '0.5rem', fontSize: '0.8rem', color: 'var(--ink)', borderBottom: '1px solid var(--border)', paddingBottom: '1px', transition: 'border-color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
              GitHub ↗
            </a>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              style={{ marginLeft: '0.25rem', fontSize: '0.8rem', color: 'var(--ink)', borderBottom: '1px solid var(--border)', paddingBottom: '1px', transition: 'border-color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
              Visit ↗
            </a>
          )}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <BodyText text={project.body} />
      </div>
    </div>
  );
}
