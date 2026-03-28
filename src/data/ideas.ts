import type { Idea } from '../types';

// ─────────────────────────────────────────────
//  ADD NEW IDEAS HERE
//  Copy an existing block, change the fields.
//  id must be unique. date is freeform text.
// ─────────────────────────────────────────────

export const ideas: Idea[] = [
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
