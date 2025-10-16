import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyLayout from "@/components/portfolio/CaseStudyLayout";

export function generateStaticParams() {
  return projects
    .filter(p => p.kind === "case-study")
    .map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.title} – Case Study`,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary },
  };
}

export default function ProjectSlugPage({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug);
  if (!p || p.kind !== "case-study") return notFound();

  return (
    <div className="mx-auto max-w-6xl p-6">
      <CaseStudyLayout p={p} />
    </div>
  );
}
