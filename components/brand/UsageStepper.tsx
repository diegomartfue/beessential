"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

const STEPS = [
  {
    step: 1,
    title: "Coloca tu alimento",
    description:
      "Pon el alimento o recipiente en el centro del envoltorio.",
    icon: (
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="#FCEFC7" stroke="#FFBD59" strokeWidth="2" />
        {/* Apple */}
        <ellipse cx="40" cy="44" rx="14" ry="16" fill="#FF914D" />
        <path d="M40 28 Q44 22 48 26" stroke="#87A878" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <ellipse cx="44" cy="23" rx="4" ry="2.5" fill="#87A878" opacity="0.7" />
      </svg>
    ),
    color: "var(--bee-amber)",
  },
  {
    step: 2,
    title: "Envuelve con el calor de tus manos",
    description:
      "La cera se activa con el calor corporal. Moldea el envoltorio alrededor del alimento presionando suavemente.",
    icon: (
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="#FCEFC7" stroke="#A7D2DD" strokeWidth="2" />
        {/* Hands wrapping */}
        <path d="M22 42 Q24 30 34 32 Q36 26 42 28 Q48 22 52 30 Q58 32 56 42 Q52 56 40 58 Q28 56 22 42Z"
          fill="#87A878" opacity="0.7" />
        <path d="M30 36 Q34 30 40 32 Q46 28 50 36"
          stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      </svg>
    ),
    color: "var(--bee-sky)",
  },
  {
    step: 3,
    title: "Guarda en el refrigerador",
    description:
      "El envoltorio queda sellado y mantiene tus alimentos frescos. Reutilízalo lavándolo con agua fría.",
    icon: (
      <svg viewBox="0 0 80 80" width="80" height="80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="36" fill="#FCEFC7" stroke="#6CC4C7" strokeWidth="2" />
        {/* Fridge */}
        <rect x="24" y="20" width="32" height="42" rx="5" fill="#A7D2DD" opacity="0.5" />
        <rect x="24" y="20" width="32" height="18" rx="5" fill="#6CC4C7" opacity="0.6" />
        <line x1="24" y1="38" x2="56" y2="38" stroke="#004AAD" strokeWidth="1.5" opacity="0.4" />
        <rect x="36" y="27" width="8" height="4" rx="2" fill="#004AAD" opacity="0.5" />
        <rect x="36" y="46" width="8" height="4" rx="2" fill="#004AAD" opacity="0.5" />
      </svg>
    ),
    color: "var(--bee-teal)",
  },
]

export function UsageStepper() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const reduced = useReducedMotion()

  const AUTO_ADVANCE_MS = 4000

  useEffect(() => {
    if (reduced) return
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % STEPS.length)
          return 0
        }
        return p + 100 / (AUTO_ADVANCE_MS / 80)
      })
    }, 80)
    return () => clearInterval(interval)
  }, [current, reduced])

  const goTo = (i: number) => {
    setCurrent(i)
    setProgress(0)
  }

  const prev = () => goTo((current - 1 + STEPS.length) % STEPS.length)
  const next = () => goTo((current + 1) % STEPS.length)
  const step = STEPS[current]

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-xl mx-auto">
      {/* Step indicators */}
      <div className="flex gap-3 items-center">
        {STEPS.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="cursor-pointer transition-all duration-200 focus-visible:ring-2 rounded-full"
            aria-label={`Paso ${s.step}: ${s.title}`}
            aria-current={i === current ? "step" : undefined}
          >
            {i === current ? (
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: step.color,
                  color: "var(--bee-text)",
                }}
              >
                {s.step}
              </div>
            ) : (
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: i < current ? step.color : "rgba(44,26,6,0.15)",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(44,26,6,0.08)" }}
        role="progressbar"
        aria-valuenow={current + 1}
        aria-valuemin={1}
        aria-valuemax={STEPS.length}
        aria-label={`Paso ${current + 1} de ${STEPS.length}`}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: step.color }}
          animate={{ width: reduced ? "100%" : `${progress}%` }}
          transition={{ duration: 0.08, ease: "linear" }}
        />
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={reduced ? false : { opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduced ? undefined : { opacity: 0, x: -30 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="w-full rounded-3xl p-8 flex flex-col items-center text-center gap-5"
          style={{
            background: "rgba(255,255,255,0.65)",
            border: `2px solid ${step.color}55`,
            boxShadow: "0 4px 24px rgba(44,26,6,0.06)",
          }}
        >
          <div aria-hidden="true">{step.icon}</div>
          <div>
            <p
              className="font-hand text-lg mb-1"
              style={{ color: "var(--bee-text-muted)" }}
            >
              Paso {step.step}
            </p>
            <h3
              className="font-display font-semibold text-xl mb-3"
              style={{ color: "var(--bee-text)" }}
            >
              {step.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "var(--bee-text-muted)" }}>
              {step.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex gap-4">
        <button
          onClick={prev}
          className="cursor-pointer w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-md focus-visible:ring-2"
          style={{
            background: "rgba(255,189,89,0.15)",
            border: "1px solid rgba(255,189,89,0.35)",
            color: "var(--bee-text)",
          }}
          aria-label="Paso anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="cursor-pointer w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-md focus-visible:ring-2"
          style={{
            background: "var(--bee-amber)",
            color: "var(--bee-text)",
          }}
          aria-label="Siguiente paso"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
