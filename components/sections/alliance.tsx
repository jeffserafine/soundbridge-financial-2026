"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";

const ALLIANCE_FORMSPREE_ACTION = "https://formspree.io/f/xwpgbonr";

const ROLE_OPTIONS = [
  "CPA",
  "Enrolled Agent",
  "P&C Agency",
  "Financial Planner",
  "Mortgage Broker",
] as const;

const HNW_RANGE_OPTIONS = ["0–5", "6–15", "16–30", "31–60", "60+"] as const;

const LICENSE_STATUS_OPTIONS = [
  "Already life licensed",
  "Not licensed yet, willing to obtain",
  "Not licensed and not pursuing",
] as const;

const REASONS = [
  {
    label:
      "Add a life-insurance and advanced planning partner without disrupting client trust",
    value: "partner-without-disrupting-client-trust",
  },
  {
    label: "Offer HNW strategy reviews for select clients",
    value: "hnw-strategy-reviews",
  },
  {
    label:
      "Offload case design, underwriting, and implementation while staying in your lane",
    value: "offload-casework",
  },
  {
    label:
      "Create an additional revenue stream (licensed or willing to become licensed)",
    value: "grow-revenue-stream",
  },
  {
    label: "Build a cleaner process, updates, and documentation for complex cases",
    value: "clean-process-and-updates",
  },
  {
    label:
      "Explore a referral alliance for business-owner or key-person planning",
    value: "business-owner-planning",
  },
] as const;

function CheckboxRow({
  id,
  label,
  value,
}: {
  id: string;
  label: string;
  value: string;
}) {
  return (
    <label
      htmlFor={id}
      className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left text-sm leading-relaxed text-slate-200 shadow-sm transition hover:bg-white/7"
    >
      <input
        id={id}
        name="reasons[]"
        value={value}
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-cyan-400"
      />
      <span className="text-slate-200">{label}</span>
    </label>
  );
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-semibold tracking-tight text-slate-100"
    >
      {children}
    </label>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition " +
        "placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/15 " +
        (props.className ?? "")
      }
    />
  );
}

function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={
        "mt-2 w-full appearance-none rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition " +
        "focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/15 " +
        (props.className ?? "")
      }
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={
        "mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition " +
        "placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/15 " +
        (props.className ?? "")
      }
    />
  );
}

export function Alliance() {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(ALLIANCE_FORMSPREE_ACTION, {
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
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-8">
      {/* Aura background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -bottom-28 right-[-6rem] h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-30 glow-radial-blue" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
        {/* Left: messaging */}
        <div>
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-slate-200">
            Alliances
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Alliance Partner Program
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Partner with SoundBridge to support high-performing clients with protection and planning strategies.
            Clean handoffs. Clear communication. Zero pressure.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 hover:from-cyan-400 hover:to-blue-400"
            >
              <Link href="/contact">Schedule a Conversation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/15 bg-white/5 text-slate-100 hover:bg-white/10"
            >
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Partnership Approach",
                body: "We complement your core advisory role with specialized case design, underwriting navigation, and clean implementation.",
              },
              {
                title: "Time and Liability Relief",
                body: "Reduce the operational load of complex insurance work. We document decisions and keep stakeholders aligned.",
              },
              {
                title: "Client Retention",
                body: "Strengthen trust with a predictable process, proactive updates, and a partner that respects your relationships.",
              },
              {
                title: "Revenue Growth",
                body: "Create an additional income stream for qualified partners who are life licensed or willing to obtain a license.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card-magnetic border-glow rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-50">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: application */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur lg:sticky lg:top-28">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50">
                Alliance application
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                Share a bit of context and we will route you to the right next step.
              </p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
              2–3 minutes
            </span>
          </div>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="SoundBridge: Alliance Application"
            />
            <input type="hidden" name="form" value="Alliance Application" />
            <input type="hidden" name="source" value="/alliances" />
            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="name">Full name</FieldLabel>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@firm.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="firm">Firm</FieldLabel>
                <TextInput
                  id="firm"
                  name="firm"
                  type="text"
                  autoComplete="organization"
                  placeholder="Smith & Co"
                />
              </div>
              <div>
                <FieldLabel htmlFor="phone">Phone (optional)</FieldLabel>
                <TextInput
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel htmlFor="role">Role</FieldLabel>
                <SelectInput id="role" name="role" required defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  {ROLE_OPTIONS.map((r) => (
                    <option key={r} value={r} className="text-slate-900">
                      {r}
                    </option>
                  ))}
                </SelectInput>
              </div>
              <div>
                <FieldLabel htmlFor="hnwRange">HNW clients (approx)</FieldLabel>
                <SelectInput
                  id="hnwRange"
                  name="hnw_client_range"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a range
                  </option>
                  {HNW_RANGE_OPTIONS.map((r) => (
                    <option key={r} value={r} className="text-slate-900">
                      {r}
                    </option>
                  ))}
                </SelectInput>
              </div>
            </div>

            <div>
              <FieldLabel htmlFor="licenseStatus">Life license status</FieldLabel>
              <SelectInput
                id="licenseStatus"
                name="life_license_status"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                {LICENSE_STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s} className="text-slate-900">
                    {s}
                  </option>
                ))}
              </SelectInput>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold tracking-tight text-slate-100">
                  What are you reaching out about?
                </label>
                <span className="text-xs text-slate-400">Select all that apply</span>
              </div>
              <div className="mt-2 grid gap-2">
                {REASONS.map((r) => (
                  <CheckboxRow
                    key={r.value}
                    id={`reason-${r.value}`}
                    label={r.label}
                    value={r.label}
                  />
                ))}
              </div>
            </div>

            <div>
              <FieldLabel htmlFor="details">Additional details (optional)</FieldLabel>
              <TextArea
                id="details"
                name="details"
                rows={5}
                placeholder="Anything helpful: your typical client profile, what you want to offload, timelines, or a specific case type."
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-amber-300 to-amber-500 text-slate-950 hover:from-amber-200 hover:to-amber-400 disabled:opacity-60"
              >
                {status === "sending" ? "Submitting..." : "Submit application"}
              </Button>
              {status === "success" && (
                <div
                  className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
                  role="status"
                  aria-live="polite"
                >
                  Application submitted. We will get back to you shortly.
                </div>
              )}

              {status === "error" && (
                <div
                  className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
                  role="alert"
                >
                  {errorMsg || "Something went wrong. Please try again."}
                </div>
              )}
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                By submitting, you agree that SoundBridge may contact you about this inquiry. This is informational and
                does not constitute tax or legal advice. Licensing and availability vary by state.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Alliance;
