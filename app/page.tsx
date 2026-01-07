import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Aura background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-140px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute right-[-120px] top-[160px] h-[560px] w-[560px] rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute left-[-140px] bottom-[-180px] h-[560px] w-[560px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <section className="px-6 pt-24 pb-16 sm:pt-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
              Strategy first. Implementation clean.
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Tune out the noise.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-slate-50 to-amber-200">
                Amplify clarity.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              Protection and planning for physicians, entertainers, entrepreneurs, executives, and
              high net worth individuals. Built for modern income, modern risk, modern life.
            </p>

            {/* Primary CTA row */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
              >
                Schedule a Conversation
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.06]"
              >
                How it works <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Two-track cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/individuals"
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-300/14 via-transparent to-cyan-300/10 opacity-0 blur transition-opacity duration-200 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    <Users className="h-4 w-4 text-amber-200" />
                    For Individuals
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-50">
                    Advanced Strategy Review
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    A clean review of coverage, obligations, and coordination points.
                  </p>
                  <div className="mt-4 text-sm font-semibold text-amber-200">
                    Explore your path <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>

              <Link
                href="/alliances"
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-300/14 via-transparent to-emerald-300/10 opacity-0 blur transition-opacity duration-200 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    <Building2 className="h-4 w-4 text-cyan-200" />
                    For Partners
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-50">
                    Alliance Partner Program
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Add advanced planning without adding operational drag.
                  </p>
                  <div className="mt-4 text-sm font-semibold text-cyan-200">
                    Learn about alliances <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Trust notes */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
                <ShieldCheck className="h-4 w-4 text-emerald-200" />
                Planning and education focused
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
                No guarantees. No hype.
              </span>
            </div>
          </div>

          {/* Right: dashboard-style preview */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Planning Snapshot
                </div>
                <div className="text-xs text-slate-400">Illustrative</div>
              </div>

              <div className="mt-5 grid gap-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-xs text-slate-400">Coverage clarity</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/5">
                    <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-cyan-300/70 to-emerald-300/60" />
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-xs text-slate-400">Tax coordination</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/5">
                    <div className="h-2 w-[58%] rounded-full bg-gradient-to-r from-amber-200/60 to-cyan-300/60" />
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-xs text-slate-400">Implementation readiness</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/5">
                    <div className="h-2 w-[64%] rounded-full bg-gradient-to-r from-emerald-300/60 to-cyan-300/60" />
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-xs text-slate-400">Next best step</div>
                  <div className="mt-2 text-sm font-semibold text-slate-50">
                    Clarify priorities, then architect a plan.
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    We coordinate with your tax and legal world.
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-r from-cyan-400/10 via-transparent to-amber-300/10 blur-2xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
