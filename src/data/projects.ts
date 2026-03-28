import type { Project } from '../types';

// ─────────────────────────────────────────────
//  ADD NEW PROJECTS HERE
//
//  For projects in the /projects folder (rendered inside your site):
//    embedPath: '/projects/your-project-id/'
//    githubUrl: 'https://github.com/...'
//
//  For external live sites (opens in new tab from Built list):
//    url: 'https://yoursite.com'
//
//  To add a new embedded project:
//    1. Add its source to /projects/your-project-id/
//    2. Give it a vite.config.ts with base + outDir pointing to ../../public/projects/your-project-id
//    3. Add it here with embedPath set
//    4. Run `npm run build:projects` from the root
// ─────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: '48-hours-to-midnight',
    title: '48 Hours to Midnight',
    subtitle: 'A campaign website for mandatory human verification on UK social media',
    date: '2024',
    status: 'archived',
    tags: ['react', 'typescript', 'campaign', 'politics'],
    githubUrl: 'https://github.com/DavidAlexKelly/48-hours-to-midnight',
    embedPath: '/projects/48-hours-to-midnight/',
    body: `A full campaign website built in React and TypeScript, designed to mobilise public support for legislation mandating human verification on UK social media platforms.

The site made the case across three fronts — child safety, democratic integrity, and the erosion of human culture online — with a full evidence base drawn from NSPCC, Global Witness, Carnegie Mellon, and UC San Diego research. Every claim was sourced and linked.

Beyond the argument, the site was a direct action tool: a template MP letter, direct contact details for ministers and parliamentary committee chairs, and a campaign signup. The goal was to take someone from uninformed to having written to their MP in under ten minutes.

Built with React and TypeScript, migrated from Create React App to Vite.`,
  },
  {
    id: 'davidzarragakelly',
    title: 'davidzarragakelly.com',
    subtitle: 'This site — a personal index of ideas, projects and writing',
    date: 'March 2026',
    status: 'live',
    tags: ['react', 'typescript', 'vercel'],
    url: 'https://davidzarragakelly.com',
    body: `Built with React and TypeScript, deployed on Vercel. Designed to be a modular, easy-to-update personal site where new ideas, projects and essays can be added by editing a data file.

The architecture is deliberately simple: all content lives in typed data files, all pages are generated from those files, and adding new content requires nothing more than adding a new object to the relevant array.`,
  },
];
