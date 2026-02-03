export function PhilosophyGraphic() {
    return (
      <div className="relative w-full h-full min-h-[400px] bg-forest-900 rounded-2xl border border-forest-800 overflow-hidden shadow-2xl flex items-center justify-center">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#334e68 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
        
        {/* Central "Core" - The Client */}
        <div className="relative z-10 w-32 h-32 rounded-full border-2 border-lime-500/30 flex items-center justify-center bg-forest-950 shadow-[0_0_40px_rgba(214,195,17,0.1)]">
          <div className="w-24 h-24 rounded-full border border-lime-500/50 flex items-center justify-center">
             <span className="text-lime-400 font-serif text-2xl font-bold">YOU</span>
          </div>
        </div>
  
        {/* Orbit 1: Strategy */}
        <div className="absolute w-64 h-64 rounded-full border border-forest-700 animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-64 h-64 rounded-full border border-transparent border-t-lime-500/20 rotate-45" />
  
        {/* Orbit 2: Tactics */}
        <div className="absolute w-96 h-96 rounded-full border border-forest-800 animate-[spin_30s_linear_infinite_reverse]" />
        
        {/* Floating Labels (Static) */}
        <div className="absolute top-1/4 left-1/4 bg-forest-800/80 backdrop-blur px-3 py-1 rounded text-xs text-forest-200 border border-forest-700">
          Tax Efficiency
        </div>
        <div className="absolute bottom-1/4 right-1/4 bg-forest-800/80 backdrop-blur px-3 py-1 rounded text-xs text-forest-200 border border-forest-700">
          Risk Control
        </div>
        <div className="absolute top-1/3 right-1/6 bg-forest-800/80 backdrop-blur px-3 py-1 rounded text-xs text-forest-200 border border-forest-700">
          Liquidity
        </div>
      </div>
    );
  }
  