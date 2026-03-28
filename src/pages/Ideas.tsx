import { useParams } from 'react-router-dom';
import { ideas } from '../data/ideas';
import { Card, PageHeader, BackLink, BodyText, Tag, StatusBadge } from '../components/UI';

export function IdeasList() {
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
      <PageHeader
        title="Ideas"
        description="Concepts, proposals, and things I think could work better."
        count={ideas.length}
      />
      {ideas.map(idea => (
        <Card
          key={idea.id}
          to={`/ideas/${idea.id}`}
          title={idea.title}
          subtitle={idea.subtitle}
          date={idea.date}
          tags={idea.tags}
          status={idea.status}
        />
      ))}
    </div>
  );
}

export function IdeaDetail() {
  const { id } = useParams();
  const idea = ideas.find(i => i.id === id);

  if (!idea) return <NotFound />;

  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
      <BackLink to="/ideas" label="Ideas" />

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {idea.status && <StatusBadge status={idea.status} />}
          <span style={{ fontSize: '0.8rem', color: 'var(--ink-faint)' }}>{idea.date}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 400, lineHeight: 1.2, marginBottom: '0.75rem' }}>
          {idea.title}
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--ink-light)', fontStyle: 'italic', fontFamily: 'var(--font-display)', marginBottom: '1.25rem' }}>
          {idea.subtitle}
        </p>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {idea.tags.map(t => <Tag key={t} label={t} />)}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <BodyText text={idea.body} />
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '6rem 2rem', textAlign: 'center' }}>
      <p style={{ color: 'var(--ink-faint)' }}>Not found.</p>
    </div>
  );
}
