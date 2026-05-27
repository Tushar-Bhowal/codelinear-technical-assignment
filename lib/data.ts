export type CTA = { label: string; href: string };

// ─── Solutions ────────────────────────────────────────────────────────────────

export type SolutionCard = {
  slug: string;
  title: string;
  body: string;
  /** SVG path in public/assets/solutions/ */
  icon: string;
  /** Natural display width of the icon frame (height is always 49px) */
  iconWidth: number;
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
    iconWidth: 269,
  },
  {
    slug: "loan-management",
    title: "Loan Management System",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
    icon: "/assets/solutions/loan-management.svg",
    iconWidth: 269,
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
