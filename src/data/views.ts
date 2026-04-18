export interface ViewItem {
  text: string;
}

export interface ViewGroup {
  title: string;
  intro?: string;
  views: ViewItem[];
}

export const viewGroups: ViewGroup[] = [
  {
    title: 'Europe & International Order',
    views: [
      { text: "The UK's long-term survival depends on rejoining the European Union." },
      { text: 'The EU should develop a unified military force and move toward a more federalised system.' },
      { text: 'Global cooperation to dramatically reduce nuclear warheads worldwide, with the eventual aim of total disarmament.' },
      { text: 'Global cooperation to establish a worldwide minimum corporation tax, with eventual conversations around a global minimum income tax.' },
      { text: 'Global cooperation on tariffs with the aim of removing most tariffs worldwide while protecting national industries during the transition.' },
      { text: 'Israel should be sanctioned over its ethnic cleansing in Gaza and Lebanon and put under maximum pressure to adhere to the 1949 borders as closely as reasonably possible. A Palestinian state should be formally recognised internationally.' },
    ],
  },
  {
    title: 'Economy & Tax',
    views: [
      { text: 'Combine National Insurance and Income Tax into a single unified tax.' },
      { text: 'Transition away from the current benefits model toward a Negative Income Tax wherever possible.' },
      { text: 'Change the Triple Lock Pension from the highest of average wage growth, inflation, or 2.5% to the average of the three — with a longer-term ambition to move toward an Australian-style pension system.' },
      { text: 'Reduce Agricultural Property Relief to £1m per person, with complete removal to be examined over time.' },
      { text: 'Policies like high tax rates on the richest 1% and rent caps are understandable at a glance and have good moral intentions, but are ultimately counterproductive in practice. We cannot tax or restrict our way to a more equal society. Instead, the goal should be a growth-focused society that removes barriers to entry and encourages innovation. Opposition to these policies is not a moral position — it is a cold economic reality that they tend to produce the opposite of their intended outcomes. No to rent caps; yes to reducing the cost to build and improving the ease of doing business.' },
    ],
  },
  {
    title: 'Housing & Infrastructure',
    views: [
      { text: 'Major cuts to planning and permissions regulations to make it easier and cheaper to build housing and infrastructure. Significantly raise the threshold of signatures required to trigger a planning review, reducing the power of a small number of individuals to hold up developments.' },
      { text: 'Any major national infrastructure project that benefits the entirety of the public should not be subject to environmental objections or local resident and council opposition. Land should be compulsorily purchasable by the government at 2× market value.' },
      { text: 'On building safety regulations: standards covering things everyone needs and that are not visually apparent — fire safety, ventilation, electrical wiring — are good. Mandating things like stair rails or window sizes is not. There should be a point at which people can assess whether a home suits their own needs.' },
      { text: 'Power of local councils should be reduced inside cities, with more powers given to city mayors. Councils should propose projects to the mayor but the mayor gets final say and should be able to overrule council opposition to development plans. The council\'s role should be to engage with residents and bring issues to the mayor.' },
    ],
  },
  {
    title: 'Environment',
    views: [
      { text: 'Becoming a net-zero carbon emitter is the right ultimate goal. The major sources — transport, electricity, heating, industry — should move to carbon neutral. However, environmental regulations have in many areas gone too far.' },
      { text: 'Requiring a new housing development to be net zero makes no sense. A single day of driving in the country produces more emissions than such a development many times over. These requirements slow down housebuilding, drive up prices, and push more people into car-dependent locations — ultimately increasing CO₂. Environmental regulation should be proportionate and targeted at actual major emitters, not used as a blanket brake on infrastructure.' },
    ],
  },
  {
    title: 'Immigration',
    views: [
      { text: 'Immigration is ultimately a force for good, economically and socially, but it must be accompanied by a clear expectation that immigrants understand and adhere to British liberal values: freedom of religion, racial and sexual identity, and the rule of law.' },
      { text: 'Introduce a gender bias in immigration. Biasing by nation of origin is blunt and problematic; biasing toward accepting more women than men is more targeted. Regardless of country of origin, nearly all problems arising from immigration involve male migrants.' },
      { text: 'Restrict immigration based on marriage. You should not be able to bring a partner to the UK solely because they are your partner. Children should face no restriction, but civil partners should not qualify automatically.' },
      { text: 'Asylum claims based on LGBTQ+ discrimination should require direct evidence of state persecution, as the current system is too easily exploited.' },
    ],
  },
  {
    title: 'Social & Rights',
    views: [
      { text: 'Trans rights are human rights. Trans people have always existed and should not face discrimination through government policy. Puberty blockers should be legal, with the process of starting them left to healthcare professionals to determine.' },
      { text: 'On trans participation in women\'s sport: I am personally opposed at the professional level based on the research I have done. However, this should never be a matter for government — it is for individual sports governing bodies. My objection does not extend to non-professional sport at school or university level, though again those institutions should be free to make their own decisions.' },
      { text: 'Abortion up to 23 weeks should be legal and easily accessible, alongside a long-term strategy of education around safe sex and protection.' },
      { text: 'Full legalisation of marijuana, with cannabis-based edibles and gummies available to buy legally as an initial step, before broader conversations about other forms and other drugs take place and their cost to health services is assessed.' },
    ],
  },
  {
    title: 'Agriculture',
    views: [
      { text: 'Farming should transition to a model similar to that found in the Netherlands: intensive, efficient, and science-led.' },
      { text: 'Fewer regulations and certifications on farming, the ownership of livestock, and the sale of agricultural products.' },
    ],
  },
  {
    title: 'Education',
    views: [
      { text: 'Make History a required GCSE subject rather than optional.' },
      { text: 'Redesign Physical Education from the ground up to cover broader topics: caloric maintenance, differing body types, the dangers of steroids, and differences between macronutrients.' },
      { text: 'Introduce the basics of economics — inflation, interest rates, pensions, saving, risk — into PSHE or a similar general subject. PSHE should be treated as a more PSA-style exercise.' },
    ],
  },
  {
    title: 'General Philosophy of Governance',
    intro: 'These are broader beliefs about how government should operate, underlying many of the specific views above.',
    views: [
      { text: "A government's job is to set the outer bounds, limits, and rules that ensure a fair, equal, and safe society — not to micromanage individual issues. Attempting to directly manage and influence a society almost never produces the intended consequences." },
      { text: 'Letting people make their own decisions, while ensuring nothing gets too far out of hand at the edges, should be the primary goal. Overreaching and over-regulating on niche specific instances is almost always counterproductive. Regulation should kick in when an issue is widespread, not pre-emptively applied to edge cases.' },
    ],
  },
];