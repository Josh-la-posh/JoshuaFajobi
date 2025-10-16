import { CaseStudy } from "@/lib/caseStudies";

export function CSHero({ cs }: { cs: CaseStudy }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{cs.title}</h1>
          <div className="mt-2 text-sm text-muted">
            {cs.client ? `${cs.client} • ` : ""}{cs.period ?? ""}{cs.role ? ` • ${cs.role}` : ""}
          </div>
          <p className="mt-3 text-sm text-muted">{cs.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {cs.tags.map((t) => (
              <span key={t} className="rounded-md bg-border/50 px-2 py-0.5 text-xs">{t}</span>
            ))}
          </div>
        </div>
        {cs.hero?.src && (
          <img
            src={cs.hero.src}
            alt={cs.hero.alt ?? cs.title}
            className="aspect-video w-full max-w-md rounded-xl border border-border object-cover md:w-96"
          />
        )}
      </div>
    </section>
  );
}
