"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/ui/page-header";

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


type BlueprintTabId = "foundation" | "structure" | "crossing";

type BlueprintTab = {
  id: BlueprintTabId;
  label: string;
  kicker: string;
  title: string;
  body: string;
  quote: string;
  quoteBy?: string;
};

const blueprintTabs: BlueprintTab[] = [
  {
    id: "foundation",
    label: "Foundation: Planning",
    kicker: "The Blueprint",
    title: "Foundation: Holistic Planning",
    body:
      "Before we discuss any product or strategy, we map the ground you stand on. We look at cash flow, tax exposure, business interests, and estate goals to build a plan that can hold up under real life.",
    quote: "A goal without a plan is just a wish.",
  },
  {
    id: "structure",
    label: "Structure: Strategies",
    kicker: "The Build",
    title: "Structure: Advanced Strategies",
    body:
      "We use insurance-based design and tax-aware coordination to protect, grow, and transfer wealth with intention. The goal is not complexity. The goal is control.",
    quote: "It’s not what you make, it’s what you keep.",
  },
  {
    id: "crossing",
    label: "Crossing: Retirement",
    kicker: "The Destination",
    title: "Crossing: Retirement and Legacy",
    body:
      "Transitioning from accumulation to distribution is the most important shift in your financial life. We design income and legacy strategies meant to last as long as you do.",
    quote: "Legacy is not leaving something for people. It’s leaving something in them.",
  },
];

function DonutChart() {
  // Percent allocation: Insurance, Tax-Aware, Liquidity, Legacy, Business
  const parts = [28, 24, 18, 16, 14];
  const colors = [
    "rgba(56,189,248,0.9)",
    "rgba(16,185,129,0.9)",
    "rgba(251,191,36,0.85)",
    "rgba(148,163,184,0.7)",
    "rgba(34,211,238,0.75)",
  ];

  let offset = 0;
  return (
    <div className="relative">
      <svg viewBox="0 0 42 42" className="h-56 w-56 md:h-64 md:w-64">
        <circle
          cx="21"
          cy="21"
          r="15.915"
          fill="transparent"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="5.5"
        />
        {parts.map((pct, i) => {
          const dash = `${pct} ${100 - pct}`;
          const seg = (
            <circle
              key={i}
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke={colors[i]}
              strokeWidth="5.5"
              strokeDasharray={dash}
              strokeDashoffset={25 - offset}
              strokeLinecap="butt"
              style={{
                transformOrigin: "50% 50%",
                transform: "rotate(-90deg)",
                transition: "stroke-dashoffset 400ms ease",
              }}
            />
          );
          offset += pct;
          return seg;
        })}
      </svg>

      <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-300">
        <LegendDot label="Insurance" color="rgba(56,189,248,0.9)" />
        <LegendDot label="Tax-Aware" color="rgba(16,185,129,0.9)" />
        <LegendDot label="Liquidity" color="rgba(251,191,36,0.85)" />
        <LegendDot label="Legacy" color="rgba(148,163,184,0.7)" />
        <LegendDot label="Business" color="rgba(34,211,238,0.75)" />
      </div>
    </div>
  );
}

function LineChart() {
  const points = [
    [2, 38],
    [8, 34],
    [14, 30],
    [20, 27],
    [26, 23],
    [32, 18],
    [38, 12],
  ];
  const d = `M ${points.map((p) => p.join(",")).join(" L ")}`;

  return (
    <div className="relative">
      <svg viewBox="0 0 40 40" className="h-56 w-56 md:h-64 md:w-64">
        {/* grid */}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={8 + i * 8}
            x2="40"
            y2={8 + i * 8}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.5"
          />
        ))}

        <path
          d={d}
          fill="none"
          stroke="rgba(16,185,129,0.9)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{
            strokeDasharray: 120,
            strokeDashoffset: 0,
            animation: "sbDraw 900ms ease both",
          }}
        />
        <path
          d={`${d} L 38 40 L 2 40 Z`}
          fill="rgba(16,185,129,0.12)"
        />

        {points.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="1.15"
            fill="rgba(34,211,238,0.9)"
          />
        ))}
      </svg>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-200">Hypothetical growth</span>
          <span className="text-slate-400">Illustrative only</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes sbDraw {
          from {
            stroke-dashoffset: 120;
            opacity: 0.6;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

function StackedBars() {
  const groups = [
    { label: "60-65", a: 18, b: 12, c: 10 },
    { label: "65-70", a: 20, b: 16, c: 8 },
    { label: "70-75", a: 22, b: 18, c: 7 },
    { label: "75-80", a: 24, b: 20, c: 6 },
    { label: "80-85", a: 26, b: 22, c: 6 },
  ];

  // scale to 34px max height
  const max = Math.max(...groups.map((g) => g.a + g.b + g.c));
  const scale = (v: number) => (v / max) * 34;

  return (
    <div className="relative">
      <svg viewBox="0 0 120 50" className="h-56 w-72 md:h-64 md:w-[22rem]">
        {/* baseline */}
        <line x1="6" y1="42" x2="114" y2="42" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />

        {groups.map((g, i) => {
          const x = 10 + i * 20;
          const hA = scale(g.a);
          const hB = scale(g.b);
          const hC = scale(g.c);
          const yA = 42 - hA;
          const yB = yA - hB;
          const yC = yB - hC;

          return (
            <g key={g.label}>
              <rect x={x} y={yA} width="12" height={hA} fill="rgba(148,163,184,0.65)" rx="2" />
              <rect x={x} y={yB} width="12" height={hB} fill="rgba(16,185,129,0.75)" rx="2" />
              <rect x={x} y={yC} width="12" height={hC} fill="rgba(56,189,248,0.75)" rx="2" />
              <text x={x + 6} y="48" textAnchor="middle" fontSize="4" fill="rgba(203,213,225,0.8)">
                {g.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-300">
        <LegendDot label="Social" color="rgba(148,163,184,0.65)" />
        <LegendDot label="Insurance" color="rgba(16,185,129,0.75)" />
        <LegendDot label="Portfolio" color="rgba(56,189,248,0.75)" />
      </div>
    </div>
  );
}

function LegendDot({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="leading-none">{label}</span>
    </div>
  );
}


export function Blueprint() {
  const [active, setActive] = useState<BlueprintTabId>("foundation");

  const tab = useMemo(() => blueprintTabs.find((t) => t.id === active)!, [active]);

  return (
    <section className="relative px-6 py-20">
      {/* subtle background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-10 top-44 h-[360px] w-[360px] rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* HOW IT WORKS (existing) */}
        <PageHeader
          eyebrow="Process"
          title="How it works"
          lead="A simple, confidence-building process built for busy, high-performing clients."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
                {s.title}
              </div>
              <div className="mt-3 text-lg font-semibold leading-snug text-slate-50">
                {s.desc}
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-400/30 via-white/5 to-amber-300/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* STRUCTURAL BLUEPRINT (new, tabbed) */}
        <div className="mt-20">
          <PageHeader
            eyebrow="Framework"
            title="The Structural Blueprint"
            lead="A consistent framework to identify gaps, build stability, and keep the plan coordinated over time."
            align="center"
          />

          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3" role="tablist" aria-label="Structural Blueprint tabs">
              {blueprintTabs.map((t) => {
                const isActive = t.id === active;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${t.id}`}
                    onClick={() => setActive(t.id)}
                    className={
                      "relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 " +
                      (isActive
                        ? "text-slate-50"
                        : "text-slate-300 hover:text-slate-100")
                    }
                  >
                    <span className="relative z-10">{t.label}</span>
                    <span
                      className={
                        "pointer-events-none absolute inset-0 rounded-full border transition-opacity duration-200 " +
                        (isActive
                          ? "border-cyan-300/40 bg-white/[0.05] shadow-[0_0_0_1px_rgba(34,211,238,0.12)]"
                          : "border-white/10 bg-transparent opacity-70")
                      }
                      aria-hidden="true"
                    />
                    {isActive && (
                      <span
                        className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400/15 via-transparent to-amber-300/10 blur"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id={`panel-${tab.id}`}
            role="tabpanel"
            className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center"
          >
            {/* Left narrative */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                {tab.kicker}
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50">
                {tab.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {tab.body}
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-sm italic leading-relaxed text-slate-200">“{tab.quote}”</p>
                {tab.quoteBy ? (
                  <p className="mt-2 text-xs font-semibold text-slate-400">{tab.quoteBy}</p>
                ) : null}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 via-white/5 to-transparent" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Illustrative</span>
              </div>
            </div>

            {/* Right visual */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Visual
                </div>
                <div className="text-xs text-slate-400">For education only</div>
              </div>

              <div key={tab.id} className="mt-6 flex items-center justify-center">
                {tab.id === "foundation" ? (
                  <DonutChart />
                ) : tab.id === "structure" ? (
                  <LineChart />
                ) : (
                  <StackedBars />
                )}
              </div>

              <div className="mt-6 text-xs leading-relaxed text-slate-400">
                Charts are illustrative and not a projection. The goal is clarity: what you have, what it does, and what needs to change.
              </div>
            </div>
          </div>
        </div>

        {/* Disclosures (existing) */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-slate-300">
          <p>
            Disclosures: This content is for informational purposes only and is not intended as tax or legal advice.
            Insurance and financial strategies vary by individual circumstances. Consult your own advisors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Blueprint;
