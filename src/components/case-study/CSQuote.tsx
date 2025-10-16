export function CSQuote({ text, author, role }: { text: string; author?: string; role?: string }) {
  return (
    <blockquote className="rounded-xl border border-border bg-card p-5 italic">
      “{text}”
      {(author || role) && (
        <footer className="mt-2 not-italic">
          <span className="font-medium">{author}</span>
          {role && <span className="text-muted"> • {role}</span>}
        </footer>
      )}
    </blockquote>
  );
}
