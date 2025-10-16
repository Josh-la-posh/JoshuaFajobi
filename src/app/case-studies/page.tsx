import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export const metadata = {
  title: "Case Studies — Joshua Fajobi",
  description: "Selected product work with impact, process, and outcomes.",
};

export default function CaseStudiesIndex() {
  return (
    <div>
      <h1 className="text-xl font-semibold">Case Studies</h1>
      <p className="mt-2 text-sm text-muted">Impact-focused stories across payments and telehealth.</p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:shadow-lg"
          >
            {cs.hero?.src && (
              <img
                src={cs.hero.src}
                alt={cs.hero.alt ?? cs.title}
                className="mb-3 aspect-video w-full rounded-xl object-cover"
              />
            )}
            <h3 className="text-lg font-semibold">{cs.title}</h3>
            <div className="mt-1 text-xs text-muted">
              {cs.client ? `${cs.client} • ` : ""}{cs.period ?? ""}
            </div>
            <p className="mt-2 text-sm text-muted">{cs.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {cs.tags.map((t) => (
                <span key={t} className="rounded-md bg-border/50 px-2 py-0.5 text-xs">{t}</span>
              ))}
            </div>
            <div className="mt-3 text-sm text-primary">Read case study →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
