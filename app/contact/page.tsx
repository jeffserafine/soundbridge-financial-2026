"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";

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
      console.error("Form submit failed:", err);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:border-forest-200 transition-all md:p-8">
      <h2 className="text-xl font-serif font-medium text-forest-900">
        {title}
      </h2>
      <p className="mt-2 text-sm text-stone-600">{subtitle}</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <input type="hidden" name="form" value={formName} />
        <input type="hidden" name="source" value={source} />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={`${formName}-name`} className="text-sm font-semibold text-stone-700">
              Name
            </label>
            <input
              id={`${formName}-name`}
              name="name"
              required
              className="h-11 rounded-lg border border-stone-200 bg-stone-50 px-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor={`${formName}-email`} className="text-sm font-semibold text-stone-700">
              Email
            </label>
            <input
              id={`${formName}-email`}
              name="email"
              type="email"
              required
              className="h-11 rounded-lg border border-stone-200 bg-stone-50 px-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={`${formName}-phone`} className="text-sm font-semibold text-stone-700">
              Phone (optional)
            </label>
            <input
              id={`${formName}-phone`}
              name="phone"
              className="h-11 rounded-lg border border-stone-200 bg-stone-50 px-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
              placeholder="(###) ###-####"
            />
          </div>

          {variant === "general" ? (
            <div className="grid gap-2">
              <label htmlFor={`${formName}-who`} className="text-sm font-semibold text-stone-700">
                I am a
              </label>
              <select
                id={`${formName}-who`}
                name="segment"
                defaultValue=""
                required
                className="h-11 rounded-lg border border-stone-200 bg-stone-50 px-4 text-stone-900 outline-none transition focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
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
              <label htmlFor={`${formName}-networth`} className="text-sm font-semibold text-stone-700">
                Approximate net worth
              </label>
              <select
                id={`${formName}-networth`}
                name="netWorth"
                defaultValue=""
                required
                className="h-11 rounded-lg border border-stone-200 bg-stone-50 px-4 text-stone-900 outline-none transition focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
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
              <label htmlFor={`${formName}-timeline`} className="text-sm font-semibold text-stone-700">
                Timeline
              </label>
              <select
                id={`${formName}-timeline`}
                name="timeline"
                defaultValue=""
                required
                className="h-11 rounded-lg border border-stone-200 bg-stone-50 px-4 text-stone-900 outline-none transition focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
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
              <label htmlFor={`${formName}-ref`} className="text-sm font-semibold text-stone-700">
                Referral source (optional)
              </label>
              <input
                id={`${formName}-ref`}
                name="referral"
                className="h-11 rounded-lg border border-stone-200 bg-stone-50 px-4 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
                placeholder="Name, firm, or how you found us"
              />
            </div>
          </div>
        )}

        <div className="grid gap-2">
          <span className="text-sm font-semibold text-stone-700">
            What are you reaching out about?
          </span>
          <div className="grid gap-2 rounded-lg border border-stone-200 bg-stone-50 p-4">
            {reasonOptions.map((reason) => {
              const id = `${formName}-reason-${reason
                .replace(/\s+/g, "-")
                .toLowerCase()}`;
              return (
                <label
                  key={reason}
                  htmlFor={id}
                  className="flex cursor-pointer items-start gap-3 text-sm text-stone-600 hover:text-stone-900"
                >
                  <input
                    id={id}
                    name="reasons[]"
                    type="checkbox"
                    value={reason}
                    className="mt-0.5 h-4 w-4 rounded border-stone-300 text-forest-600 focus:ring-forest-500"
                  />
                  <span className="leading-snug">{reason}</span>
                </label>
              );
            })}
          </div>
          <p className="text-xs text-stone-500">
            Check any that apply. This helps us respond with the right next step.
          </p>
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${formName}-details`} className="text-sm font-semibold text-stone-700">
            Details (optional)
          </label>
          <textarea
            id={`${formName}-details`}
            name="details"
            rows={5}
            className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
            placeholder={
              variant === "hnw"
                ? "Add context (goals, timing, complexity, current coverage, questions)."
                : "Add context (what you are trying to solve, questions, timing)."
            }
          />
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center w-full">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-sm bg-forest-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-800 disabled:opacity-60 w-full sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Submit Inquiry"}
            </button>

            <div className="flex items-center justify-center gap-3 sm:pl-4 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-stone-200 pt-3 sm:pt-0">
              <span className="text-xs text-stone-500">Or book directly:</span>
              <a
                href={SCHEDULING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-700 transition-colors hover:bg-stone-50"
              >
                Schedule Call
              </a>
            </div>
          </div>
        </div>

        {status === "success" && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Submitted. We will get back to you shortly.</span>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
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
    <div className="flex flex-col lg:flex-row">

      {/* Left Panel: The Atmosphere (Forest) - Sticky on Desktop */}
      <div className="w-full lg:w-5/12 bg-forest-900 text-white relative overflow-hidden lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:self-start flex flex-col p-12 lg:p-16">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/noise.png')] opacity-10 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mt-20 lg:mt-32">
          <Link href="/" className="inline-block mb-8">
            <span className="text-xl font-serif font-bold tracking-tight text-white/90 hover:text-white transition-colors">
              SoundBridge
            </span>
          </Link>
          
          <h1 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6">
            Start the <br /> conversation.
          </h1>
          <p className="text-forest-200 text-lg leading-relaxed max-w-sm">
            Whether you are a physician planning for exit, or an advisor looking to partner, clarity starts with a brief introduction.
          </p>
        </div>

        <div className="relative z-10 space-y-8 mt-12 lg:mt-auto mb-10">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <Mail className="h-5 w-5 text-lime-400" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-1">Email Us</h3>
              <a href="mailto:info@soundbridgefinancial.com" className="text-forest-100 hover:text-white transition-colors text-lg">
                info@soundbridgefinancial.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <MapPin className="h-5 w-5 text-lime-400" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-1">Office</h3>
              <p className="text-forest-100 text-lg">
                Los Angeles, CA <br />
                <span className="text-sm text-forest-300">Serving clients nationwide.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: The Forms (Stone) - Scrollable */}
      <div className="w-full lg:w-7/12 bg-stone-50 lg:ml-auto min-h-screen">
        <div className="px-6 py-16 lg:px-16 lg:py-24">
          <div className="max-w-xl mx-auto space-y-12">
            
            <div className="space-y-2">
              <h2 className="text-sm font-mono text-stone-500 uppercase tracking-widest">
                Select your path
              </h2>
              <p className="text-stone-600 text-sm">
                Choose the form that best matches your needs.
              </p>
            </div>

            <div className="grid gap-10">
              <FormCard
                title="Private Client Inquiry"
                subtitle="For complex planning, high-income, business ownership, or high net worth situations."
                formName="HNW Strategy Review"
                source="/contact"
                formspreeUrl={FORMSPREE_HNW}
                reasonOptions={hnwReasons}
                variant="hnw"
              />

              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-stone-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-stone-50 px-2 text-sm text-stone-500">OR</span>
                </div>
              </div>

              <FormCard
                title="General Contact"
                subtitle="Questions, intros, and general inquiries."
                formName="General Contact"
                source="/contact"
                formspreeUrl={FORMSPREE_GENERAL}
                reasonOptions={generalReasons}
                variant="general"
              />
            </div>

            <div className="border-t border-stone-200 pt-8 mt-12">
              <div className="flex items-center gap-2 text-forest-900 mb-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold text-sm">Advisor Partnership?</span>
              </div>
              <p className="text-sm text-stone-600 mb-4">
                CPAs, P&C Agents, and Wealth Managers looking to implement a protection department should visit our Alliance page.
              </p>
              <Link href="/alliances" className="text-sm font-medium text-forest-700 hover:text-forest-900 hover:underline underline-offset-4">
                View Alliance Program &rarr;
              </Link>
            </div>

            <p className="text-xs text-stone-400 pt-8">
              This material is for informational purposes only and is not intended as tax or legal advice.
              Insurance and financial strategies vary by individual circumstances. Consult your own advisors.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
