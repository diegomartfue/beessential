"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

const COLORS = [
  { id: "sage", label: "Salvia", hex: "#87A878", textHex: "#3a4d31" },
  { id: "olive", label: "Olivo", hex: "#7A8C5A", textHex: "#3d4a26" },
  { id: "moss", label: "Musgo", hex: "#5E7A52", textHex: "#2e3f25" },
  { id: "fern", label: "Helecho", hex: "#6B8F71", textHex: "#344a35" },
]

const SIZES = [
  { id: "S", label: "S", desc: "~20 × 20 cm" },
  { id: "M", label: "M", desc: "~30 × 30 cm" },
  { id: "L", label: "L", desc: "~40 × 40 cm" },
]

const MATERIAL_LABELS = [
  { angle: 220, label: "Tela 100%\nde algodón", color: "var(--bee-sky)" },
  { angle: 340, label: "Resina de\npino", color: "var(--bee-teal)" },
  { angle: 100, label: "Cera de\nabeja", color: "var(--bee-amber)" },
]

export function ProductConfigurator() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0])
  const [selectedSize, setSelectedSize] = useState(SIZES[1])
  const reduced = useReducedMotion()

  const radius = 130

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-3xl mx-auto">
      {/* Product preview */}
      <div className="relative flex-shrink-0" style={{ width: 280, height: 280 }}>
        {/* Product circle */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedColor.id + selectedSize.id}
            initial={reduced ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at 38% 35%, ${selectedColor.hex}cc, ${selectedColor.hex} 70%)`,
              boxShadow: `0 8px 40px ${selectedColor.hex}55, 0 2px 8px rgba(44,26,6,0.1)`,
            }}
          >
            {/* Wrap lines to suggest texture */}
            <svg viewBox="0 0 200 200" width="200" height="200" aria-hidden="true">
              <defs>
                <clipPath id="circle-clip">
                  <circle cx="100" cy="100" r="98" />
                </clipPath>
              </defs>
              <g clipPath="url(#circle-clip)" opacity="0.18">
                {Array.from({ length: 12 }, (_, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 18}
                    x2="200"
                    y2={i * 18 - 40}
                    stroke="#fff"
                    strokeWidth="1"
                  />
                ))}
              </g>
              {/* Size badge */}
              <circle cx="100" cy="100" r="30" fill="rgba(255,255,255,0.22)" />
              <text
                x="100"
                y="107"
                textAnchor="middle"
                fill="white"
                fontSize="24"
                fontWeight="700"
                fontFamily="var(--font-playfair)"
              >
                {selectedSize.id}
              </text>
            </svg>

            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.3)",
                color: "white",
                backdropFilter: "blur(4px)",
              }}
            >
              {selectedSize.desc}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Material labels */}
        {MATERIAL_LABELS.map((m, i) => {
          const rad = (m.angle * Math.PI) / 180
          const cx = 140 + radius * Math.cos(rad)
          const cy = 140 + radius * Math.sin(rad)
          const lines = m.label.split("\n")
          return (
            <div
              key={i}
              className="absolute text-center leading-tight"
              style={{
                left: cx - 44,
                top: cy - 18,
                width: 88,
                pointerEvents: "none",
              }}
            >
              <div
                className="inline-block text-xs font-semibold px-2 py-1 rounded-lg"
                style={{
                  background: m.color + "22",
                  color: m.color === "var(--bee-amber)" ? "var(--bee-text)" : m.color,
                  border: `1px solid ${m.color}44`,
                  fontSize: "0.7rem",
                  lineHeight: "1.3",
                }}
              >
                {lines.map((l, j) => (
                  <span key={j} className="block">{l}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-7 flex-1 w-full max-w-xs">
        {/* Color picker */}
        <div>
          <p
            className="text-sm font-semibold mb-3 uppercase tracking-wider"
            style={{ color: "var(--bee-text-muted)" }}
          >
            Color
          </p>
          <div className="flex gap-3 flex-wrap">
            {COLORS.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedColor(c)}
                className="cursor-pointer w-10 h-10 rounded-full transition-all duration-200 hover:scale-110 focus-visible:ring-2 ring-offset-2"
                style={{
                  background: c.hex,
                  boxShadow:
                    selectedColor.id === c.id
                      ? `0 0 0 3px white, 0 0 0 5px ${c.hex}`
                      : "0 2px 6px rgba(44,26,6,0.15)",
                }}
                aria-label={`Color ${c.label}`}
                aria-pressed={selectedColor.id === c.id}
              />
            ))}
          </div>
          <p className="mt-2 text-sm font-medium" style={{ color: "var(--bee-text-muted)" }}>
            {selectedColor.label}
          </p>
        </div>

        {/* Size picker */}
        <div>
          <p
            className="text-sm font-semibold mb-3 uppercase tracking-wider"
            style={{ color: "var(--bee-text-muted)" }}
          >
            Tamaño
          </p>
          <div className="flex gap-3">
            {SIZES.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSize(s)}
                className="cursor-pointer w-14 h-14 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 focus-visible:ring-2"
                style={{
                  background:
                    selectedSize.id === s.id
                      ? "var(--bee-amber)"
                      : "rgba(255,189,89,0.12)",
                  color:
                    selectedSize.id === s.id
                      ? "var(--bee-text)"
                      : "var(--bee-text-muted)",
                  border:
                    selectedSize.id === s.id
                      ? "2px solid var(--bee-amber)"
                      : "2px solid rgba(255,189,89,0.25)",
                }}
                aria-label={`Tamaño ${s.id} — ${s.desc}`}
                aria-pressed={selectedSize.id === s.id}
              >
                {s.id}
              </button>
            ))}
          </div>
          <p className="mt-2 text-sm" style={{ color: "var(--bee-text-muted)" }}>
            {selectedSize.desc}
          </p>
        </div>

        {/* Selected summary */}
        <div
          className="rounded-2xl px-5 py-4 text-sm"
          style={{
            background: "rgba(255,189,89,0.12)",
            border: "1px solid rgba(255,189,89,0.25)",
          }}
        >
          <p style={{ color: "var(--bee-text)" }}>
            <strong>Bee Wrap {selectedSize.id}</strong> — {selectedSize.desc}
          </p>
          <p style={{ color: "var(--bee-text-muted)" }}>
            Color {selectedColor.label} · Hecho a mano
          </p>
        </div>
      </div>
    </div>
  )
}
