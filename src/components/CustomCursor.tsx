'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only on desktop (pointer: fine)
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', move)

    const interactables = document.querySelectorAll('a, button, [role="button"]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      >
        <div
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
            isHovering
              ? 'bg-accent-cyan scale-150 shadow-glow-cyan'
              : 'bg-accent-cyan'
          }`}
          style={{ boxShadow: '0 0 10px #2DD4FF, 0 0 20px rgba(45,212,255,0.4)' }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div
          className={`rounded-full border border-accent-cyan/40 transition-all duration-200 ${
            isHovering ? 'w-12 h-12' : 'w-10 h-10'
          }`}
        />
      </motion.div>
    </>
  )
}
