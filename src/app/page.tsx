// src/app/page.tsx
import Link from "next/link";
import { projects } from "@/data/projects";
import { experience } from "@/lib/data";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export default function HomePage() {
  const featured = projects.filter(p => p.kind === "case-study").slice(0, 2);
  const recentExperience = experience.slice(0, 2);

  return (
    <main className="mx-auto max-w-6xl p-6 space-y-8">
      {/* Hero Section */}
      <section>
        <h1 className="text-3xl font-bold">Frontend Engineer (Web & Mobile)</h1>
        <p className="mt-2 max-w-2xl text-muted">
          I build fast, reliable product experiences with React, Vite/Next.js, TypeScript & Flutter.
          I care about performance, DX, and shipping outcomes.
        </p>
        <div className="mt-5">
          <Link href="/projects" className="text-primary hover:underline">
            Explore projects →
          </Link>
        </div>
      </section>

      {/* About Preview - Mobile Only */}
      <section className="lg:hidden rounded-xl border border-border bg-card p-5">
        <h2 className="text-lg font-semibold">About Me</h2>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          I&apos;m Joshua, a frontend engineer based in Lagos, Nigeria. I specialize in building 
          performant web and mobile applications with modern JavaScript frameworks. I enjoy 
          turning complex problems into simple, beautiful solutions.
        </p>
        <Link 
          href="/about" 
          className="mt-3 inline-block text-sm text-primary hover:underline"
        >
          Read more →
        </Link>
      </section>

      {/* Experience Preview - Mobile Only */}
      <section className="lg:hidden">
        <h2 className="text-lg font-semibold">Experience</h2>
        <div className="mt-3 space-y-3">
          {recentExperience.map((exp, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium text-sm">{exp.role}</h3>
                  <p className="text-xs text-muted">{exp.company}</p>
                </div>
                <span className="text-xs text-muted whitespace-nowrap">{exp.period.split(" — ")[0]}</span>
              </div>
              {exp.stack && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {exp.stack.slice(0, 3).map(s => (
                    <span key={s} className="rounded bg-muted/20 px-1.5 py-0.5 text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Link 
          href="/experience" 
          className="mt-4 inline-block text-sm text-primary hover:underline"
        >
          Explore experience →
        </Link>
      </section>

      {/* Featured Case Studies */}
      <section>
        <h2 className="text-xl font-semibold">Featured Case Studies</h2>
        
        {/* Desktop Grid */}
        <div className="mt-4 hidden sm:grid gap-6 sm:grid-cols-2">
          {featured.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>

        {/* Mobile Carousel */}
        <div className="mt-4 sm:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            {featured.map(p => (
              <div key={p.slug} className="min-w-[85%] snap-center">
                <ProjectCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
