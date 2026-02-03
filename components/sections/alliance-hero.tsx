import { AllianceNetwork } from "@/components/visuals/alliance-network";

export function AllianceHero() {
  return (
    <section className="bg-forest-950 text-white pt-24 pb-20 md:pt-32 md:pb-32 px-6 relative overflow-hidden">
      {/* Background Visual */}
      <AllianceNetwork />
      
      {/* Radial Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent z-0" />
      
      <div className="mx-auto max-w-4xl relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-forest-900 border border-forest-800 text-lime-400 text-xs font-medium tracking-widest uppercase mb-6 shadow-sm">
          For Advisors & CPAs
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-tight">
          Expand your capability. <br />
          <span className="text-forest-200">Retain your best clients.</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-forest-100 leading-relaxed max-w-2xl mx-auto">
          A turnkey insurance and protection planning department for wealth managers, CPAs, and P&C agencies. We handle the design; you own the relationship.
        </p>
      </div>
    </section>
  );
}
