export type InsightKind = "article" | "report";

export type Insight = {
  slug: string;
  kind: InsightKind;
  title: string;
  subtitle?: string;
  date: string; // YYYY-MM-DD
  displayDate: string;
  excerpt: string;
  image: string;
  author?: string;
  authorImage?: string;
  category?: string;
  highlights?: { label: string; value: string }[];
  body: string[];
  externalUrl?: string;
  externalUrlLabel?: string;
  pdfUrl?: string;
  featured?: boolean;
};

export const insights: Insight[] = [
  {
    slug: "capital-and-conflict-march-2026",
    kind: "report",
    title: "Capital & Conflict: The UAE Investor’s Conviction",
    subtitle: "Where political resilience and opportunity meet capital inflows",
    date: "2026-03-01",
    displayDate: "March 2026",
    category: "Market Intelligence",
    excerpt:
      "A BlackOak analytical position on the UAE property market amid geopolitical uncertainty. The UAE has outperformed every major global real estate hub across each market shock of the past 25 years, and at $458/sq ft Dubai remains the most undervalued gateway market globally.",
    image: "/images/dubai-aerial-hero1.jpg",
    author: "BlackOak Research",
    highlights: [
      { label: "25-year CAGR", value: "11%" },
      { label: "Dubai price / sf", value: "$458" },
      { label: "Gross yield", value: "6–7%" },
      { label: "Tax on rental", value: "0%" },
    ],
    body: [
      "The past 25 years have delivered a series of exogenous shocks — from 2001 through the global financial crisis, the Arab Spring, the 2014 oil correction, COVID-19, and successive geopolitical episodes across the Levant. Through each, the UAE has demonstrated a distinct structural resilience.",
      "In every one of these cycles, capital has flowed toward Dubai rather than away from it — a pattern reinforced by the emirate’s open capital account, absence of income tax, and long-standing role as a regional safe harbour. Real estate has been the primary beneficiary.",
      "At $458 per square foot, Dubai remains materially undervalued relative to every comparable gateway market: less than one-third of London, one-quarter of Hong Kong, and roughly half of Singapore. The 25-year compound growth rate of 11% has been achieved without the leverage or supply-side excesses that define the other markets.",
      "For institutional allocators, the implication is straightforward: the risk-adjusted case for UAE real estate has strengthened, not weakened, in the current environment. Structural inflows continue; supply is disciplined; yields remain among the highest in any major market. Conviction, not caution, is the correct posture.",
    ],
    pdfUrl: "/reports/capital-and-conflict-march-2026.pdf",
    featured: true,
  },
  {
    slug: "developers-news-magazine-june-2026",
    kind: "article",
    title: "Dubai Property Market Re-imagined: Expert Views on How to Dubai-it the Property Market",
    date: "2026-06-30",
    displayDate: "June 30, 2026",
    excerpt:
      "The June 2026 edition of Developers News Magazine UAE features a special report — expert perspectives on how to reimagine and “Dubai-it” the property market — including Imran A. Sheikh on structural capital.",
    image: "/news/news-thumbnail.png",
    author: "Developers News Magazine UAE",
    body: [
      "The June 2026 edition of Developers News Magazine UAE is now officially live, delivering the latest perspectives, market intelligence, and exclusive coverage from across the region’s developer community.",
      "This month’s edition features a special report — “Dubai Property Market Re-imagined: Expert Views on How to Dubai-it the Property Market” — bringing together expert perspectives on the direction of Dubai’s property market and the strategies shaping its next chapter.",
      "Adding a strategic investment perspective, Imran A. Sheikh, founder and CEO of BlackOak Global, contends that Dubai’s next chapter will be defined not by transaction velocity but by the structure of capital deployed into the market. Single-asset, project-level exposure — long the default for many UAE investors — has increasingly left portfolios concentrated in ways that recent volatility has made visible. The institutional response, he argues, is to favour vehicles that diversify across assets, locations, and risk profiles, and that are run with the underwriting discipline normally reserved for global allocators.",
      "Sheikh further suggests that re-imagining the Dubai property market means moving the conversation from off-plan launches to portfolio construction — building exposure through REITs, real estate funds, and joint-venture structures designed to weather cycles. With visa reforms, full foreign ownership, and sustained inflows of high-net-worth capital still underwriting demand, the opportunity is less a question of timing and more one of how capital is structured for the next decade.",
    ],
    externalUrl: "https://developersnewsmagazine.com/dubai-property-market-re-imagined/",
    externalUrlLabel: "Read the report on Developers News Magazine",
  },
  {
    slug: "why-reits-and-property-funds-are-the-next-step-for-uae-investors",
    kind: "article",
    title: "Why REITs and Property Funds Are the Next Step for UAE Investors",
    date: "2026-05-03",
    displayDate: "May 3, 2026",
    excerpt:
      "Imran A. Sheikh explains why current market volatility has exposed concentration risk among UAE investors — and how REITs and property funds offer the diversification and professional management needed to navigate uncertain times.",
    image: "/images/dubai-aerial-hero1.jpg",
    author: "Imran A. Sheikh",
    authorImage: "/team/IMRAN-SHEIKH.jpg",
    body: [
      "The current volatility has revealed a structural problem many UAE investors have been sitting on for years. The good news is the solution already exists.",
      "What this market has made clear is that a lot of investors were never as diversified as they thought. Not because they made terrible decisions, but because a rising market made concentration look like skill.",
      "Across the region, there are people sitting on strong assets with real value, but many of those assets are tied up in one project, one location, sometimes one tower. When liquidity tightens, that becomes a problem very quickly. A good property in the wrong place, or at the wrong time, can still force a discount. That is not about the quality of the asset. It is about concentration risk.",
      "The UAE has probably reinforced this more than anywhere else. In Dubai especially, the pace of growth has been so strong that many investors got used to the idea that choosing the right project was enough. For a while, maybe it was. But that playbook is getting tested now.",
      "This is where property funds and REITs come in. They give you exposure to the same market but with actual structure behind it. Professional management, clear acquisition criteria, and diversification across locations, asset types, and risk profiles. You are not betting everything on one building doing the right thing at the right time.",
      "A portfolio of 15 or 20 assets behaves very differently from one apartment in one tower. Some assets can be sold, capital can be moved, and the manager can respond to conditions instead of just hoping they improve. A proper fund does not chase the next off-plan launch or double down on a single area because it is fashionable. It has a defined process, risk limits, and accountability to its investors.",
      "The real case for property funds and REITs is not just the returns, but the structure itself. Owning a share of a professionally managed, diversified portfolio of UAE real estate keeps you in the game without being hostage to the performance of any single asset. One keeps you in control. The other leaves you hoping.",
    ],
  },
  {
    slug: "difc-residential-may-2025",
    kind: "report",
    title: "DIFC Residential Real Estate Sub-Market Snapshot",
    subtitle: "DIFC, Dubai — the pulse of Dubai’s financial future",
    date: "2025-05-01",
    displayDate: "May 2025",
    category: "Sub-Market Report",
    excerpt:
      "A comprehensive analysis of DIFC’s residential real estate market produced in collaboration with Avison Young. Ready residential assets in DIFC offer a relative value proposition compared to Business Bay and Downtown Dubai, with supply set to nearly double by 2030.",
    image: "/images/about-buildings.jpg",
    author: "BlackOak Research × Avison Young",
    highlights: [
      { label: "Rental yield", value: "6.8%" },
      { label: "Rental rate", value: "AED 161/sf" },
      { label: "Sale rate", value: "AED 1,977/sf" },
      { label: "Occupancy", value: "85–90%" },
    ],
    body: [
      "DIFC has evolved from a purely commercial district into one of Dubai’s most sought-after live-work precincts. Ready residential assets offer a demonstrable relative-value case against comparable prime districts.",
      "Rental yields at 6.8% remain among the highest of any prime residential sub-market globally, and pricing at AED 1,977/sf trails Downtown Dubai and Business Bay by a meaningful margin — despite superior infrastructure and location.",
      "Supply is set to nearly double by 2030, but demand from professional and institutional occupiers is expected to absorb it. Occupancy remains structurally high at 85–90%.",
      "For investors seeking prime Dubai residential exposure with the strongest yield profile of the core districts, DIFC represents the most compelling risk-adjusted entry point in the current cycle.",
    ],
    pdfUrl: "/reports/difc-residential-may-2025.pdf",
  },
  {
    slug: "dubai-property-sector-shows-early-signs-of-weakness",
    kind: "article",
    title: "Dubai property sector shows early signs of weakness",
    date: "2026-03-20",
    displayDate: "March 20, 2026",
    excerpt:
      "Transaction volumes in the UAE fell 37% year-on-year in the first 12 days of March amid regional tensions, with some properties carrying discounts of 12–15%.",
    image: "/images/hero-2.webp",
    body: [
      "Dubai’s property market is displaying weakness approximately three weeks into the U.S.-Israeli conflict with Iran. Transaction volumes have declined substantially, with transaction volumes in the UAE falling 37% year-on-year in the first 12 days of March, and 49% month-on-month, according to Goldman Sachs analysts.",
      "February’s transaction values were twice those recorded so far in March — a steeper decline than observed during the 2024 Dubai floods or previous Iran-Israeli tensions last June.",
      "Some properties now carry discounts of 12–15%, though the median transacted price has only decreased 3% annually. This suggests sellers are maintaining asking prices rather than engaging in panic selling.",
      "Developer shares have declined notably. Emaar Properties, the developer behind Burj Khalifa, is down more than 26% on the Dubai bourse since the conflict began, reflecting institutional reassessment of future unit delivery through 2028.",
      "Industry professionals maintain that fundamentals remain intact, with real estate loan exposure sitting at a manageable 14% of total UAE bank loans. Should regional de-escalation occur within the quarter, activity could recover. However, prolonged conflict could trigger price corrections reaching 15%.",
    ],
  },
  {
    slug: "imran-sheikh-spears-500-2026",
    kind: "article",
    title: "Imran Sheikh recommended in Spear’s 500 Property Index 2026",
    date: "2026-03-16",
    displayDate: "March 16, 2026",
    excerpt:
      "Imran Sheikh earns recognition as one of the leading property investment advisers working with high-net-worth clients in the Spear’s 500 Property Index 2026.",
    image: "/team/IMRAN-SHEIKH.jpg",
    author: "Spear’s Magazine",
    body: [
      "Imran Sheikh has earned recognition as one of the leading property investment, finance, and management services advisers working with high-net-worth clients through inclusion in the Spear’s 500 Property Index 2026 — an annual listing by Spear’s Magazine highlighting elite luxury real estate professionals.",
      "BlackOak expressed pride in the acknowledgment, noting it validates the firm’s dedication to excellence across real estate investment, fund management, and specialised advisory services for HNWIs throughout Dubai and the broader GCC region.",
    ],
  },
  {
    slug: "advancing-institutional-grade-real-estate-uae",
    kind: "article",
    title: "Advancing institutional-grade real estate investment in the UAE",
    date: "2025-06-25",
    displayDate: "June 25, 2025",
    excerpt:
      "For over two decades, Imran Sheikh has been at the forefront of the UAE’s real estate sector, bridging institutional expertise and entrepreneurial drive.",
    image: "/images/Dubai_Skyline.jpg",
    author: "Industry Feature",
    authorImage: "/team/IMRAN-SHEIKH.jpg",
    body: [
      "For over two decades, Imran Sheikh has been at the forefront of the UAE’s real estate sector, bridging institutional expertise and entrepreneurial drive in property development and investment.",
      "Sheikh’s professional journey began in global corporate boardrooms, where he developed expertise in large-scale investments and corporate strategy. He later transitioned to a leading family office, where he mastered the stewardship of generational wealth.",
      "His work spans family office management, government advisory, high-value acquisitions, and international developments. He provides strategic guidance on governance, asset management, wealth preservation, and succession planning.",
      "As founder and partner of BlackOak, Sheikh leads one of the UAE’s premier boutique firms — operating at the intersection of high-end brokerage and institutional investment strategies while maintaining boutique-level service.",
    ],
  },
  {
    slug: "palm-jumeirah-exclusivity",
    kind: "article",
    title: "Lack of plots gives Palm Jumeirah added air of exclusivity",
    date: "2025-05-29",
    displayDate: "May 29, 2025",
    excerpt:
      "The price of property on Dubai’s Palm Jumeirah is only going to increase as the limited supply of available plots drives demand ever higher.",
    image: "/images/hero-3.webp",
    body: [
      "The price of property on Dubai’s Palm Jumeirah is only going to increase as the limited supply of available plots drives demand ever higher. As one of the world’s most iconic artificial islands, the Palm commands premium valuations that have recently escalated due to market conditions.",
      "Scarcity is the primary market driver. With virtually all land plots now developed and no expansion plans on the horizon, the supply constraint benefits property owners. Investors recognise that owning Palm property means holding something finite and irreplaceable.",
      "This exclusivity, combined with world-class amenities and a lifestyle that is difficult to replicate anywhere else, ensures that Palm Jumeirah will remain at the pinnacle of Dubai’s luxury property market.",
    ],
  },
  {
    slug: "tonino-lamborghini-al-marjan",
    kind: "article",
    title: "Tonino Lamborghini Residences: Redefining luxury living on Al Marjan Island",
    date: "2024-05-20",
    displayDate: "May 20, 2024",
    excerpt:
      "Tonino Lamborghini unveils 241 luxury branded units on Al Marjan Island in partnership with Arista Developments — blending iconic Italian design with smart home technology and sustainable living.",
    image: "/images/hero-banner.webp",
    body: [
      "Tonino Lamborghini, renowned for Italian elegance and craftsmanship, has unveiled its latest residential venture in partnership with Arista Developments. The project, located on Al Marjan Island in Ras Al Khaimah, introduces 241 luxury branded units to the region’s real estate portfolio.",
      "The residences showcase meticulously crafted spaces featuring high-end finishes and impeccable craftsmanship. Residents enjoy access to exclusive amenities including fitness centres, swimming pools, landscaped gardens, and elegant cafés.",
      "The diverse product range encompasses one- and two-bedroom units, duplexes, sea view villas, signature villas, and penthouses. The development incorporates smart home technology and sustainable building practices.",
    ],
  },
];

export function insightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function insightsSorted(): Insight[] {
  return [...insights].sort((a, b) => b.date.localeCompare(a.date));
}

export function featuredInsight(): Insight {
  return insights.find((i) => i.featured) ?? insights[0];
}
