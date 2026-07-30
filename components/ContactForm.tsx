"use client";

import { useState, type FormEvent } from "react";

const intents = [
  { value: "consultation", label: "Schedule a Consultation" },
  { value: "demo", label: "Request a Demo" },
  { value: "proposal", label: "Request a Proposal" },
];

export function ContactForm({ defaultIntent }: { defaultIntent?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      intent: String(data.get("intent") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-mw-secondary/30 bg-mw-secondary/5 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-mw-primary">Thank you.</h3>
        <p className="mt-2 text-sm text-mw-ink/70">
          We&rsquo;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-mw-ink/80">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-mw-line px-4 py-2.5 text-sm outline-none focus:border-mw-secondary"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-mw-ink/80">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-mw-line px-4 py-2.5 text-sm outline-none focus:border-mw-secondary"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-mw-ink/80">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full rounded-lg border border-mw-line px-4 py-2.5 text-sm outline-none focus:border-mw-secondary"
          />
        </div>
        <div>
          <label htmlFor="intent" className="mb-1.5 block text-sm font-medium text-mw-ink/80">
            I&rsquo;d like to&hellip;
          </label>
          <select
            id="intent"
            name="intent"
            defaultValue={defaultIntent || "consultation"}
            className="w-full rounded-lg border border-mw-line px-4 py-2.5 text-sm outline-none focus:border-mw-secondary"
          >
            {intents.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-mw-ink/80">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-mw-line px-4 py-2.5 text-sm outline-none focus:border-mw-secondary"
        />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-mw-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-mw-secondary disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
