"use client";

import { motion } from "framer-motion";

export function PhilosophyGraphic() {
  return (
    <div className="relative w-full h-full min-h-[500px] bg-forest-950 rounded-2xl border border-forest-800 overflow-hidden shadow-2xl flex items-center justify-center font-mono">
      
      {/* 1. BLUEPRINT GRID BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #334e68 1px, transparent 1px),
            linear-gradient(to bottom, #334e68 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px' 
        }}
      />
      
      {/* 2. CENTER AXIS (The Client) */}
      <div className="relative z-30">
        <div className="w-24 h-24 rounded-full bg-forest-900 border-2 border-lime-500/80 flex items-center justify-center shadow-[0_0_50px_rgba(214,195,17,0.2)]">
           <div className="text-center">
             <span className="block text-lime-400 font-serif text-xl font-bold tracking-widest">YOU</span>
             <span className="block text-[8px] text-forest-300 uppercase tracking-widest mt-1">Center</span>
           </div>
        </div>
        {/* Pulsing Aura */}
        <motion.div 
          className="absolute inset-0 rounded-full border border-lime-500/30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 3. TRACK 1: LIQUIDITY (Inner Ring) */}
      <OrbitTrack 
        radius={160} 
        duration={25} 
        borderStyle="border-dashed" 
        color="border-forest-600"
        direction={1} // Clockwise
        initialAngle={0}
      >
        <LabelCard title="Liquidity" sub="Access" />
      </OrbitTrack>

      {/* 4. TRACK 2: TAX EFFICIENCY (Middle Ring) */}
      <OrbitTrack 
        radius={260} 
        duration={35} 
        borderStyle="border-solid" 
        color="border-forest-700"
        direction={-1} // Counter-Clockwise
        initialAngle={120}
      >
        <LabelCard title="Tax Efficiency" sub="Structure" />
      </OrbitTrack>

      {/* 5. TRACK 3: RISK CONTROL (Outer Ring) */}
      <OrbitTrack 
        radius={360} 
        duration={45} 
        borderStyle="border-dotted" 
        color="border-forest-600"
        direction={1} // Clockwise
        initialAngle={240}
      >
        <LabelCard title="Risk Control" sub="Protection" />
      </OrbitTrack>

      {/* 6. DECORATIVE ELEMENTS (Static Blueprint Markings) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Crosshairs */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-forest-800/50" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-forest-800/50" />
        
        {/* Technical readout bottom left */}
        <div className="absolute bottom-6 left-6 text-[10px] text-forest-400 font-mono space-y-1">
           <p>FIG 1.0 // SOUNDBRIDGE ARCHITECTURE</p>
           <p className="opacity-50">ROTATION: ACTIVE</p>
        </div>
      </div>

    </div>
  );
}

// -- SUBCOMPONENTS --

function OrbitTrack({ 
  radius, 
  duration, 
  borderStyle, 
  color,
  children,
  direction = 1,
  initialAngle = 0
}: { 
  radius: number; 
  duration: number; 
  borderStyle: string;
  color: string;
  children: React.ReactNode;
  direction?: number;
  initialAngle?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full border ${borderStyle} ${color} flex items-center justify-center`}
      style={{ width: radius, height: radius }}
      initial={{ rotate: initialAngle }}
      animate={{ rotate: initialAngle + (direction * 360) }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      {/* The "Satellite" holding the label */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ transformOrigin: `50% ${radius/2}px` }} 
      >
        <motion.div
          initial={{ rotate: -initialAngle }}
          animate={{ rotate: -initialAngle + (direction * -360) }} // Counter-rotate to stay upright
          transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Updated LabelCard: Removed the connector line div
function LabelCard({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="relative group">
        <div className="bg-forest-900/90 backdrop-blur-md border border-forest-600 px-4 py-2 rounded-sm shadow-xl min-w-[120px] text-center transition-colors hover:border-lime-500/50">
            <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                <span className="text-xs text-forest-100 font-bold uppercase tracking-wide">{title}</span>
            </div>
            <div className="text-[9px] text-forest-400 font-mono uppercase tracking-widest">
                {sub}
            </div>
        </div>
    </div>
  );
}
