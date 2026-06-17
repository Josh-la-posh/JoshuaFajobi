import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  MonitorSmartphone,
  Network,
  PenTool,
  Rocket,
} from "lucide-react";

export const metadata = {
  title: "How I Build Products - Joshua Fajobi",
  description:
    "Joshua Fajobi's product development process for turning business problems into shipped platforms, APIs, dashboards, and mobile apps.",
};

const process = [
  {
    title: "Business Problem",
    detail:
      "Clarify the user, workflow, risk, revenue goal, and operational bottleneck before choosing the technical path.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Product Design",
    detail:
      "Map the user journey, required screens, decision points, data states, and admin workflows that the product needs.",
    icon: PenTool,
  },
  {
    title: "API Architecture",
    detail:
      "Design the backend boundaries, data models, integrations, background jobs, and reliability requirements.",
    icon: Network,
  },
  {
    title: "Frontend",
    detail:
      "Build the customer-facing app, admin dashboard, mobile flow, and state handling needed for real usage.",
    icon: MonitorSmartphone,
  },
  {
    title: "Testing",
    detail:
      "Verify critical paths like payments, onboarding, approvals, subscriptions, authentication, and error states.",
    icon: CheckCircle2,
  },
  {
    title: "Deployment",
    detail:
      "Ship with production configuration, monitoring awareness, handoff notes, and a plan for iteration.",
    icon: Rocket,
  },
] as const;

const principles = [
  "Start with the workflow the business needs to control.",
  "Separate customer experience from internal operations needs.",
  "Design APIs around lifecycle events, not only CRUD screens.",
  "Make sensitive financial and healthcare actions deliberate.",
  "Keep dashboards dense enough for operators and clear enough for founders.",
  "Ship in useful milestones so teams can test the product early.",
];

export default function HowIBuildPage() {
  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase text-primary">How I Build Products</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight">
          I turn business workflows into shipped platforms, dashboards, APIs, and mobile apps.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          Good software is not just screens and code. For fintech, healthcare, subscriptions, and
          internal operations, the real work is understanding the business flow, designing the
          system around it, and shipping something people can trust.
        </p>
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <div className="grid gap-4">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title}>
                <article className="grid gap-4 rounded-lg border border-border bg-background p-4 md:grid-cols-[180px_1fr] md:items-center">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={20} />
                    </span>
                    <h2 className="text-base font-semibold">{step.title}</h2>
                  </div>
                  <p className="text-sm leading-6 text-muted">{step.detail}</p>
                </article>
                {index < process.length - 1 ? (
                  <div className="flex justify-center py-2 text-primary">
                    <ArrowDown size={18} aria-hidden />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">What this means for founders</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            I can help shape the product, not just execute tickets. That means asking the right
            questions about the workflow, choosing the architecture that fits the business, and
            building the pieces that move the product toward revenue or operational clarity.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">How I make decisions</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
            {principles.map((item) => (
              <li key={item} className="flex gap-2">
                <Code2 className="mt-1 h-4 w-4 flex-none text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">Need this kind of product built?</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          I build fintech, healthcare, subscription, payment, dashboard, and mobile workflows with
          React, Flutter, Node.js, and production-minded system design.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Book a call
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
