export type AudienceCard = {
  title: string;
  description: string;
  bullets: string[];
};

const audiences: AudienceCard[] = [
  {
    title: "Physicians and medical professionals",
    description:
      "Complex income, high liability exposure, and time pressure demand clean, proactive planning.",
    bullets: [
      "Income protection that matches real earning power",
      "Tax-aware strategy coordination",
      "Simple review cadence and clean documentation",
    ],
  },
  {
    title: "Entrepreneurs and business owners",
    description:
      "You built something valuable. We help protect the people, cash flow, and equity behind it.",
    bullets: [
      "Key person and buy-sell funding design",
      "Coverage architecture for founders",
      "Planning that respects entity structure",
    ],
  },
  {
    title: "Entertainers, creators, and athletes",
    description:
      "High variance income, short peak windows, and reputational risk need disciplined structure.",
    bullets: [
      "Contract-driven protection planning",
      "Cash flow and risk alignment",
      "Coordination with trusted advisors",
    ],
  },
  {
    title: "C-suite executives and partners",
    description:
      "Concentrated compensation and time scarcity call for strategy-first, low-friction execution.",
    bullets: [
      "Executive benefits awareness",
      "Tax-aware protection and accumulation",
      "A process built for busy calendars",
    ],
  },
  {
    title: "High net worth individuals",
    description:
      "When assets grow, complexity grows. We keep the plan coherent and coordinated.",
    bullets: [
      "Policy structure and review discipline",
      "Legacy-aware planning coordination",
      "Documentation your advisors can trust",
    ],
  },
];

export function WhoWeServe() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-wide text-slate-200">
            Individuals
          </p>
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
            Who we serve
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Strategy-first protection and planning for people with modern income, modern risk, and zero time
            for messy implementation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-semibold text-slate-50">{a.title}</h3>
              <p className="mt-2 text-slate-300 leading-relaxed">{a.description}</p>
              <ul className="mt-4 space-y-2 text-slate-200">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeServe;
