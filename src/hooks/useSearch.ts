import { useMemo } from 'react';
import { ideas } from '../data/ideas';
import { projects } from '../data/projects';
import { essays } from '../data/essays';

export type SearchResult = {
  id: string;
  title: string;
  subtitle: string;
  type: 'idea' | 'project' | 'essay';
  path: string;
  tags: string[];
};

export function useSearch(query: string): SearchResult[] {
  return useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matches: SearchResult[] = [];

    ideas.forEach(i => {
      if (
        i.title.toLowerCase().includes(q) ||
        i.subtitle.toLowerCase().includes(q) ||
        i.body.toLowerCase().includes(q) ||
        i.tags.some(t => t.toLowerCase().includes(q))
      ) {
        matches.push({ id: i.id, title: i.title, subtitle: i.subtitle, type: 'idea', path: `/ideas/${i.id}`, tags: i.tags });
      }
    });

    projects.forEach(p => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      ) {
        matches.push({ id: p.id, title: p.title, subtitle: p.subtitle, type: 'project', path: `/built/${p.id}`, tags: p.tags });
      }
    });

    essays.forEach(e => {
      if (
        e.title.toLowerCase().includes(q) ||
        e.subtitle.toLowerCase().includes(q) ||
        e.body.toLowerCase().includes(q) ||
        e.tags.some(t => t.toLowerCase().includes(q))
      ) {
        matches.push({ id: e.id, title: e.title, subtitle: e.subtitle, type: 'essay', path: `/writing/${e.id}`, tags: e.tags });
      }
    });

    return matches;
  }, [query]);
}
