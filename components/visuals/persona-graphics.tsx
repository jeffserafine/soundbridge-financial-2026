export function PhysicianVisual() {
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-forest-900">
        {/* Pulse Line */}
        <svg viewBox="0 0 200 100" className="w-full absolute opacity-20">
          <path 
            d="M0,50 L40,50 L50,20 L60,80 L70,50 L200,50" 
            fill="none" 
            stroke="#d6c311" 
            strokeWidth="2" 
            className="animate-[pulse_3s_infinite]"
          />
        </svg>
        {/* Shield Abstract */}
        <svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10 text-forest-200">
          <path d="M50 5 L90 25 V55 C90 80 50 95 50 95 C50 95 10 80 10 55 V25 L50 5 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50 15 L80 30 V50 C80 70 50 85 50 85 C50 85 20 70 20 50 V30 L50 15 Z" fill="rgba(51, 78, 104, 0.5)" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    );
  }
  
  export function FounderVisual() {
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-forest-900">
        <div className="relative z-10 flex flex-col gap-2 items-center">
          {/* Equity Stack Layers */}
          <div className="w-16 h-4 bg-forest-700 rounded-sm border border-forest-600 transform translate-y-4 opacity-40" />
          <div className="w-24 h-4 bg-forest-600 rounded-sm border border-forest-500 transform translate-y-2 opacity-60" />
          <div className="w-32 h-4 bg-forest-500 rounded-sm border border-forest-400 opacity-80" />
          <div className="w-40 h-12 bg-gradient-to-r from-forest-800 to-forest-900 border border-lime-500/50 rounded-md shadow-[0_0_20px_rgba(214,195,17,0.15)] flex items-center justify-center">
             <span className="text-lime-400 font-mono text-xs tracking-widest">LIQUIDITY</span>
          </div>
        </div>
        {/* Upward Trend Line */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
           <path d="M0 200 L200 0" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
    );
  }
  
  export function EntertainerVisual() {
    // Static heights to prevent hydration mismatch errors (Math.random is impure)
    const heights = [35, 55, 25, 75, 45, 90, 65, 30, 80, 40, 70, 50];
  
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-forest-900">
        {/* Soundwaves */}
        <div className="flex items-center gap-1 h-32">
          {heights.map((h, i) => (
            <div 
              key={i}
              className="w-2 bg-forest-600 rounded-full animate-[pulse_1s_ease-in-out_infinite]"
              style={{ 
                height: `${h}%`, 
                animationDelay: `${i * 0.1}s`,
                backgroundColor: i === 5 || i === 6 ? '#d6c311' : undefined
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-4 text-xs font-mono text-forest-300 tracking-widest">
          PEAK WINDOW OPTIMIZATION
        </div>
      </div>
    );
  }
  
  export function ExecutiveVisual() {
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-forest-900">
        {/* Vesting Staircase */}
        <div className="relative z-10 w-48 h-32 flex items-end justify-center gap-0">
          <div className="w-8 h-8 bg-forest-800 border-t border-r border-forest-600" />
          <div className="w-8 h-16 bg-forest-700 border-t border-r border-forest-500" />
          <div className="w-8 h-24 bg-forest-600 border-t border-r border-forest-400" />
          <div className="w-8 h-32 bg-forest-500 border-t border-r border-lime-500 relative overflow-hidden">
             <div className="absolute inset-0 bg-lime-500/10" />
          </div>
        </div>
        {/* Goal Line */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-lime-500/30 border-t border-dashed border-lime-500" />
      </div>
    );
  }
  
  export function HNWVisual() {
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-forest-900">
        {/* Interlocking Rings (Generations) */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-2 border-forest-600 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <div className="w-24 h-24 rounded-full border-2 border-forest-400 absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-75" />
          <div className="w-24 h-24 rounded-full border-2 border-lime-500 shadow-[0_0_30px_rgba(214,195,17,0.2)] relative z-10 flex items-center justify-center">
             <div className="w-2 h-2 bg-lime-400 rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-6 text-center">
           <p className="text-[10px] text-forest-300 font-mono tracking-[0.2em] uppercase">Multi-Gen</p>
        </div>
      </div>
    );
  }
  