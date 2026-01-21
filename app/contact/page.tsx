"use client";

import { useMemo, useState, type FormEvent } from "react";

const FORMSPREE_GENERAL = "https://formspree.io/f/mblnyoaq";
const FORMSPREE_HNW = "https://formspree.io/f/xrbnkqao";
const SCHEDULING_URL = "https://calendar.app.google/4hWgcNAGEZ6qp9nJA";

type FormStatus = "idle" | "sending" | "success" | "error";

type FormCardProps = {
  title: string;
  subtitle: string;
  formName: string;
  source: string;
  formspreeUrl: string;
  reasonOptions: string[];
  variant?: "general" | "hnw";
};

function FormCard({
  title,
  subtitle,
  formName,
  source,
  formspreeUrl,
  reasonOptions,
  variant = "general",
}: FormCardProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(formspreeUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;

      setStatus("error");
      setErrorMsg(data?.error || "Something went wrong. Please try again.");
    } catch (err) {
      // Log to help diagnose issues (CORS, network, Formspree response, etc.)
      console.error("Form submit failed:", err);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-sm backdrop-blur md:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-slate-50">
        {title}
      </h2>
      <p className="mt-2 text-slate-300">{subtitle}</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <input type="hidden" name="form" value={formName} />
        <input type="hidden" name="source" value={source} />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={`${formName}-name`} className="text-sm font-semibold text-slate-200">
              Name
            </label>
            <input
              id={`${formName}-name`}
              name="name"
              required
              className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-emerald-500/50"
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor={`${formName}-email`} className="text-sm font-semibold text-slate-200">
              Email
            </label>
            <input
              id={`${formName}-email`}
              name="email"
              type="email"
              required
              className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-emerald-500/50"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={`${formName}-phone`} className="text-sm font-semibold text-slate-200">
              Phone (optional)
            </label>
            <input
              id={`${formName}-phone`}
              name="phone"
              className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-emerald-500/50"
              placeholder="(###) ###-####"
            />
          </div>

          {variant === "general" ? (
            <div className="grid gap-2">
              <label htmlFor={`${formName}-who`} className="text-sm font-semibold text-slate-200">
                I am a
              </label>
              <select
                id={`${formName}-who`}
                name="segment"
                defaultValue=""
                required
                className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-slate-100 outline-none transition focus:border-emerald-500/50"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Physician / Medical Professional</option>
                <option>Entrepreneur / Business Owner</option>
                <option>Creator / Entertainer / Athlete</option>
                <option>C-Suite / Partner</option>
                <option>High Net Worth Individual</option>
                <option>Other</option>
              </select>
            </div>
          ) : (
            <div className="grid gap-2">
              <label htmlFor={`${formName}-networth`} className="text-sm font-semibold text-slate-200">
                Approximate net worth
              </label>
              <select
                id={`${formName}-networth`}
                name="netWorth"
                defaultValue=""
                required
                className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-slate-100 outline-none transition focus:border-emerald-500/50"
              >
                <option value="" disabled>
                  Select a range
                </option>
                <option>$500k - $1M</option>
                <option>$1M - $5M</option>
                <option>$5M - $10M</option>
                <option>$10M+</option>
              </select>
            </div>
          )}
        </div>

        {variant === "hnw" && (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor={`${formName}-timeline`} className="text-sm font-semibold text-slate-200">
                Timeline
              </label>
              <select
                id={`${formName}-timeline`}
                name="timeline"
                defaultValue=""
                required
                className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-slate-100 outline-none transition focus:border-emerald-500/50"
              >
                <option value="" disabled>
                  Select
                </option>
                <option>Immediate</option>
                <option>Next 30 days</option>
                <option>Next 90 days</option>
                <option>3-6 months</option>
                <option>Exploring</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor={`${formName}-ref`} className="text-sm font-semibold text-slate-200">
                Referral source (optional)
              </label>
              <input
                id={`${formName}-ref`}
                name="referral"
                className="h-11 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-emerald-500/50"
                placeholder="Name, firm, or how you found us"
              />
            </div>
          </div>
        )}

        <div className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">
            What are you reaching out about?
          </span>
          <div className="grid gap-2 rounded-xl border border-white/10 bg-slate-950/40 p-4">
            {reasonOptions.map((reason) => {
              const id = `${formName}-reason-${reason
                .replace(/\s+/g, "-")
                .toLowerCase()}`;
              return (
                <label
                  key={reason}
                  htmlFor={id}
                  className="flex cursor-pointer items-start gap-3 text-sm text-slate-200"
                >
                  <input
                    id={id}
                    name="reasons[]"
                    type="checkbox"
                    value={reason}
                    className="mt-0.5 h-4 w-4 rounded border-white/20 bg-slate-950 text-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                  />
                  <span className="leading-snug">{reason}</span>
                </label>
              );
            })}
          </div>
          <p className="text-xs text-slate-400">
            Check any that apply. This helps us respond with the right next step.
          </p>
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${formName}-details`} className="text-sm font-semibold text-slate-200">
            Details (optional)
          </label>
          <textarea
            id={`${formName}-details`}
            name="details"
            rows={5}
            className="rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-emerald-500/50"
            placeholder={
              variant === "hnw"
                ? "Add context (goals, timing, complexity, current coverage, questions)."
                : "Add context (what you are trying to solve, questions, timing)."
            }
          />
        </div>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>

            <div className="flex items-center gap-3 sm:pl-2">
              <span className="text-sm text-slate-400">Prefer to book time instead?</span>
              <a
                href={SCHEDULING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
              >
                Schedule
              </a>
            </div>
          </div>
        </div>

        {status === "success" && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
            Submitted. We will get back to you shortly.
          </div>
        )}

        {status === "error" && (
          <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
            {errorMsg || "Something went wrong. Please try again."}
          </div>
        )}
      </form>
    </section>
  );
}

export default function ContactPage() {
  const generalReasons = useMemo(
    () => [
      "General question",
      "Coverage review",
      "Business owner planning",
      "Family planning",
      "Executive planning",
      "Tax-efficient strategy coordination",
      "Alliance Inquiry",
      "Referral / introduction",
      "Other",
    ],
    []
  );

  const hnwReasons = useMemo(
    () => [
      "Planning a liquidity event",
      "Tax-efficient accumulation",
      "Executive benefits / compensation planning",
      "Business continuity (buy-sell / key person)",
      "Legacy / estate coordination",
      "Coverage optimization",
      "Exploring private placement or advanced solutions",
      "Other",
    ],
    []
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div id="schedule" className="scroll-mt-28" />
      <header className="mx-auto mb-10 max-w-3xl text-center">
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-wide text-slate-200">
          Contact
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
          Start the conversation
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          Choose the path that matches your situation. We respond quickly and keep the process clean.
          If you would rather book time first, use the Schedule link next to Submit.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <FormCard
          title="General Contact"
          subtitle="Questions, intros, and general inquiries."
          formName="General Contact"
          source="/contact"
          formspreeUrl={FORMSPREE_GENERAL}
          reasonOptions={generalReasons}
          variant="general"
        />

        <FormCard
          title="HNW Strategy Review"
          subtitle="For complex planning, high-income, business ownership, or high net worth situations."
          formName="HNW Strategy Review"
          source="/contact"
          formspreeUrl={FORMSPREE_HNW}
          reasonOptions={hnwReasons}
          variant="hnw"
        />
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-slate-400">
        This material is for informational purposes only and is not intended as tax or legal advice.
        Insurance and financial strategies vary by individual circumstances. Consult your own advisors.
      </p>
    </div>
  );
}
