export function CSSection({
  title, children,
}: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
