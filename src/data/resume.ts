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
    availability?: string;
    workAuthorization?: string;
  };
  work: {
    name: string;
    position: string;
    url?: string;
    startDate?: string;
    endDate?: string;
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
  products?: {
    name: string;
    platform: string;
    description?: string;
    url?: string;
    stack?: string[];
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
  achievements?: string[];
  certifications?: { name: string; issuer?: string; date?: string; url?: string }[];
  languages?: { language: string; fluency?: string }[];
};

export const resume: JsonResume = {
  $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  basics: {
    name: "Joshua Fajobi",
    label: "Full-Stack Product Engineer | Fintech, Healthcare, SaaS",
    email: "joshuamayowa23@yahoo.com",
    phone: "+2348102513974",
    url: "https://joshua-fajobi.vercel.app/",
    location: { city: "Lagos", countryCode: "NG" },
    summary:
      "Full-Stack Product Engineer with 4+ years of experience shipping fintech, healthcare, SaaS, and internal operations platforms. I build payment systems, healthcare enrollment flows, telehealth products, subscription workflows, dashboards, mobile apps, and API-backed business systems.",
    profiles: [
      { network: "LinkedIn", url: "https://www.linkedin.com/in/jfajobi/" },
      { network: "GitHub", url: "https://github.com/Josh-la-posh" },
      { network: "Portfolio", url: "https://joshua-fajobi.vercel.app/" },
    ],
    availability: "Open to remote and hybrid roles across EMEA",
    workAuthorization: "Eligible to work in Nigeria; available for global remote collaboration",
  },

  work: [
    {
      name: "ChamsSwitch",
      position: "Lead Product Engineer",
      url: "https://www.chamsswitch.com/",
      startDate: "2024-09",
      summary:
        "Led product engineering across merchant dashboard, admin console, payment gateway, and shared UI systems.",
      highlights: [
        "Built shared Vite, React, TypeScript, and Tailwind component patterns across product surfaces.",
        "Improved data-heavy pages with pagination, caching, and clearer loading/error states.",
        "Implemented role-based route protection and responsive, accessible UI flows.",
      ],
    },
    {
      name: "Nitax Technologies Limited",
      position: "Software Engineer",
      url: "https://www.betacare.ng",
      startDate: "2025-04",
      endDate: "2025-12",
      summary:
        "Built telehealth subscriptions, doctor-patient consults, audio/video calls, scheduling, and admin operations.",
      highlights: [
        "Reduced failed consultations by 30% through call reliability and reconnect improvements.",
        "Helped increase subscription renewals by 15% with clearer flows and admin visibility.",
        "Worked across Next.js, Flutter, Node.js APIs, PostgreSQL, AWS, and Agora.",
      ],
    },
    {
      name: "Pouch",
      position: "Product Engineer",
      startDate: "2024-05",
      endDate: "2024-12",
      summary:
        "Built a Flutter mobile currency exchange app for wallets, offers, swaps, withdrawals, verification, and transaction security.",
      highlights: [
        "Delivered multi-currency wallets, market offers, negotiations, instant swaps, and withdrawal flows.",
        "Implemented cache-first wallet data, Smile ID verification, Firebase notifications, biometrics, and transaction PIN flows.",
      ],
    },
    {
      name: "Ride Hailing (Touramp)",
      position: "Mobile Developer",
      url: "https://apps.apple.com/ng/app/touramp-customer/id6639614324",
      startDate: "2023-02",
      endDate: "2023-08",
      summary: "Built driver and customer Flutter apps for ride booking and live trip flows.",
      highlights: ["Delivered booking, profile, maps, and trip-state experiences."],
    },
    {
      name: "Bimbs Tech",
      position: "Product Engineer",
      url: "https://www.oponeko.com",
      startDate: "2022-04",
      endDate: "2022-10",
      summary: "Built school management modules with React, Vite, and Tailwind.",
      highlights: ["Worked on attendance, grading, roles, and school portal flows."],
    },
    {
      name: "Health Station",
      position: "Product Engineer",
      startDate: "2022-01",
      endDate: "2024-06",
      summary:
        "Built web and mobile apps for doctor-patient consultation, booking, and patient history.",
      highlights: ["Worked across React and Flutter, including multi-platform care workflows."],
    },
  ],

  projects: projects.map((p) => ({
    name: p.title,
    description: p.description,
    keywords: p.stack,
    url: p.links?.[0]?.href,
    highlights: p.impact,
  })),

  products: [
    {
      name: "ChamsSwitch Merchant Dashboard",
      platform: "Web",
      description: "Payment gateway flows, merchant onboarding, dashboards, and internal tools.",
      url: "https://www.chamsswitch.com/",
      stack: ["React", "TypeScript", "TanStack Query", "Zustand"],
    },
    {
      name: "BetaCare Telehealth Platform",
      platform: "Web + Mobile",
      description: "Subscriptions, audio/video consults, scheduling, referrals, and admin portal.",
      url: "https://www.betacare.ng",
      stack: ["Next.js", "Flutter", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      name: "Pouch Mobile Currency Exchange App",
      platform: "Mobile",
      description: "Multi-currency wallets, market offers, instant swaps, withdrawals, verification, and transaction security.",
      stack: ["Flutter", "GetX", "Dio", "Smile ID"],
    },
    {
      name: "Ride-Hailing App",
      platform: "Mobile",
      description: "Driver and rider booking flows, live trips, maps integration, and auth.",
      url: "https://apps.apple.com/ng/app/touramp-customer/id6639614324",
      stack: ["Flutter", "Firebase"],
    },
    {
      name: "School Management Platform",
      platform: "Web",
      description: "Attendance, grading, roles, ID cards, and school operations.",
      url: "https://www.oponeko.com",
      stack: ["React", "Vite", "Tailwind"],
    },
    {
      name: "Health Station Apps",
      platform: "Web + Mobile",
      description: "Consultations, booking, patient history, and multi-platform care flows.",
      stack: ["React", "Flutter"],
    },
  ],

  skills: [
    { name: "Product Platforms", keywords: ["Fintech Systems", "Healthcare Platforms", "SaaS Products", "Admin Dashboards", "Subscription Workflows"] },
    { name: "Payments & Operations", keywords: ["Wallets", "Payment Integrations", "Merchant Tools", "Role-Based Access", "Reporting"] },
    { name: "Web & Mobile Delivery", keywords: ["Flutter", "React", "Next.js", "TypeScript", "Node.js", "REST APIs"] },
    { name: "Execution", keywords: ["Product Scoping", "UX Flows", "Design Systems", "Performance", "Deployment"] },
  ],

  education: [
    {
      institution: "University of Lagos",
      studyType: "BSc",
      area: "Mechanical Engineering",
      startDate: "2016-10",
      endDate: "2021-09",
    },
  ],

  achievements: [
    "30% reduction in failed consultations on BetaCare.",
    "15% increase in subscription renewals on BetaCare.",
    "Shared component system reducing duplicate UI by ~40% on ChamsSwitch.",
    "Pagination and caching strategy improving load times on data-heavy ChamsSwitch pages.",
  ],

  certifications: [
    {
      name: "Programming with JavaScript",
      issuer: "Meta",
      date: "2022-10",
      url: "https://www.coursera.org/account/accomplishments/certificate/C3AW7ALWGAZJ",
    },
    {
      name: "Front-End Web Development with React",
      issuer: "Coursera",
      date: "2022-10",
      url: "https://www.coursera.org/account/accomplishments/certificate/YM3DWUNEXUXX",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2021-10",
      url: "https://www.freecodecamp.org/certification/fcccf5a9bdd-2069-4c0a-b202-4fbc6c32b272/responsive-web-design",
    },
    {
      name: "Foundations of User Experience (UX) Design",
      issuer: "Google",
      date: "2022-07",
      url: "https://www.coursera.org/account/accomplishments/certificate/VGMLJ6K7J43L",
    },
  ],

  languages: [
    { language: "Yoruba", fluency: "Native" },
    { language: "English", fluency: "Native" },
  ],
};
