"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";
import type { Project } from "@/data/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <div className={cn(
      "group overflow-hidden rounded-xl border border-border bg-card hover:shadow-md transition"
    )}>
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
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted">{p.company} • {p.period}</span>
          <Link
            href={p.kind === "case-study" ? `/projects/${p.slug}` : `/projects#${p.slug}`}
            className="text-sm text-primary hover:underline"
          >
            {p.kind === "case-study" ? "Read case study" : "View project"}
          </Link>
        </div>
      </div>
    </div>
  );
}
