import { resume } from "@/data/resume";
import { ResumeActions } from "./ResumeActions";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Résumé – Joshua Fajobi",
  description: "View and download Joshua Fajobi's résumé - Frontend Engineer specializing in React, Next.js, and Flutter.",
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
      {/* Header with Download Actions */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Résumé</h1>
          <p className="text-sm text-muted">View online or download as PDF</p>
        </div>
        <ResumeActions />
      </div>

      {/* Resume Content */}
      <article className="space-y-8 rounded-xl border border-border bg-card p-6 sm:p-8">
        {/* Profile Header */}
        <header className="border-b border-border pb-6">
          <h2 className="text-2xl font-bold">{basics.name}</h2>
          <p className="mt-1 text-lg text-primary">{basics.label}</p>
          
          {/* Contact Info */}
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

          {/* Social Links */}
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

          {/* Availability */}
          {basics.availability && (
            <p className="mt-4 text-sm text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2" />
              {basics.availability}
            </p>
          )}
        </header>

        {/* Summary */}
        {basics.summary && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Summary</h3>
            <p className="mt-2 leading-relaxed">{basics.summary}</p>
          </section>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Skills</h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <h4 className="font-medium">{skill.name}</h4>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
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
        )}

        {/* Key Achievements */}
        {achievements && achievements.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Key Achievements</h3>
            <ul className="mt-3 space-y-2">
              {achievements.map((a, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-primary">•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Experience */}
        {work && work.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Experience</h3>
            <div className="mt-4 space-y-6">
              {work.map((job, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-border">
                  <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
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
                    <span className="text-xs text-muted whitespace-nowrap">
                      {formatDate(job.startDate)} – {formatDate(job.endDate)}
                    </span>
                  </div>
                  {job.summary && (
                    <p className="mt-2 text-sm">{job.summary}</p>
                  )}
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted">
                          <span className="text-primary/60">–</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Products */}
        {products && products.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Products Shipped</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {products.slice(0, 6).map((prod, i) => (
                <div key={i} className="rounded-lg border border-border p-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium text-sm">{prod.name}</h4>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                      {prod.platform}
                    </span>
                  </div>
                  {prod.description && (
                    <p className="mt-1 text-xs text-muted line-clamp-2">{prod.description}</p>
                  )}
                  {prod.url && (
                    <a
                      href={prod.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs text-primary hover:underline"
                    >
                      View →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Education</h3>
            <div className="mt-3 space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h4 className="font-medium">{edu.institution}</h4>
                    <p className="text-sm text-muted">
                      {edu.studyType} in {edu.area}
                    </p>
                  </div>
                  <span className="text-xs text-muted">
                    {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Certifications</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div>
                    <h4 className="text-sm font-medium">{cert.name}</h4>
                    <p className="text-xs text-muted">{cert.issuer}</p>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      View
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {languages && languages.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Languages</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {languages.map((lang, i) => (
                <span key={i} className="text-sm">
                  <span className="font-medium">{lang.language}</span>
                  {lang.fluency && <span className="text-muted"> ({lang.fluency})</span>}
                </span>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Bottom CTA */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6 text-center">
        <h3 className="font-semibold">Interested in working together?</h3>
        <p className="mt-1 text-sm text-muted">
          Download my resume or get in touch directly.
        </p>
        <div className="mt-4 flex justify-center gap-3">
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
