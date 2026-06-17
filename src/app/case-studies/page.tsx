import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";

export const metadata = {
  title: "Case Studies - Joshua Fajobi",
  description: "Selected product work with impact, process, and outcomes.",
};

export default function CaseStudiesIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Case Studies</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        Business-first product stories across telehealth, healthcare operations, telecom-integrated
        subscriptions, payments, and merchant systems.
      </p>

      <Link
        href="/case-studies/betacare"
        className="mt-6 flex flex-col gap-2 rounded-lg border border-primary/30 bg-primary/10 p-5 transition hover:bg-primary/15 sm:flex-row sm:items-center sm:justify-between"
      >
        <span>
          <span className="block font-semibold">Explore the full BetaCare series</span>
          <span className="mt-1 block text-sm leading-6 text-muted">
            Telehealth product, admin platform, and telecom-integrated patient backend.
          </span>
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          View BetaCare case studies <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>

      <Link
        href="/case-studies/pouch"
        className="mt-4 flex flex-col gap-2 rounded-lg border border-primary/30 bg-primary/10 p-5 transition hover:bg-primary/15 sm:flex-row sm:items-center sm:justify-between"
      >
        <span>
          <span className="block font-semibold">Explore the full Pouch series</span>
          <span className="mt-1 block text-sm leading-6 text-muted">
            Mobile currency exchange app and internal operations dashboard.
          </span>
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          View Pouch case studies <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="rounded-lg border border-border bg-card p-5 transition hover:shadow-md"
          >
            {cs.hero?.src && (
              <Image
                src={cs.hero.src}
                alt={cs.hero.alt ?? cs.title}
                width={800}
                height={450}
                className="mb-3 aspect-video w-full rounded-lg object-cover"
              />
            )}
            <h3 className="text-lg font-semibold">{cs.title}</h3>
            <div className="mt-1 text-xs text-muted">
              {[cs.client, cs.period].filter(Boolean).join(" / ")}
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{cs.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {cs.tags.map((t) => (
                <span key={t} className="rounded-md bg-border/50 px-2 py-0.5 text-xs">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
              Read case study <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
