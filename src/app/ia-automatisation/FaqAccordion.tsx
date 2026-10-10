'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

export default function FaqAccordion({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx
        return (
          <div
            key={item.q}
            className="rounded-2xl border border-white/10 bg-navy-card overflow-hidden transition-colors hover:border-blue-brand/40"
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-6 text-left flex items-center justify-between gap-4"
            >
              <span className="font-display font-semibold text-white text-base md:text-lg">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-electric shrink-0"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 pt-1 text-text-muted-dark text-sm md:text-base leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
