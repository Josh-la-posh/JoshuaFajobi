import { resume } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Joshua Fajobi",
  description: "Full-Stack Product Engineer building fintech, healthcare, and SaaS platforms.",
};

const highlights = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "15+" },
  { label: "Systems", value: "Fintech & Healthcare" },
  { label: "Focus", value: "Payments & Ops" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <section className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex-shrink-0">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-border shadow-lg">
            <Image
              src="/user.jpeg"
              alt="Joshua Fajobi"
              fill
              className="object-cover object-[center_10%]"
              priority
            />
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{resume.basics.name}</h1>
          <p className="text-lg text-muted">{resume.basics.label}</p>
          <p className="leading-relaxed">{resume.basics.summary}</p>
          <div className="flex flex-wrap gap-2">
            {resume.basics.profiles?.map((p) => (
              <a
                key={p.network}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-3 py-1.5 text-sm transition hover:bg-border/40"
              >
                {p.network}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="rounded-lg border border-border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">{h.value}</div>
            <div className="mt-1 text-xs text-muted">{h.label}</div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Background</h2>
        <div className="space-y-4 leading-relaxed text-muted">
          <p>
            I build fintech, healthcare, and SaaS products that move money, onboard users,
            automate operations, and help teams scale.
          </p>
          <p>
            Over the last 4+ years I have delivered payment systems, healthcare enrollment
            platforms, telehealth applications, subscription products, operational dashboards, and
            mobile apps used by businesses and their customers.
          </p>
          <p>
            My Mechanical Engineering background from the University of Lagos shaped how I think
            about systems: understand the constraints, simplify the workflow, build the product, and
            make it reliable enough for real operations.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Execution Capabilities</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resume.skills?.map((skill) => (
            <div key={skill.name} className="rounded-lg border border-border bg-card p-4">
              <h3 className="font-medium">{skill.name}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {skill.keywords.map((k) => (
                  <span key={k} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Education</h2>
        {resume.education?.map((edu) => (
          <div key={`${edu.institution}-${edu.area}`} className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-medium">{edu.institution}</h3>
            <p className="text-sm text-muted">
              {edu.studyType} in {edu.area}
            </p>
            <p className="mt-1 text-xs text-muted">
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </section>

      {resume.certifications?.length ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Certifications</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {resume.certifications.map((cert) => (
              <div key={cert.name} className="rounded-lg border border-border bg-card p-4">
                <h3 className="font-medium">{cert.name}</h3>
                <p className="text-sm text-muted">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-lg border border-border bg-card p-6 text-center">
        <h2 className="text-lg font-semibold">Let&apos;s Work Together</h2>
        <p className="mt-2 text-sm text-muted">
          I am open to remote and hybrid roles across EMEA.
        </p>
        <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get in Touch
          </Link>
          <a
            href="/resume.pdf"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-border/40"
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
