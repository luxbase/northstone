"use client";

import { useId, useState } from "react";
import { IconArrow } from "./icons";

const projectTypes = [
  "New Construction",
  "Remodel & Addition",
  "Detached ADU",
  "Permit Assistance Only",
  "Insurance / Investment Guidance",
  "Something Else",
];

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const fieldClass =
  "w-full rounded-xl border border-bone/15 bg-coal/60 px-4 py-3.5 text-sm text-bone placeholder:text-stone/55 transition-colors focus:border-warm focus:outline-none disabled:opacity-50";

const labelClass =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-stone";

type Status = "idle" | "sending" | "error" | "done";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const uid = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New project inquiry — Northstone",
          from_name: "Northstone Website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-bone/12 bg-coal/50 p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-warm/40 bg-warm/10">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-warm"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m5 12.5 4.5 4.5L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-medium tracking-tight">
          Request received.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-pretty text-sm leading-relaxed text-stone">
          Thank you. We&apos;ll review the details and follow up within one
          business day to schedule your consultation.
        </p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-stone/60">
          Ref · NS-{new Date().getFullYear()}-0492
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-bone/12 bg-coal/40 p-7 md:p-9"
    >
      {/* honeypot — spam bots fill this; humans never see it */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={labelClass}>
            Full name
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            required
            disabled={sending}
            autoComplete="name"
            placeholder="Jane Mariposa"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            required
            disabled={sending}
            autoComplete="email"
            placeholder="jane@example.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={labelClass}>
            Phone
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            disabled={sending}
            autoComplete="tel"
            placeholder="(209) 555-0148"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-type`} className={labelClass}>
            Project type
          </label>
          <select
            id={`${uid}-type`}
            name="projectType"
            defaultValue=""
            required
            disabled={sending}
            className={`${fieldClass} appearance-none`}
          >
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={`${uid}-message`} className={labelClass}>
          Project details
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={5}
          required
          disabled={sending}
          placeholder="Tell us about your lot, your goals, and your timeline. Include the jurisdiction if you know it."
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-warm/30 bg-warm/5 px-4 py-3 text-sm leading-relaxed text-warm"
        >
          Something went wrong sending your request. Please try again, or email
          us directly at studio@northstone.build.
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="group mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-warm px-7 py-4 text-sm font-medium tracking-wide text-granite transition-colors hover:bg-bone disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Submit Request"}
        {!sending && (
          <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-stone/60">
        We use your details only to respond to this inquiry. No drawings or
        personal data are shared outside the studio.
      </p>
    </form>
  );
}
