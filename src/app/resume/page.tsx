import React from "react";
import { resume } from "@/data/resume";
import { ClientResume } from "./ClientResume";

export const metadata = {
  title: "Résumé – Joshua Fajobi",
  description: "Download my résumé as PDF or JSON.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Résumé</h1>
        <p className="text-sm text-muted">One source of truth. Exported to PDF & JSON.</p>
      </header>
      <ClientResume />
      <section className="rounded-xl border border-border bg-card p-4">
        <h2 className="text-base font-semibold">Preview</h2>
        <p className="mt-1 text-sm text-muted">{resume.basics.name} — {resume.basics.label}</p>
        <ul className="mt-3 space-y-2 text-sm">
          {resume.work.slice(0, 4).map((w, i) => (
            <li key={i}>
              <span className="font-medium">{w.position}</span> @ {w.name}{" "}
              <span className="text-muted">({w.startDate} – {w.endDate ?? "Present"})</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
