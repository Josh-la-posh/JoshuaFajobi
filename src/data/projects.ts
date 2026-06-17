export type Project = {
  slug: string;
  company: string;
  role: string;
  period: string;
  stack: string[];
  kind: "case-study" | "snapshot" | "archive";
  title: string;
  summary: string;
  cover?: string;
  links?: { label: string; url: string }[];
  caseStudyHref?: string;
  caseStudyLabel?: string;
  problem?: string[];
  approach?: string[];
  impact?: string[];
};

export const projects: Project[] = [
  {
    slug: "chamsswitch-merchant-ecosystem",
    company: "ChamsSwitch",
    role: "Lead Product Engineer",
    period: "Sept 2024 - Present",
    stack: ["Vite", "TypeScript", "React", "Tailwind"],
    kind: "case-study",
    title: "Building a scalable merchant ecosystem",
    summary:
      "Unified merchant dashboard, admin console, and payment gateway with a shared design system and faster builds.",
    cover: "/images/projects/chamsswitch/cover.png",
    links: [{ label: "Merchant Dashboard", url: "https://www.chamsswitch.com" }],
    problem: [
      "Disjointed dashboards and inconsistent UI across products.",
      "Slow data-heavy pages and manual workflows.",
    ],
    approach: [
      "Modular Vite and React architecture with a shared component library.",
      "Pagination and caching for transaction and settlement data.",
      "Role-based route protection plus responsive, accessible UI patterns.",
    ],
    impact: [
      "~45% faster initial load.",
      "~60% drop in UI bugs after component systemization.",
      "Enabled 3+ gateway features with zero downtime.",
    ],
  },
  {
    slug: "betacare-virtual-health",
    company: "Nitax Technologies Limited",
    role: "Software Engineer",
    period: "Apr 2025 - Dec 2025",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Agora"],
    kind: "case-study",
    title: "Redefining virtual healthcare for students",
    summary:
      "Subscriptions, realtime audio/video consults, shift scheduling, and robust admin workflows.",
    cover: "/images/projects/betacare/cover.png",
    caseStudyHref: "/case-studies/betacare",
    caseStudyLabel: "Read BetaCare case studies",
    links: [{ label: "Website", url: "https://www.betacare.ng" }],
    problem: [
      "Call reliability in low-bandwidth regions.",
      "Manual doctor assignment and limited admin visibility.",
    ],
    approach: [
      "Agora-based call layer with retry and reconnect handling.",
      "Subscription engine and admin tools for shifts, approvals, and referrals.",
      "JWT role auth and offline-first caching for consultation history.",
    ],
    impact: [
      "30% reduction in failed consultations.",
      "15% increase in subscription renewals.",
      "Approval time reduced from hours to minutes.",
    ],
  },
  {
    slug: "pouch-mobile-currency-exchange",
    company: "Pouch",
    role: "Product Engineer",
    period: "May 2024 - Dec 2024",
    stack: ["Flutter", "Vite", "TypeScript"],
    kind: "snapshot",
    title: "Pouch mobile currency exchange app",
    summary:
      "Multi-currency wallets, market offers, instant swaps, withdrawals, identity verification, notifications, and transaction security.",
    caseStudyHref: "/case-studies/pouch",
    caseStudyLabel: "Read Pouch case studies",
    links: [
      { label: "Demo", url: "https://drive.google.com/file/d/1JwM2zEjaf37OFavb_JbDgmLHCd2AnCej/view?usp=sharing" },
    ],
  },
  {
    slug: "touramp-ride-hailing",
    company: "Ride Hailing (Touramp)",
    role: "Mobile Developer",
    period: "Feb 2023 - Aug 2023",
    stack: ["Flutter"],
    kind: "snapshot",
    title: "Driver and customer ride-hailing apps",
    summary:
      "Dual apps for riders and drivers with booking flows, maps, auth, and live trip updates.",
    links: [
      { label: "iOS App", url: "https://apps.apple.com/ng/app/touramp-customer/id6639614324" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.touramp.customerapp" },
    ],
  },
  {
    slug: "oponeko-school-mgt",
    company: "School Management",
    role: "Product Engineer",
    period: "Apr 2022 - Oct 2022",
    stack: ["Vite", "TypeScript"],
    kind: "archive",
    title: "School management platform",
    summary: "Core school operations dashboard and portal for attendance, grading, roles, and ID cards.",
    links: [{ label: "Site", url: "https://www.oponeko.com" }],
  },
  {
    slug: "health-station",
    company: "Health Station",
    role: "Product Engineer",
    period: "Jan 2022 - Jun 2024",
    stack: ["Vite", "TypeScript", "Flutter"],
    kind: "snapshot",
    title: "Consultation apps for hospitals",
    summary:
      "Web and mobile apps for doctor-patient consultations, booking, patient history, and multi-platform care flows.",
    links: [
      { label: "iOS App", url: "https://apps.apple.com/ng/app/fast-care/id6749287064" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.healthstation.fastcare" },
    ],
  },
];
