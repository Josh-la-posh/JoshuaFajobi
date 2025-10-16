import { CSStat } from "@/lib/caseStudies";

export function CSStats({ stats }: { stats: CSStat[] }) {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-3">
      {stats.map((s, i) => (
        <div key={i} className="rounded-xl border border-border bg-card p-4 text-center">
          <div className="text-2xl font-semibold">{s.value}</div>
          <div className="mt-1 text-xs text-muted">{s.label}</div>
          {s.sub && <div className="text-[11px] text-muted">{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}
