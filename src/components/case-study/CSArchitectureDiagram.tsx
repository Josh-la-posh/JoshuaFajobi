export function CSArchitectureDiagram() {
  const providers = ["MTN", "Airtel", "GLO"];
  const workers = ["Accounts", "SMS", "Subscription"];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[640px] rounded-lg border border-border bg-background p-5">
        <div className="grid grid-cols-[1fr_1.2fr_1fr] items-center gap-6">
          <div className="space-y-3">
            {providers.map((provider) => (
              <div key={provider} className="rounded-md border border-border bg-card px-4 py-3 text-center text-sm font-semibold">
                {provider}
              </div>
            ))}
          </div>

          <div className="space-y-4 text-center">
            <div className="text-xs uppercase tracking-[0.16em] text-muted">fast acknowledgement</div>
            <div className="rounded-md border border-primary/40 bg-primary/10 px-4 py-4 text-sm font-semibold text-primary">
              Callback API
            </div>
            <div className="mx-auto h-8 w-px bg-border" />
            <div className="rounded-md border border-border bg-card px-4 py-4 text-sm font-semibold">
              Background Queue
            </div>
          </div>

          <div className="space-y-3">
            {workers.map((worker) => (
              <div key={worker} className="rounded-md border border-border bg-card px-4 py-3 text-center text-sm font-semibold">
                {worker}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <div className="w-[calc(50%-1.5rem)] rounded-md border border-border bg-card px-4 py-3 text-center text-sm font-semibold">
            PostgreSQL Database
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted">
          Telecom providers receive an immediate response from the callback API. Slower business
          operations continue through background processing so account creation, SMS delivery,
          subscription updates, and database writes do not block the provider handshake.
        </p>
      </div>
    </div>
  );
}
