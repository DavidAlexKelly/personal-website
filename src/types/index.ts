export type Category = 'ideas' | 'built' | 'writing' | 'about';

export interface Tag {
  label: string;
}

export interface Idea {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  date: string;
  tags: string[];
  status?: 'concept' | 'in progress' | 'built' | 'published';
  githubUrl?: string;
  liveUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  date: string;
  tags: string[];
  url?: string;
  githubUrl?: string;
  // embedPath: serves the project from /public/projects/<id>/
  // Set this for projects in the /projects folder.
  // For external live sites, use url instead.
  embedPath?: string;
  status?: 'live' | 'archived' | 'in progress';
}

export interface Essay {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  date: string;
  tags: string[];
  readTime?: string;
}

export interface NavItem {
  label: string;
  path: string;
  category: Category;
}
