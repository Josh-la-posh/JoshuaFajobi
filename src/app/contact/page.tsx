"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});
type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<FormValues>({ resolver: zodResolver(schema) });

    async function onSubmit(values: FormValues) {
        await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        });
        alert("Thanks! I’ll get back to you.");
        reset();
    }

    return (
        <div className="max-w-lg">
            <h1 className="text-xl font-semibold">Let’s talk</h1>
            <p className="mt-2 text-sm text-muted">Tell me about your role, product, or problem.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-3">
                <input
                    {...register("name")}
                        placeholder="Name"
                        className="w-full rounded-lg border border-border bg-card px-3 py-2"
                />
                {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}

                <input
                    {...register("email")}
                    placeholder="Email"
                    className="w-full rounded-lg border border-border bg-card px-3 py-2"
                />
                {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}

                <textarea
                    {...register("message")}
                    placeholder="Message"
                    className="min-h-[140px] w-full rounded-lg border border-border bg-card px-3 py-2"
                />
                {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}

                <button
                    disabled={isSubmitting}
                    className="rounded-lg bg-primary px-4 py-2 text-sm text-white"
                >
                    {isSubmitting ? "Sending…" : "Send"}
                </button>
            </form>
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

