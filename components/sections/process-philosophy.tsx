import { CheckCircle2 } from "lucide-react";
import { PhilosophyGraphic } from "@/components/visuals/philosophy-graphic";

export function ProcessPhilosophy() {
  return (
    <section className="bg-forest-950 py-24 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h2 className="text-sm font-mono text-lime-400 uppercase tracking-widest mb-6">
              Our Philosophy
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white font-medium mb-6 leading-tight">
              An antidote to the <br />
              <span className="text-forest-200 italic">sales-first industry.</span>
            </h3>
            <p className="text-forest-100 text-lg leading-relaxed mb-8">
              Most &quot;financial planning&quot; is actually product distribution in disguise. The industry is incentivized to sell you complexity. We are incentivized to sell you clarity.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-lime-500 flex-shrink-0" />
                <span className="text-forest-50">Strategy precedes product. Always.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-lime-500 flex-shrink-0" />
                <span className="text-forest-50">Tax coordination is not an afterthought.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-lime-500 flex-shrink-0" />
                <span className="text-forest-50">We measure success by your liquidity, not your premiums.</span>
              </li>
            </ul>
          </div>

          {/* Right: New Visual Asset */}
          <div className="relative">
             <PhilosophyGraphic />
             <div className="mt-6 text-center lg:text-left">
                <p className="text-forest-400 text-xs tracking-wider uppercase font-mono">
                   The SoundBridge Architecture &trade;
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
