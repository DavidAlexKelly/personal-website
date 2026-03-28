import type { Idea } from '../types';

// ─────────────────────────────────────────────
//  ADD NEW IDEAS HERE
//  Copy an existing block, change the fields.
//  id must be unique. date is freeform text.
// ─────────────────────────────────────────────

export const ideas: Idea[] = [
  {
    id: '48-hours-to-midnight',
    title: '48 Hours to Midnight',
    subtitle: 'A campaign to mandate human verification on UK social media',
    date: '2024',
    status: 'built',
    tags: ['policy', 'democracy', 'online safety', 'campaign'],
    body: `Up to 40% of accounts on UK social media are not human. They are bots — run by foreign governments, predator networks, AI companies, and scammers. In the 2024 UK election, just 10 bot accounts posted over 60,000 times and reached an estimated 150 million views. The Online Safety Act did not address this. Most regulation does not address this. The fundamental problem — that we can no longer distinguish humans from machines online — remains unsolved.

48 Hours to Midnight was a campaign built around a single, actionable proposal: mandate that all social media accounts posting content must complete a simple human verification check every 48 hours. Not to read. Not to message privately. Just to post publicly. Ten seconds with a CAPTCHA, repeated every two days. This would be computationally impossible for bot farms running tens of thousands of accounts simultaneously, while being trivially easy for any real person.

The campaign identified three fronts where bots are causing measurable harm: child safety, democratic integrity, and the erosion of human culture online. On child safety, the NSPCC reported an 82% increase in online grooming crimes from 2017 to 2023, with bot networks enabling a single predator to target thousands of children simultaneously. On democracy, foreign state actors are running coordinated influence operations daily. On culture, a UC San Diego study found GPT-4.5 passes the Turing test with a 73% success rate — meaning most people cannot tell they are talking to a machine.

The site provided a full evidence base, a template letter for contacting MPs, direct links to key ministers and parliamentary committees, and a campaign signup. It was built in React and TypeScript, designed to be both an information resource and a direct action tool.`,
    githubUrl: 'https://github.com/DavidAlexKelly/48-hours-to-midnight',
  },
  {
    id: 'great-british-feast-week',
    title: 'The Great British Feast Week',
    subtitle: 'A secular national celebration built around independent hospitality',
    date: 'March 2026',
    status: 'concept',
    tags: ['policy', 'hospitality', 'culture', 'economics'],
    body: `An annual national event in which the government subsidises 50% of food at participating independent restaurants for one week each year — designed not as an economic emergency measure, but as a permanent fixture of British life.

The week is randomly drawn on January 5th from a pool of eligible dates between 21st April and 21st July, excluding school half terms. This removes political discretion over timing entirely.

Businesses register in January and submit a locked scheme menu — a specific offering designed for the event week with prices that cannot change. These menus are published on a dedicated platform, greatbritishtable.co.uk, which becomes both a compliance tool and a year-round directory of independent UK restaurants.

Only independent businesses qualify. No chains. The money stays local, multipliers are higher, and the businesses that need it most are the ones who benefit.

The broader ambition is cultural: Britain has no secular, non-commercialised national event organised around food and community. This fills that gap deliberately — a week each year when the message from government is simply that British life is good and your local restaurant deserves your company.`,
  },
  {
    id: 'eat-out-redesign',
    title: 'Redesigning Eat Out to Help Out',
    subtitle: 'What a smarter version of the 2020 scheme would have looked like',
    date: 'March 2026',
    status: 'concept',
    tags: ['policy', 'economics', 'hospitality'],
    body: `The original Eat Out to Help Out spent £849 million and left almost nothing behind. Footfall rose during the scheme and collapsed immediately after. There were no cross-sector spillovers. Employment effects were temporary and unverifiable. A significant portion of the subsidy went to national chains with no local multiplier.

A better-designed scheme would have targeted independent businesses only, locked in prices at registration to prevent margin inflation, spread the discount across five weekdays rather than three, and given businesses the ability to design a specific scheme menu rather than simply discounting their existing one.

The most important structural change would be moving from a one-off intervention to a recurring annual event — giving businesses, councils, and consumers the planning certainty to build genuine economic and cultural activity around it.`,
  },
];
