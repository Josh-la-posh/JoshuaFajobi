"use client";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { cn } from "@/utils/cn";
import type { Project } from "@/data/projects";

export function ProjectCard({ p }: { p: Project }) {
  const isCaseStudy = p.kind === "case-study";
  const internalHref = `/projects/${p.slug}`;
  const fallbackHref = `/projects#${p.slug}`;
  const links = p.links ?? [];
  const hasLinks = links.length > 0;
  const primaryExternal = !isCaseStudy && !p.caseStudyHref && hasLinks ? links[0] : undefined;
  const mainHref = isCaseStudy ? (p.caseStudyHref ?? internalHref) : (p.caseStudyHref ?? primaryExternal?.url ?? fallbackHref);
  const mainLabel = isCaseStudy ? (p.caseStudyLabel ?? "Read case study") : (p.caseStudyLabel ?? primaryExternal?.label ?? "View project");

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition hover:shadow-md">
      {p.cover && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide",
              p.kind === "case-study" && "bg-primary/10 text-primary",
              p.kind === "snapshot" && "bg-blue-100/50 text-blue-700 dark:text-blue-300",
              p.kind === "archive" && "bg-zinc-100/50 text-zinc-600 dark:text-zinc-300",
            )}
          >
            {p.kind}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">{p.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map((s) => (
            <span key={s} className="rounded-md border border-border px-2 py-0.5 text-xs">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-muted">
            {p.company} / {p.period}
          </span>
          {isCaseStudy || p.caseStudyHref ? (
            <Link
              href={mainHref}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {mainLabel}
            </Link>
          ) : hasLinks ? (
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] text-primary transition hover:bg-primary/10"
                >
                  <span>{l.label}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          ) : (
            <Link href={mainHref} className="text-sm font-medium text-primary hover:underline">
              {mainLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
