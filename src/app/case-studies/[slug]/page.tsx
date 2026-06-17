import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { existsSync } from "fs";
import path from "path";
import { caseStudies } from "@/lib/caseStudies";
import { CSHero } from "@/components/case-study/CSHero";
import { CSSection } from "@/components/case-study/CSSection";
import { CSStats } from "@/components/case-study/CSStats";
import { CSQuote } from "@/components/case-study/CSQuote";
import { CSApproach } from "@/components/case-study/CSApproach";
import { CSFooterLinks } from "@/components/case-study/CSFooterLinks";
import { CSProductGallery } from "@/components/case-study/CSProductGallery";
import { CSArchitectureDiagram } from "@/components/case-study/CSArchitectureDiagram";
import { CSBeforeAfter } from "@/components/case-study/CSBeforeAfter";

function publicFileExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.seo?.title ?? `${cs.title} - Case Study`,
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
  const gallery = cs.gallery?.filter((image) => publicFileExists(image.src)) ?? [];

  return (
    <article>
      <CSHero cs={cs} />

      <CSSection title="Business Problem">
        <p className="text-sm leading-6 text-muted">{cs.problem}</p>
      </CSSection>

      {cs.constraints?.length ? (
        <CSSection title="Why It Was Difficult">
          <ul className="list-disc pl-6 text-sm leading-6">
            {cs.constraints.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </CSSection>
      ) : null}

      <CSSection title="Solution">
        <CSApproach steps={cs.approach} />
      </CSSection>

      {cs.architecture === "telecom-subscription" ? (
        <CSSection title="Architecture">
          <CSArchitectureDiagram />
        </CSSection>
      ) : null}

      {gallery.length ? (
        <CSSection title="Product Screens">
          <CSProductGallery images={gallery} />
        </CSSection>
      ) : null}

      <CSSection title="Outcome">
        <p className="text-sm leading-6 text-muted">{cs.result.narrative}</p>
        {cs.result.beforeAfter?.length ? <CSBeforeAfter items={cs.result.beforeAfter} /> : null}
        {cs.result.stats && <CSStats stats={cs.result.stats} />}
      </CSSection>

      {(cs.coreCapabilities?.length || cs.technicalHighlights?.length) ? (
        <CSSection title="Technical Depth">
          <div className="grid gap-5 md:grid-cols-2">
            {cs.coreCapabilities?.length ? (
              <div>
                <h3 className="text-sm font-semibold">Core capabilities</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                  {cs.coreCapabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {cs.technicalHighlights?.length ? (
              <div>
                <h3 className="text-sm font-semibold">Technical highlights</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                  {cs.technicalHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </CSSection>
      ) : null}

      {cs.quote && (
        <CSSection title="What they said">
          <CSQuote {...cs.quote} />
        </CSSection>
      )}

      {cs.links?.length ? <CSFooterLinks links={cs.links} /> : null}
    </article>
  );
}
