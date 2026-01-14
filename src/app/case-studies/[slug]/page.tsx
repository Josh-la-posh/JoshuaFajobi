import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/caseStudies";
import { CSHero } from "@/components/case-study/CSHero";
import { CSSection } from "@/components/case-study/CSSection";
import { CSStats } from "@/components/case-study/CSStats";
import { CSQuote } from "@/components/case-study/CSQuote";
import { CSApproach } from "@/components/case-study/CSApproach";
import { CSFooterLinks } from "@/components/case-study/CSFooterLinks";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.seo?.title ?? `${cs.title} — Case Study`,
    description: cs.seo?.description ?? cs.summary,
    openGraph: {
      title: cs.seo?.title ?? cs.title,
      description: cs.seo?.description ?? cs.summary,
      images: cs.seo?.image ? [{ url: cs.seo.image }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return notFound();

  return (
    <article className="prose prose-invert max-w-none">
      <CSHero cs={cs} />

      <CSSection title="Problem">
        <p className="text-sm leading-6 text-muted">{cs.problem}</p>
        {cs.constraints?.length ? (
          <ul className="mt-3 list-disc pl-6 text-sm">
            {cs.constraints.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        ) : null}
      </CSSection>

      <CSSection title="Approach">
        <CSApproach steps={cs.approach} />
      </CSSection>

      <CSSection title="Results">
        <p className="text-sm leading-6 text-muted">{cs.result.narrative}</p>
        {cs.result.stats && <CSStats stats={cs.result.stats} />}
      </CSSection>

      {cs.quote && (
        <CSSection title="What they said">
          <CSQuote {...cs.quote} />
        </CSSection>
      )}

      {cs.links?.length ? <CSFooterLinks links={cs.links} /> : null}
    </article>
  );
}
