import Image from "next/image";
import type { Project } from "@/data/projects";

export default function CaseStudyLayout({ p }: { p: Project }) {
  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold">{p.title}</h1>
        <p className="mt-1 text-sm text-muted">
          {p.company} • {p.role} • {p.period}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.stack.map(s => (
            <span key={s} className="rounded-md border border-border px-2 py-0.5 text-xs">
              {s}
            </span>
          ))}
        </div>
      </header>

      {p.cover && (
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-xl border border-border">
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      )}

      {/* Links */}
      {p.links?.length ? (
        <div className="mb-8 flex flex-wrap gap-3">
          {p.links.map(l => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      ) : null}

      {/* Problem / Approach / Impact */}
      <section className="grid gap-8 md:grid-cols-3">
        {!!p.problem?.length && (
          <div>
            <h2 className="text-base font-semibold">Context & Challenges</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
              {p.problem.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
        )}
        {!!p.approach?.length && (
          <div>
            <h2 className="text-base font-semibold">Approach</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
              {p.approach.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
        )}
        {!!p.impact?.length && (
          <div>
            <h2 className="text-base font-semibold">Impact</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
              {p.impact.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
        )}
      </section>
    </article>
  );
}
