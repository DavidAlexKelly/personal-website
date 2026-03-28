import { Link } from 'react-router-dom';

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.2rem 0.6rem',
      fontSize: '0.72rem',
      background: 'var(--tag-bg)',
      color: 'var(--ink-light)',
      borderRadius: '3px',
      letterSpacing: '0.03em',
      fontWeight: 400,
    }}>
      {label}
    </span>
  );
}

interface CardProps {
  to: string;
  title: string;
  subtitle: string;
  date?: string;
  tags?: string[];
  meta?: string;
  status?: string;
}

export function Card({ to, title, subtitle, date, tags, meta, status }: CardProps) {
  return (
    <Link to={to} style={{ display: 'block', textDecoration: 'none' }}>
      <div
        style={{
          padding: '1.5rem 0',
          borderBottom: '1px solid var(--border)',
          transition: 'opacity 0.15s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.4rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontWeight: 400,
            color: 'var(--ink)',
            lineHeight: 1.3,
          }}>
            {title}
          </h2>
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-faint)', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {date}
          </span>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--ink-light)', marginBottom: tags?.length ? '0.75rem' : 0, lineHeight: 1.5 }}>
          {subtitle}
        </p>
        {tags && tags.length > 0 && (
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {tags.map(t => <Tag key={t} label={t} />)}
            {meta && <span style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', marginLeft: '0.25rem' }}>{meta}</span>}
            {status && <StatusBadge status={status} />}
          </div>
        )}
      </div>
    </Link>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    concept: '#d4a017',
    'in progress': '#2563eb',
    built: '#16a34a',
    published: '#16a34a',
    live: '#16a34a',
    archived: '#9ca3af',
  };
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.2rem 0.6rem',
      fontSize: '0.7rem',
      color: colors[status] || 'var(--ink-faint)',
      background: `${colors[status] || '#aaa'}18`,
      borderRadius: '3px',
      letterSpacing: '0.04em',
      fontWeight: 500,
      textTransform: 'uppercase',
    }}>
      {status}
    </span>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  count?: number;
}

export function PageHeader({ title, description, count }: PageHeaderProps) {
  return (
    <div style={{ marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: description ? '0.5rem' : 0 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400 }}>
          {title}
        </h1>
        {count !== undefined && (
          <span style={{ fontSize: '0.85rem', color: 'var(--ink-faint)' }}>{count}</span>
        )}
      </div>
      {description && (
        <p style={{ fontSize: '0.9rem', color: 'var(--ink-light)', maxWidth: '520px' }}>{description}</p>
      )}
    </div>
  );
}

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      fontSize: '0.8rem', color: 'var(--ink-faint)',
      marginBottom: '2rem',
      transition: 'color 0.15s',
    }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-faint)')}
    >
      ← {label}
    </Link>
  );
}

export function BodyText({ text }: { text: string }) {
  return (
    <div style={{ maxWidth: '620px' }}>
      {text.split('\n\n').map((para, i) => (
        <p key={i} style={{
          fontSize: '1rem',
          lineHeight: 1.8,
          color: 'var(--ink)',
          marginBottom: '1.25rem',
          fontWeight: 300,
        }}>
          {para}
        </p>
      ))}
    </div>
  );
}
