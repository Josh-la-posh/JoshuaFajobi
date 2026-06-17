import Link from "next/link";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { resume } from "@/data/resume";
import { ResumeActions } from "./ResumeActions";

export const metadata = {
  title: "Resume - Joshua Fajobi",
  description:
    "View and download Joshua Fajobi's resume - Full-Stack Product Engineer building fintech, healthcare, SaaS, and operations platforms.",
};

function formatDate(iso?: string) {
  if (!iso) return "Present";
  const [y, m] = iso.split("-");
  const date = new Date(Number(y), Number(m || "1") - 1, 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function ResumePage() {
  const { basics, work, skills, education, certifications, achievements, languages, products } = resume;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Resume</h1>
          <p className="text-sm text-muted">View online or download as PDF.</p>
        </div>
        <ResumeActions />
      </div>

      <article className="space-y-8 rounded-lg border border-border bg-card p-6 sm:p-8">
        <header className="border-b border-border pb-6">
          <h2 className="text-2xl font-bold">{basics.name}</h2>
          <p className="mt-1 text-lg text-primary">{basics.label}</p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {basics.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {basics.location.city}, {basics.location.countryCode}
              </span>
            )}
            {basics.email && (
              <a href={`mailto:${basics.email}`} className="flex items-center gap-1.5 hover:text-primary">
                <Mail className="h-4 w-4" />
                {basics.email}
              </a>
            )}
            {basics.phone && (
              <a href={`tel:${basics.phone}`} className="flex items-center gap-1.5 hover:text-primary">
                <Phone className="h-4 w-4" />
                {basics.phone}
              </a>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-3">
            {basics.url && (
              <a
                href={basics.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1 text-xs hover:bg-border/40"
              >
                <Globe className="h-3.5 w-3.5" />
                Portfolio
              </a>
            )}
            {basics.profiles?.map((p) => (
              <a
                key={p.network}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1 text-xs hover:bg-border/40"
              >
                {p.network === "LinkedIn" && <Linkedin className="h-3.5 w-3.5" />}
                {p.network === "GitHub" && <Github className="h-3.5 w-3.5" />}
                {p.network}
              </a>
            ))}
          </div>

          {basics.availability && (
            <p className="mt-4 text-sm text-muted">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
              {basics.availability}
            </p>
          )}
        </header>

        {basics.summary && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Summary</h3>
            <p className="mt-2 leading-relaxed">{basics.summary}</p>
          </section>
        )}

        {achievements?.length ? (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Selected Impact</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-6 sm:grid-cols-2">
              {achievements.map((a) => (
                <li key={a} className="rounded-md border border-border p-3">
                  {a}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {skills?.length ? (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Skills</h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <h4 className="font-medium">{skill.name}</h4>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
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
        ) : null}

        {work?.length ? (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Experience</h3>
            <div className="mt-4 space-y-6">
              {work.map((job) => (
                <div key={`${job.name}-${job.startDate}`} className="relative border-l-2 border-border pl-4">
                  <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="font-semibold">{job.position}</h4>
                      <p className="text-sm text-muted">
                        {job.url ? (
                          <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                            {job.name}
                          </a>
                        ) : (
                          job.name
                        )}
                      </p>
                    </div>
                    <span className="text-xs text-muted sm:whitespace-nowrap">
                      {formatDate(job.startDate)} - {formatDate(job.endDate)}
                    </span>
                  </div>
                  {job.summary && <p className="mt-2 text-sm">{job.summary}</p>}
                  {job.highlights?.length ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {products?.length ? (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Products Shipped</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {products.slice(0, 6).map((prod) => (
                <div key={prod.name} className="rounded-lg border border-border p-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium text-sm">{prod.name}</h4>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                      {prod.platform}
                    </span>
                  </div>
                  {prod.description && <p className="mt-1 text-xs leading-5 text-muted">{prod.description}</p>}
                  {prod.url && (
                    <a
                      href={prod.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs text-primary hover:underline"
                    >
                      View
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {education?.length ? (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Education</h3>
            <div className="mt-3 space-y-3">
              {education.map((edu) => (
                <div key={edu.institution} className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-medium">{edu.institution}</h4>
                    <p className="text-sm text-muted">
                      {edu.studyType} in {edu.area}
                    </p>
                  </div>
                  <span className="text-xs text-muted">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {certifications?.length ? (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Certifications</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between gap-3 rounded-lg border border-border p-3">
                  <div>
                    <h4 className="text-sm font-medium">{cert.name}</h4>
                    <p className="text-xs text-muted">{cert.issuer}</p>
                  </div>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                      View
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {languages?.length ? (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Languages</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span key={lang.language} className="text-sm">
                  <span className="font-medium">{lang.language}</span>
                  {lang.fluency && <span className="text-muted"> ({lang.fluency})</span>}
                </span>
              ))}
            </div>
          </section>
        ) : null}
      </article>

      <div className="mt-8 rounded-lg border border-border bg-card p-6 text-center">
        <h3 className="font-semibold">Interested in working together?</h3>
        <p className="mt-1 text-sm text-muted">Download my resume or get in touch directly.</p>
        <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
          <ResumeActions />
          <Link
            href="/contact"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-border/40"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
