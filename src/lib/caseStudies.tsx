export type CSStat = { label: string; value: string; sub?: string };
export type CSMedia = { src: string; alt: string; caption?: string; aspect?: string };
export type CSStep = { title: string; detail?: string; media?: CSMedia };
export type CSBeforeAfter = { before: string; after: string };
export type CSJourneyStep = { title: string; detail: string; image?: CSMedia };

export type CaseStudy = {
  slug: string;
  title: string;
  client?: string;
  period?: string;
  role?: string;
  summary: string;
  tags: string[];
  hero?: CSMedia;
  gallery?: CSMedia[];
  journey?: CSJourneyStep[];
  capabilityHighlights?: string[];
  problem: string;
  constraints?: string[];
  approach: CSStep[];
  result: {
    narrative: string;
    stats?: CSStat[];
    beforeAfter?: CSBeforeAfter[];
  };
  technicalHighlights?: string[];
  coreCapabilities?: string[];
  architecture?: "telecom-subscription";
  quote?: {
    text: string;
    author?: string;
    role?: string;
  };
  links?: { label: string; href: string }[];
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "betacare-telehealth",
    title: "BetaCare - Telehealth Platform",
    client: "Nitax Technologies Limited",
    period: "2025",
    role: "Full-stack (Next.js + Node + Flutter)",
    summary:
      "Built a telehealth platform enabling patients to subscribe, book consultations, chat with doctors, attend audio/video consultations, and manage healthcare services from a single experience.",
    tags: ["Next.js", "Node", "PostgreSQL", "Agora", "Flutter"],
    hero: { src: "/cs/betacare-hero.svg", alt: "BetaCare hero mock" },
    gallery: [
      {
        src: "/images/projects/betacare/doctor-dashboard.jpeg",
        alt: "BetaCare doctor dashboard showing active conversations, patient counts, reviews, appointments, and recent patients.",
        caption: "Doctor dashboard for consultations, patient activity, reviews, appointments, and recent patient records.",
      },
      {
        src: "/images/projects/betacare/patient-dashboard.jpeg",
        alt: "BetaCare patient dashboard showing wallet balance, quick actions, plan status, and upcoming appointments.",
        caption: "Patient dashboard for wallet balance, appointment booking, lab requests, plan status, and health actions.",
      },
      {
        src: "/images/projects/betacare/consultation-ended.jpeg",
        alt: "BetaCare consultation ended modal with review and book another session actions.",
        caption: "Post-consultation flow with session duration, recording notice, review CTA, and repeat booking action.",
      },
      {
        src: "/images/projects/betacare/incoming-call.jpeg",
        alt: "BetaCare incoming audio call screen for a doctor consultation.",
        caption: "Incoming audio call workflow for live doctor-patient consultations, with accept and decline actions.",
      },
      {
        src: "/images/projects/betacare/consultation-chat.jpeg",
        alt: "BetaCare consultation chat between patient and doctor with audio and video call actions.",
        caption: "Consultation chat workspace where doctors and patients exchange messages and start audio or video calls.",
      },
      {
        src: "/images/projects/betacare/patient-response.jpeg",
        alt: "BetaCare patient consultation response flow showing symptoms and doctor messaging.",
        caption: "Patient response flow showing consultation context, symptoms, messaging, and session controls.",
      },
      {
        src: "/images/projects/betacare/doctor-scheduling.png",
        alt: "BetaCare doctor scheduling screen for availability and shift management.",
        caption: "Doctor scheduling workflow for availability, shifts, and appointment coverage.",
      },
      {
        src: "/images/projects/betacare/consultation-request.png",
        alt: "BetaCare consultation request flow for selecting care and starting a doctor session.",
        caption: "Consultation request flow for patients moving from care need to doctor session.",
      },
      {
        src: "/images/projects/betacare/video-call-interface.png",
        alt: "BetaCare audio and video consultation interface.",
        caption: "Audio/video consultation interface for live doctor-patient care sessions.",
      },
      {
        src: "/images/projects/betacare/admin-workflow.png",
        alt: "BetaCare admin workflow for approvals, subscriptions, and healthcare operations.",
        caption: "Admin workflow for approvals, subscriptions, referrals, and operational follow-up.",
      },
    ],
    problem:
      "BetaCare needed a reliable telehealth workflow with paid subscriptions, shift-based scheduling, and secure A/V under tight timelines.",
    constraints: [
      "Unreliable end-user networks with bandwidth variability.",
      "Secure patient data and role-based access.",
      "Doctor scheduling constraints.",
    ],
    approach: [
      {
        title: "Defined core domain flows",
        detail:
          "Mapped patient lifecycle: register, subscribe, consult, follow up; aligned admin, doctor, and patient roles.",
      },
      {
        title: "A/V with Agora and resilient UI",
        detail:
          "Integrated Agora for audio/video, then added pre-call checks, reconnection handling, and network-aware fallbacks.",
      },
      {
        title: "Shift scheduling and admin ops",
        detail:
          "Created admin portal for doctor approvals, shift creation, and student verification with dashboards and alerts.",
      },
      {
        title: "Chat and notifications",
        detail:
          "Implemented real-time chat with optimistic updates, delivery/read receipts, and push/email notifications.",
      },
    ],
    result: {
      narrative:
        "Shipped a stable MVP, then iterated to production: improved consult completion, reduced support tickets, and enabled new revenue via subscriptions.",
      beforeAfter: [
        {
          before: "Patients needed separate steps to subscribe, request care, speak with doctors, and manage follow-up.",
          after:
            "Patients could subscribe, request consultations, chat with doctors, attend audio/video sessions, and continue care from one connected product experience.",
        },
        {
          before: "Doctors had limited visibility into active consultations, appointments, patient history, and reviews.",
          after:
            "Doctors could manage conversations, appointments, patient activity, and consultation follow-up from a focused dashboard.",
        },
      ],
      stats: [
        { label: "Consult Completion", value: "+28%" },
        { label: "Support Tickets", value: "-35%" },
        { label: "Time to Book", value: "-40%", sub: "with shift scheduling" },
      ],
    },
    technicalHighlights: ["Next.js", "Node.js", "Flutter", "Agora", "PostgreSQL", "Role-based access"],
    coreCapabilities: [
      "Doctor-patient consultation workflows",
      "Audio/video session handling",
      "Chat and notification flows",
      "Shift scheduling and appointment management",
      "Patient dashboard and care access",
    ],
    quote: {
      text:
        "We delivered care to more patients in weeks than we expected in months. The reliability of calls surprised us.",
      author: "Product Lead, BetaCare",
    },
    links: [{ label: "Project Overview", href: "/projects" }],
    seo: {
      title: "Case Study - BetaCare Telehealth",
      description:
        "Subscriptions, A/V calls, chat, shift scheduling, and admin portal for a telehealth platform.",
      image: "/cs/betacare-hero.png",
    },
  },
  {
    slug: "betacare-admin-platform",
    title: "BetaCare - Admin Platform",
    client: "Nitax Technologies Limited",
    period: "2025",
    role: "Full-stack Product Engineer",
    summary:
      "Built operational workflows for enrollee management, subscriptions, referrals, analytics, wallet operations, and approvals.",
    tags: ["Next.js", "Node", "PostgreSQL", "Admin Systems", "Healthcare Ops"],
    hero: { src: "/images/projects/betacare/wallet-dashboard.png", alt: "BetaCare admin wallet dashboard" },
    gallery: [
      {
        src: "/images/projects/betacare/wallet-dashboard.png",
        alt: "BetaCare admin wallet dashboard showing balances, commissions, pending payments, and withdrawals.",
        caption: "Admin wallet dashboard for payments, withdrawals, doctor balances, patient balances, and pending transactions.",
      },
    ],
    problem:
      "BetaCare needed internal tools that could help operators manage patients, doctors, subscriptions, referrals, payments, approvals, and healthcare workflows without manual coordination across disconnected systems.",
    constraints: [
      "Healthcare operations required role-based access, auditability, and clear status tracking.",
      "Payment and wallet workflows needed accuracy because balances, commissions, and withdrawals affected real users.",
      "Admin teams needed fast visibility into approvals, referrals, verification, subscriptions, and activity across the platform.",
    ],
    approach: [
      {
        title: "Operational dashboard design",
        detail:
          "Built admin surfaces for managing healthcare operations, including approvals, subscriptions, referrals, verification, and wallet visibility.",
      },
      {
        title: "Wallet and payment workflows",
        detail:
          "Implemented dashboard flows for balances, commissions, pending payments, withdrawal requests, and transaction management.",
      },
      {
        title: "Role-based admin controls",
        detail:
          "Structured admin flows around different operational responsibilities so teams could act on the right data without clutter.",
      },
      {
        title: "Analytics and visibility",
        detail:
          "Improved operational visibility so internal teams could understand patient activity, subscription status, and platform performance.",
      },
    ],
    result: {
      narrative:
        "The admin platform gave BetaCare a clearer operational backbone by bringing approvals, referrals, subscriptions, wallet activity, and healthcare operations into a single management surface.",
      beforeAfter: [
        {
          before: "Approvals required multiple disconnected workflows.",
          after:
            "Operations teams could manage approvals, referrals, subscriptions, and wallet activities from a single platform.",
        },
        {
          before: "Payment and wallet activity was harder to monitor across doctor balances, patient balances, commissions, and withdrawals.",
          after:
            "Admin teams could review balances, commissions, pending payments, and withdrawal requests from one wallet dashboard.",
        },
        {
          before: "Healthcare operations relied on fragmented status checks across patients, subscriptions, referrals, and verifications.",
          after:
            "Operators gained a centralized view for enrollee management, subscription administration, referral workflows, verification, and analytics.",
        },
      ],
      stats: [
        { label: "Approvals", value: "Unified" },
        { label: "Wallet Ops", value: "Visible" },
        { label: "Workflows", value: "Connected" },
      ],
    },
    technicalHighlights: ["Next.js", "Node.js", "PostgreSQL", "REST APIs", "Role-based access", "Wallet workflows"],
    coreCapabilities: [
      "Enrollee management",
      "Subscription administration",
      "Referral workflows",
      "Wallet and withdrawal tracking",
      "Approvals and verification",
      "Operational analytics",
    ],
    links: [{ label: "Project Overview", href: "/projects" }],
    seo: {
      title: "Case Study - BetaCare Admin Platform",
      description:
        "Admin workflows for enrollee management, subscriptions, referrals, approvals, analytics, and wallet operations.",
      image: "/images/projects/betacare/wallet-dashboard.png",
    },
  },
  {
    slug: "betacare-patient-backend",
    title: "BetaCare - Patient Backend",
    client: "Nitax Technologies Limited",
    period: "2025",
    role: "Backend Systems Engineer",
    summary:
      "Built telecom-integrated backend systems for healthcare subscriptions, patient onboarding, callbacks, SMS delivery, and partner integrations.",
    tags: ["Node.js", "Express", "PostgreSQL", "Sequelize", "Telecom Integrations", "SMS"],
    hero: { src: "/cs/betacare-hero.svg", alt: "BetaCare backend systems case study" },
    problem:
      "BetaCare needed a healthcare subscription platform that could onboard patients, manage subscriptions, send SMS messages, and integrate with Nigerian telecom operators including MTN, Airtel, and GLO.",
    constraints: [
      "Telecom providers expected callback endpoints to acknowledge requests immediately.",
      "Subscription events still required patient account creation, subscription updates, SMS delivery, credential generation, third-party calls, and database writes.",
      "Slow downstream operations could cause telecom providers to treat requests as failed, retry events, or interrupt subscription flows.",
    ],
    approach: [
      {
        title: "Separated acknowledgement from processing",
        detail:
          "Redesigned telecom-driven event flows so external APIs could acknowledge requests immediately while business operations continued asynchronously in the background.",
      },
      {
        title: "Built subscription lifecycle workflows",
        detail:
          "Processed activation, renewal, suspension, and deactivation events while keeping network-specific business rules isolated and maintainable.",
      },
      {
        title: "Improved patient onboarding",
        detail:
          "Managed patient account provisioning, credential generation, subscription updates, and SMS delivery across partner flows.",
      },
      {
        title: "Strengthened observability",
        detail:
          "Improved structured logging, monitoring, and error handling so operations teams could trace callback and subscription behavior more reliably.",
      },
    ],
    result: {
      narrative:
        "The backend became more reliable for telecom-integrated healthcare subscriptions by reducing callback timeout risk, improving activation and renewal stability, and creating a more consistent onboarding and communication experience for patients.",
      beforeAfter: [
        {
          before: "Telecom callbacks had to wait while the platform created accounts, updated subscriptions, generated credentials, sent SMS messages, and wrote database records.",
          after:
            "Telecom providers received fast acknowledgements while account provisioning, SMS delivery, subscription updates, and reconciliation continued asynchronously.",
        },
        {
          before: "Activation and renewal flows risked retries or failed provider handshakes when downstream systems were slow.",
          after:
            "Subscription events became more resilient because acknowledgement and operational processing were separated.",
        },
      ],
      stats: [
        { label: "Callback Risk", value: "Reduced" },
        { label: "Telecom ACK", value: "Faster" },
        { label: "Onboarding", value: "More Stable" },
      ],
    },
    technicalHighlights: [
      "Node.js",
      "Express.js",
      "Sequelize ORM",
      "PostgreSQL",
      "Telecom callback integrations",
      "Asynchronous background processing",
      "SMS provider integrations",
      "Structured operational logging",
      "Modular service architecture",
    ],
    coreCapabilities: [
      "Patient account management",
      "Subscription lifecycle management",
      "Activation and renewal handling",
      "Bulk SMS delivery",
      "Third-party service integrations",
      "Callback reconciliation workflows",
    ],
    architecture: "telecom-subscription",
    links: [{ label: "Project Overview", href: "/projects" }],
    seo: {
      title: "Case Study - BetaCare Patient Backend",
      description:
        "Telecom-integrated healthcare subscription backend for callbacks, SMS, onboarding, and lifecycle management.",
      image: "/cs/betacare-hero.svg",
    },
  },
  {
    slug: "pouch-fintech-platform",
    title: "Pouch - Mobile Currency Exchange App",
    client: "TechNest",
    period: "2024",
    role: "Mobile Application Developer",
    summary:
      "Built a Flutter-based mobile currency exchange app for holding, swapping, withdrawing, and securing money across NGN, USD, CAD, GBP, and EUR.",
    tags: ["Flutter", "Dart", "GetX", "Dio", "Smile ID", "Firebase Messaging"],
    hero: { src: "/images/projects/pouch/pouch-landing.jpeg", alt: "Pouch product landing page" },
    gallery: [
      {
        src: "/images/projects/pouch/onboarding.jpeg",
        alt: "Pouch onboarding or login screen.",
        caption: "Onboarding and authentication flow for starting a secure financial account.",
      },
      {
        src: "/images/projects/pouch/login.jpeg",
        alt: "Pouch login screen.",
        caption: "Login flow for returning users accessing financial wallets and exchange workflows.",
      },
      {
        src: "/images/projects/pouch/signUp.jpeg",
        alt: "Pouch account creation screen.",
        caption: "Sign-up flow for creating a new Pouch account and starting wallet access.",
      },
      {
        src: "/images/projects/pouch/verification.jpeg",
        alt: "Pouch identity verification screen.",
        caption: "Identity verification flow for preparing users to move money securely.",
      },
      {
        src: "/images/projects/pouch/verification2.jpeg",
        alt: "Pouch verification status screen.",
        caption: "Verification status and security context before sensitive financial actions.",
      },
      {
        src: "/images/projects/pouch/homepage.jpeg",
        alt: "Pouch home dashboard with wallet balances and quick actions.",
        caption: "Dashboard for balances, quick actions, active negotiations, exchange rates, and recent activity.",
      },
      {
        src: "/images/projects/pouch/deposit.jpeg",
        alt: "Pouch wallet deposit screen.",
        caption: "Wallet funding flow for adding money before exchange or withdrawal actions.",
      },
      {
        src: "/images/projects/pouch/market-offers.jpeg",
        alt: "Pouch market offers screen for browsing exchange offers.",
        caption: "Market offers flow for browsing, filtering, accepting, and creating currency exchange offers.",
      },
      {
        src: "/images/projects/pouch/creating-offer.jpeg",
        alt: "Pouch create offer screen for setting currency exchange terms.",
        caption: "Create-offer workflow for users who want to publish exchange terms to the market.",
      },
      {
        src: "/images/projects/pouch/offer-review.jpeg",
        alt: "Pouch offer review screen before confirming an exchange offer.",
        caption: "Offer review step that helps users confirm rates, amounts, and exchange details before committing.",
      },
      {
        src: "/images/projects/pouch/swap-complete.jpeg",
        alt: "Pouch swap complete confirmation screen.",
        caption: "Swap completion state confirming that a currency exchange action has been processed.",
      },
      {
        src: "/images/projects/pouch/withdrawal.jpeg",
        alt: "Pouch withdrawal screen.",
        caption: "Withdrawal flow for sending funds out after wallet and exchange activity.",
      },
      {
        src: "/images/projects/pouch/security.jpeg",
        alt: "Pouch transaction PIN and biometric security screen.",
        caption: "Transaction PIN, biometric authentication, and guarded financial actions.",
      },
    ],
    capabilityHighlights: [
      "Multi-currency wallets",
      "Currency exchange",
      "Wallet funding",
      "Withdrawals",
      "Transaction history",
      "Secure authentication",
      "Rate management",
    ],
    journey: [
      {
        title: "Create Account",
        detail:
          "New users move from onboarding into account creation with a focused sign-up flow built for a financial product.",
        image: {
          src: "/images/projects/pouch/signUp.jpeg",
          alt: "Pouch account creation screen.",
          caption: "Create Account",
        },
      },
      {
        title: "Verify Identity",
        detail:
          "Security and verification flows protect financial actions before users move money through the platform.",
        image: {
          src: "/images/projects/pouch/verification.jpeg",
          alt: "Pouch identity verification screen.",
          caption: "Verify Identity",
        },
      },
      {
        title: "Fund Wallet",
        detail:
          "Users can prepare their wallet for swaps and withdrawals from the main dashboard and wallet funding flows.",
        image: {
          src: "/images/projects/pouch/deposit.jpeg",
          alt: "Pouch wallet deposit screen.",
          caption: "Fund Wallet",
        },
      },
      {
        title: "Exchange Currency",
        detail:
          "Users browse market offers, create exchange offers, review rates, and complete guided swap actions.",
        image: {
          src: "/images/projects/pouch/market-offers.jpeg",
          alt: "Pouch market offers screen for browsing exchange offers.",
          caption: "Exchange Currency",
        },
      },
      {
        title: "Withdraw Funds",
        detail:
          "After exchanging currency, users can send money out through withdrawal and bank account workflows.",
        image: {
          src: "/images/projects/pouch/withdrawal.jpeg",
          alt: "Pouch withdrawal screen.",
          caption: "Withdraw Funds",
        },
      },
    ],
    problem:
      "Currency exchange can be stressful when users need separate tools to check rates, find buyers or sellers, receive funds, withdraw to a bank account, and protect transaction approvals. Pouch needed one mobile workflow where users could hold, swap, negotiate, withdraw, and secure money across multiple currencies.",
    constraints: [
      "Financial users need to understand balances, exchange rates, fees, destination accounts, and authorization steps before committing to high-trust actions.",
      "Wallet balances can change after swaps, offer acceptance, withdrawals, wallet creation, and default wallet updates, so stale financial state would damage trust.",
      "The product needed to support multiple exchange behaviors: market offers, negotiations, and instant swaps without making the app feel confusing.",
      "Security flows needed to protect sensitive actions through identity verification, transaction PINs, biometrics, secure storage, and guarded funding flows.",
    ],
    approach: [
      {
        title: "Dashboard and quick actions",
        detail:
          "Built the home experience around frequent financial actions so users could send money, view offers, track negotiations, start auto swaps, review rates, manage subscriptions, and understand recent account activity.",
      },
      {
        title: "Multi-currency wallet system",
        detail:
          "Implemented wallet creation and management across NGN, USD, CAD, GBP, and EUR, including default wallet behavior, balance visibility, wallet-specific transaction history, and cache-first hydration.",
      },
      {
        title: "Market offers, negotiations, and instant swaps",
        detail:
          "Built exchange workflows for browsing offers by currency, creating offers, managing bids, accepting or rejecting negotiation terms, and completing guided instant swaps.",
      },
      {
        title: "Bank accounts, withdrawals, and transaction security",
        detail:
          "Built account management and withdrawal flows for local, foreign, CAD, and domiciliary accounts, with confirmation screens, loading states, success feedback, transaction PINs, biometrics, Smile ID verification, and push notifications.",
      },
    ],
    result: {
      narrative:
        "Pouch became a production-oriented mobile currency exchange product with multi-currency wallets, exchange rates, market offers, negotiation, instant swaps, withdrawals, identity verification, transaction security, notifications, and cached account data.",
      beforeAfter: [
        {
          before:
            "Users needed disconnected flows to check rates, find exchange offers, complete swaps, manage accounts, withdraw funds, and protect sensitive actions.",
          after:
            "Users could hold multiple currencies, browse offers, negotiate, complete instant swaps, manage bank accounts, withdraw funds, verify identity, and secure transactions inside one Flutter app.",
        },
        {
          before:
            "Wallet screens risked feeling slow or stale because balances and transaction history could change after several different financial actions.",
          after:
            "Wallet and transaction data loaded from local cache first, then refreshed from the network after important events like wallet creation, swaps, withdrawals, and default wallet updates.",
        },
        {
          before:
            "Sensitive financial moments needed stronger user confidence around where money was going and what authorization was required.",
          after:
            "Review screens, account summaries, transaction PINs, biometric authentication, and verification status flows made high-impact actions more deliberate.",
        },
      ],
      stats: [
        { label: "Currencies", value: "5", sub: "NGN, USD, CAD, GBP, EUR" },
        { label: "Exchange Modes", value: "3", sub: "offers, negotiation, instant swap" },
        { label: "Security", value: "Layered", sub: "PIN, biometrics, Smile ID" },
      ],
    },
    technicalHighlights: [
      "Flutter",
      "Dart",
      "GetX",
      "Dio",
      "Firebase Messaging",
      "Smile ID",
      "Local authentication",
      "Secure storage",
      "Cache-first wallet data",
      "Feature-first architecture",
      "Pagination for market offers and transactions",
    ],
    coreCapabilities: [
      "Multi-currency wallet creation and default wallet management",
      "Wallet balances and wallet-specific transaction history",
      "Market offers and negotiation workflows",
      "Instant swap confirmation flow",
      "Local, foreign, CAD, and domiciliary bank account management",
      "Withdrawal confirmation and success flows",
      "Smile ID identity verification",
      "Transaction PINs and biometric authentication",
      "Push notifications for account and transaction events",
    ],
    seo: {
      title: "Case Study - Pouch Mobile Currency Exchange App",
      description:
        "Flutter mobile currency exchange app with multi-currency wallets, market offers, instant swaps, withdrawals, identity verification, and transaction security.",
      image: "/images/projects/pouch/pouch-landing.jpeg",
    },
  },
  {
    slug: "pouch-dashboard",
    title: "Pouch - Operations Dashboard",
    client: "TechNest",
    period: "2024",
    role: "Frontend Product Engineer",
    summary:
      "Built an internal operations dashboard for managing users, wallet funding, transactions, currencies, fees, providers, and admin permissions behind the Pouch wallet product.",
    tags: ["React", "Vite", "Redux Toolkit", "Tailwind CSS", "Axios", "Admin Systems"],
    hero: { src: "/images/projects/pouch/pouch-landing.jpeg", alt: "Pouch product landing page" },
    gallery: [
      {
        src: "/images/projects/pouch/dashboard-overview.jpeg",
        alt: "Pouch admin dashboard overview with summary cards and exchange rates.",
        caption: "Dashboard overview with summary cards, wallet balances, exchange rates, and recent operational activity.",
      },
      {
        src: "/images/projects/pouch/users-table.jpeg",
        alt: "Pouch admin users table with search and status filters.",
        caption: "User management table with status tabs, search, account details, verification context, and export support.",
      },
      {
        src: "/images/projects/pouch/user-management.jpeg",
        alt: "Pouch user management screen with account and verification controls.",
        caption: "User Management: account review, search, status context, verification details, and support workflows.",
      },
      {
        src: "/images/projects/pouch/transactions-table.jpeg",
        alt: "Pouch admin transactions table with filters and export tools.",
        caption: "Transaction operations view for filtering, exporting, and reviewing wallet and exchange activity.",
      },
      {
        src: "/images/projects/pouch/transactions.jpeg",
        alt: "Pouch transactions management screen.",
        caption: "Transactions: operational review for wallet activity, exchange actions, filters, and exports.",
      },
      {
        src: "/images/projects/pouch/currency-management.jpeg",
        alt: "Pouch currency management screen for rates and supported currencies.",
        caption: "Currency Management: supported currencies, rate controls, fee context, and financial configuration.",
      },
      {
        src: "/images/projects/pouch/manual-funding.jpeg",
        alt: "Pouch manual funding approval table.",
        caption: "Manual funding review queue for approving or rejecting eligible funding requests with detail modals.",
      },
      {
        src: "/images/projects/pouch/funding-requests.jpeg",
        alt: "Pouch funding requests screen for reviewing wallet deposits.",
        caption: "Funding Requests: review queue for wallet deposits, approvals, rejection states, and finance checks.",
      },
      {
        src: "/images/projects/pouch/wallet-provider.jpeg",
        alt: "Pouch wallet provider and funding configuration screen.",
        caption: "Pouch Wallet management for system balances, provider setup, funding flows, and card payment controls.",
      },
      {
        src: "/images/projects/pouch/role-permissions.jpeg",
        alt: "Pouch role creation screen with grouped permissions.",
        caption: "Role creation workflow with grouped permissions and search for safer least-privilege access patterns.",
      },
      {
        src: "/images/projects/pouch/roles-permissions.jpeg",
        alt: "Pouch roles and permissions screen.",
        caption: "Roles & Permissions: internal access control for admins, finance, support, and operations users.",
      },
    ],
    problem:
      "Pouch needed a safer and faster way for internal teams to manage wallet activity across users, currencies, providers, funding requests, transactions, fees, and admin roles from one authenticated dashboard.",
    constraints: [
      "Admin actions affected balances, funding, fees, providers, and account access, so status and next actions had to be obvious.",
      "Operations teams needed dense tables, search, filters, pagination, exports, and detail modals without the interface feeling chaotic.",
      "Sensitive flows such as manual funding approvals, fee changes, provider setup, and role management needed guardrails.",
      "The dashboard had to stay maintainable while supporting users, transactions, wallet management, settings, roles, and shared workflow state.",
    ],
    approach: [
      {
        title: "Centralized operations dashboard",
        detail:
          "Built a dashboard overview with summary cards, wallet balances, daily exchange rates, most traded currencies, and recent transaction activity.",
      },
      {
        title: "User and transaction operations",
        detail:
          "Implemented user status tabs, search, export, transaction filters, transaction detail modals, and financial rule controls for limits and fees.",
      },
      {
        title: "Funding and wallet management",
        detail:
          "Built pending manual funding review, CAD pending transaction views, Pouch Wallet balances, provider setup, direct funding, manual funding, and card payment controls.",
      },
      {
        title: "Admin roles and permissions",
        detail:
          "Built admin invitation, admin management, role listing, role creation, and grouped permission selection for safer internal access control.",
      },
    ],
    result: {
      narrative:
        "The dashboard gave Pouch one internal control panel for financial operations, user management, wallet funding, transaction review, currency configuration, provider setup, and role-based governance.",
      beforeAfter: [
        {
          before:
            "Operational tasks risked being fragmented across support channels, backend checks, and manual intervention.",
          after:
            "Support, finance, and admin teams could monitor users, review transactions, manage funding requests, configure financial rules, and control access from one dashboard.",
        },
        {
          before:
            "Manual funding, direct funding, CAD pending transactions, card settings, payout providers, and wallet transactions were separate workflows with different rules.",
          after:
            "Shared table, modal, filter, validation, loading, and status patterns made each workflow distinct while keeping the admin experience consistent.",
        },
        {
          before:
            "Approving funding, changing fees, configuring providers, and managing roles could create costly mistakes if actions were unclear.",
          after:
            "Explicit actions, disabled loading states, field validation, visible status values, and detail views gave admins more confidence before sensitive changes.",
        },
      ],
      stats: [
        { label: "Admin Surface", value: "Centralized" },
        { label: "Financial Controls", value: "Managed" },
        { label: "Access Control", value: "Role-based" },
      ],
    },
    technicalHighlights: [
      "React",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Tailwind CSS",
      "Material UI",
      "Lucide icons",
      "REST APIs",
      "Protected routes",
      "Server-backed filters and pagination",
    ],
    coreCapabilities: [
      "Dashboard overview",
      "User management",
      "Transaction operations",
      "Manual funding approvals",
      "Pouch Wallet management",
      "Currency and fee controls",
      "Provider setup",
      "Admin and role management",
      "Permission selection",
      "Export, search, filters, pagination, and detail modals",
    ],
    seo: {
      title: "Case Study - Pouch Operations Dashboard",
      description:
        "Internal operations dashboard for managing Pouch users, wallet funding, transactions, currencies, fees, providers, and admin permissions.",
      image: "/images/projects/pouch/pouch-landing.jpeg",
    },
  },
  {
    slug: "chamsswitch-merchant",
    title: "ChamsSwitch - Merchant Platform",
    client: "ChamsSwitch",
    period: "2025",
    role: "Lead Product Engineer",
    summary:
      "Merchant onboarding, payment dashboards, and gateway flows with a shared UI kit and performance budgets.",
    tags: ["React", "TypeScript", "Zustand", "TanStack Query", "Tailwind"],
    hero: { src: "/cs/chams-hero.svg", alt: "ChamsSwitch dashboard" },
    problem:
      "Existing dashboards were slow and fragmented across domains; onboarding was manual and error-prone.",
    approach: [
      {
        title: "Design system and app shell",
        detail:
          "Built a shared UI kit for inputs, tables, modals, and themes, plus a responsive shell with role-based routes.",
      },
      {
        title: "Data layer consolidation",
        detail:
          "Normalized API calls with TanStack Query, error handling, optimistic updates, toasts, and retries.",
      },
      {
        title: "Onboarding flow",
        detail:
          "Reduced merchant onboarding to a guided multi-step flow with form validation and document checks.",
      },
      {
        title: "Performance and DX",
        detail:
          "Implemented route-level code splitting, memoized heavy tables, and a tidy folder structure for velocity.",
      },
    ],
    result: {
      narrative:
        "Unified the merchant experience, improved load times, and reduced support escalations around onboarding and reconciliation.",
      stats: [
        { label: "Onboarding Time", value: "-40%" },
        { label: "Bundle Size", value: "-25%" },
        { label: "UI Consistency", value: "Systematized", sub: "across apps" },
      ],
    },
  },
];
