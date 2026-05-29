"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { DoodlePattern } from "@/components/brand/DoodlePattern"

const ingredients = [
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true">
        <ellipse cx="16" cy="18" rx="9" ry="7" fill="#FFBD59" opacity="0.9" />
        <path d="M10 18 Q12 12 16 10 Q20 12 22 18" fill="#FFD370" />
        <circle cx="16" cy="10" r="3" fill="#FF914D" />
      </svg>
    ),
    label: "Cera de abeja",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true">
        <path d="M16 4 Q24 10 22 20 Q18 28 12 24 Q6 20 10 12 Z" fill="#6CC4C7" opacity="0.8" />
        <circle cx="16" cy="16" r="3" fill="#004AAD" opacity="0.5" />
      </svg>
    ),
    label: "Resina de pino",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="20" height="20" rx="4" fill="#A7D2DD" opacity="0.5" />
        <path d="M10 16 L14 20 L22 12" stroke="#004AAD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Tela 100% de algodón",
  },
]

export function AcercaDeSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const reduced = useReducedMotion()

  return (
    <section
      id="acerca"
      ref={ref}
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "var(--bee-cream)" }}
      aria-labelledby="acerca-heading"
    >
      <DoodlePattern color="#FFBD59" opacity={0.16} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="font-hand text-xl mb-2" style={{ color: "var(--bee-orange)" }}>
              Acerca de
            </p>
            <h2
              id="acerca-heading"
              className="font-display font-bold mb-5"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "var(--bee-text)",
              }}
            >
              Hecho con la naturaleza en mente
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--bee-text)", maxWidth: "520px" }}
            >
              Envoltorios reutilizables hechos de tela de algodón, cubiertos con
              una mezcla natural de{" "}
              <strong>cera de abeja</strong> como ingrediente principal y{" "}
              <strong>resina de pino</strong>.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--bee-text-muted)", maxWidth: "480px" }}
            >
              Dirigida a las personas que buscan una alternativa para el resguardo
              y el traslado de alimentos.
            </p>

            {/* Ingredient chips */}
            <div className="flex flex-wrap gap-3 mt-8">
              {ingredients.map((item, i) => (
                <motion.div
                  key={i}
                  initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(255,189,89,0.15)",
                    border: "1px solid rgba(255,189,89,0.35)",
                    color: "var(--bee-text)",
                  }}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden aspect-square"
            style={{ boxShadow: "0 16px 40px rgba(44,26,6,0.15)" }}
          >
            {/* PLACEHOLDER: swap for real product photo */}
            <img
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&q=80"
              alt="Envoltorios de cera de abeja con frutas frescas sobre mesa de madera"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(252,239,199,0.35) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
