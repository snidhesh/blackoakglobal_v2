export type DealStatus = "Held" | "Exited" | "Active";
export type DealStrategy = "Value-Add" | "Opportunistic" | "Core-Plus" | "Development" | "Special Situations";
export type DealSector = "Residential" | "Commercial Office" | "Hospitality" | "Mixed-Use" | "Logistics" | "Branded Residences";

export type Deal = {
  slug: string;
  headline: string;
  asset: string;
  location: string;
  country: string;
  sector: DealSector;
  strategy: DealStrategy;
  status: DealStatus;
  year: number;
  image: string;
  anchor: { value: string; label: string };
  summary: string;
  body: string[];
  teamLead?: string;
  partners?: string[];
};

export const deals: Deal[] = [
  {
    slug: "tonino-lamborghini-al-marjan",
    headline: "Delivering 241 branded residences on Al Marjan Island",
    asset: "Tonino Lamborghini Residences",
    location: "Al Marjan Island",
    country: "UAE",
    sector: "Branded Residences",
    strategy: "Development",
    status: "Active",
    year: 2024,
    image: "/images/hero-banner.webp",
    anchor: { value: "241", label: "Branded residential units delivered" },
    summary:
      "Advisory and structuring role on the delivery of 241 Tonino Lamborghini branded residences on Al Marjan Island in partnership with Arista Developments.",
    body: [
      "BlackOak advised on structuring, positioning, and delivery of the Tonino Lamborghini Residences on Al Marjan Island in Ras Al Khaimah — a landmark branded-residence scheme extending the marque into the northern emirates.",
      "The scheme comprises 241 units across one- and two-bedroom apartments, duplexes, sea-view villas, signature villas, and penthouses. Smart-home integration and sustainable building practices are embedded across the master specification.",
      "The transaction typifies the firm’s approach to development advisory — bringing brand, developer, and capital together within a single, disciplined execution framework.",
    ],
    partners: ["Arista Developments", "Tonino Lamborghini"],
  },
  {
    slug: "difc-residential-portfolio",
    headline: "Repositioning a prime DIFC residential portfolio",
    asset: "DIFC Residential Portfolio",
    location: "DIFC, Dubai",
    country: "UAE",
    sector: "Residential",
    strategy: "Value-Add",
    status: "Held",
    year: 2024,
    image: "/images/about-buildings.jpg",
    anchor: { value: "6.8%", label: "Portfolio gross rental yield" },
    summary:
      "Value-add mandate across a portfolio of ready residential assets in the Dubai International Financial Centre — leveraging the sub-market’s yield differential vs. Downtown and Business Bay.",
    body: [
      "The mandate encompasses a portfolio of ready residential assets in DIFC — a district that has evolved from a purely commercial precinct into one of Dubai’s most sought-after live-work locations.",
      "At AED 1,977/sf sale and AED 161/sf rental, the sub-market trades at a meaningful discount to Downtown Dubai and Business Bay despite superior infrastructure and location, and rental yields of 6.8% place it among the highest of any prime residential sub-market globally.",
      "The value-add plan focuses on unit-level uplifts, tenant-mix repositioning, and operational-cost optimisation, alongside a defined hold-to-exit horizon aligned with the district’s supply arc through 2030.",
    ],
    partners: ["Avison Young (research)"],
  },
  {
    slug: "palm-jumeirah-plot-strategy",
    headline: "Assembling scarce plots on Palm Jumeirah",
    asset: "Palm Jumeirah Land Bank",
    location: "Palm Jumeirah, Dubai",
    country: "UAE",
    sector: "Residential",
    strategy: "Opportunistic",
    status: "Held",
    year: 2025,
    image: "/images/hero-3.webp",
    anchor: { value: "Finite", label: "No further supply — closed island geometry" },
    summary:
      "Off-market plot-assembly programme on Palm Jumeirah, one of a small number of closed-supply luxury markets globally.",
    body: [
      "Palm Jumeirah is one of a small handful of luxury residential markets globally where supply is genuinely finite — the island geometry is closed and no expansion is planned.",
      "BlackOak’s programme has focused on selective, principal-led off-market plot acquisitions where transaction discretion and speed of execution are decisive.",
      "The strategic thesis is straightforward: sustained ultra-high-net-worth demand, closed supply, and world-class amenity mean the district’s pricing floor is structurally supported, and pricing power sits with owners.",
    ],
  },
  {
    slug: "downtown-dubai-luxury-tower",
    headline: "Acquiring a stabilised luxury tower in Downtown Dubai",
    asset: "Luxury Residential Tower",
    location: "Downtown Dubai",
    country: "UAE",
    sector: "Residential",
    strategy: "Core-Plus",
    status: "Held",
    year: 2023,
    image: "/images/iconic_background.jpg",
    anchor: { value: "$140M+", label: "Transaction value" },
    summary:
      "Advisory and structuring role on the acquisition of a stabilised luxury residential tower in Downtown Dubai for an institutional partner.",
    body: [
      "The mandate involved acquisition of a stabilised residential tower in the Downtown Dubai core, occupying a position on the Burj Khalifa view corridor with a mature tenant profile.",
      "BlackOak led underwriting, due diligence, capital structuring, and closing coordination — delivering the transaction for an institutional partner within a compressed timeline required by the vendor.",
      "The asset was underwritten to a core-plus return profile with a defined operational uplift and a five-to-seven year hold horizon.",
    ],
  },
  {
    slug: "london-west-end-office",
    headline: "Value-add office acquisition in London’s West End",
    asset: "West End Office",
    location: "West End, London",
    country: "UK",
    sector: "Commercial Office",
    strategy: "Value-Add",
    status: "Exited",
    year: 2022,
    image: "/images/hero-1.webp",
    anchor: { value: "1.9x", label: "Realised equity multiple" },
    summary:
      "Value-add acquisition and repositioning of a West End office building for a Middle-East-based ultra-high-net-worth family principal — exited to an institutional buyer.",
    body: [
      "BlackOak’s London team identified a mispriced West End office asset with a short weighted-average unexpired lease term and immediate opportunity for capex-led repositioning.",
      "The business plan focused on a comprehensive refurbishment, ESG-led fit-out, and re-leasing to a diversified professional-services tenant base, extending WAULT and materially uplifting rental tone.",
      "The asset was exited to an institutional buyer within three years of acquisition at a 1.9x realised equity multiple.",
    ],
  },
  {
    slug: "washington-dc-office-portfolio",
    headline: "Recapitalising a $300M Washington DC office portfolio",
    asset: "DC Office Portfolio",
    location: "Washington, DC",
    country: "USA",
    sector: "Commercial Office",
    strategy: "Special Situations",
    status: "Exited",
    year: 2022,
    image: "/images/about-buildings.jpg",
    anchor: { value: "$300M", label: "Portfolio value" },
    summary:
      "Advisory role on the $300M recapitalisation of a Washington DC office portfolio — including joint-venture structuring, diligence, and lease analysis.",
    body: [
      "The mandate involved a full recapitalisation of a $300M institutional office portfolio in Washington DC, requiring the introduction of new equity, restructuring of debt facilities, and negotiation of amended joint-venture terms.",
      "BlackOak’s workstream covered underwriting, joint-venture structuring, due diligence coordination, and lease analysis across the portfolio, working alongside the sponsor’s existing capital-markets team.",
      "The recapitalisation was closed on target, providing the sponsor with the runway to execute a redefined value-add business plan across the portfolio.",
    ],
  },
  {
    slug: "manhattan-office-acquisition",
    headline: "Acquiring a $140M office asset in Manhattan",
    asset: "Manhattan Office",
    location: "Midtown Manhattan",
    country: "USA",
    sector: "Commercial Office",
    strategy: "Core-Plus",
    status: "Held",
    year: 2023,
    image: "/images/hero-2.webp",
    anchor: { value: "$140M", label: "Acquisition value" },
    summary:
      "Advisory role on the $140M acquisition of a Manhattan office asset — spanning underwriting, joint venture structuring, and closing.",
    body: [
      "The transaction involved the acquisition of a $140M Midtown Manhattan office building on behalf of a GCC-based principal seeking core-plus exposure to a resilient US gateway market.",
      "BlackOak led the buy-side advisory workstream — including underwriting, joint-venture structuring with a local operating partner, and end-to-end closing coordination.",
      "The asset was underwritten to a defined income-led hold thesis with a partial equity re-margining plan post-stabilisation.",
    ],
  },
  {
    slug: "saudi-hospitality-mandate",
    headline: "Underwriting a landmark KSA hospitality development",
    asset: "KSA Hospitality Scheme",
    location: "Kingdom of Saudi Arabia",
    country: "KSA",
    sector: "Hospitality",
    strategy: "Development",
    status: "Active",
    year: 2025,
    image: "/images/hero-banner.webp",
    anchor: { value: "GCC+", label: "Cross-border capital coordination" },
    summary:
      "Development advisory and capital-markets coordination for a landmark hospitality scheme in the Kingdom of Saudi Arabia — a giga-project mandate.",
    body: [
      "The mandate covers development advisory and capital-markets coordination for a landmark hospitality scheme in the Kingdom of Saudi Arabia — one of a small number of large-scale hospitality plays defining the next phase of the Kingdom’s tourism transformation.",
      "BlackOak’s role spans development strategy, brand and operator selection, capital-structure design, and institutional partner introductions.",
      "The mandate exemplifies the firm’s cross-border capability — combining Dubai origination, KSA relationships, and access to international institutional capital.",
    ],
  },
];

export function dealBySlug(slug: string): Deal | undefined {
  return deals.find((d) => d.slug === slug);
}

export const dealFilters = {
  sectors: ["Residential", "Commercial Office", "Hospitality", "Mixed-Use", "Logistics", "Branded Residences"] as const,
  strategies: ["Value-Add", "Opportunistic", "Core-Plus", "Development", "Special Situations"] as const,
  statuses: ["Held", "Exited", "Active"] as const,
  countries: ["UAE", "UK", "USA", "KSA"] as const,
};
