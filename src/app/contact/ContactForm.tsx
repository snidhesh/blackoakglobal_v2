"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email enquiries@blackoakglobal.com directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[var(--color-accent)]/40 bg-[var(--color-paper-soft)] px-8 py-12 text-center">
        <div className="font-editorial text-3xl text-[var(--color-ink)]">
          Thank you.
        </div>
        <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
          Your enquiry has been received. A member of the BlackOak team will be in touch
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <input
        type="text"
        name="company"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)] mb-3"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-[var(--color-hairline-strong)] bg-transparent px-5 py-4 text-[var(--color-ink)] focus:border-[var(--color-ink)] focus:outline-none resize-y"
        />
      </div>

      {error && <p className="text-sm text-[var(--color-accent)]">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex items-center gap-3 bg-[var(--color-ink)] text-[var(--color-paper)] px-7 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors",
          status === "submitting"
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-[var(--color-accent)]",
        )}
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)] mb-3"
      >
        {label}
        {required && <span className="text-[var(--color-accent)]"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full border border-[var(--color-hairline-strong)] bg-transparent px-5 py-4 text-[var(--color-ink)] focus:border-[var(--color-ink)] focus:outline-none"
      />
    </div>
  );
}
