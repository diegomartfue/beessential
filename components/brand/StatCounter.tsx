"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { useReducedMotion } from "framer-motion"

interface StatCounterProps {
  /** Numeric target to count up to */
  numericValue: number
  /** Format override — replaces the default number formatting */
  formatFn?: (n: number) => string
  /** Static suffix appended after the formatted number */
  suffix?: string
  label: string
  source?: string
  duration?: number
}

export function StatCounter({
  numericValue,
  formatFn,
  suffix = "",
  label,
  source,
  duration = 2200,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const reduced = useReducedMotion()
  const [displayed, setDisplayed] = useState(reduced ? numericValue : 0)

  const defaultFormat = (n: number) => Math.round(n).toLocaleString("es-MX")
  const format = formatFn ?? defaultFormat

  useEffect(() => {
    if (!isInView || reduced) {
      setDisplayed(numericValue)
      return
    }

    const startTime = performance.now()
    let raf: number

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(eased * numericValue)

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, numericValue, duration, reduced])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl"
      style={{ background: "rgba(255,189,89,0.12)", border: "1px solid rgba(255,189,89,0.25)" }}
    >
      <span
        className="font-display font-bold leading-none"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--bee-blue)" }}
      >
        {format(displayed)}{suffix}
      </span>
      <p className="text-base leading-snug max-w-xs" style={{ color: "var(--bee-text)" }}>
        {label}
      </p>
      {source && (
        <span className="text-xs opacity-60" style={{ color: "var(--bee-text-muted)" }}>
          {source}
        </span>
      )}
    </div>
  )
}
