import { Stethoscope, Briefcase, Mic2, Building2, TrendingUp, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { 
  PhysicianVisual, 
  FounderVisual, 
  EntertainerVisual, 
  ExecutiveVisual, 
  HNWVisual 
} from "@/components/visuals/persona-graphics";

const personas = [
  {
    id: "physicians",
    icon: <Stethoscope className="h-8 w-8 text-forest-500" />,
    title: "Physicians & Surgeons",
    subtitle: "Protecting the hands that heal.",
    stat: "20%",
    statLabel: "Target savings rate for late-start careers",
    challenge: "Late career starts, massive student debt, and aggressive liability targets make standard planning dangerous. You are high-income but time-poor.",
    strategy: [
      "Own-occupation disability definitions matching your specialty",
      "Kai-Zen® / Premium Finance leverage to accelerate retirement savings",
      "Asset protection strategies distinct from malpractice insurance"
    ],
    visual: <PhysicianVisual />
  },
  {
    id: "founders",
    icon: <Briefcase className="h-8 w-8 text-forest-500" />,
    title: "Entrepreneurs & Founders",
    subtitle: "Liquidity, leverage, and legacy.",
    stat: "3x",
    statLabel: "Liquidity multiplier via proper structure",
    challenge: "Your net worth is tied up in equity. You need to protect the business's key people while extracting personal wealth efficiently.",
    strategy: [
      "Key Person and Buy-Sell funding architecture",
      "Executive bonus plans (Golden Handcuffs) using leveraged life insurance",
      "Cash balance plans for tax-advantaged accumulation"
    ],
    visual: <FounderVisual />
  },
  {
    id: "entertainers",
    icon: <Mic2 className="h-8 w-8 text-forest-500" />,
    title: "Entertainers & Creators",
    subtitle: "Managing the variance of the spotlight.",
    stat: "5-7yr",
    statLabel: "Average peak earning window optimization",
    challenge: "Income is irregular, and peak earning windows can be short. You need a structure that smooths cash flow and protects against reputational risk.",
    strategy: [
      "Contract-driven income protection planning",
      "Loan-out corporation benefits strategy",
      "Privacy-focused asset positioning"
    ],
    visual: <EntertainerVisual />
  },
  {
    id: "executives",
    icon: <Building2 className="h-8 w-8 text-forest-500" />,
    title: "C-Suite Executives",
    subtitle: "Maximizing the compensation package.",
    stat: "40%+",
    statLabel: "Tax exposure on unmanaged RSU vesting",
    challenge: "Deferred comp, RSUs, and stock options create a tax minefield. You need to coordinate corporate benefits with personal goals.",
    strategy: [
      "Concentrated stock position hedging",
      "Supplemental executive retirement planning (SERP)",
      "Tax-aware life insurance leverage (Premium Finance)"
    ],
    visual: <ExecutiveVisual />
  },
  {
    id: "hnw",
    icon: <TrendingUp className="h-8 w-8 text-forest-500" />,
    title: "High Net Worth Families",
    subtitle: "Stewardship across generations.",
    stat: "Gen 3",
    statLabel: "The target for sustainable wealth transfer",
    challenge: "Complexity grows with assets. The challenge shifts from accumulation to preservation and transfer without spoiling the next generation.",
    strategy: [
      "Estate equalization and liquidity planning",
      "Dynasty trust funding structures",
      "Philanthropic legacy design"
    ],
    visual: <HNWVisual />
  }
];

export function PersonaBreakdown() {
  return (
    <section className="bg-white">
      {personas.map((p, index) => (
        <div 
          key={p.id} 
          id={p.id} 
          className={`py-24 px-6 border-b border-stone-100 scroll-mt-24 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Identity & Impact */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-forest-50 rounded-xl border border-forest-100">
                    {p.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-forest-900 font-medium leading-tight">
                    {p.title}
                  </h3>
                </div>
                
                <p className="text-forest-600 font-medium italic mb-8 border-l-2 border-lime-400 pl-4">
                  &quot;{p.subtitle}&quot;
                </p>

                {/* The "Stat Card" Graphic */}
                <div className="bg-forest-900 text-white rounded-lg shadow-lg relative overflow-hidden group">
                  {/* The Abstract Visual Background */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    {p.visual}
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 p-6">
                    <p className="text-4xl font-serif font-bold text-lime-400 mb-1">{p.stat}</p>
                    <p className="text-xs text-forest-200 uppercase tracking-wider font-medium">{p.statLabel}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Problem & Solution */}
              <div className="lg:col-span-8 grid md:grid-cols-2 gap-12">
                
                {/* The Challenge */}
                <div className="relative">
                  <h4 className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span> The Challenge
                  </h4>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    {p.challenge}
                  </p>
                </div>

                {/* The Strategy */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-lime-500"></span> The Strategy
                  </h4>
                  <ul className="space-y-4">
                    {p.strategy.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start group">
                        <Check className="h-5 w-5 text-forest-600 mt-0.5 flex-shrink-0 group-hover:text-lime-600 transition-colors" />
                        <span className="text-stone-700 text-sm md:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-stone-200">
                    <Link href="/contact" className="group inline-flex items-center text-sm font-semibold text-forest-800 hover:text-forest-600 transition-colors">
                        {p.id === 'hnw' ? 'Start a conversation about HNW Planning' : `Start a conversation for ${p.title}`}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
