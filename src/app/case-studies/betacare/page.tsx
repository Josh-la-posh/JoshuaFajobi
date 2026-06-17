import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";

export const metadata = {
  title: "BetaCare Case Studies - Joshua Fajobi",
  description:
    "BetaCare case studies covering telehealth product work, admin operations, and telecom-integrated patient backend systems.",
};

export default function BetaCareCaseStudiesPage() {
  const betaCareStudies = caseStudies.filter((study) => study.slug.startsWith("betacare-"));

  return (
    <div>
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          BetaCare case studies
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight">
          Three product stories from one healthcare platform.
        </h1>
        <p className="mt-4 text-sm leading-6 text-muted">
          BetaCare covered patient experience, doctor consultations, healthcare operations,
          subscriptions, telecom integrations, SMS systems, and backend reliability. Each case study
          focuses on a different business problem and product layer.
        </p>
      </section>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {betaCareStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="rounded-lg border border-border bg-card p-5 transition hover:shadow-md"
          >
            {study.hero?.src && (
              <Image
                src={study.hero.src}
                alt={study.hero.alt ?? study.title}
                width={800}
                height={450}
                className="mb-3 aspect-video w-full rounded-lg object-cover"
              />
            )}
            <h2 className="text-lg font-semibold">{study.title.replace("BetaCare - ", "")}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{study.summary}</p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Read this case study <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
