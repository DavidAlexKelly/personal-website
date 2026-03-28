import { Link } from 'react-router-dom';

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        fontSize: '0.8rem', color: 'var(--ink-faint)',
        marginBottom: '2rem',
        transition: 'color 0.15s',
        textDecoration: 'none',
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
    <div style={{ maxWidth: '600px' }}>
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
