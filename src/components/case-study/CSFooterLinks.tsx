export function CSFooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-border/40"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
