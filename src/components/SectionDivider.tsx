'use client'

export default function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-2 overflow-hidden">
      <svg
        viewBox="0 0 1200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-5xl h-6"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="divGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2DD4FF" stopOpacity="0" />
            <stop offset="30%" stopColor="#2DD4FF" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main horizontal line */}
        <line x1="0" y1="12" x2="1200" y2="12" stroke="url(#divGrad)" strokeWidth="1" />

        {/* Circuit node left */}
        <circle cx="240" cy="12" r="3" fill="#2DD4FF" opacity="0.8" />
        <line x1="240" y1="12" x2="240" y2="3" stroke="#2DD4FF" strokeWidth="1" opacity="0.5" />
        <circle cx="240" cy="3" r="2" fill="#2DD4FF" opacity="0.4" />

        {/* Circuit node center */}
        <circle cx="600" cy="12" r="4" fill="#2DD4FF" opacity="1" />
        <line x1="600" y1="12" x2="600" y2="2" stroke="#2DD4FF" strokeWidth="1.5" opacity="0.7" />
        <circle cx="600" cy="2" r="2.5" fill="#2DD4FF" opacity="0.6" />
        <line x1="580" y1="2" x2="620" y2="2" stroke="#2DD4FF" strokeWidth="1" opacity="0.4" />

        {/* Circuit node right */}
        <circle cx="960" cy="12" r="3" fill="#3B82F6" opacity="0.8" />
        <line x1="960" y1="12" x2="960" y2="3" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
        <circle cx="960" cy="3" r="2" fill="#3B82F6" opacity="0.4" />

        {/* Small tick marks */}
        <line x1="360" y1="9" x2="360" y2="15" stroke="#2DD4FF" strokeWidth="1" opacity="0.3" />
        <line x1="480" y1="9" x2="480" y2="15" stroke="#2DD4FF" strokeWidth="1" opacity="0.3" />
        <line x1="720" y1="9" x2="720" y2="15" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
        <line x1="840" y1="9" x2="840" y2="15" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  )
}
