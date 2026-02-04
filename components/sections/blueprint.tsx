"use client";

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
    <section className="px-6 py-24 bg-stone-50 border-t border-stone-200 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center mb-20">
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
          
          {/* THE GOLDEN THREAD (Desktop) */}
          {/* Z-Index Fix: Removed negative z-index. The cards are z-10, so this z-0 thread sits safely behind them but in front of the background. */}
          <div className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-px pointer-events-none">
             {/* The Base Track */}
             <div className="w-full h-full border-t-2 border-dashed border-lime-500/30" />
             
             {/* THE ANIMATED BEAM */}
             {/* Uses the 'shimmer' keyframes from tailwind.config.ts */}
             <div className="absolute top-[-2px] left-0 w-32 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-70 animate-shimmer" />
          </div>

          {steps.map((s) => (
            <div
              key={s.title}
              // Z-Index z-10 ensures cards sit ON TOP of the thread
              className="relative z-10 flex flex-col bg-white p-8 rounded-lg shadow-sm border border-stone-100 hover:border-forest-200 transition-all group"
            >
              {/* Step Number Circle */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-stone-50 border border-stone-100 group-hover:border-lime-500/50 group-hover:bg-lime-50/10 transition-colors z-20">
                    <span className="text-xl font-serif text-forest-300 font-bold group-hover:text-forest-600 transition-colors">
                    {s.step}
                    </span>
                </div>
                <CheckCircle2 className="h-6 w-6 text-lime-600/20 group-hover:text-lime-600 transition-colors" />
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
