"use client"

interface DoodlePatternProps {
  color?: string
  opacity?: number
  className?: string
}

export function DoodlePattern({
  color = "#FFBD59",
  opacity = 0.18,
  className = "",
}: DoodlePatternProps) {
  const patternId = `doodle-${color.replace("#", "")}`

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          {/* Tiny sun */}
          <circle cx="12" cy="12" r="3" fill={color} opacity={opacity} />
          {Array.from({ length: 6 }, (_, i) => {
            const angle = (i * 60 * Math.PI) / 180
            return (
              <line
                key={i}
                x1={12 + 4 * Math.cos(angle)}
                y1={12 + 4 * Math.sin(angle)}
                x2={12 + 7 * Math.cos(angle)}
                y2={12 + 7 * Math.sin(angle)}
                stroke={color}
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity={opacity}
              />
            )
          })}

          {/* 4-point sparkle */}
          <path
            d="M50 8 L51.5 6 L53 8 L51.5 10 Z"
            fill={color}
            opacity={opacity * 1.2}
          />
          <path
            d="M50 8 L48.5 9.5 L50 11 L51.5 9.5 Z"
            fill={color}
            opacity={opacity * 0.8}
          />

          {/* Small 5-point star */}
          <path
            d="M68 20 L68.6 22 L70.7 22 L69 23.3 L69.6 25.3 L68 24 L66.4 25.3 L67 23.3 L65.3 22 L67.4 22 Z"
            fill={color}
            opacity={opacity}
          />

          {/* Dot cluster */}
          <circle cx="30" cy="45" r="1.5" fill={color} opacity={opacity} />
          <circle cx="34" cy="42" r="1" fill={color} opacity={opacity * 0.7} />
          <circle cx="27" cy="48" r="1" fill={color} opacity={opacity * 0.7} />

          {/* Squiggle */}
          <path
            d="M5 58 Q8 54 11 58 Q14 62 17 58"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            opacity={opacity}
          />

          {/* Tiny bee shape */}
          <ellipse cx="60" cy="60" rx="4" ry="2.5" fill={color} opacity={opacity * 0.7} />
          <line x1="56" y1="58" x2="55" y2="56" stroke={color} strokeWidth="1" opacity={opacity} />
          <line x1="64" y1="58" x2="65" y2="56" stroke={color} strokeWidth="1" opacity={opacity} />
          <line x1="58" y1="59" x2="57" y2="57" stroke={color} strokeWidth="0.8" opacity={opacity * 0.6} />
          <line x1="62" y1="59" x2="63" y2="57" stroke={color} strokeWidth="0.8" opacity={opacity * 0.6} />

          {/* Confetti swirl */}
          <path
            d="M40 25 Q43 23 44 26 Q45 29 42 30"
            stroke={color}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity={opacity * 0.8}
          />
          <circle cx="40" cy="25" r="1" fill={color} opacity={opacity * 0.6} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
