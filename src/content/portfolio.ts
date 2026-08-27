export type DealStatus = "Held" | "Exited" | "Active" | "Completed";
export type DealStrategy =
  | "Value-Add"
  | "Opportunistic"
  | "Core-Plus"
  | "Development"
  | "Special Situations"
  | "Structuring"
  | "Fund Management"
  | "Advisory"
  | "Acquisition"
  | "Underwriting"
  | "Capital Advisory"
  | "M&A"
  | "M&A (Special Situations)";
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
    slug: "branded-development-lifecycle",
    headline: "Branded Development: Acquired, Approved, Partnered, Exited",
    asset: "Branded Development Programme",
    location: "UAE",
    country: "UAE",
    sector: "Branded Residences",
    strategy: "Development",
    status: "Exited",
    year: 2026,
    image: "/images/branded-development.webp",
    anchor: { value: "4", label: "Lifecycle stages executed end-to-end" },
    summary:
      "A branded-development programme carried across the full mandate lifecycle — acquisition, approvals, partner selection, and exit.",
    body: [
      "The programme covers the full arc of branded-development execution: site acquisition, entitlement and approvals, brand and developer partnering, and eventual exit — with the firm acting as principal or lead advisor at each stage.",
      "Discipline across the lifecycle is the differentiator. Each stage is underwritten to a defined return threshold before progressing, and partner selection is treated as a capital-preservation decision rather than a marketing one.",
    ],
  },
  {
    slug: "uae-portfolio-public-listing",
    headline: "UAE Portfolio Built for Public Listing",
    asset: "UAE Listing Portfolio",
    location: "UAE",
    country: "UAE",
    sector: "Mixed-Use",
    strategy: "Structuring",
    status: "Active",
    year: 2026,
    image: "/images/Dubai_Skyline.jpg",
    anchor: { value: "IPO", label: "Portfolio structured for public-market listing" },
    summary:
      "A UAE real-estate portfolio assembled, structured, and governance-hardened for a public-market listing pathway.",
    body: [
      "The mandate covers assembly of a UAE real-estate portfolio built specifically for public-listing readiness — asset selection, governance architecture, and disclosure-grade reporting.",
      "The workstream sits alongside sponsor management from origination through listing-committee preparation, with the firm coordinating legal, audit, and capital-markets counterparties.",
    ],
  },
  {
    slug: "private-funds-institutional-strategies",
    headline: "Private Funds for Institutional-Grade Strategies",
    asset: "Private Fund Platform",
    location: "UAE",
    country: "UAE",
    sector: "Mixed-Use",
    strategy: "Fund Management",
    status: "Active",
    year: 2026,
    image: "/images/about-buildings.jpg",
    anchor: { value: "Institutional", label: "Fund vehicles built to institutional standards" },
    summary:
      "Private fund vehicles designed and managed to institutional standards — sector-focused strategies, third-party administration, and reporting rigour.",
    body: [
      "The fund platform delivers sector-focused private vehicles designed to institutional standards from day one — independent administration, audited reporting, and defined risk frameworks.",
      "Each strategy is underwritten to a specific market thesis and stage of the cycle, with capital deployment paced against opportunity rather than fund-raise timing.",
    ],
  },
  {
    slug: "family-office-real-estate",
    headline: "Family Office Real Estate Strategy and Execution",
    asset: "Family Office Real Estate Mandate",
    location: "GCC",
    country: "UAE",
    sector: "Residential",
    strategy: "Advisory",
    status: "Completed",
    year: 2026,
    image: "/images/iconic_background.jpg",
    anchor: { value: "End-to-end", label: "Strategy through execution for family principals" },
    summary:
      "End-to-end real-estate strategy and execution for family-office principals — allocation design, sourcing, structuring, and asset management.",
    body: [
      "The mandate is delivered as an outsourced real-estate function for family-office principals: allocation strategy, off-market sourcing, transaction execution, and ongoing asset management under a single accountable team.",
      "Discretion, alignment, and continuity define the engagement — the same team that underwrites also owns the outcome across the hold period.",
    ],
  },
  {
    slug: "primary-off-plan-portfolios",
    headline: "Strategic Acquisition of Primary Off-Plan Portfolios",
    asset: "Off-Plan Portfolio Acquisition",
    location: "UAE",
    country: "UAE",
    sector: "Residential",
    strategy: "Acquisition",
    status: "Completed",
    year: 2026,
    image: "/images/hero-3.webp",
    anchor: { value: "Primary", label: "Primary-market off-plan portfolio programme" },
    summary:
      "Programmatic acquisition of primary-market off-plan residential portfolios — negotiated at the launch layer, structured for hold or resale.",
    body: [
      "The programme secures primary-market off-plan residential portfolios negotiated directly at the launch layer — favourable pricing, unit selection, and payment terms unavailable to secondary buyers.",
      "Each tranche is underwritten to either a hold-to-yield or resale-on-completion path, with allocation between the two decided post-handover based on market conditions.",
    ],
  },
  {
    slug: "institutional-hotel-underwriting",
    headline: "Institutional Hotel Underwriting for Fund Acquisition",
    asset: "Hotel Underwriting Mandate",
    location: "UAE",
    country: "UAE",
    sector: "Hospitality",
    strategy: "Underwriting",
    status: "Completed",
    year: 2026,
    image: "/images/institutional-hotel.webp",
    anchor: { value: "Fund-grade", label: "Underwriting workstream for institutional hotel acquisition" },
    summary:
      "Institutional-grade underwriting workstream supporting a fund's hotel acquisition — trading analysis, operator diligence, and capex modelling.",
    body: [
      "The underwriting workstream covers trading history reconstruction, operator due diligence, market-comparable analysis, and capex/repositioning modelling to support a hospitality-fund acquisition decision.",
      "Delivered to the sponsor's investment committee as a fund-ready package — the outputs plug directly into the fund's approval and closing workflow rather than requiring re-work.",
    ],
  },
  {
    slug: "financial-centre-reit-advisory",
    headline: "Financial Centre Strategy, REIT and Capital Advisory",
    asset: "Financial Centre REIT Advisory",
    location: "DIFC, Dubai",
    country: "UAE",
    sector: "Commercial Office",
    strategy: "Capital Advisory",
    status: "Active",
    year: 2026,
    image: "/images/hero-1.webp",
    anchor: { value: "REIT", label: "Financial-centre REIT strategy and capital advisory" },
    summary:
      "Financial-centre real-estate strategy paired with REIT structuring and capital advisory — from sub-market thesis to listed-vehicle execution.",
    body: [
      "The mandate combines a financial-centre real-estate thesis with the capital-markets machinery to express it — REIT structuring, seed-portfolio assembly, and investor-side capital advisory.",
      "The firm's DIFC-centred market view feeds directly into structuring choices, so the vehicle's investment mandate matches the sub-market's actual opportunity set rather than a generic benchmark.",
    ],
  },
  {
    slug: "uae-logistics-fund-mna",
    headline: "UAE Logistics Fund and Cross-Border M&A Transaction",
    asset: "UAE Logistics Fund & Cross-Border M&A",
    location: "UAE",
    country: "UAE",
    sector: "Logistics",
    strategy: "M&A (Special Situations)",
    status: "Completed",
    year: 2026,
    image: "/images/uae-logistics-fund.webp",
    anchor: { value: "Cross-border", label: "UAE logistics fund with cross-border M&A execution" },
    summary:
      "A UAE logistics fund paired with a cross-border M&A transaction — fund formation, target selection, and multi-jurisdiction closing coordination.",
    body: [
      "The mandate combines UAE logistics-fund formation with the cross-border M&A transaction that seeds it — target identification, negotiation, and multi-jurisdiction closing under a single execution team.",
      "Sector timing and structural design are treated as one problem: the fund's mandate, jurisdiction, and target are aligned so first-close capital deploys immediately into a defined transaction.",
    ],
  },
];

export function dealBySlug(slug: string): Deal | undefined {
  return deals.find((d) => d.slug === slug);
}

export const dealFilters = {
  sectors: ["Residential", "Commercial Office", "Hospitality", "Mixed-Use", "Logistics", "Branded Residences"] as const,
  strategies: [
    "Development",
    "Structuring",
    "Fund Management",
    "Advisory",
    "Acquisition",
    "Underwriting",
    "Capital Advisory",
    "M&A",
    "M&A (Special Situations)",
    "Value-Add",
    "Opportunistic",
    "Core-Plus",
    "Special Situations",
  ] as const,
  statuses: ["Held", "Exited", "Active", "Completed"] as const,
  countries: ["UAE", "UK", "USA", "KSA"] as const,
};
