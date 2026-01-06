import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Alliance() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
          For Advisors
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Alliance Partner Program
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Partner with SoundBridge to offer your clients comprehensive protection and planning
          solutions.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Conversation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Partnership Approach</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We work alongside trusted advisors to enhance your service offerings with specialized
            protection strategies.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Expert Resources</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Access to advanced planning tools, case studies, and white-label solutions for your
            clients.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Client Retention</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Comprehensive solutions that deepen client relationships and provide ongoing value.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Revenue Growth</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Expand your service offerings and create additional revenue streams through strategic
            partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Alliance;
