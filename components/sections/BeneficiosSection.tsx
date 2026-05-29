"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Clock, Leaf } from "lucide-react"
import { DoodlePattern } from "@/components/brand/DoodlePattern"

const benefits = [
  {
    Icon: Clock,
    title: "Hasta un año de vida útil",
    body: "Cuentan con un ciclo de vida de hasta un año con el cuidado adecuado, reemplazando cientos de bolsas de plástico.",
    accent: "var(--bee-amber)",
  },
  {
    Icon: Leaf,
    title: "Compostables al final de su vida",
    body: "Se pueden compostar al término de su uso. Regresan a la tierra sin dejar rastro de contaminación.",
    accent: "var(--bee-teal)",
  },
]

export function BeneficiosSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const reduced = useReducedMotion()

  return (
    <section
      id="beneficios"
      ref={ref}
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "var(--bee-cream)" }}
      aria-labelledby="beneficios-heading"
    >
      <DoodlePattern color="#FFBD59" opacity={0.14} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="font-hand text-xl mb-2" style={{ color: "var(--bee-orange)" }}>
            Beneficios
          </p>
          <h2
            id="beneficios-heading"
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--bee-text)",
            }}
          >
            ¿Por qué Beessential?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 * i, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 p-8 rounded-3xl text-center"
              style={{
                background: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(255,189,89,0.2)",
                boxShadow: "0 4px 24px rgba(44,26,6,0.07)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: `${b.accent}22` }}
                aria-hidden="true"
              >
                <b.Icon
                  size={32}
                  strokeWidth={1.5}
                  style={{ color: b.accent }}
                />
              </div>
              <h3
                className="font-display font-semibold text-xl"
                style={{ color: "var(--bee-text)" }}
              >
                {b.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--bee-text-muted)" }}>
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
