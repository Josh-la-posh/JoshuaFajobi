// src/data/resume.ts
import { projects } from "@/lib/data";

export type JsonResume = {
  $schema?: string;
  basics: {
    name: string;
    label?: string;
    email?: string;
    phone?: string;
    url?: string;
    location?: { city?: string; countryCode?: string };
    summary?: string;
    profiles?: { network: string; username?: string; url?: string }[];
  };
  work: {
    name: string;
    position: string;
    url?: string;
    startDate?: string; // YYYY-MM
    endDate?: string;   // YYYY-MM or undefined for present
    summary?: string;
    highlights?: string[];
  }[];
  projects?: {
    name: string;
    description?: string;
    keywords?: string[];
    url?: string;
    highlights?: string[];
    roles?: string[];
  }[];
  skills?: {
    name: string;
    keywords: string[];
  }[];
  education?: {
    institution: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
  }[];
};

export const resume: JsonResume = {
  $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  basics: {
    name: "Joshua Fajobi",
    label: "Frontend Engineer (Web & Mobile)",
    email: "you@email.com",
    phone: "+234-000-000-0000",
    url: "https://your-portfolio.com",
    location: { city: "Lagos", countryCode: "NG" },
    summary:
      "Frontend engineer focused on performant, accessible product experiences. React (Vite/Next.js), TypeScript, Flutter. Comfortable owning UI architecture, DX, and shipping outcomes.",
    profiles: [
      { network: "LinkedIn", url: "https://linkedin.com/in/your-handle" },
      { network: "GitHub", url: "https://github.com/your-handle" },
      { network: "X/Twitter", url: "https://twitter.com/your-handle" },
    ],
  },

  work: [
    {
      name: "ChamsSwitch",
      position: "Lead Frontend Developer",
      url: "https://merchant.pelpay.ng",
      startDate: "2024-09",
      endDate: undefined,
      summary:
        "Lead FE across merchant dashboard, admin console, and payment gateway.",
      highlights: [
        "Shared component system with Vite + TS",
        "Faster data-heavy pages via pagination & caching",
        "Role-based protection, responsive & accessible UI",
      ],
    },
    {
      name: "BetaCare",
      position: "Fullstack Developer",
      url: "https://www.betacare.ng",
      startDate: "2025-04",
      endDate: undefined,
      summary:
        "Telehealth subscriptions, audio/video consults, shift scheduling & admin ops.",
      highlights: [
        "30% reduction in failed consultations",
        "15% increase in subscription renewals",
        "Agora calls, Node.js APIs, Postgres, AWS",
      ],
    },
    {
      name: "Currency Exchange",
      position: "Frontend Developer",
      startDate: "2024-05",
      endDate: "2024-12",
      summary:
        "Flutter mobile app + React admin with real-time rates & offline caching.",
      highlights: [
        "Historical charts & favorites",
        "Secure auth & robust error states",
      ],
    },
    {
      name: "Ride Hailing (Touramp)",
      position: "Mobile Developer",
      url: "https://apps.apple.com/ng/app/touramp-customer/id6639614324",
      startDate: "2023-02",
      endDate: "2023-08",
      summary: "Driver & customer apps (Uber-like).",
      highlights: ["Live trips & booking flows"],
    },
    {
      name: "Bimbs Tech",
      position: "Frontend Developer",
      url: "https://www.oponeko.com",
      startDate: "2022-04",
      endDate: "2022-10",
      summary: "School management platform.",
      highlights: ["React + Vite + Tailwind"],
    },
    {
      name: "Health Station",
      position: "Frontend Developer",
      startDate: "2022-01",
      endDate: "2024-06",
      summary:
        "Web & mobile apps for doctor–patient consultation, booking & history.",
      highlights: ["React + Flutter; iOS app in store"],
    },
  ],

  projects: projects.map((p) => ({
    name: p.title,
    description: p.description,
    keywords: p.stack,
    url: p.links?.[0]?.href,
    highlights: p.impact,
  })),

  skills: [
    { name: "Frontend", keywords: ["React", "Vite", "Next.js", "TypeScript", "Tailwind"] },
    { name: "Mobile", keywords: ["Flutter", "GetX", "Offline caching"] },
    { name: "Backend (working knowledge)", keywords: ["Node.js", "PostgreSQL", "REST", "AWS"] },
    { name: "Tooling", keywords: ["TanStack Query", "Zustand", "MSW", "Sentry"] },
  ],

  education: [
    // Optional
  ],
};
