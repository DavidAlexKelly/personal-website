import { useMemo } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types';

export function useSearch(query: string): Project[] {
  return useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return projects.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.body.toLowerCase().includes(q) ||
      p.typeTags.some(t => t.toLowerCase().includes(q)) ||
      p.topicTags.some(t => t.toLowerCase().includes(q))
    );
  }, [query]);
}
