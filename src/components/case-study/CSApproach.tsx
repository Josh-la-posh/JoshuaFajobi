import { CSStep } from "@/lib/caseStudies";

export function CSApproach({ steps }: { steps: CSStep[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {steps.map((s, i) => (
        <li key={i} className="rounded-xl border border-border bg-card p-4">
          <div className="text-xs text-muted">Step {i + 1}</div>
          <h3 className="mt-1 font-medium">{s.title}</h3>
          {s.detail && <p className="mt-2 text-sm text-muted">{s.detail}</p>}
          {s.media?.src && (
            <figure className="mt-3">
              <img
                src={s.media.src}
                alt={s.media.alt ?? s.title}
                className="w-full rounded-lg border border-border object-cover"
              />
              {s.media.caption && (
                <figcaption className="mt-1 text-xs text-muted">{s.media.caption}</figcaption>
              )}
            </figure>
          )}
        </li>
      ))}
    </ol>
  );
}
