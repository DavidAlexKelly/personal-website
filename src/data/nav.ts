import type { NavItem } from '../types';

// ─────────────────────────────────────────────
//  ADD / REMOVE NAV TABS HERE
//  Order matters — left to right in the nav.
// ─────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'Ideas',    path: '/ideas',   category: 'ideas'   },
  { label: 'Built',    path: '/built',   category: 'built'   },
  { label: 'Writing',  path: '/writing', category: 'writing' },
  { label: 'About',    path: '/about',   category: 'about'   },
];
