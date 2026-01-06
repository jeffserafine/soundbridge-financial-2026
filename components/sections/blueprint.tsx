const steps = [
  {
    title: "Clarify",
    desc: "We map your current coverage, obligations, cash flow reality, and the risks that actually matter.",
  },
  {
    title: "Architect",
    desc: "We design a clean strategy that coordinates with your tax and legal world, not against it.",
  },
  {
    title: "Implement",
    desc: "Execution is deliberate, documented, and reviewed. No chaos. No surprises.",
  },
  {
    title: "Maintain",
    desc: "We keep it current with a simple cadence, so the plan stays aligned as life changes.",
  },
];

export function Blueprint() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            How it works
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            A simple, confidence-building process designed for busy, high-performing clients.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-8 shadow-sm"
            >
              <div className="text-sm font-semibold tracking-wide text-emerald-700">{s.title}</div>
              <p className="mt-3 text-base leading-relaxed text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
          <p>
            Disclosures: This content is for informational purposes only and is not intended as tax or legal
            advice. Insurance and financial strategies vary by individual circumstances. Consult your own
            advisors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Blueprint;
