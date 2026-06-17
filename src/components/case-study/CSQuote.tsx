export function CSQuote({ text, author, role }: { text: string; author?: string; role?: string }) {
  return (
    <blockquote className="rounded-lg border border-border bg-card p-5 italic">
      &quot;{text}&quot;
      {(author || role) && (
        <footer className="mt-2 not-italic">
          <span className="font-medium">{author}</span>
          {role && <span className="text-muted"> / {role}</span>}
        </footer>
      )}
    </blockquote>
  );
}
