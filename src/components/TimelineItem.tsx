export function TimelineItem({
  company, role, type, period, location, bullets, stack,
}: {
  company: string; role: string; type: string; period: string; location: string; bullets: string[]; stack?: string[];
}) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-1 size-3 rounded-full bg-primary/80" />
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold">{role} — {company}</h3>
          <span className="text-xs text-muted">{period}</span>
        </div>
        <div className="mt-0.5 text-xs text-muted">{type} • {location}</div>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        {stack?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((s) => <span key={s} className="rounded-md bg-border/50 px-2 py-0.5 text-xs">{s}</span>)}
          </div>
        ) : null}
      </div>
    </div>
  );
}
