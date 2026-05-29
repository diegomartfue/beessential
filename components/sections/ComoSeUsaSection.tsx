"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { UsageStepper } from "@/components/brand/UsageStepper"
import { DoodlePattern } from "@/components/brand/DoodlePattern"

export function ComoSeUsaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const reduced = useReducedMotion()

  return (
    <section
      id="como-se-usa"
      ref={ref}
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "var(--bee-sky)" }}
      aria-labelledby="uso-heading"
    >
      <DoodlePattern color="#004AAD" opacity={0.08} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="font-hand text-xl mb-2" style={{ color: "var(--bee-blue)" }}>
            Fácil de usar
          </p>
          <h2
            id="uso-heading"
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--bee-blue)",
            }}
          >
            Cómo se usa
          </h2>
          <p
            className="mt-3 text-base max-w-lg mx-auto"
            style={{ color: "var(--bee-text)" }}
          >
            Envuelve tu comida en tres sencillos pasos.
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <UsageStepper />
        </motion.div>
      </div>
    </section>
  )
}
