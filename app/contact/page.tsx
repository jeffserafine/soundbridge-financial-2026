import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Schedule a Conversation
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          A short intro call to understand your goals, constraints, and where SoundBridge can add leverage.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Clients</h2>
          <p className="mt-2 text-slate-600">
            Physicians, creators, entrepreneurs, executives, and high net worth families.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
            >
              Book a call
            </a>

            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              href="mailto:hello@soundbridgefinancial.com"
            >
              Email
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Alliance Partners</h2>
          <p className="mt-2 text-slate-600">
            CPA alliances, P&C agencies, attorneys, planners, wealth managers, and mortgage partners.
          </p>

          <p className="mt-3 text-sm text-slate-600">
            If you are life licensed (or willing to get licensed), the Alliance can create a new revenue stream while
            SoundBridge handles strategy, case design, and implementation.
          </p>

          <div className="mt-5">
            <Link
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              href="/alliances"
            >
              Learn about the Alliance
            </Link>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-3xl text-center text-xs text-slate-500">
        This material is for informational purposes only and is not intended as tax or legal advice.
      </p>
    </main>
  );
}
