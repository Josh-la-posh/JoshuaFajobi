import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, Download } from "lucide-react";
import { projects } from "@/data/projects";
import { experience } from "@/lib/data";
import { services } from "@/data/services";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

const proofItems = [
  "Wallet systems",
  "Healthcare enrollment systems",
  "Admin dashboards",
  "Subscription platforms",
  "Payment integrations",
];

export default function HomePage() {
  const featured = projects.filter((p) => p.kind === "case-study").slice(0, 2);
  const recentExperience = experience.slice(0, 2);
  const homepageServices = services.filter((service) => service.name !== "MVP Development");

  return (
    <div className="space-y-14">
      <section className="grid min-h-[calc(100vh-9rem)] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Joshua Fajobi
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            I build fintech, healthcare, and business platforms using Flutter, React, and Node.js.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-xl sm:leading-8">
            If your product needs payments, onboarding, subscriptions, dashboards, or mobile-first
            workflows, I can help you design the flow, build the interface, connect the APIs, and
            ship something users can actually trust.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <Calendar className="h-4 w-4" />
              Book a call
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition hover:bg-border/40"
            >
              See proof
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <aside className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Why trust me?
          </h2>
          <p className="mt-3 text-2xl font-semibold leading-tight">
            I have already built the product pieces serious teams need.
          </p>
          <ul className="mt-5 space-y-3">
            {proofItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-md bg-primary/10 p-4 text-sm leading-6">
            I work across Flutter, React, Next.js, Node.js, APIs, auth, payments, dashboards, and
            operational workflows.
          </div>
        </aside>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-xl font-semibold">Platforms Delivered</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Built for startups, healthcare providers, fintech companies, and internal operations teams.
          </p>
          <Link href="/about" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
            More about me <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Fintech transaction systems",
            "Healthcare enrollment platforms",
            "Subscription billing workflows",
            "Admin dashboards",
            "Payment integrations",
            "Mobile applications",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-6">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-semibold">Work With Me</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Fixed offers for teams that need a platform built, improved, or shipped without
              turning the first conversation into a long technology debate.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
            Book a call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {homepageServices.map((service) => (
            <article key={service.name} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-lg font-semibold leading-snug">{service.name}</h3>
              <p className="mt-3 text-2xl font-bold text-primary">{service.price}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Book a call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-semibold">Recent Product Work</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Not sample UI. Real platforms with business workflows, operational complexity, and
              measurable outcomes.
            </p>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
            Read case studies <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            {
              name: "BetaCare",
              built: [
                "Telehealth platform",
                "Audio/video consultations",
                "Subscription billing",
                "Admin workflows",
                "Telecom-integrated patient backend",
                "Shift scheduling, referrals, and analytics",
              ],
              results: [
                "Reduced failed consultations",
                "Improved subscription renewals",
                "Faster approval workflows",
                "More reliable subscription callbacks",
              ],
              links: [
                { href: "/case-studies/betacare", label: "View all BetaCare case studies" },
                { href: "/case-studies/betacare-telehealth", label: "Read Telehealth case study" },
                { href: "/case-studies/betacare-admin-platform", label: "Read Admin case study" },
                { href: "/case-studies/betacare-patient-backend", label: "Read Backend case study" },
              ],
            },
            {
              name: "ChamsSwitch",
              built: [
                "Merchant dashboard",
                "Payment gateway operations",
                "Shared design system",
                "Transaction and settlement views",
              ],
              results: [
                "Faster page load times",
                "Reduced UI inconsistencies",
                "Faster rollout of gateway features",
              ],
              links: [{ href: "/case-studies/chamsswitch-merchant", label: "Read ChamsSwitch case study" }],
            },
            {
              name: "Pouch",
              built: [
                "Multi-currency wallets",
                "Market offers and negotiations",
                "Instant swaps",
                "Bank withdrawals",
                "Identity verification",
                "Notifications",
              ],
              results: [
                "Clearer cross-currency money movement",
                "Cache-first wallet and transaction behavior",
                "More deliberate security for sensitive actions",
              ],
              links: [
                { href: "/case-studies/pouch", label: "View all Pouch case studies" },
                { href: "/case-studies/pouch-fintech-platform", label: "Read Mobile app case study" },
                { href: "/case-studies/pouch-dashboard", label: "Read Dashboard case study" },
              ],
            },
          ].map((work) => (
            <article key={work.name} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-lg font-semibold">{work.name}</h3>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-muted">Built</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-6">
                    {work.built.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-1 h-3.5 w-3.5 flex-none text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted">Result</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-6">
                    {work.results.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-1 h-3.5 w-3.5 flex-none text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {work.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/10"
                  >
                    {link.label} <ArrowRight className="ml-1 inline h-3 w-3" />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-semibold">Featured case studies</h2>
            <p className="mt-1 text-sm text-muted">
              Selected work with business context, technical approach, and measurable outcomes.
            </p>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
            Explore all projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-semibold">Recent experience</h2>
            <p className="mt-1 text-sm text-muted">
              Recent roles aligned with product engineering, UI architecture, and mobile delivery.
            </p>
          </div>
          <Link href="/experience" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
            Full experience <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {recentExperience.map((exp) => (
            <article key={`${exp.company}-${exp.period}`} className="rounded-lg border border-border bg-card p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted">{exp.company}</p>
                </div>
                <span className="text-xs text-muted">{exp.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-6">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {exp.stack?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.slice(0, 5).map((s) => (
                    <span key={s} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold">Need a product builder?</h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">
              Bring the platform idea, messy workflow, or half-built product. I will help turn it
              into a reliable web or mobile experience.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition hover:bg-border/40"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <Calendar className="h-4 w-4" />
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
