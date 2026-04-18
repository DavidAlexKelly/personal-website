import type { Project } from '../types';

// ─────────────────────────────────────────────
//  ADD NEW PROJECTS HERE
//  typeTags  → what kind of thing it is
//  topicTags → what it's about
// ─────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: '48-hours-to-midnight',
    title: '48 Hours to Midnight',
    subtitle: 'A campaign to mandate human verification on UK social media',
    date: 'December 2025',
    typeTags: ['built', 'campaign'],
    topicTags: ['democracy', 'online safety', 'politics', 'technology'],
    githubUrl: 'https://github.com/DavidAlexKelly/48-hours-to-midnight',
    embedPath: '/projects/48-hours-to-midnight/',
    body: `Up to 40% of accounts on UK social media are not human. They are bots — run by foreign governments, predator networks, AI companies, and scammers. In the 2024 UK election, just 10 bot accounts posted over 60,000 times and reached an estimated 150 million views. The Online Safety Act did not address this.

48 Hours to Midnight was a campaign built around a single, actionable proposal: mandate that all social media accounts posting public content must complete a simple human verification check every 48 hours. Ten seconds with a CAPTCHA, repeated every two days — computationally impossible for bot farms, trivially easy for any real person.

The site identified three fronts where bots cause measurable harm: child safety, democratic integrity, and the erosion of human culture online. It provided a full evidence base, a template letter for contacting MPs, direct links to key ministers and parliamentary committees, and a campaign signup.

Built in React and TypeScript.`,
  },
  {
    id: 'great-british-feast-week',
    title: 'The Great British Feast Week',
    subtitle: 'A secular national celebration built around independent hospitality',
    date: 'March 2026',
    typeTags: ['concept', 'policy'],
    topicTags: ['economics', 'culture', 'hospitality', 'community'],
    body: `An annual national event in which the government subsidises 50% of food at participating independent restaurants for one week each year — designed not as an economic emergency measure, but as a permanent fixture of British life.

The week is randomly drawn on January 5th from a pool of eligible dates between 21st April and 21st July, excluding school half terms. This removes political discretion over timing entirely and creates a genuine annual moment of national anticipation.

Businesses register in January and submit a locked scheme menu — a specific offering designed for the event week with prices that cannot change. These menus are published on a dedicated platform, greatbritishtable.co.uk, which becomes both a compliance tool and a year-round directory of independent UK restaurants.

Only independent businesses qualify. No chains. The money stays local, multipliers are higher, and the businesses that need it most benefit. The broader ambition is cultural: Britain has no secular, non-commercialised national event organised around food and community. This fills that gap deliberately.`,
  },
];
