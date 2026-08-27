"use client";

import { useState } from "react";
import Script from "next/script";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const turnstileToken = String(fd.get("cf-turnstile-response") ?? "");

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      setError("Please complete the verification and try again.");
      return;
    }

    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
      company: String(fd.get("company") ?? ""), // honeypot
      turnstileToken,
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
        window.turnstile?.reset();
        return;
      }
      setStatus("success");
      form.reset();
      window.turnstile?.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email enquiries@blackoakglobal.com directly.");
      window.turnstile?.reset();
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
    <>
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />
      )}
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

        {TURNSTILE_SITE_KEY && (
          <div
            className="cf-turnstile"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-theme="light"
          />
        )}

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
    </>
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
