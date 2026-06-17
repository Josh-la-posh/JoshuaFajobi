import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

export const metadata = {
  title: "Services - Joshua Fajobi",
  description:
    "Fixed product engineering services for healthcare platforms, fintech dashboards, MVPs, and Flutter mobile apps.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Services
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight">
          Product engineering packages for teams that need business systems shipped.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">
          People do not buy React, Flutter, or Node.js. They buy payment workflows, enrollment
          systems, dashboards, mobile apps, and MVPs that help the business move faster.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.name} className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="mt-3 text-3xl font-bold text-primary">{service.price}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
            <ul className="mt-5 space-y-2 text-sm leading-6">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-primary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Book a call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">Not sure which package fits?</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Send the current product, workflow, or idea. I will help you identify whether you need a
          dashboard, mobile app, MVP, integration, or a smaller scoped build.
        </p>
        <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
          Start with a call <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>
    </div>
  );
}
