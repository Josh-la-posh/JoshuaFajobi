import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export const metadata = {
  title: "Projects - Joshua Fajobi",
  description: "Selected case studies, product work, and shipped applications.",
};

export default function ProjectsPage() {
  const ordered = [...projects].sort((a, b) => {
    const rank = { "case-study": 0, snapshot: 1, archive: 2 } as const;
    return rank[a.kind] - rank[b.kind];
  });

  return (
    <div>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-sm leading-6 text-muted">
          Case studies first, followed by shipped web and mobile work. Each project is framed around
          the product problem, technical scope, and measurable impact where available.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((p) => (
          <section id={p.slug} key={p.slug}>
            <ProjectCard p={p} />
          </section>
        ))}
      </div>
    </div>
  );
}
