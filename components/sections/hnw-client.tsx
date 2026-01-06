export function HnwClient() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 text-white p-10 md:p-14 shadow-xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            High-net-worth planning without the noise
          </h2>
          <p className="mt-4 text-white/80 text-base md:text-lg">
            We design protection and planning architecture that your other advisors can trust, with clean
            documentation and a process that respects your time.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-semibold">Coordination-first</div>
              <p className="mt-2 text-white/75">
                We work alongside CPAs, attorneys, and wealth managers to keep the plan consistent.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="font-semibold">Implementation discipline</div>
              <p className="mt-2 text-white/75">
                No product dumping. Just the right structure, properly reviewed, properly maintained.
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs text-white/60">
            Disclosures: This material is for informational purposes only and is not tax or legal advice.
            Insurance and financial strategies vary by individual circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HnwClient;
