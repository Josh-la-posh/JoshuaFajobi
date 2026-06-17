import type { CSBeforeAfter as BeforeAfter } from "@/lib/caseStudies";

export function CSBeforeAfter({ items }: { items: BeforeAfter[] }) {
  if (!items.length) return null;

  return (
    <div className="mt-5 grid gap-4">
      {items.map((item) => (
        <div key={item.before} className="grid gap-3 rounded-lg border border-border bg-background p-4 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Before</div>
            <p className="mt-2 text-sm leading-6">{item.before}</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">After</div>
            <p className="mt-2 text-sm leading-6">{item.after}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
