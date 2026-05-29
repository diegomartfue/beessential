"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, MapPin, Globe } from "lucide-react"
import { Wordmark } from "@/components/brand/Wordmark"
import { DoodlePattern } from "@/components/brand/DoodlePattern"

/* Social brand icons as inline SVGs (no brand icons in lucide-react) */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.07a8.18 8.18 0 004.78 1.52V7.15a4.86 4.86 0 01-1.01-.46z" />
  </svg>
)

const socials = [
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: XIcon, label: "X (Twitter)", href: "#" },
  { Icon: TikTokIcon, label: "TikTok", href: "#" },
]

const contacts = [
  {
    Icon: Phone,
    text: "(656) 319 5678",
    href: "tel:+526563195678",
    color: "var(--bee-teal)",
  },
  {
    Icon: Mail,
    text: "beessential@gmail.com",
    href: "mailto:beessential@gmail.com",
    color: "var(--bee-amber)",
  },
  {
    Icon: MapPin,
    text: "Colinas del Valle, Fracc. Jarudo #3256",
    href: "#",
    color: "var(--bee-orange)",
  },
  {
    Icon: Globe,
    text: "be.essensial.mx",
    href: "#",
    color: "var(--bee-sky)",
  },
]

export function ContactoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const reduced = useReducedMotion()

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative overflow-hidden py-20 px-6"
      style={{ background: "var(--bee-cream)" }}
      aria-labelledby="contacto-heading"
    >
      <DoodlePattern color="#FFBD59" opacity={0.12} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <p className="font-hand text-xl mb-2" style={{ color: "var(--bee-orange)" }}>
            Escríbenos
          </p>
          <h2
            id="contacto-heading"
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--bee-text)",
            }}
          >
            Contacto
          </h2>
        </motion.div>

        {/* Business card */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #fff8e7 0%, rgba(167,210,221,0.25) 100%)",
            border: "1px solid rgba(255,189,89,0.3)",
            boxShadow: "0 8px 40px rgba(44,26,6,0.1)",
          }}
        >
          <DoodlePattern color="#FFBD59" opacity={0.08} />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <Wordmark size="md" variant="dark" />

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:shadow-md group focus-visible:ring-2"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,189,89,0.2)",
                    color: "var(--bee-text)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ background: `${c.color}22` }}
                    aria-hidden="true"
                  >
                    <c.Icon size={18} style={{ color: c.color }} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium truncate">{c.text}</span>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="cursor-pointer w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md focus-visible:ring-2"
                  style={{
                    background: "rgba(255,189,89,0.15)",
                    border: "1px solid rgba(255,189,89,0.3)",
                    color: "var(--bee-text)",
                  }}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.Icon />
                </a>
              ))}
            </div>

            {/* Tagline */}
            <p
              className="font-hand text-lg text-center"
              style={{ color: "var(--bee-text-muted)" }}
            >
              "Envuelve lo natural, conserva lo esencial."
            </p>
          </div>
        </motion.div>

        {/* Footer credit */}
        <p
          className="text-center text-xs mt-8"
          style={{ color: "var(--bee-text-muted)", opacity: 0.6 }}
        >
          © {new Date().getFullYear()} Beessential · Colinas del Valle, Chihuahua, México
        </p>
      </div>
    </section>
  )
}
