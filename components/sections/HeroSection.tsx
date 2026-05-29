"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import dynamic from "next/dynamic"
import { Wordmark } from "@/components/brand/Wordmark"

const ShaderAnimation = dynamic(
  () => import("@/components/ui/shader-animation").then((m) => ({ default: m.ShaderAnimation })),
  { ssr: false }
)

export function HeroSection() {
  const reduced = useReducedMotion()
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) setWebglSupported(false)
    } catch {
      setWebglSupported(false)
    }
  }, [])

  const scrollToProduct = () => {
    document.getElementById("producto")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContacto = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Inicio"
    >
      {/* Shader background layer */}
      <div className="absolute inset-0 z-0">
        {webglSupported ? (
          <ShaderAnimation />
        ) : (
          /* WebGL fallback: static brand gradient */
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, #FFBD59 0%, #FF914D 30%, #A7D2DD 60%, #FFD370 100%)",
            }}
          />
        )}
      </div>

      {/* Brand-colored overlay — amber/sky/cream at ~78% opacity, shimmer through */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(160deg, rgba(252,239,199,0.82) 0%, rgba(255,189,89,0.72) 35%, rgba(167,210,221,0.68) 70%, rgba(252,239,199,0.85) 100%)",
          mixBlendMode: "multiply",
        }}
        aria-hidden="true"
      />

      {/* Subtle parallax noise layer */}
      {!reduced && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,211,112,0.15) 0%, transparent 70%)",
          }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
      )}

      {/* Content layer */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 max-w-3xl"
        >
          {/* Wordmark */}
          <Wordmark size="lg" variant="light" />

          {/* Slogan */}
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="font-display font-medium text-balance"
            style={{
              fontSize: "clamp(1.2rem, 3.5vw, 2rem)",
              color: "var(--bee-blue)",
              maxWidth: "520px",
              fontStyle: "italic",
            }}
          >
            "Envuelve lo natural, conserva lo esencial."
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-4 mt-2"
          >
            <button
              onClick={scrollToProduct}
              className="cursor-pointer px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:ring-2"
              style={{
                background: "var(--bee-blue)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0,74,173,0.28)",
              }}
              aria-label="Conoce más sobre nuestros productos"
            >
              Conoce más
            </button>

            <button
              onClick={scrollToContacto}
              className="cursor-pointer px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:bg-white/40 focus-visible:ring-2"
              style={{
                background: "rgba(255,255,255,0.3)",
                color: "var(--bee-blue)",
                border: "2px solid var(--bee-blue)",
                backdropFilter: "blur(8px)",
              }}
              aria-label="Contáctanos"
            >
              Contáctanos
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {!reduced && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
              <rect x="1" y="1" width="22" height="30" rx="11" stroke="var(--bee-blue)" strokeWidth="2" opacity="0.5" />
              <circle cx="12" cy="8" r="3" fill="var(--bee-blue)" opacity="0.7" />
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  )
}
