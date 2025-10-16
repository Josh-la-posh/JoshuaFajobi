// src/app/page.tsx  (excerpt)
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export default function HomePage() {
  const featured = projects.filter(p => p.kind === "case-study").slice(0, 2);

  return (
    <main className="mx-auto max-w-6xl p-6 space-y-8">
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

      <section>
        <h2 className="text-xl font-semibold">Featured Case Studies</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {featured.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>
    </main>
  );
}
