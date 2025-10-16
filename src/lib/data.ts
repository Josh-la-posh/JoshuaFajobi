export type Project = {
  title: string;
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
    period: "2024 — Present",
    description:
      "Lead Frontend Engineer for payment dashboards, gateway flows, and merchant onboarding.",
    stack: ["React", "TypeScript", "TanStack Query", "Zustand", "Tailwind"],
    impact: [
      "Reduced onboarding time by ~40% via streamlined flows",
      "Improved dashboard performance (TTFB↓, bundle↓)",
    ],
  },
  {
    title: "BetaCare — Telehealth (Web + Mobile)",
    period: "2025 (Contract)",
    description:
      "Full-stack work on doctor–patient consults: subscriptions, audio/video (Agora), chat, shift scheduling, admin portal.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Agora", "Flutter"],
    impact: [
      "Launched shift-based consult & referrals, boosted session completion",
      "Admin dashboard for approvals, subscriptions, student verification",
    ],
  },
  {
    title: "Currency Exchange App",
    period: "2024",
    description:
      "Flutter app with real-time rates, historical charts, offline cache, and secure auth.",
    stack: ["Flutter", "GetX", "REST", "Charts"],
    impact: ["Offline-first UX for low-network regions"],
  },
  {
    title: "Ride-Hailing (GG Consult)",
    period: "2023",
    description:
      "Driver & rider apps similar to Uber. Maps, trips, payments, auth, profile.",
    stack: ["Flutter", "Firebase/REST"],
  },
  {
    title: "School Management (Bimbs Tech)",
    period: "2022",
    description:
      "Web app for schools: attendance, grading, ID cards, and roles.",
    stack: ["React", "Vite", "Tailwind"],
  },
];

export const experience: Experience[] = [
  {
    company: "ChamsSwitch Limited",
    role: "Lead Frontend Engineer",
    type: "Full Time",
    period: "Sep 2024 — Present",
    location: "Hybrid",
    bullets: [
      "Merchant dashboards, payment gateway, and internal tools.",
      "Front-end architecture, design systems, and performance budgets.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Tailwind", "CI/CD"],
  },
  {
    company: "BetaCare",
    role: "Full-stack Engineer (Contract)",
    type: "Contract",
    period: "Apr 2025 — Sep 2025",
    location: "Remote",
    bullets: [
      "Built end-to-end telehealth: subscriptions, consults, A/V calls, chat, shifts.",
      "Admin dashboards: approvals, referrals, verification & analytics.",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Agora", "Flutter"],
  },
  {
    company: "MostHigh Service Concept",
    role: "Mechanical Design Engineer (AutoCAD)",
    type: "Full Time",
    period: "Aug 2023 — Jan 2024",
    location: "On-site",
    bullets: [
      "Created detailed mechanical drawings (HVAC, plumbing) with AutoCAD.",
    ],
  },
  {
    company: "GG Consult",
    role: "Mobile Developer (Flutter)",
    type: "Contract",
    period: "Feb 2023 — Aug 2023",
    location: "Remote",
    bullets: ["Built ride-hailing apps for drivers and riders."],
    stack: ["Flutter"],
  },
  {
    company: "Health Station Ltd",
    role: "Frontend Developer (React, Flutter)",
    type: "NYSC → Full Time",
    period: "Jan 2022 — Jun 2024",
    location: "Hybrid",
    bullets: [
      "Worked with senior devs on hospital apps; later owned projects end-to-end.",
    ],
    stack: ["React", "Flutter"],
  },
  {
    company: "Bimbs Tech",
    role: "Frontend Developer (React, Vite, Tailwind)",
    type: "Contract",
    period: "Apr 2022 — Oct 2022",
    location: "Remote",
    bullets: ["School management platform."],
  },
];

export const skills = {
  frontend: ["React", "Next.js", "Flutter", "TypeScript", "Zustand", "Tailwind", "TanStack Query"],
  backend: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "AWS (basic)"],
  practices: ["Clean UI", "Design Systems", "Performance", "DX", "Accessibility"],
};
