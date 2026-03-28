import type { Essay } from '../types';

// ─────────────────────────────────────────────
//  ADD NEW ESSAYS HERE
//  readTime is optional — e.g. "5 min read"
// ─────────────────────────────────────────────

export const essays: Essay[] = [
  {
    id: 'mood-economy',
    title: 'The Mood Economy',
    subtitle: 'Why governments consistently underestimate the economic value of making people feel good',
    date: 'March 2026',
    readTime: '4 min read',
    tags: ['economics', 'policy', 'wellbeing'],
    body: `Consumer confidence is not a soft, fluffy metric. It is a hardcore economic driver. When people feel good, they spend more, save less, take more financial risks — starting businesses, investing, hiring — and the velocity of money through the economy increases.

Yet Treasury models almost never capture this. Cost-benefit analyses of government schemes measure footfall, job posts, and VAT receipts. They do not measure the economic value of a nation being in a better mood.

The original Eat Out to Help Out scheme was, by most accounts, a genuine moment of collective lightness during an awful period. People talked about it, shared deals, felt like something normal was happening. That social dimension had real value even if it never appeared in the LSE's difference-in-differences analysis.

Wellbeing economics is a growing field precisely because GDP captures almost none of what actually makes societies function well. A government that takes seriously its role in national mood — through events, public spaces, cultural investment, and yes, occasionally subsidising a meal — is not being soft. It is being sophisticated.`,
  },
];
