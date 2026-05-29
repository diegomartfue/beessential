"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"

interface WordmarkProps {
  variant?: "light" | "dark"
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: { text: "text-2xl", sub: "text-xl", rays: 18 },
  md: { text: "text-4xl", sub: "text-3xl", rays: 26 },
  lg: { text: "text-6xl", sub: "text-5xl", rays: 36 },
}

export function Wordmark({ variant = "light", size = "md" }: WordmarkProps) {
  const reduced = useReducedMotion()
  const s = sizes[size]
  const textColor = variant === "light" ? "#A7D2DD" : "#2C1A06"
  const sparkleColor = variant === "light" ? "#FF914D" : "#FF914D"

  const pulseVariants: Variants = {
    idle: { scale: 1, opacity: 0.9 },
    pulse: {
      scale: [1, 1.12, 1],
      opacity: [0.9, 1, 0.9],
      transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" as const },
    },
  }

  return (
    <div className="relative inline-flex flex-col items-start select-none">
      {/* Sun-ray sparkle cluster — top-left of the "B" */}
      <motion.div
        className="absolute"
        style={{ top: "-10px", left: "-8px", zIndex: 10 }}
        variants={pulseVariants}
        initial="idle"
        animate={reduced ? "idle" : "pulse"}
      >
        <svg
          width={s.rays}
          height={s.rays}
          viewBox="0 0 36 36"
          fill="none"
          aria-hidden="true"
        >
          {/* Central disc */}
          <circle cx="18" cy="18" r="5" fill={sparkleColor} />
          {/* 8 rays */}
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 45 * Math.PI) / 180
            const x1 = 18 + 7 * Math.cos(angle)
            const y1 = 18 + 7 * Math.sin(angle)
            const x2 = 18 + 14 * Math.cos(angle)
            const y2 = 18 + 14 * Math.sin(angle)
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={sparkleColor}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            )
          })}
          {/* 4-point sparkle accent */}
          <path
            d="M26 10 L27.5 8 L29 10 L27.5 12 Z"
            fill="#FFBD59"
            opacity="0.9"
          />
          <path
            d="M10 8 L11 6.5 L12 8 L11 9.5 Z"
            fill="#FFD370"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* "Be" line */}
      <span
        className={`${s.text} font-hand leading-none tracking-tight`}
        style={{ color: textColor }}
      >
        Be
      </span>

      {/* "essential" offset */}
      <span
        className={`${s.sub} font-hand leading-none tracking-tight`}
        style={{
          color: textColor,
          marginTop: "-4px",
          marginLeft: "8px",
          letterSpacing: "0.02em",
        }}
      >
        essential
      </span>
    </div>
  )
}
