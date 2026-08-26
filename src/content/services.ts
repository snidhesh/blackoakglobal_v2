export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  heading: string;
  body: string[];
  capabilities: string[];
  anchor: { value: string; label: string };
};

export const services: Service[] = [
  {
    slug: "private-equity-real-estate",
    title: "Private Equity Real Estate",
    subtitle: "Strategic acquisition and management of high-value properties.",
    image: "/images/dubai-aerial-hero1.jpg",
    heading: "Unlocking Value Through Active Management",
    body: [
      "Our Private Equity Real Estate division identifies and acquires underperforming or undervalued assets in key global gateway cities. By leveraging our deep market knowledge and operational expertise, we implement rigorous asset management strategies to reposition these properties and drive net operating income growth.",
      "We target a diverse range of asset classes including commercial office, luxury residential, logistics, and hospitality. Our disciplined approach to risk management and capital structuring ensures that we deliver consistent, superior returns to our investors while preserving capital.",
      "Through our extensive network of local partners and industry professionals, we gain exclusive access to off-market opportunities, allowing us to transact efficiently and secure competitive advantages in dynamic markets.",
    ],
    capabilities: [
      "Direct Asset Acquisition",
      "Value-Add Strategies",
      "Distressed Asset Turnaround",
      "Joint Venture Structuring",
      "Exit Planning & Execution",
    ],
    anchor: { value: "$1B+", label: "Direct real estate acquired by senior leadership" },
  },
  {
    slug: "investments",
    title: "Investments",
    subtitle: "Diversified capital deployment across the capital stack.",
    image: "/images/hero-3.webp",
    heading: "Strategic Capital Deployment",
    body: [
      "BlackOak Global’s investment philosophy is grounded in a fundamental belief in long-term value creation. We deploy capital across the capital stack — from equity to debt — in order to optimize risk-adjusted returns for our stakeholders.",
      "Our investment team rigorously analyses macroeconomic trends, local market dynamics, and asset-specific fundamentals to construct resilient portfolios that can withstand market volatility. We remain agile, adapting our strategies to capitalise on emerging opportunities in a rapidly evolving global landscape.",
      "Whether investing in stabilised core assets or opportunistic developments, we maintain a steadfast commitment to due diligence, transparency, and alignment of interest with our partners.",
    ],
    capabilities: [
      "Global Portfolio Construction",
      "Mezzanine & Senior Debt",
      "Special Situations",
      "Market Analysis & Research",
      "Strategic Asset Allocation",
    ],
    anchor: { value: "10+", label: "Countries across four continents" },
  },
  {
    slug: "private-funds",
    title: "Private Funds & REITs",
    subtitle: "Bespoke fund vehicles for institutional partners.",
    image: "/images/hero-1.webp",
    heading: "Tailored Fiduciary Solutions",
    body: [
      "We structure and manage private investment funds tailored to the unique objectives of institutional investors, family offices, and sovereign wealth funds. Our fund management platform offers transparent governance, rigorous reporting, and efficient capital administration.",
      "By aligning our investment strategies with the specific liquidity, risk, and return requirements of our limited partners, we build lasting partnerships based on trust and performance. Our team navigates complex regulatory environments to ensure compliance and optimal tax structuring across jurisdictions.",
      "Our funds and REIT structures provide access to proprietary deal flow and diversified exposure to high-growth real estate markets, managed by a team with a proven track record of fiduciary responsibility.",
    ],
    capabilities: [
      "Fund Structuring & Formation",
      "REIT Advisory & Management",
      "Investor Relations",
      "Regulatory Compliance",
      "Capital Raising",
    ],
    anchor: { value: "6.8%", label: "DIFC residential yield covered in latest report" },
  },
  {
    slug: "asset-management",
    title: "Development & Asset Management",
    subtitle: "Hands-on delivery from acquisition through active management.",
    image: "/images/who-we-are.webp",
    heading: "Proactive Value Preservation",
    body: [
      "Our Asset Management team takes a hands-on approach to every property in our portfolio, focusing on operational excellence and tenant satisfaction. We develop comprehensive business plans for each asset, identifying opportunities to reduce costs, improve sustainability, and enhance revenue.",
      "On development mandates, we oversee the full lifecycle — from acquisition and design through construction management and delivery — collaborating with world-class architects, engineers, and contractors to ensure that every project meets our exacting standards of design excellence and build quality.",
      "From leasing strategy to capital expenditure planning, our goal is to maximise the net operating income and ultimate resale value of every asset we manage.",
    ],
    capabilities: [
      "Operational Optimisation",
      "Leasing Strategy",
      "Tenant Relations",
      "Capital Expenditure Planning",
      "Financial Modeling & Reporting",
    ],
    anchor: { value: "241", label: "Branded residences delivered — Tonino Lamborghini, Al Marjan" },
  },
  {
    slug: "banking",
    title: "Merchant Banking & Operating Companies",
    subtitle: "Capital solutions and strategic acquisitions beyond real estate.",
    image: "/images/iconic_background.jpg",
    heading: "Strategic Partnerships Beyond Real Estate",
    body: [
      "BlackOak evaluates and advises on select operating company opportunities beyond real estate, partnering with institutional investors and family offices on capital solutions, strategic acquisitions, restructurings, and bespoke transactions that require flexible structuring and experienced execution.",
      "Our merchant banking practice extends the firm’s capital-markets discipline into private businesses at inflection points — recapitalisations, growth financings, and complex corporate carve-outs — where sophisticated structuring materially changes outcomes.",
    ],
    capabilities: [
      "Capital Solutions",
      "Strategic Acquisitions",
      "Restructurings",
      "Bespoke Transaction Structuring",
      "Operating Company Advisory",
    ],
    anchor: { value: "$800M+", label: "Venture and growth capital facilitated by senior leadership" },
  },
  {
    slug: "consulting",
    title: "Advisory & Consulting",
    subtitle: "Expert advisory for complex real estate challenges.",
    image: "/images/Dubai_Skyline.jpg",
    heading: "Strategic Real Estate Advisory",
    body: [
      "We offer bespoke consulting services to property owners, investors, and developers facing complex real estate challenges. Our advisory practice leverages our firm’s broad expertise to provide actionable insights and strategic solutions.",
      "Whether assisting with portfolio restructuring, feasibility studies for new developments, or market entry strategies, we provide objective, data-driven advice. We help our clients navigate uncertainty and make informed decisions that align with their long-term business objectives.",
      "Our consulting engagement is defined by a commitment to confidentiality, integrity, and delivering measurable results that drive value for our clients.",
    ],
    capabilities: [
      "Market Feasibility Studies",
      "Portfolio Strategy & Optimisation",
      "Development Advisory",
      "Highest & Best Use Analysis",
      "Transaction Support",
    ],
    anchor: { value: "19+", label: "Years of regional advisory experience" },
  },
];

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
