import Image from "next/image";
import { ArrowDown } from "lucide-react";
import type { CSJourneyStep } from "@/lib/caseStudies";

export function CSJourney({ steps }: { steps: CSJourneyStep[] }) {
  if (!steps.length) return null;

  return (
    <div className="grid gap-4">
      {steps.map((step, index) => (
        <div key={step.title}>
          <article
            className={`grid gap-4 rounded-lg border border-border bg-background p-4 md:items-center ${
              step.image ? "md:grid-cols-[220px_1fr]" : ""
            }`}
          >
            {step.image ? (
              <div className="overflow-hidden rounded-lg border border-border bg-white p-2 dark:bg-slate-950">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  width={520}
                  height={900}
                  quality={100}
                  sizes="(max-width: 768px) 70vw, 220px"
                  className="mx-auto h-auto max-h-[320px] w-auto object-contain"
                />
              </div>
            ) : null}
            <div>
              <p className="text-xs font-semibold uppercase text-primary">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
            </div>
          </article>
          {index < steps.length - 1 ? (
            <div className="flex justify-center py-2 text-primary">
              <ArrowDown size={18} aria-hidden />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
