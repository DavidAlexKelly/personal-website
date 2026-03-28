import type { Project } from '../types';

// ─────────────────────────────────────────────
//  ADD NEW PROJECTS HERE
//  url is optional — remove if no live link.
// ─────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'davidzarragakelly',
    title: 'davidzarragakelly.com',
    subtitle: 'This website — a personal index of ideas, projects and writing',
    date: 'March 2026',
    status: 'live',
    tags: ['react', 'typescript', 'vercel'],
    url: 'https://davidzarragakelly.com',
    body: `Built with React and TypeScript, deployed on Vercel. Designed to be a modular, easy-to-update personal site where new ideas, projects and essays can be added by editing a data file.

The architecture is deliberately simple: all content lives in typed data files, all pages are generated from those files, and adding new content requires nothing more than adding a new object to the relevant array.`,
  },
];
