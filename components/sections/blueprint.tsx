import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Clarify",
    desc: "We map your current coverage, obligations, cash flow reality, and the risks that actually matter.",
    step: "01"
  },
  {
    title: "Architect",
    desc: "We design a clean strategy that coordinates with your tax and legal world, not against it.",
    step: "02"
  },
  {
    title: "Implement",
    desc: "Execution is deliberate, documented, and reviewed. No chaos. No surprises.",
    step: "03"
  },
  {
    title: "Maintain",
    desc: "We keep it current with a simple cadence, so the plan stays aligned as life changes.",
    step: "04"
  },
];

export function Blueprint() {
  return (
    <section className="px-6 py-24 bg-stone-50 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-sm font-mono text-stone-500 mb-4 uppercase tracking-widest">
            The Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-forest-900">
            The SoundBridge Blueprint
          </h3>
          <p className="mt-4 text-lg text-stone-600">
            A simple, confidence-building process designed for busy, high-performing clients.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-forest-200 -z-10" />

          {steps.map((s) => (
            <div
              key={s.title}
              className="relative flex flex-col bg-white p-8 rounded-lg shadow-sm border border-stone-100 hover:border-forest-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-serif text-forest-100 font-bold">
                  {s.step}
                </span>
                <CheckCircle2 className="h-6 w-6 text-lime-600" />
              </div>
              
              <h4 className="text-lg font-serif font-medium text-forest-900 mb-3">
                {s.title}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-lg bg-white border border-stone-200 shadow-sm">
            <p className="text-xs text-stone-500 leading-relaxed">
              <span className="font-semibold text-forest-800">Disclosure:</span> This content is for informational purposes only and is not intended as tax or legal
              advice. Insurance and financial strategies vary by individual circumstances. Consult your own
              advisors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blueprint;
