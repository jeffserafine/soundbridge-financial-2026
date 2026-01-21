export function HnwClient() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur text-white p-10 md:p-14 shadow-xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
            High-net-worth planning without the noise
          </h2>
          <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
            We design protection and planning architecture that your other advisors can trust, with clean
            documentation and a process that respects your time.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="font-semibold text-slate-50">Coordination-first</div>
              <p className="mt-2 text-slate-300 leading-relaxed">
                We work alongside CPAs, attorneys, and wealth managers to keep the plan consistent.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="font-semibold text-slate-50">Implementation discipline</div>
              <p className="mt-2 text-slate-300 leading-relaxed">
                No product dumping. Just the right structure, properly reviewed, properly maintained.
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-400 leading-relaxed">
            Disclosures: This material is for informational purposes only and is not tax or legal advice.
            Insurance and financial strategies vary by individual circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HnwClient;
