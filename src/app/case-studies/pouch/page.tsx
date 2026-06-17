import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/caseStudies";

export const metadata = {
  title: "Pouch Case Studies - Joshua Fajobi",
  description:
    "Pouch case studies covering the mobile currency exchange app and internal operations dashboard.",
};

export default function PouchCaseStudiesPage() {
  const pouchStudies = caseStudies.filter((study) => study.slug.startsWith("pouch-"));

  return (
    <div>
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Pouch case studies
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight">
          Customer-facing wallet app and internal operations dashboard.
        </h1>
        <p className="mt-4 text-sm leading-6 text-muted">
          Pouch includes both the user-facing mobile currency exchange experience and the internal
          dashboard used to manage users, transactions, wallet funding, currencies, fees, providers,
          and admin permissions.
        </p>
      </section>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {pouchStudies.map((study) => (
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
            <h2 className="text-lg font-semibold">{study.title.replace("Pouch - ", "")}</h2>
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
