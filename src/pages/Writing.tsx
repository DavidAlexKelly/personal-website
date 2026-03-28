import { useParams } from 'react-router-dom';
import { essays } from '../data/essays';
import { Card, PageHeader, BackLink, BodyText, Tag } from '../components/UI';

export function WritingList() {
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
      <PageHeader
        title="Writing"
        description="Essays and longer thoughts."
        count={essays.length}
      />
      {essays.map(e => (
        <Card
          key={e.id}
          to={`/writing/${e.id}`}
          title={e.title}
          subtitle={e.subtitle}
          date={e.date}
          tags={e.tags}
          meta={e.readTime}
        />
      ))}
    </div>
  );
}

export function EssayDetail() {
  const { id } = useParams();
  const essay = essays.find(e => e.id === id);

  if (!essay) return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem', textAlign: 'center' }}>
      <p style={{ color: 'var(--ink-faint)' }}>Not found.</p>
    </div>
  );

  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
      <BackLink to="/writing" label="Writing" />

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--ink-faint)' }}>{essay.date}</span>
          {essay.readTime && <span style={{ fontSize: '0.8rem', color: 'var(--ink-faint)' }}>· {essay.readTime}</span>}
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: '0.75rem' }}>
          {essay.title}
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--ink-light)', fontStyle: 'italic', fontFamily: 'var(--font-display)', marginBottom: '1.25rem' }}>
          {essay.subtitle}
        </p>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {essay.tags.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <BodyText text={essay.body} />
      </div>
    </div>
  );
}
