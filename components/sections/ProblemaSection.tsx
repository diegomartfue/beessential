"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { DoodlePattern } from "@/components/brand/DoodlePattern"
import { StatCounter } from "@/components/brand/StatCounter"

const stats = [
  {
    numericValue: 126014024,
    label: "personas en México utilizan plástico, cerca del 98% de la población.",
    source: "INEGI, 2024",
  },
  {
    numericValue: 12,
    formatFn: (n: number) => `${n.toFixed(0)}%`,
    label: "de la contaminación del suelo en el mundo es por plásticos desechables.",
    source: "Statista, 2024",
  },
  {
    numericValue: 130,
    suffix: " millones",
    label: "toneladas de plásticos de un solo uso existen en el mundo.",
    source: "Statista, 2024",
  },
]

export function ProblemaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const reduced = useReducedMotion()

  return (
    <section
      id="problema"
      ref={ref}
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "var(--bee-sky)" }}
      aria-labelledby="problema-heading"
    >
      <DoodlePattern color="#004AAD" opacity={0.1} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p
            className="font-hand text-xl mb-2"
            style={{ color: "var(--bee-blue)" }}
          >
            El problema
          </p>
          <h2
            id="problema-heading"
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              color: "var(--bee-blue)",
            }}
          >
            Una alternativa sostenible
          </h2>
          <p
            className="max-w-xl mx-auto text-lg leading-relaxed"
            style={{ color: "var(--bee-text)" }}
          >
            Reducir el uso de plásticos desechables para el resguardo y
            transporte de alimentos.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: "easeOut" }}
            >
              <StatCounter
                numericValue={stat.numericValue}
                formatFn={stat.formatFn}
                suffix={stat.suffix}
                label={stat.label}
                source={stat.source}
                duration={2400}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
