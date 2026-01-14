import { resume } from "@/data/resume";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Joshua Fajobi",
  description: "Frontend Engineer specializing in React, Next.js, TypeScript, and Flutter.",
};

const highlights = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "15+" },
  { label: "Tech Stack", value: "React/Flutter" },
  { label: "Focus", value: "Product" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col gap-8 md:flex-row md:items-start">
        {/* Profile Photo */}
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
          <p className="leading-relaxed">
            {resume.basics.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {resume.basics.profiles?.map((p) => (
              <a
                key={p.network}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-border/40 transition"
              >
                {p.network}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="rounded-xl border border-border bg-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary">{h.value}</div>
            <div className="mt-1 text-xs text-muted">{h.label}</div>
          </div>
        ))}
      </section>

      {/* Bio */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Background</h2>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I&apos;m a frontend engineer based in Lagos, Nigeria, with a background in Mechanical Engineering
            from the University of Lagos. My transition into software development was driven by a passion
            for building products that solve real problems and deliver measurable impact.
          </p>
          <p>
            Over the past few years, I&apos;ve worked across fintech, healthtech, and edtech — building
            merchant dashboards, telehealth platforms, mobile apps, and internal tools. I specialize
            in React ecosystems (Vite, Next.js) and Flutter for cross-platform mobile development.
          </p>
          <p>
            I care deeply about performance, developer experience, and shipping outcomes. Whether it&apos;s
            optimizing a data-heavy dashboard or implementing real-time video calls, I approach every
            problem with a product mindset and attention to detail.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Technical Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resume.skills?.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-border bg-card p-4"
            >
              <h3 className="font-medium">{skill.name}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {skill.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Education</h2>
        {resume.education?.map((edu, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-4">
            <h3 className="font-medium">{edu.institution}</h3>
            <p className="text-sm text-muted">
              {edu.studyType} in {edu.area}
            </p>
            <p className="mt-1 text-xs text-muted">
              {edu.startDate} – {edu.endDate}
            </p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      {resume.certifications?.length ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Certifications</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {resume.certifications.map((cert, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-4"
              >
                <h3 className="font-medium">{cert.name}</h3>
                <p className="text-sm text-muted">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="rounded-xl border border-border bg-card p-6 text-center">
        <h2 className="text-lg font-semibold">Let&apos;s Work Together</h2>
        <p className="mt-2 text-sm text-muted">
          I&apos;m open to remote &amp; hybrid roles across EMEA. Let&apos;s build something great.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="/contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            Get in Touch
          </a>
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
