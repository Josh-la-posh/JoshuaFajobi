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
    availability?: string; // e.g., "Open to remote roles across EMEA"
    workAuthorization?: string; // e.g., visas or status
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
  products?: {
    name: string;
    platform: string; // e.g., Web, iOS, Android, Cross-platform
    description?: string;
    url?: string; // store or live URL
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
  achievements?: string[]; // curated cross-role impact bullets
  certifications?: { name: string; issuer?: string; date?: string; url?: string }[];
  languages?: { language: string; fluency?: string }[];
};

export const resume: JsonResume = {
  $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  basics: {
    name: "Joshua Fajobi",
    label: "Senior UI/UX Frontend Developer",
    email: "joshuamayowa23@yahoo.com",
    phone: "+2348102513974",
    url: "https://joshua-fajobi.vercel.app/",
    location: { city: "Lagos", countryCode: "NG" },
    summary:
      "Senior Frontend Developer with 4+ years of experience crafting performant, accessible, and visually compelling user interfaces. Expertise in React, TypeScript, and modern design systems. Proven track record of translating wireframes and prototypes into production-ready, responsive web applications. Passionate about bridging design and development to deliver seamless digital experiences. Experienced in component library architecture, cross-browser optimization, and collaborative Agile workflows.",
    profiles: [
      { network: "LinkedIn", url: "https://www.linkedin.com/in/jfajobi/" },
      { network: "GitHub", url: "https://github.com/Josh-la-posh" },
      { network: "Portfolio", url: "https://joshua-fajobi.vercel.app/" },
    ],
    availability: "Open to remote & hybrid roles across EMEA",
    workAuthorization: "Eligible to work in Nigeria; remote collaboration globally",
  },

  work: [
    {
      name: "ChamsSwitch",
      position: "Lead Frontend Developer",
      url: "https://www.chamsswitch.com/",
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
      name: "Nitax Technologies Limited",
      position: "Software Engineer",
      url: "https://www.betacare.ng",
      startDate: "2025-04",
      endDate: "2025-12",
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

  products: [
    {
      name: "ChamsSwitch Merchant Dashboard",
      platform: "Web",
      description: "Payment gateway flows, merchant onboarding, dashboards.",
      url: "https://www.chamsswitch.com/", // main site; replace with direct app URL if available
      stack: ["React", "TypeScript", "TanStack Query", "Zustand"],
    },
    {
      name: "BetaCare Telehealth Platform",
      platform: "Web + Mobile",
      description: "Subscriptions, audio/video consults, scheduling, admin portal.",
      url: "https://www.betacare.ng",
      stack: ["Next.js", "Flutter", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      name: "Currency Exchange App",
      platform: "Mobile (Flutter)",
      description: "Real-time FX rates, charts, offline caching.",
      stack: ["Flutter", "GetX"],
    },
    {
      name: "Ride-Hailing App",
      platform: "Mobile (Flutter)",
      description: "Driver & rider booking flows, live trips, maps integration.",
      url: "https://apps.apple.com/ng/app/touramp-customer/id6639614324",
      stack: ["Flutter", "Firebase"],
    },
    {
      name: "School Management Platform",
      platform: "Web",
      description: "Attendance, grading, roles, ID cards.",
      url: "https://www.oponeko.com",
      stack: ["React", "Vite", "Tailwind"],
    },
    {
      name: "Health Station Apps",
      platform: "Web + Mobile",
      description: "Consultations, booking, patient history, multi-platform.",
      stack: ["React", "Flutter"],
    },
  ],

  skills: [
    { name: "Frontend Development", keywords: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"] },
    { name: "UI/UX & Design Tools", keywords: ["Figma", "Component Libraries", "Design Systems", "Shadcn UI", "Accessibility (WCAG)", "User-Centered Design"] },
    { name: "Mobile Development", keywords: ["Flutter", "Dart", "Cross-Platform", "Offline Caching"] },
    { name: "Build Tools & DevOps", keywords: ["Git", "GitHub", "GitLab", "NPM", "Vite", "Webpack", "CI/CD"] },
    { name: "Backend & Infrastructure", keywords: ["Node.js", "PostgreSQL", "REST APIs", "AWS", "Vercel"] },
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
    "15% increase in subscription renewals (BetaCare)",
    "30% reduction in failed consultations (BetaCare)",
    "Shared component system reducing duplicate UI by ~40% (ChamsSwitch)",
    "Pagination & caching strategy improving load times on data-heavy pages (ChamsSwitch)",
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
