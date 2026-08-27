export type TeamMember = {
  slug: string;
  name: string;
  title?: string;
  region: string;
  image: string;
  bio: string[];
  linkedin?: string;
};

export type TeamGroup = {
  title: string;
  members: TeamMember[];
};

export const team: TeamGroup[] = [
  {
    title: "Senior Leadership",
    members: [
      {
        slug: "imran-a-sheikh",
        name: "Imran A. Sheikh",
        title: "Founder & Chief Executive Officer",
        region: "UAE / UK",
        image: "/team/imran-a-sheikh.png",
        linkedin: "https://www.linkedin.com/in/imranalisheikh/",
        bio: [
          "Imran is the founder and CEO of BlackOak Global, an international investment and real estate platform. He brings close to two decades of investment experience specialising in acquisitions and asset management across Europe and the Middle East. Imran has directly acquired more than $1 billion worth of real estate and further facilitated venture capital and growth-stage investments in excess of $800 million in a variety of sectors including real estate, technology, beauty, education, and consulting.",
          "Imran has held key senior-level positions both in the private and public sectors, including previously as the Chief Investment Officer for an investment fund which is building the largest publicly traded real-estate portfolio in the Middle East; as Chief Investment Officer at Dubai Healthcare City, overseeing the investment strategy for the Free Zone; and as Managing Director of Investments for a prominent Saudi family office where he was responsible for diversified investments across the UK, the US and the Middle East.",
          "Imran received an MBA in Finance from London Business School. He sits on a number of boards and is a regular speaker at investment conferences and events around the world.",
        ],
      },
      {
        slug: "timothy-lipton",
        name: "Timothy Lipton",
        title: "Founding Partner",
        region: "UK",
        image: "/team/timothy-lipton.png",
        linkedin: "https://www.linkedin.com/in/tim-lipton-82b90785/",
        bio: [
          "Timothy (“Tim”) Lipton is a founding partner and shareholder of BlackOak Global. Tim brings over two decades of real estate experience spanning retail, commercial and residential development.",
          "Tim has spent most of his professional career prudently selecting value-add and opportunistic real estate deals whereby he has increased private and investor capital consecutively over this period. He was previously the founder of MITMAS Property Group and served as the CEO. In his role at MITMAS, Tim successfully acquired and exited numerous real estate deals across the UK.",
          "Tim further oversees and advises on a substantial family real estate portfolio across London. Tim has built an extensive professional network in the real estate sector and is recognized as a leader in the industry.",
        ],
      },
    ],
  },
  {
    title: "Management Team",
    members: [
      {
        slug: "sudhir-morar",
        name: "Sudhir Morar",
        title: "Global Head, Capital Markets, Structured Finance & Special Situations",
        region: "UAE / USA",
        image: "/team/sudhir-morar.jpg",
        bio: [
          "Sudhir is Global Head of Capital Markets, Structured Finance and Special Situations at BlackOak Global. He brings extensive experience across capital markets, structured finance, private equity and strategic advisory, specialising in the origination, structuring and execution of complex transactions. He has worked with entrepreneurs, sponsors, family offices, institutional investors and operating companies across multiple sectors and jurisdictions, with particular depth in technology and growth businesses.",
          "Sudhir has held senior executive and board positions in both private and publicly listed companies. He has taken companies public, raised capital and led transactions involving company formation, strategic acquisitions, financing structures and corporate growth. His experience provides him with a practical understanding of corporate governance, shareholder considerations and the execution requirements of both private and public markets.",
          "At BlackOak Global, Sudhir leads senior deal origination, structured financing, special situations and merchant banking advisory. He drives complex mandates from initial opportunity through execution, bringing together capital, strategic relationships and commercial judgement to deliver financing and investment solutions for founders, sponsors, family offices and institutional counterparties.",
        ],
      },
      {
        slug: "abbas-junejo",
        name: "Abbas Junejo",
        title: "Head of Research & Development Strategy",
        region: "UAE",
        image: "/team/abbas-junejo.jpg",
        bio: [
          "Abbas is a seasoned real estate professional with over eight years of experience across capital markets, private equity, and development consulting, operating across the US, Europe, MENA, Central Asia, and South Asia. Throughout his career, he has underwritten and provided strategic advisory for projects spanning the entire risk spectrum, from core assets to opportunistic investments totaling over USD 10 billion, with sectoral expertise across residential, office, retail, hospitality, seniors housing, and student housing.",
          "Abbas possesses a comprehensive background in real estate transaction advisory having advised on projects globally including a USD 300 million office portfolio recapitalization in Washington, DC, acquisition of a USD 140 million office transaction in Manhattan, and others, managing workstreams including joint venture structuring, due diligence, lease analysis, and more.",
          "Abbas holds a Masters in real estate from Georgetown University, and a Bachelors in international relations from Tufts University.",
        ],
      },
      {
        slug: "samir-saddy",
        name: "Samir Saddy",
        title: "Head of International Strategic Advisory",
        region: "UAE",
        image: "/team/samir-saddy.jpg",
        bio: [
          "Samir is a Chartered Accountant with extensive experience in real estate advisory, financial engineering, and strategic consulting across the GCC and Asia-Pacific regions. Throughout his career, he has served as a trusted advisor to government entities, master developers, private equity funds, and corporations, delivering high-impact strategies ranging from localized asset optimizations to large-scale urban master plans.",
          "Samir has a wealth of experience in real estate investments and advisory, having founded Stratlinx Advisory, and leading the Investments Team at SEE Holding, where he directed real estate and sustainability investment activities. His deep advisory background includes six years with Knight Frank’s strategy consulting practice operating across the UAE, KSA, and India.",
          "A specialist in financial viability and operational efficiency, Samir has successfully structured complex infrastructure models including a major Public-Private Partnership railway station redevelopment in Delhi, and has pioneered asset management framework templates for the Abu Dhabi City Municipality’s Investment Office.",
        ],
      },
      {
        slug: "sarah-malik",
        name: "Sarah Malik",
        title: "Legal",
        region: "UAE",
        image: "/team/no-image.svg",
        bio: ["Profile coming soon."],
      },
    ],
  },
  {
    title: "Advisory Board",
    members: [
      {
        slug: "simon-townsend",
        name: "Simon Townsend",
        region: "UAE / UK",
        image: "/team/simon-townsend.jpg",
        linkedin: "https://www.linkedin.com/in/simon-townsend-882b6812/",
        bio: [
          "Simon is a Chartered Surveyor with more than 28 years of real estate investment and advisory experience — more than 23 years internationally, particularly focused on the Middle East. Simon has established and led multi-discipline real estate teams, including leading Advisory at CBRE in the Middle East for 10 years and founding CBRE Saudi Arabia.",
          "Simon has undertaken more than US$1.5 billion of local, regional, and international real estate investment transactions across Europe, Asia, and the United States for institutional and private investors, sovereign wealth funds, and prominent ruling and local families. He has advised on due diligence, appraisal, investment structuring, portfolio optimization, and expert witness engagements on deals valued in excess of US$3 billion.",
        ],
      },
      {
        slug: "miriam-kiwan",
        name: "Miriam Kiwan",
        region: "UAE / UK",
        image: "/team/miriam-kiwan.jpg",
        linkedin: "https://www.linkedin.com/in/miriamkiwan/",
        bio: [
          "Miriam held strategic roles in technology and financial services across the Middle East and Europe. She led the development of the digital asset ecosystem and tech entrepreneurship initiatives at Abu Dhabi Global Market (ADGM), working closely with government entities, investors, and ecosystem enablers to improve access to funding, markets, and talent in the UAE.",
          "She holds a Global EMBA from TRIUM — a joint executive program by the London School of Economics, NYU Stern, and HEC Paris — and completed a blockchain program at Berkeley Haas School of Business.",
        ],
      },
      {
        slug: "ihsan-al-marzooqi",
        name: "Ihsan Al Marzooqi",
        region: "UAE",
        image: "/team/ihsan-al-marzooqi.jpg",
        bio: ["Profile coming soon."],
      },
      {
        slug: "elaine-foo",
        name: "Elaine Foo",
        region: "UK",
        image: "/team/elaine-foo.jpg",
        linkedin: "https://www.linkedin.com/in/elaine-foo-308b6229/",
        bio: [
          "Elaine has over 25 years of experience in finance, including senior trading, investment banking, and wealth management roles at Merrill Lynch in London and Paris. Before that, she advised the Bronfman family on private equity transactions and held senior roles at Lehman Brothers, McKinsey, and Wasserstein Perella in the US and Europe.",
          "Before moving to Europe, Elaine served as COO for one of Hong Kong’s largest family offices. She began her career at Edmond Safra’s family office in real estate private equity in the former Soviet Union.",
          "Elaine holds an Economics degree from Harvard University and speaks six languages.",
        ],
      },
      {
        slug: "michael-atzmon",
        name: "Michael Atzmon",
        region: "Global",
        image: "/team/michael-atzmon.jpg",
        bio: [
          "Michael is a senior advisor operating across global finance, mergers & acquisitions, and strategic luxury goods partnerships. Through his executive advisory platform, he supports principals, founders, and institutional partners on cross-border transactions and high-touch private investment opportunities.",
          "His work spans capital introductions, deal structuring, and bespoke partnership development for ventures and operating businesses at the intersection of finance and the luxury sector.",
        ],
      },
      {
        slug: "sarah-walker",
        name: "Sarah Walker",
        region: "UK",
        image: "/team/sarah-walker.jpg",
        linkedin: "https://www.linkedin.com/in/sarahjwalker/",
        bio: [
          "Sarah is an experienced private equity investor and non-executive director specializing in value creation for mid-market private equity funds and portfolio companies. Most recently, she led investment and portfolio management in the UK & Ireland for Bluegem Capital Partners LLP.",
          "Sarah has also held senior roles at Bridgepoint Group plc and Centrica plc, and began her career in Corporate Finance at Deloitte LLP, where she qualified as a Chartered Accountant.",
          "She holds an MA in Economics from Cambridge University, an MSc in Management Research from Oxford University, and an Executive MBA with Distinction from London Business School.",
        ],
      },
    ],
  },
  {
    title: "Asia Leadership",
    members: [
      {
        slug: "lionel-leo",
        name: "Lionel Leo",
        region: "Asia",
        image: "/team/lionel-leo.png",
        linkedin: "https://www.linkedin.com/in/lionel-leo-824432a/",
        bio: ["Profile coming soon."],
      },
    ],
  },
];
