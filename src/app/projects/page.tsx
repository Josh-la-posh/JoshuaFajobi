import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export const metadata = {
  title: "Projects – Joshua Fajobi",
  description: "Selected case studies and shipped work.",
};

export default function ProjectsPage() {
  // put case studies first, then snapshots, then archive
  const ordered = [...projects].sort((a, b) => {
    const rank = { "case-study": 0, snapshot: 1, archive: 2 } as const;
    return rank[a.kind] - rank[b.kind];
  });

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="mt-1 text-sm text-muted">
        Case studies first. Links to live apps and repos where available.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((p) => (
          <section id={p.slug} key={p.slug}>
            <ProjectCard p={p} />
          </section>
        ))}
      </div>
    </div>
  );
}
