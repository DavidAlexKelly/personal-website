import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { BackLink, BodyText } from '../components/UI';

// ── Helpers ───────────────────────────────────────────────────────────────

function getAllTags(type: 'typeTags' | 'topicTags') {
  const all = projects.flatMap(p => p[type]);
  return Array.from(new Set(all)).sort();
}

// ── Tag pill ──────────────────────────────────────────────────────────────

function TagPill({
  label,
  active,
  onClick,
  variant = 'topic',
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  variant?: 'type' | 'topic';
}) {
  const isType = variant === 'type';
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-block',
        padding: isType ? '0.22rem 0.6rem' : '0.18rem 0.55rem',
        fontSize: isType ? '0.72rem' : '0.68rem',
        fontWeight: active ? '500' : '300',
        letterSpacing: isType ? '0.06em' : '0.04em',
        textTransform: isType ? 'uppercase' : 'none',
        border: '1px solid',
        borderColor: active ? 'var(--ink)' : 'var(--border)',
        borderRadius: '3px',
        background: active ? 'var(--ink)' : 'transparent',
        color: active ? 'var(--bg)' : isType ? 'var(--ink-light)' : 'var(--ink-faint)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.15s ease',
        lineHeight: 1.4,
      }}
      onMouseEnter={e => {
        if (!active && onClick) {
          e.currentTarget.style.borderColor = 'var(--ink-light)';
          e.currentTarget.style.color = 'var(--ink-light)';
        }
      }}
      onMouseLeave={e => {
        if (!active && onClick) {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.color = isType ? 'var(--ink-light)' : 'var(--ink-faint)';
        }
      }}
    >
      {label}
    </button>
  );
}

// ── Project card ──────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <Link to={`/projects/${project.id}`} style={{ display: 'block', textDecoration: 'none' }}>
      <div
        style={{
          padding: '1.75rem 0',
          borderBottom: '1px solid var(--border)',
          transition: 'opacity 0.15s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '0.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontWeight: 400,
            color: 'var(--ink)',
            lineHeight: 1.2,
          }}>
            {project.title}
          </h2>
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-faint)', whiteSpace: 'nowrap', flexShrink: 0, marginTop: '0.2rem' }}>
            {project.date}
          </span>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--ink-light)', marginBottom: '0.9rem', lineHeight: 1.5 }}>
          {project.subtitle}
        </p>

        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {project.typeTags.map(t => (
            <TagPill key={t} label={t} variant="type" />
          ))}
          <span style={{ width: '4px' }} />
          {project.topicTags.map(t => (
            <TagPill key={t} label={t} variant="topic" />
          ))}
        </div>
      </div>
    </Link>
  );
}

// ── Projects list page ────────────────────────────────────────────────────

export function ProjectsList() {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const allTypes = getAllTags('typeTags');
  const allTopics = getAllTags('topicTags');

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const typeOk = !activeType || p.typeTags.includes(activeType);
      const topicOk = !activeTopic || p.topicTags.includes(activeTopic);
      return typeOk && topicOk;
    });
  }, [activeType, activeTopic]);

  const hasFilter = activeType || activeTopic;

  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          fontWeight: 400,
          marginBottom: '0.4rem',
        }}>
          Projects
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--ink-light)' }}>
          Things built, written, and thought through.
        </p>
      </div>

      {/* Filter bar */}
      <div style={{
        marginBottom: '2rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Type filters */}
        <div style={{ marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.68rem', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '0.75rem' }}>
            Type
          </span>
          <div style={{ display: 'inline-flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {allTypes.map(t => (
              <TagPill
                key={t}
                label={t}
                variant="type"
                active={activeType === t}
                onClick={() => setActiveType(activeType === t ? null : t)}
              />
            ))}
          </div>
        </div>

        {/* Topic filters */}
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.68rem', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '0.35rem' }}>
            Topic
          </span>
          {allTopics.map(t => (
            <TagPill
              key={t}
              label={t}
              variant="topic"
              active={activeTopic === t}
              onClick={() => setActiveTopic(activeTopic === t ? null : t)}
            />
          ))}
          {hasFilter && (
            <button
              onClick={() => { setActiveType(null); setActiveTopic(null); }}
              style={{
                marginLeft: '0.5rem',
                fontSize: '0.72rem',
                color: 'var(--ink-faint)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.18rem 0',
                borderBottom: '1px solid var(--border)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-faint)')}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Count */}
      <div style={{ marginBottom: '0.25rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--ink-faint)' }}>
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          {hasFilter ? ' matching' : ''}
        </span>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div style={{ padding: '3rem 0', color: 'var(--ink-faint)', fontSize: '0.9rem' }}>
          No projects match those filters.
        </div>
      ) : (
        filtered.map(p => <ProjectCard key={p.id} project={p} />)
      )}
    </div>
  );
}

// ── Project detail page ───────────────────────────────────────────────────

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem', textAlign: 'center' }}>
      <p style={{ color: 'var(--ink-faint)' }}>Not found.</p>
    </div>
  );

  // ── Embedded view ──────────────────────────────────────────────────────
  if (project.embedPath) {
    return (
      <div style={{
        position: 'fixed',
        top: 'var(--nav-h)',
        left: 0, right: 0, bottom: 0,
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
          <BackLink to="/projects" label="Projects" />
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-light)', fontFamily: 'var(--font-display)' }}>
            {project.title}
          </span>
          <div style={{ flex: 1 }} />
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', borderBottom: '1px solid transparent', transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderBottomColor = 'var(--ink)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-faint)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}>
              GitHub ↗
            </a>
          )}
          <a href={project.embedPath} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', borderBottom: '1px solid transparent', transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderBottomColor = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-faint)'; e.currentTarget.style.borderBottomColor = 'transparent'; }}>
            Full screen ↗
          </a>
        </div>
        <iframe
          src={project.embedPath}
          title={project.title}
          style={{ flex: 1, border: 'none', display: 'block', width: '100%' }}
        />
      </div>
    );
  }

  // ── Standard detail view ───────────────────────────────────────────────
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
      <BackLink to="/projects" label="Projects" />

      <div style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--ink-faint)', display: 'block', marginBottom: '0.75rem' }}>
          {project.date}
        </span>
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
          lineHeight: 1.5,
        }}>
          {project.subtitle}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
          {project.typeTags.map(t => <TagPill key={t} label={t} variant="type" />)}
          <span style={{ width: '4px' }} />
          {project.topicTags.map(t => <TagPill key={t} label={t} variant="topic" />)}
        </div>

        {/* External links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.82rem', color: 'var(--ink)', borderBottom: '1px solid var(--border)', paddingBottom: '1px', transition: 'border-color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
              GitHub ↗
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.82rem', color: 'var(--ink)', borderBottom: '1px solid var(--border)', paddingBottom: '1px', transition: 'border-color 0.15s' }}
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
