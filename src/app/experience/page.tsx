import { experience } from "@/lib/data";
import { TimelineItem } from "@/components/TimelineItem";

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="text-xl font-semibold">Experience</h1>
      <div className="mt-6 space-y-6">
        {experience.map((e) => (
          <TimelineItem key={`${e.company}-${e.period}`} {...e} />
        ))}
      </div>
    </div>
  );
}
