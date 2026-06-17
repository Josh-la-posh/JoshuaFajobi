import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyLayout from "@/components/portfolio/CaseStudyLayout";

export function generateStaticParams() {
  return projects
    .filter((p) => p?.kind === "case-study")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} - Case Study`,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary },
  };
}

export default async function ProjectSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p || p.kind !== "case-study") return notFound();
  return <CaseStudyLayout p={p} />;
}
