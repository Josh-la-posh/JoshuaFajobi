import Image from "next/image";
import type { CSMedia } from "@/lib/caseStudies";

export function CSProductGallery({ images }: { images: CSMedia[] }) {
  if (!images.length) return null;

  return (
    <div className="grid gap-6">
      {images.map((image, index) => (
        <figure
          key={image.src}
          className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg border border-border bg-background"
        >
          <div className="flex justify-center bg-white p-2 dark:bg-slate-950 sm:p-3">
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1000}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 86vw, 1024px"
              className="h-auto max-h-[680px] w-auto max-w-full object-contain"
              priority={index === 0}
            />
          </div>
          {image.caption && (
            <figcaption className="border-t border-border p-3 text-sm leading-6 text-muted">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
