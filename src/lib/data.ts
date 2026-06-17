export type Project = {
  title: string;
  company?: string;
  period?: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
  impact?: string[];
};

export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  stack?: string[];
};

export const projects: Project[] = [
  {
    title: "ChamsSwitch Merchant Platform",
    period: "2024 - Present",
    description:
      "Lead Product Engineer for payment dashboards, gateway flows, and merchant onboarding.",
    stack: ["React", "TypeScript", "TanStack Query", "Zustand", "Tailwind"],
    impact: [
      "Reduced onboarding time by ~40% via streamlined flows.",
      "Improved dashboard performance with lighter bundles and faster data views.",
    ],
  },
  {
    title: "BetaCare - Telehealth (Web + Mobile)",
    company: "Nitax Technologies Limited",
    period: "2025 (Contract)",
    description:
      "Full-stack work on doctor-patient consults: subscriptions, audio/video calls, chat, shift scheduling, and admin portal.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Agora", "Flutter"],
    impact: [
      "Launched shift-based consults and referrals to improve session completion.",
      "Built admin dashboard for approvals, subscriptions, student verification, and analytics.",
    ],
  },
  {
    title: "Pouch Mobile Currency Exchange App",
    company: "TechNest",
    period: "2024",
    description:
      "Flutter app for multi-currency wallets, market offers, instant swaps, withdrawals, identity verification, notifications, and transaction security.",
    stack: ["Flutter", "GetX", "Dio", "Smile ID", "Firebase Messaging"],
    links: [{ label: "Case Study", href: "/case-studies/pouch-fintech-platform" }],
    impact: ["Cache-first wallet and transaction behavior for a faster financial app experience."],
  },
  {
    title: "Ride-Hailing (GG Consult)",
    period: "2023",
    description:
      "Driver and rider apps similar to Uber, covering maps, trips, payments, auth, and profiles.",
    stack: ["Flutter", "Firebase/REST"],
  },
  {
    title: "School Management (Bimbs Tech)",
    period: "2022",
    description:
      "Web app for school operations, including attendance, grading, ID cards, and role-based access.",
    stack: ["React", "Vite", "Tailwind"],
  },
];

export const experience: Experience[] = [
  {
    company: "ChamsSwitch Limited",
    role: "Lead Product Engineer",
    type: "Full Time",
    period: "Sep 2024 - Present",
    location: "Hybrid",
    bullets: [
      "Lead product engineering across merchant dashboards, payment gateway flows, and internal tools.",
      "Own platform workflows, shared components, performance budgets, and delivery standards.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Tailwind", "CI/CD"],
  },
  {
    company: "Nitax Technologies Limited",
    role: "Software Engineer (Contract)",
    type: "Contract",
    period: "Apr 2025 - Dec 2025",
    location: "Remote",
    bullets: [
      "Built telehealth subscriptions, consult flows, audio/video calls, chat, and shift scheduling.",
      "Delivered admin dashboards for approvals, referrals, verification, subscriptions, and analytics.",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Agora", "Flutter"],
  },
  {
    company: "MostHigh Service Concept",
    role: "Mechanical Design Engineer (AutoCAD)",
    type: "Full Time",
    period: "Aug 2023 - Jan 2024",
    location: "On-site",
    bullets: [
      "Created detailed mechanical drawings for HVAC and plumbing systems with AutoCAD.",
    ],
  },
  {
    company: "GG Consult",
    role: "Mobile Developer (Flutter)",
    type: "Contract",
    period: "Feb 2023 - Aug 2023",
    location: "Remote",
    bullets: ["Built ride-hailing apps for drivers and riders with booking and live trip flows."],
    stack: ["Flutter"],
  },
  {
    company: "Health Station Ltd",
    role: "Product Engineer (React, Flutter)",
    type: "NYSC to Full Time",
    period: "Jan 2022 - Jun 2024",
    location: "Hybrid",
    bullets: [
      "Worked on hospital web and mobile apps, then owned product features end to end.",
    ],
    stack: ["React", "Flutter"],
  },
  {
    company: "Bimbs Tech",
    role: "Product Engineer (React, Vite, Tailwind)",
    type: "Contract",
    period: "Apr 2022 - Oct 2022",
    location: "Remote",
    bullets: ["Built school management modules for attendance, grading, roles, and ID cards."],
  },
];

export const skills = {
  frontend: ["React", "Next.js", "Flutter", "TypeScript", "Zustand", "Tailwind", "TanStack Query"],
  backend: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "AWS (basic)"],
  practices: ["Clean UI", "Design Systems", "Performance", "DX", "Accessibility"],
};
