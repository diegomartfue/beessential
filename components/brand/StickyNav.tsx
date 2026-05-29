"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Wordmark } from "./Wordmark"

const NAV_LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#acerca", label: "Acerca de" },
  { href: "#producto", label: "Producto" },
  { href: "#identidad", label: "Identidad" },
  { href: "#contacto", label: "Contacto" },
]

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: scrolled ? 0 : -8, opacity: scrolled ? 1 : 0.97 }}
        transition={reduced ? { duration: 0 } : { duration: 0.2 }}
        className="fixed top-3 left-4 right-4 z-50 rounded-2xl"
        style={{
          background: scrolled
            ? "rgba(252,239,199,0.92)"
            : "rgba(252,239,199,0.7)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,189,89,0.25)",
          boxShadow: scrolled ? "0 4px 24px rgba(44,26,6,0.12)" : "none",
        }}
        aria-label="Navegación principal"
      >
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            className="cursor-pointer focus-visible:ring-2 rounded-lg"
            onClick={() => handleNavClick("#inicio")}
            aria-label="Ir al inicio"
          >
            <Wordmark size="sm" variant="dark" />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="cursor-pointer px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[rgba(255,189,89,0.18)] focus-visible:ring-2"
                style={{ color: "var(--bee-text)" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-[rgba(255,189,89,0.18)] focus-visible:ring-2"
            style={{ color: "var(--bee-text)" }}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl overflow-hidden md:hidden"
            style={{
              background: "rgba(252,239,199,0.97)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,189,89,0.3)",
              boxShadow: "0 8px 32px rgba(44,26,6,0.12)",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={reduced ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                onClick={() => handleNavClick(link.href)}
                className="cursor-pointer w-full text-left px-5 py-3.5 text-base font-medium transition-colors duration-150 hover:bg-[rgba(255,189,89,0.14)] focus-visible:ring-2"
                style={{
                  color: "var(--bee-text)",
                  borderBottom:
                    i < NAV_LINKS.length - 1
                      ? "1px solid rgba(255,189,89,0.15)"
                      : "none",
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
