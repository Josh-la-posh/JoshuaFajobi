"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";
import type { Project } from "@/data/projects";

export function ProjectCard({ p }: { p: Project }) {
  const isCaseStudy = p.kind === "case-study";
  const internalHref = `/projects/${p.slug}`;
  // For non case-study: use hash anchor if no links; for case-study show internal primary link always
  const fallbackHref = `/projects#${p.slug}`;
  const links = p.links ?? [];
  const hasLinks = links.length > 0;
  const primaryExternal = !isCaseStudy && hasLinks ? links[0] : undefined;
  const mainHref = isCaseStudy ? internalHref : (primaryExternal?.url || fallbackHref);
  const mainLabel = isCaseStudy ? "Read case study" : (primaryExternal?.label || "View project");
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-xl border border-border bg-card hover:shadow-md transition"
      )}
    >
      {p.cover && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold">{p.title}</h3>
          <span className={cn(
            "rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide",
            p.kind === "case-study" && "bg-primary/10 text-primary",
            p.kind === "snapshot" && "bg-blue-100/30 text-blue-700 dark:text-blue-300",
            p.kind === "archive" && "bg-zinc-100/30 text-zinc-600 dark:text-zinc-300"
          )}>
            {p.kind}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted">{p.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map(s => (
            <span key={s} className="rounded-md border border-border px-2 py-0.5 text-xs">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="text-xs text-muted">{p.company} • {p.period}</span>
          {isCaseStudy ? (
            <Link href={mainHref} className="text-sm text-primary hover:underline whitespace-nowrap">
              {mainLabel}
            </Link>
          ) : hasLinks ? (
            <div className="flex items-center gap-2 flex-wrap justify-end">
              {links.map(l => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-0.5 text-[11px] text-primary transition hover:bg-primary/10"
                >
                  <span>{l.label}</span>
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          ) : (
            <Link href={mainHref} className="text-sm text-primary hover:underline whitespace-nowrap">
              {mainLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
