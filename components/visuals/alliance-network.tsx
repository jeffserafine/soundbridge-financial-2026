export function AllianceNetwork() {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#334e68" stopOpacity="0" />
              <stop offset="50%" stopColor="#d6c311" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#334e68" stopOpacity="0" />
            </linearGradient>
          </defs>
  
          {/* The Grid */}
          <path d="M0,200 Q400,100 800,200" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
          <path d="M0,200 Q400,300 800,200" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
          
          {/* Nodes - Representing Partners */}
          <circle cx="200" cy="150" r="4" fill="#d6c311" className="animate-pulse">
             <animate attributeName="r" values="4;6;4" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="250" r="4" fill="#d6c311" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="400" cy="200" r="8" fill="#102a43" stroke="#d6c311" strokeWidth="2" />
  
          {/* Connecting Lines */}
          <line x1="200" y1="150" x2="400" y2="200" stroke="#334e68" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="600" y1="250" x2="400" y2="200" stroke="#334e68" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Abstract Data Flow */}
          <rect x="0" y="0" width="800" height="400" fill="url(#grid-pattern)" />
        </svg>
      </div>
    );
  }
  