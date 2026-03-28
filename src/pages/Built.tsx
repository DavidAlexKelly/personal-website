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

  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
      <BackLink to="/built" label="Built" />

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {project.status && <StatusBadge status={project.status} />}
          <span style={{ fontSize: '0.8rem', color: 'var(--ink-faint)' }}>{project.date}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: '0.75rem' }}>
          {project.title}
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--ink-light)', fontStyle: 'italic', fontFamily: 'var(--font-display)', marginBottom: '1.25rem' }}>
          {project.subtitle}
        </p>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {project.tags.map(t => <Tag key={t} label={t} />)}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--ink)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '1px',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
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
