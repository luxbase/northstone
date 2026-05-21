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

const fieldClass =
  "w-full rounded-xl border border-bone/15 bg-coal/60 px-4 py-3.5 text-sm text-bone placeholder:text-stone/55 transition-colors focus:border-warm focus:outline-none";

const labelClass =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-stone";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const uid = useId();

  if (submitted) {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-bone/12 bg-coal/40 p-7 md:p-9"
    >
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
          placeholder="Tell us about your lot, your goals, and your timeline. Include the jurisdiction if you know it."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-warm px-7 py-4 text-sm font-medium tracking-wide text-granite transition-colors hover:bg-bone sm:w-auto"
      >
        Submit Request
        <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="mt-4 text-xs leading-relaxed text-stone/60">
        We use your details only to respond to this inquiry. No drawings or
        personal data are shared outside the studio.
      </p>
    </form>
  );
}
