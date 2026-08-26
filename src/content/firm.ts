export const firm = {
  tagline: "Capital Deployed with Conviction.",
  positioning:
    "BlackOak Global is an international investment firm pursuing value-driven opportunities in private equity real estate — delivering institutional-grade returns across the UAE, UK, and select global markets.",
  metrics: [
    { value: "$3B+", label: "Transaction value advised globally" },
    { value: "20+", label: "Transactions and mandates completed" },
    { value: "10+", label: "Countries served" },
    { value: "4", label: "Continents" },
  ],
  values: [
    {
      letter: "I",
      title: "Integrity",
      body: "The highest standards of governance in every relationship, transaction, and outcome.",
    },
    {
      letter: "K",
      title: "Knowledge",
      body: "Foremost market expertise built across two decades of direct principal experience.",
    },
    {
      letter: "E",
      title: "Excellence",
      body: "Rigorous analysis and disciplined execution that stand institutional scrutiny.",
    },
    {
      letter: "A",
      title: "Alignment",
      body: "Structural alignment with client interests — invested alongside, not detached from, outcomes.",
    },
  ],
  timeline: [
    {
      year: "2006",
      body: "Founding partners begin deploying institutional capital across GCC and European real estate.",
    },
    {
      year: "2012",
      body: "Advisory mandates cross $500M in cumulative transaction value; London office established.",
    },
    {
      year: "2018",
      body: "Structured finance and special-situations practice launched; expansion into merchant banking.",
    },
    {
      year: "2022",
      body: "BlackOak Global formalised as a unified international platform under the Dubai flagship.",
    },
    {
      year: "2026",
      body: "$3B+ transaction value advised globally; 10+ countries, 4 continents, one philosophy.",
    },
  ],
  etymology: {
    word: "black·oak",
    ipa: "/ˈblak.oʊk/",
    body: "The Black Oak — Quercus velutina — is a hardwood known for its density, its resistance to rot, and its capacity to endure across generations. The name is chosen with intent.",
  },
  offices: [
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Office 1406, Marina Plaza, Dubai Marina",
      phone: "+971 (0) 4 398 9055",
      image: "/images/dubai-aerial-hero1.jpg",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "71–75 Shelton Street, Covent Garden, London WC2H 9JQ",
      phone: "+44 (0) 203 905 5501",
      image: "/images/london-big-ben.jpg",
    },
  ],
  geographies: ["Dubai", "Abu Dhabi", "London", "Frontier & Emerging Markets"],
} as const;
