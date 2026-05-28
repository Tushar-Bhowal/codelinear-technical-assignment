export type CTA = { label: string; href: string };

// ─── Solutions ────────────────────────────────────────────────────────────────

export type SolutionCard = {
  slug: string;
  title: string;
  body: string;
  /** SVG path in public/assets/solutions/ */
  icon: string;
  /** Natural display width of the icon (height is always 49px) */
  iconWidth: number;
  /** Show "NBFC" badge on the right side of the header row */
  nbfc?: boolean;
};

export const solutionCards: SolutionCard[] = [
  {
    slug: "core-banking",
    title: "Core Banking CB7",
    body: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    icon: "/assets/solutions/core-banking.svg",
    iconWidth: 47,
  },
  {
    slug: "digital-banking",
    title: "Digital Banking N7",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/assets/solutions/digital-banking.svg",
    iconWidth: 47,
  },
  {
    slug: "open-banking",
    title: "Open Banking",
    body: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    icon: "/assets/solutions/open-banking.svg",
    iconWidth: 47,
  },
  {
    slug: "loan-origination",
    title: "Loan Origination System",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/assets/solutions/loan-origination.svg",
    iconWidth: 47,
    nbfc: true,
  },
  {
    slug: "loan-management",
    title: "Loan Management System",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/assets/solutions/loan-management.svg",
    iconWidth: 47,
    nbfc: true,
  },
];

export const heroCopy = {
  heading: "The new foundation of modern banking",
  body: "We drive innovation and growth, provide seamless customer experience and operational excellence",
  primaryCta: { label: "Request Demo", href: "#contact" } satisfies CTA,
  secondaryCta: { label: "Contact Us", href: "#contact" } satisfies CTA,
} as const;

export type TrustedByLogo = {
  name: string;
  src?: string;
  width: number;
  height: number;
};

export const trustedByLogos: TrustedByLogo[] = [
  { name: "Shells", src: "/assets/trusted-by/shells.png", width: 73, height: 19 },
  { name: "SmartFinder", src: "/assets/trusted-by/smartfinder.png", width: 102, height: 19 },
  { name: "Zoomerr", src: "/assets/trusted-by/zoomerr.png", width: 77, height: 19 },
  { name: "ArtVenue", src: "/assets/trusted-by/artvenue.png", width: 96, height: 19 },
  { name: "kontrastr", src: "/assets/trusted-by/kontrastr.png", width: 76, height: 17 },
  { name: "WavesMarathon", src: "/assets/trusted-by/wavesmarathon.png", width: 108, height: 19 },
];

// ─── Cloud Banking ────────────────────────────────────────────────────────────

export const cloudBankingCopy = {
  heading: "A complete cloud-based core banking.",
  body: "Faster time to market with our cloud-based core banking services",
  learnMore: { label: "learn more", href: "#" },
  image: {
    src: "/assets/cloud-banking/dashboard.png",
    width: 631,
    height: 483,
    alt: "CB7 cloud-based core banking dashboard",
  },
} as const;

// ─── Connected System ─────────────────────────────────────────────────────────

export const connectedSystemCopy = {
  heading: "Run a more efficient, flexible, and digitally connected core banking system",
  whatYouGetTitle: "What you will get:",
  items: [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ],
  image: {
    src: "/assets/connected-system/dashboard.png",
    width: 631,
    height: 481,
    alt: "Connected core banking system dashboard",
  },
} as const;

// ─── CTA Banner (reused 3×) ───────────────────────────────────────────────────

export const ctaBannerCopy = {
  heading: "Take the full advantage of going paper-less now.",
  body: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations",
  primaryCta: { label: "Request Demo", href: "#contact" } satisfies CTA,
  secondaryCta: { label: "Contact Us", href: "#contact" } satisfies CTA,
} as const;

// ─── Marquee ──────────────────────────────────────────────────────────────────

export type MarqueeItem = { kind: "brand" | "phrase"; text: string };

export const marqueeItems: MarqueeItem[] = [
  { kind: "brand", text: "N7" },
  { kind: "phrase", text: "Say 👋 to the new way of banking" },
  { kind: "brand", text: "CB7" },
  { kind: "phrase", text: "Say 👋 to the new way of banking" },
];

// ─── Out of the Box ───────────────────────────────────────────────────────────

export type OutOfBoxFeature = {
  title: string;
  body: string;
  bullets: string[];
  image: { src: string; alt: string };
};

export const outOfTheBoxCopy = {
  heading: "Digital banking out-of-the-box",
  body: "N7 helps your financial institution improve the client experience, automate and optimize procedures",
  primaryCta: { label: "Request Demo", href: "#contact" } satisfies CTA,
  learnMore: { label: "learn more", href: "#" },
  features: [
    {
      title: "Fully compliant with regulatory requirement",
      body: "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.",
      bullets: [
        "Pre-integrated Security System",
        "Fully Compliant With Regulatory Requirement",
        "Digitally Connected Core",
      ],
      image: { src: "/assets/out-of-the-box/phone-1.png", alt: "Compliance-first banking" },
    },
    {
      title: "No legacy IT systems",
      body: "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
      bullets: [
        "Adaptive & Intelligent API monetization",
        "Ambient User Experience",
        "Cloud-native With lower TCO",
      ],
      image: { src: "/assets/out-of-the-box/phone-2.png", alt: "No legacy IT" },
    },
    {
      title: "No traditional branches",
      body: "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.",
      bullets: [
        "Branchless & Paperless Banking",
        "Digital Transformation Capability",
        "Optimized, Adoptable and Scalable",
      ],
      image: { src: "/assets/out-of-the-box/phone-3.png", alt: "No traditional branches" },
    },
  ] satisfies OutOfBoxFeature[],
} as const;

// ─── Insights ─────────────────────────────────────────────────────────────────

export type InsightCard = {
  slug: string;
  category: string;
  title: string;
  author: string;
  date: string;
  illustration?: string;
  href: string;
};

export const insightsCopy = {
  eyebrow: "Insights",
  heading: "Get yourself up-to-speed on all the things happening in fintech",
  viewAll: { label: "read all insights", href: "#" },
  cards: [
    {
      slug: "transition-to-digital-bank-1",
      category: "getting started",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
      illustration: "/assets/insights/illustration.svg",
      href: "#",
    },
    {
      slug: "transition-to-digital-bank-2",
      category: "getting started",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
      href: "#",
    },
    {
      slug: "transition-to-digital-bank-3",
      category: "getting started",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
      href: "#",
    },
  ] satisfies InsightCard[],
} as const;

// ─── Case Studies ─────────────────────────────────────────────────────────────

export type CaseStudyCard = {
  slug: string;
  category: string;
  title: string;
  blurb: string;
  illustration: string;
  brand?: string;
  href: string;
};

export const caseStudiesCopy = {
  heading: "Our Case Studies",
  viewAll: { label: "view all", href: "#" },
  cards: [
    {
      slug: "brand-reach-1",
      category: "getting started",
      title: "How we help brand reach out to more people",
      blurb: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation.",
      illustration: "/assets/case-studies/study-1.svg",
      href: "#",
    },
    {
      slug: "brand-reach-2",
      category: "getting started",
      title: "How we help brand reach out to more people",
      blurb: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation.",
      illustration: "/assets/case-studies/study-2.svg",
      href: "#",
    },
    {
      slug: "brand-reach-3",
      category: "getting started",
      title: "How we help brand reach out to more people",
      blurb: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation.",
      illustration: "/assets/case-studies/study-3.svg",
      brand: "Zoomerr",
      href: "#",
    },
  ] satisfies CaseStudyCard[],
} as const;

// ─── Footer ───────────────────────────────────────────────────────────────────

export type FooterAddress = { city: string; lines: string };
export type FooterLinkColumn = { heading: string; links: { label: string; href: string }[] };

export const footerContent = {
  addresses: [
    {
      city: "London",
      lines: "Linktia Infosystems Ltd – CB7,\n26 Main Road Sundridge,TN14 6EP, England, United Kingdom.",
    },
    {
      city: "Dubai",
      lines: "Linktia Infosystems Ltd – CB7,\nJumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers (JLT), Dubai, UAE.",
    },
    {
      city: "India",
      lines: "Linktia Infosystems Ltd – CB7,\nNirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.",
    },
  ] satisfies FooterAddress[],
  linkColumns: [
    {
      heading: "Solutions",
      links: [
        { label: "Core Banking CB7", href: "#solutions" },
        { label: "Digital Banking N7", href: "#solutions" },
        { label: "Open Banking", href: "#solutions" },
        { label: "Loan Origination System", href: "#solutions" },
        { label: "Loan Management System", href: "#solutions" },
        { label: "Digital Transformation", href: "#solutions" },
      ],
    },
    {
      heading: "N7 Banking",
      links: [
        { label: "About Us", href: "#" },
        { label: "Solutions", href: "#solutions" },
        { label: "Contact", href: "#contact" },
        { label: "Company", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Insights", href: "#" },
        { label: "Core Team", href: "#" },
      ],
    },
    {
      heading: "Our Socials",
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "X", href: "#" },
      ],
    },
  ] satisfies FooterLinkColumn[],
  copyright: "Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered in England and Wales] — All rights reserved.",
} as const;
