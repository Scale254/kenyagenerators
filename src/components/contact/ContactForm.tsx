"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions";

const initialState: ContactState = { ok: false, message: "" };

const subjects = [
  "General Enquiry",
  "Generators",
  "Air Compressors",
  "Spare Parts",
  "Service & Maintenance",
  "Quotation",
];

const fieldBase =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-secondary outline-none transition-colors placeholder:text-ink/40 focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );

  if (state.ok) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-secondary">Message sent!</h3>
        <p className="mt-2 max-w-sm text-sm text-ink/70">{state.message}</p>
      </div>
    );
  }

  const err = state.errors || {};

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={err.name?.[0]}>
          <input name="name" className={fieldBase} placeholder="John Doe" />
        </Field>
        <Field label="Email Address" error={err.email?.[0]}>
          <input
            name="email"
            type="email"
            className={fieldBase}
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone Number" error={err.phone?.[0]}>
          <input
            name="phone"
            className={fieldBase}
            placeholder="+254 7XX XXX XXX"
          />
        </Field>
        <Field label="Company (optional)" error={err.company?.[0]}>
          <input
            name="company"
            className={fieldBase}
            placeholder="Company Ltd."
          />
        </Field>
      </div>

      <Field label="Subject" error={err.subject?.[0]}>
        <select name="subject" className={fieldBase} defaultValue="">
          <option value="" disabled>
            Select a subject
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" error={err.message?.[0]}>
        <textarea
          name="message"
          rows={5}
          className={`${fieldBase} resize-none`}
          placeholder="Tell us about your power or air compressor needs…"
        />
      </Field>

      {state.message && !state.ok && (
        <p className="flex items-center gap-2 text-sm font-medium text-red-600">
          <AlertCircle className="h-4 w-4" />
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-secondary">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
