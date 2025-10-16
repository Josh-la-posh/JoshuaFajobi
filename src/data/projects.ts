// src/data/projects.ts
export type Project = {
  slug: string;
  company: string;
  role: string;
  period: string;
  stack: string[];
  kind: "case-study" | "snapshot" | "archive";
  title: string;
  summary: string;
  cover?: string; // public path e.g. /images/projects/chamsswitch/cover.png
  links?: { label: string; url: string }[];
  // case-study–only
  problem?: string[];
  approach?: string[];
  impact?: string[];
};

export const projects: Project[] = [
  {
    slug: "chamsswitch-merchant-ecosystem",
    company: "ChamsSwitch",
    role: "Lead Frontend Developer",
    period: "Sept 2024 – Present",
    stack: ["Vite", "TypeScript", "React", "Tailwind"],
    kind: "case-study",
    title: "Building a scalable merchant ecosystem",
    summary:
      "Unified merchant dashboard, admin console, and payment gateway with a shared design system and faster builds.",
    cover: "/images/projects/chamsswitch/cover.png",
    links: [
      { label: "Merchant Dashboard", url: "https://merchant.pelpay.ng" },
      // { label: "Admin", url: "https://admin.pelpay.ng" } // add if public
    ],
    problem: [
      "Disjointed dashboards and inconsistent UI across products.",
      "Slow data-heavy pages and manual workflows."
    ],
    approach: [
      "Modular Vite+React architecture with shared component library.",
      "Pagination/caching for transaction + settlement data.",
      "Role-based route protection and responsive, accessible UI."
    ],
    impact: [
      "≈45% faster initial load.",
      "≈60% drop in UI bugs after component systemization.",
      "Enabled 3+ gateway features with zero downtime."
    ],
  },
  {
    slug: "betacare-virtual-health",
    company: "BetaCare",
    role: "Fullstack Developer",
    period: "Apr 2025 – Present",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Agora"],
    kind: "case-study",
    title: "Redefining virtual healthcare for students",
    summary:
      "Subscriptions, realtime audio/video consults, shift scheduling, and robust admin workflows.",
    cover: "/images/projects/betacare/cover.png",
    links: [
      { label: "Website", url: "https://www.betacare.ng" },
      // { label: "Mobile", url: "…" }
    ],
    problem: [
      "Call reliability in low-bandwidth regions.",
      "Manual doctor assignment & limited admin visibility."
    ],
    approach: [
      "Agora-based call layer with retry/reconnect.",
      "Subscription engine + admin tools for shifts and approvals.",
      "JWT role auth & offline-first caching for history."
    ],
    impact: [
      "30% reduction in failed consultations.",
      "15% increase in subscription renewals.",
      "Approval time reduced from hours to minutes."
    ],
  },
  {
    slug: "currency-exchange",
    company: "Currency Exchange",
    role: "Frontend Developer",
    period: "May 2024 – Dec 2024",
    stack: ["Flutter", "Vite", "TypeScript"],
    kind: "snapshot",
    title: "Currency conversion app + admin",
    summary:
      "Realtime rates, historical charts, favorites, secure auth, offline caching, and a clean admin dashboard.",
    links: [
      { label: "Demo (Drive)", url: "https://drive.google.com/file/d/1JwM2zEjaf37OFavb_JbDgmLHCd2AnCej/view?usp=sharing" },
    ],
  },
  {
    slug: "touramp-ride-hailing",
    company: "Ride Hailing (Touramp)",
    role: "Mobile Developer",
    period: "Feb 2023 – Aug 2023",
    stack: ["Flutter"],
    kind: "snapshot",
    title: "Driver + customer apps (Uber-like)",
    summary:
      "Dual apps for riders/drivers with booking flows and live trip updates.",
    links: [
      { label: "iOS App", url: "https://apps.apple.com/ng/app/touramp-customer/id6639614324" },
    ],
  },
  {
    slug: "oponeko-school-mgt",
    company: "School Management",
    role: "Frontend Developer",
    period: "Apr 2022 – Oct 2022",
    stack: ["Vite", "TypeScript"],
    kind: "archive",
    title: "School management platform",
    summary: "Core school operations dashboard and portal.",
    links: [{ label: "Site", url: "https://www.oponeko.com" }],
  },
  {
    slug: "health-station",
    company: "Health Station",
    role: "Frontend Developer",
    period: "Jan 2022 – Jun 2024",
    stack: ["Vite", "TypeScript", "Flutter"],
    kind: "snapshot",
    title: "Consultation apps for hospitals",
    summary:
      "Web + mobile apps for doctor–patient consultations, booking, and history.",
    links: [
      { label: "iOS App", url: "https://apps.apple.com/ng/app/fast-care/id6749287064" },
      // { label: "Android", url: "…" }
    ],
  },
];
