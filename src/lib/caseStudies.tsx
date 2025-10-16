export type CSStat = { label: string; value: string; sub?: string };
export type CSMedia = { src: string; alt: string; caption?: string; aspect?: string }; // aspect: e.g. "16/9"
export type CSStep = { title: string; detail?: string; media?: CSMedia };

export type CaseStudy = {
  slug: string;
  title: string;
  client?: string;
  period?: string;
  role?: string;
  summary: string;
  tags: string[];
  hero?: CSMedia;
  // sections
  problem: string;
  constraints?: string[];
  approach: CSStep[];
  result: {
    narrative: string;
    stats?: CSStat[];
  };
  quote?: {
    text: string;
    author?: string;
    role?: string;
  };
  links?: { label: string; href: string }[];
  // optional SEO overrides
  seo?: {
    title?: string;
    description?: string;
    image?: string; // og image
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "betacare-telehealth",
    title: "BetaCare — Telehealth Platform",
    client: "BetaCare",
    period: "2024 — Present",
    role: "Full-stack (Next.js + Node + Flutter)",
    summary:
      "Built end-to-end doctor–patient consults: subscriptions, A/V calls, chat, shift scheduling, and an admin portal.",
    tags: ["Next.js", "Node", "PostgreSQL", "Agora", "Flutter"],
    hero: { src: "/cs/betacare-hero.png", alt: "BetaCare hero mock" },
    problem:
      "BetaCare needed a reliable telehealth workflow with paid subscriptions, shift-based scheduling, and secure A/V—under tight timelines.",
    constraints: [
      "Unreliable end-user networks (bandwidth variability)",
      "Secure patient data & role-based access",
      "Doctor scheduling constraints",
    ],
    approach: [
      {
        title: "Defined core domain flows",
        detail:
          "Mapped patient lifecycle: register → subscribe → consult → follow-up; aligned roles (admin, doctor, patient).",
      },
      {
        title: "A/V with Agora + resilient UI",
        detail:
          "Integrated Agora for audio/video; added pre-call checks, reconnection handling, and network-aware fallbacks.",
      },
      {
        title: "Shift scheduling & admin ops",
        detail:
          "Created admin portal for doctor approvals, shift creation, and student verification; added dashboards & alerts.",
      },
      {
        title: "Chat & notifications",
        detail:
          "Implemented real-time chat with optimistic updates, delivery/read receipts, and push/email notifications.",
      },
    ],
    result: {
      narrative:
        "Shipped a stable MVP, then iterated to production: improved consult completion, reduced support tickets, and enabled new revenue via subscriptions.",
      stats: [
        { label: "Consult Completion", value: "+28%" },
        { label: "Support Tickets", value: "-35%" },
        { label: "Time to Book", value: "-40%", sub: "with shift scheduling" },
      ],
    },
    quote: {
      text:
        "We delivered care to more patients in weeks than we expected in months. The reliability of calls surprised us.",
      author: "Product Lead, BetaCare",
    },
    links: [
      { label: "Project Overview", href: "/projects" },
      // { label: "Live (internal)", href: "#" },
    ],
    seo: {
      title: "Case Study — BetaCare Telehealth",
      description:
        "Subscriptions, A/V calls, chat, shift scheduling, and admin portal for a telehealth platform.",
      image: "/cs/betacare-hero.png",
    },
  },

  {
    slug: "chamsswitch-merchant",
    title: "ChamsSwitch — Merchant Platform",
    client: "ChamsSwitch",
    period: "2025",
    role: "Lead Frontend Engineer",
    summary:
      "Merchant onboarding, payment dashboards, and gateway flows with a shared UI kit and performance budgets.",
    tags: ["React", "TypeScript", "Zustand", "TanStack Query", "Tailwind"],
    hero: { src: "/cs/chams-hero.png", alt: "ChamsSwitch dashboard" },
    problem:
      "Existing dashboards were slow and fragmented across domains; onboarding was manual and error-prone.",
    approach: [
      {
        title: "Design System & App Shell",
        detail:
          "Built a shared UI kit (inputs, tables, modals, themes) and a responsive shell with role-based routes.",
      },
      {
        title: "Data layer consolidation",
        detail:
          "Normalized API calls with TanStack Query, error handling, and optimistic updates; added toasts and retries.",
      },
      {
        title: "Onboarding flow",
        detail:
          "Reduced merchant onboarding to a guided multi-step flow, form validation, and document checks.",
      },
      {
        title: "Perf & DX",
        detail:
          "Implemented route-level code-splitting, memoized heavy tables, and a tidy folder structure for velocity.",
      },
    ],
    result: {
      narrative:
        "Unified merchant experience, faster load times, and fewer support escalations around onboarding and reconciliation.",
      stats: [
        { label: "Onboarding Time", value: "-40%" },
        { label: "Bundle Size", value: "-25%" },
        { label: "UI Consistency", value: "Systematized", sub: "across apps" },
      ],
    },
  },
];
