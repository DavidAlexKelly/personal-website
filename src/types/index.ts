export type Category = 'projects' | 'about';

// ─────────────────────────────────────────────
//  TAG SYSTEM
//
//  type     → what kind of thing it is (built, concept, writing, campaign)
//  topic    → what it's about (policy, economics, tech, culture, democracy)
//
//  Add new tags freely — they auto-appear in the filter UI.
// ─────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  date: string;

  // type tags — shown as primary badges
  typeTags: string[];    // e.g. ['built', 'campaign'] or ['concept', 'writing']

  // topic tags — shown smaller, used for filtering
  topicTags: string[];   // e.g. ['policy', 'democracy', 'online safety']

  // links
  githubUrl?: string;
  liveUrl?: string;
  embedPath?: string;    // renders project in iframe within your site
}

export interface NavItem {
  label: string;
  path: string;
}
