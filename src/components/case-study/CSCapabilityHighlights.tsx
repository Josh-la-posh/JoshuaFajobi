import { CheckCircle2 } from "lucide-react";

export function CSCapabilityHighlights({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
          <span className="text-sm font-medium">{item}</span>
        </div>
      ))}
    </div>
  );
}
