"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Star, Eye, Heart, Sprout, Sparkles } from "lucide-react"
import { DoodlePattern } from "@/components/brand/DoodlePattern"

const valores = [
  {
    Icon: Star,
    title: "Calidad",
    body: "Nos dedicamos a que cada pedazo de tela sea especialmente hecho para ti.",
    color: "var(--bee-amber)",
  },
  {
    Icon: Eye,
    title: "Consciencia",
    body: "Creamos productos sustentables que ayudan a crear consciencia entre nuestros clientes y la comunidad.",
    color: "var(--bee-teal)",
  },
  {
    Icon: Heart,
    title: "Solidaridad",
    body: "Creemos en la importancia de construir una comunidad comprometida con la responsabilidad social y el cuidado ambiental.",
    color: "var(--bee-orange)",
  },
]

export function IdentidadSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const reduced = useReducedMotion()

  return (
    <section
      id="identidad"
      ref={ref}
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "var(--bee-cream)" }}
      aria-labelledby="identidad-heading"
    >
      <DoodlePattern color="#FFBD59" opacity={0.14} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="font-hand text-xl mb-2" style={{ color: "var(--bee-orange)" }}>
            Nuestra identidad
          </p>
          <h2
            id="identidad-heading"
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--bee-text)",
            }}
          >
            Misión, Visión y Valores
          </h2>
        </motion.div>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {[
            {
              label: "Misión",
              Icon: Sprout,
              text: "Crear envolturas ecológicas que preserven los alimentos de forma natural, reduciendo el uso de plásticos y promoviendo hábitos sostenibles.",
              color: "var(--bee-sky)",
            },
            {
              label: "Visión",
              Icon: Sparkles,
              text: "Ser la opción preferida en productos reutilizables para conservar alimentos, contribuyendo a reducir el impacto ambiental y fomentar un consumo más consciente.",
              color: "var(--bee-amber)",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 * i, ease: "easeOut" }}
              className="p-8 rounded-3xl"
              style={{
                background: `${item.color}22`,
                border: `1px solid ${item.color}44`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${item.color}33` }}
                aria-hidden="true"
              >
                <item.Icon size={22} strokeWidth={1.5} style={{ color: item.color === "var(--bee-sky)" ? "var(--bee-blue)" : "var(--bee-text)" }} />
              </div>
              <h3
                className="font-display font-semibold text-xl mb-4"
                style={{ color: "var(--bee-text)" }}
              >
                {item.label}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--bee-text)" }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <h3
          className="font-display font-semibold text-center text-2xl mb-8"
          style={{ color: "var(--bee-text)" }}
        >
          Nuestros valores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valores.map((v, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i + 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-4 p-7 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,189,89,0.2)",
                boxShadow: "0 4px 20px rgba(44,26,6,0.06)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${v.color}22` }}
                aria-hidden="true"
              >
                <v.Icon size={28} strokeWidth={1.5} style={{ color: v.color }} />
              </div>
              <h4
                className="font-display font-semibold text-lg"
                style={{ color: "var(--bee-text)" }}
              >
                {v.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--bee-text-muted)" }}>
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
