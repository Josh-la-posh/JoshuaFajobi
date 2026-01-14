"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormValues = z.infer<typeof schema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: "joshuamayowa23@yahoo.com", href: "mailto:joshuamayowa23@yahoo.com" },
  { icon: Phone, label: "Phone", value: "+234 810 251 3974", href: "tel:+2348102513974" },
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: null },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-bold">Let&apos;s Talk</h1>
      <p className="mt-2 text-muted">
        Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        {/* Contact Info */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-semibold">Contact Information</h2>
            <div className="mt-4 space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-semibold">Availability</h2>
            <p className="mt-2 text-sm text-muted">
              Open to remote &amp; hybrid roles across EMEA. Currently accepting freelance projects
              and full-time opportunities.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.linkedin.com/in/jfajobi/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-border/40"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Josh-la-posh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-border/40"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-semibold text-foreground">Send a Message</h2>

            {status === "success" && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-500/10 p-3 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <p className="text-sm">Thanks! I&apos;ll get back to you soon.</p>
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-red-600 dark:text-red-400">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm">Something went wrong. Please try again or email me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="mt-1 w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple local implementation of a Zod resolver compatible with react-hook-form.
function zodResolver<TSchema extends z.ZodTypeAny>(schema: TSchema) {
  return async (values: unknown) => {
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      return { values: parsed.data, errors: {} };
    }
    type FieldError = { type: string; message: string };
    const fieldErrors: Record<string, FieldError> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path.join(".");
      fieldErrors[path] = {
        type: issue.code,
        message: issue.message,
      };
    }
    return { values: {}, errors: fieldErrors };
  };
}

