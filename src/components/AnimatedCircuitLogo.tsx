'use client'

import { motion } from 'framer-motion'

export default function AnimatedCircuitLogo({ size = 200 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CreatrixDev logo — ampoule circuit lumineux"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4FF" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>

      {/* Bulb outer shell */}
      <motion.path
        d="M100 30 C70 30 50 50 50 78 C50 98 62 112 72 122 L72 140 L128 140 L128 122 C138 112 150 98 150 78 C150 50 130 30 100 30Z"
        stroke="url(#cyanGrad)"
        strokeWidth="2.5"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* Base band 1 */}
      <motion.rect
        x="72" y="140" width="56" height="8" rx="2"
        stroke="url(#cyanGrad)" strokeWidth="2" fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8, ease: 'easeInOut' }}
      />

      {/* Base band 2 */}
      <motion.rect
        x="76" y="148" width="48" height="8" rx="2"
        stroke="url(#cyanGrad)" strokeWidth="2" fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.0, ease: 'easeInOut' }}
      />

      {/* Base band 3 / bottom */}
      <motion.rect
        x="82" y="156" width="36" height="8" rx="4"
        stroke="url(#cyanGrad)" strokeWidth="2" fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2, ease: 'easeInOut' }}
      />

      {/* Internal circuit — horizontal main line */}
      <motion.line
        x1="70" y1="85" x2="130" y2="85"
        stroke="url(#cyanGrad)" strokeWidth="1.5"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4, ease: 'easeInOut' }}
      />

      {/* Internal circuit — vertical stem */}
      <motion.line
        x1="100" y1="60" x2="100" y2="115"
        stroke="url(#cyanGrad)" strokeWidth="1.5"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.6, ease: 'easeInOut' }}
      />

      {/* Left branch */}
      <motion.path
        d="M85 85 L85 100 L75 100 L75 110"
        stroke="url(#cyanGrad)" strokeWidth="1.5" fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.8, ease: 'easeInOut' }}
      />

      {/* Right branch */}
      <motion.path
        d="M115 85 L115 100 L125 100 L125 110"
        stroke="url(#cyanGrad)" strokeWidth="1.5" fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.9, ease: 'easeInOut' }}
      />

      {/* Circuit nodes */}
      {[
        { cx: 85, cy: 85, delay: 3.0 },
        { cx: 115, cy: 85, delay: 3.1 },
        { cx: 100, cy: 85, delay: 3.2 },
        { cx: 75, cy: 110, delay: 3.3 },
        { cx: 125, cy: 110, delay: 3.4 },
        { cx: 100, cy: 60, delay: 3.5 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r="3"
          fill="#2DD4FF"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: [0, 1, 0.6, 1] }}
          transition={{ duration: 0.4, delay: node.delay }}
        />
      ))}

      {/* Glow fill inside bulb */}
      <motion.ellipse
        cx="100" cy="85" rx="30" ry="35"
        fill="url(#cyanGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.08, 0.05, 0.1] }}
        transition={{ duration: 1, delay: 3.2, repeat: Infinity, repeatType: 'reverse' }}
      />
    </motion.svg>
  )
}
