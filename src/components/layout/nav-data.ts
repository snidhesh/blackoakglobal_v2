export type NavColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  mega?: {
    blurb: string;
    discoverHref: string;
    columns: NavColumn[];
    ctaLabel: string;
    ctaHref: string;
  };
};

export const primaryNav: NavItem[] = [
  {
    label: "The Firm",
    href: "/firm",
    mega: {
      blurb: "A principal-led investment firm across the UAE, UK, and select global markets.",
      discoverHref: "/firm",
      columns: [
        {
          title: "About",
          links: [
            { label: "The Firm", href: "/firm" },
            { label: "Values", href: "/firm#values" },
            { label: "Offices", href: "/firm#offices" },
          ],
        },
        {
          title: "People",
          links: [
            { label: "Leadership", href: "/leadership" },
          ],
        },
        {
          title: "Responsibility",
          links: [
            { label: "Sustainability", href: "/sustainability" },
            { label: "Governance & Compliance", href: "/sustainability#pillars" },
          ],
        },
      ],
      ctaLabel: "Meet the leadership",
      ctaHref: "/leadership",
    },
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    mega: {
      blurb: "Six practices, one philosophy — from private-equity real estate to merchant banking.",
      discoverHref: "/what-we-do",
      columns: [
        {
          title: "Real Estate",
          links: [
            { label: "Private Equity Real Estate", href: "/what-we-do/private-equity-real-estate" },
            { label: "Development & Asset Management", href: "/what-we-do/asset-management" },
          ],
        },
        {
          title: "Capital Markets",
          links: [
            { label: "Investments", href: "/what-we-do/investments" },
            { label: "Private Funds & REITs", href: "/what-we-do/private-funds" },
          ],
        },
        {
          title: "Banking & Advisory",
          links: [
            { label: "Merchant Banking", href: "/what-we-do/banking" },
            { label: "Advisory & Consulting", href: "/what-we-do/consulting" },
          ],
        },
      ],
      ctaLabel: "View the portfolio",
      ctaHref: "/portfolio",
    },
  },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
    mega: {
      blurb: "A small number of principals each year — from private capital to sovereign mandates.",
      discoverHref: "/who-we-serve",
      columns: [
        {
          title: "Private Capital",
          links: [
            { label: "High-Net-Worth Individuals", href: "/who-we-serve#profile-01" },
            { label: "UHNW & Family Principals", href: "/who-we-serve#profile-02" },
          ],
        },
        {
          title: "Institutional Capital",
          links: [
            { label: "Single & Multi-Family Offices", href: "/who-we-serve#profile-03" },
            { label: "Institutional Investors", href: "/who-we-serve#profile-04" },
          ],
        },
        {
          title: "Strategic Capital",
          links: [
            { label: "Sovereign Wealth Funds", href: "/who-we-serve#profile-05" },
            { label: "Developers & Capital Partners", href: "/who-we-serve#profile-06" },
          ],
        },
      ],
      ctaLabel: "Why BlackOak",
      ctaHref: "/who-we-serve#why-blackoak",
    },
  },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Insights",
    href: "/insights",
    mega: {
      blurb: "Perspective from principals, not press releases — market reports, articles, and the annual firm report.",
      discoverHref: "/insights",
      columns: [
        {
          title: "Publications",
          links: [
            { label: "All Insights", href: "/insights" },
            { label: "Market Reports", href: "/insights?type=report" },
            { label: "Articles & Press", href: "/insights?type=article" },
          ],
        },
        {
          title: "The Firm",
          links: [
            { label: "The Gulf Capital Report", href: "/report" },
            // Investor Portal link hidden for now
          ],
        },
      ],
      ctaLabel: "Read the latest",
      ctaHref: "/insights/capital-and-conflict-march-2026",
    },
  },
  { label: "Contact", href: "/contact" },
];
