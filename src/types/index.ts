export type Category = 'ideas' | 'built' | 'writing' | 'about';

export interface Tag {
  label: string;
}

export interface Idea {
  id: string;
  title: string;
  subtitle: string;
  body: string;         // supports markdown-style line breaks with \n
  date: string;         // e.g. "March 2026"
  tags: string[];
  status?: 'concept' | 'in progress' | 'built' | 'published';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  date: string;
  tags: string[];
  url?: string;
  status?: 'live' | 'archived' | 'in progress';
}

export interface Essay {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  date: string;
  tags: string[];
  readTime?: string;    // e.g. "6 min read"
}

export interface NavItem {
  label: string;
  path: string;
  category: Category;
}
