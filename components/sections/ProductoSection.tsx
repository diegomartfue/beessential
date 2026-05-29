"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { DoodlePattern } from "@/components/brand/DoodlePattern"
import { ProductConfigurator } from "@/components/brand/ProductConfigurator"

export function ProductoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const reduced = useReducedMotion()

  return (
    <section
      id="producto"
      ref={ref}
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "var(--bee-cream)" }}
      aria-labelledby="producto-heading"
    >
      <DoodlePattern color="#A7D2DD" opacity={0.2} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="font-hand text-xl mb-2" style={{ color: "var(--bee-orange)" }}>
            Nuestro producto
          </p>
          <h2
            id="producto-heading"
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--bee-text)",
            }}
          >
            Bee Wraps
          </h2>
          <p
            className="mt-3 text-base max-w-lg mx-auto"
            style={{ color: "var(--bee-text-muted)" }}
          >
            Personaliza tu envoltorio. Elige el color y el tamaño que mejor se
            adapte a tus alimentos.
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <ProductConfigurator />
        </motion.div>
      </div>
    </section>
  )
}
