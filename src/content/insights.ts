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
  {
    slug: "the-stars-are-aligning-for-the-uae-real-estate-market",
    kind: "article",
    title: "The stars are aligning for the UAE real estate market",
    date: "2026-10-26",
    displayDate: "October 26, 2026",
    category: "Arabian Business",
    excerpt:
      "Investing in real estate is never an exact science. But the practice can be honed through hundreds of hours of immersion in not just the real estate and property markets, but in the financial, political and economic outlooks globally and locally.",
    image: "/news/stars-aligning-uae-real-estate.jpg",
    author: "Imran A. Sheikh",
    authorImage: "/team/IMRAN-SHEIKH.jpg",
    body: [
      "Real estate investors will often say they follow their instincts, and right now, instincts are pointing to the UAE real estate market – especially Dubai’s.",
      "Investing in real estate is never an exact science. Some successful investors will tell you that it is largely down to instinct, but what they won’t tell you is that that instinct is honed through hundreds of hours of immersion in not just the real estate and property markets, but in the financial, political and economic outlooks globally and locally.",
      "In a globalised world, it is pointless to only look at factors linked to the country you are interested in. One location’s success, or attractiveness to investors will always be relative to other locations it is competing with. A real estate investor needs to have an in-depth knowledge of the sector and macroeconomic factors, which are constantly changing. Only then, will their “instinct” tell them whether or not now is a good time to invest.",
      "It may never be an exact science, but by considering different variables investors can determine with a certain amount of confidence what countries, cities, or even specific areas are likely to yield the best results.",
      "And most, if not all of those very same factors are pointing towards the fact that the UAE, and Dubai in particular, are currently sitting in a sweet spot of investment potential.",
      "The real estate industry is a competition. Not just between individual projects as they race to get investors on board, but between cities, countries, and regions. At the risk of simplifying global economics to a couple of sentences, if you were to plot the economic development (and hence the attractiveness for investment) of a nation over time (usually the GDP), then in almost all cases it would demonstrate a wave pattern.",
      "It is every investor’s intention to invest in the real estate sector at the bottom of one of these waves, or more appropriately at the trough of the market cycle – or at least at the point where in theory the market should start to recover and continue its trajectory upwards.",
      "As you can imagine, each country’s market cycle is at a different stage of growth or decline, making it not just a case of investors looking at individual countries, but also comparing them to see which is likely to rise most steeply in the foreseeable future.",
      "The pandemic has had the almost unprecedented effect of resetting practically every country on the planet back to an equilibrium. How they improve or continue to decline from here will obviously differ, but the UAE provides an impressive and opportunistic baseline due to its real estate infrastructure that will surely help the sector thrive after the pandemic is over and economic activities resume.",
      "We can possibly draw parallels to what happened to Dubai post global financial crisis in 2008. The pre-recession investment that went into developing great projects coupled with the healthy economic growth and lifestyle quality provided helped Dubai leap forward and become more attractive to international investors. The same is happening now; the way in which the UAE has handled the pandemic combined with its real estate quality, lifestyle, education and healthcare will place it at the forefront of many economies in the region and globally when it comes to location attractiveness. We have recently seen many international investors relocating their families to the UAE exactly because of these advantages.",
      "It is too soon to say with any certainty which countries’ economies will recover the quickest and which will fall behind, but there are aspects that we can look to that will have an effect on the real estate markets in the longer term. The shift in working patterns towards home and remote working experienced during lockdowns in the UK, Europe and the US is very likely to be something that continues not just in the short to mid-term, but possibly in the long-term. This will have an undetermined effect on office space in the major cities, but also in all property in those cities as people are no longer tied to a commutable distance to their office for a home. Regardless of anything else, this creates uncertainty, and if there is one thing that the markets and investors do not like, it is uncertainty.",
      "And of course, there are the dual issues in Europe with regards to the EU’s poorly managed vaccine roll out and the uncertainty around Brexit.",
      "The resetting of the global economies and the problems facing many of the countries globally put the UAE in such a strong position for attracting interest from investors both domestic and international.",
      "The UAE’s economy is predicted to bounce back relatively quickly, with the IMF forecasting a 3.1 percent GDP growth, and crucially that growth is expected to continue. Q1 has already seen a healthy growth in the UAE real estate market, with a marked move from a market that was almost entirely domestically driven over the past few years, to one that is attracting more and more foreign and institutional capital. The economy is further supported by a revitalised growth in the UAE and Dubai’s non-oil foreign trade in 2020 which touched $321 billion.",
      "There are several reasons for that growth. Firstly, the UAE is seen as a safe haven financially, especially for those from many of the other MENA nations, as well as Africa and parts of Asia, where once again uncertainty and even instability will make investors look for alternative options.",
      "Once an investor knows their money is safe, the next consideration is the yield and how secure that yield will ultimately be. Everything else being equal, it is the projected yield that will be the decisive factor. Here, the UAE is very strong, offering more than 7 percent gross rental returns on average, and many real estate projects producing between 6-12 percent unlevered net yields. In a world with historically low interest rates, and an insatiable desire for yield, the UAE stands out like a shining beacon.",
      "Dubai was recognised in JLL’s Global Real Estate Transparency Index as one of the “global top improvers” due to more than just the yield. This score was boosted by government initiatives to improve corporate and real estate sustainability. The government has been proactive with its business-focused initiatives (low taxation, free zones, ease of registration to name just three) and its robust regulatory procedures.",
      "Finally, let’s not forget that Dubai is one of the most sought-after places to work and live. Once again, the government has helped with its introduction of new visa categories to attract more professionals, investors and families. Further, the weather, architecture, culture and lifestyle are all substantial draws for people from Europe and the US. Its strategic location makes it a lot more attractive than Singapore for example, where the distances involved are a hindrance for people wanting a second or holiday home. Those of us who have lived, worked and invested in the UAE for years have known this all along, the rest of the world finally seems to have caught on.",
      "Imran Sheikh is a leading real estate expert. This article was originally published by Arabian Business on 4 May 2021.",
    ],
    pdfUrl: "/press/the-stars-are-aligning-for-the-uae-real-estate-market.pdf",
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
