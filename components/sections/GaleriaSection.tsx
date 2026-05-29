"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { DoodlePattern } from "@/components/brand/DoodlePattern"

/* PLACEHOLDER: Replace with real product photography from the brand deck.
   Image slots are labeled below so they can be swapped individually. */
const images = [
  {
    slot: "photo-kitchen-golden",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Cocina dorada con frutas frescas y tela natural",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    slot: "photo-produce-wrap",
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
    alt: "Vegetales envueltos en tela de algodón",
    span: "",
    aspect: "aspect-square",
  },
  {
    slot: "photo-beeswax-honey",
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
    alt: "Panal de abeja y cera natural sobre madera",
    span: "",
    aspect: "aspect-square",
  },
  {
    slot: "doodle-tile",
    src: null,
    alt: "Patrón de ilustraciones Beessential",
    span: "",
    aspect: "aspect-square",
  },
  {
    slot: "photo-bread-fruit",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
    alt: "Pan artesanal y frutas sobre mesa de madera cálida",
    span: "",
    aspect: "aspect-square",
  },
]

export function GaleriaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const reduced = useReducedMotion()

  return (
    <section
      id="galeria"
      ref={ref}
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "#f0e4b0" }}
      aria-labelledby="galeria-heading"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="font-hand text-xl mb-2" style={{ color: "var(--bee-orange)" }}>
            Galería
          </p>
          <h2
            id="galeria-heading"
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--bee-text)",
            }}
          >
            Estilo visual
          </h2>
        </motion.div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-2xl ${img.span}`}
              style={{ boxShadow: "0 4px 20px rgba(44,26,6,0.1)" }}
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              ) : (
                /* Doodle tile placeholder */
                <div
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ background: "var(--bee-amber)" }}
                  aria-label={img.alt}
                >
                  <DoodlePattern color="#2C1A06" opacity={0.22} />
                  <div className="relative z-10 text-center">
                    <p
                      className="font-hand text-2xl font-bold"
                      style={{ color: "var(--bee-text)" }}
                    >
                      Be essential
                    </p>
                    <p className="font-hand text-sm mt-1" style={{ color: "var(--bee-text-muted)" }}>
                      ✦ hecho con amor ✦
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
