import { ExternalLink } from "lucide-react";
import { MotionDiv } from "./motion";

export function ProjectCard({
  title, period, description, stack, links, impact,
}: {
  title: string; period?: string; description: string;
  stack: string[]; links?: { label: string; href: string }[]; impact?: string[];
}) {
  return (
    <MotionDiv
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {period && <span className="text-xs text-muted">{period}</span>}
      </div>
      <p className="mt-2 text-sm text-muted">{description}</p>

      {impact?.length ? (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          {impact.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      ) : null}

      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s} className="rounded-md bg-border/50 px-2 py-0.5 text-xs">{s}</span>
        ))}
      </div>

      {links?.length ? (
        <div className="mt-3 flex flex-wrap gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              {l.label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      ) : null}
      {/* <a href={`/case-studies/betacare-telehealth`} className="text-right text-sm text-primary hover:underline">
        Read the case study →
      </a> */}
    </MotionDiv>
  );
}
