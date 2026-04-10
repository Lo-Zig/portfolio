import { motion } from 'framer-motion'
import { Monitor, Palette, Layers } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Monitor,
    title: 'Front-end\nDeveloper',
    sub: 'React · TypeScript · Next.js',
    count: '20 Projetos',
  },
  {
    icon: Palette,
    title: 'UI / UX\nDesigner',
    sub: 'Figma · Design Systems',
    count: '12 Projetos',
  },
  {
    icon: Layers,
    title: 'Web App\nDeveloper',
    sub: 'PWA · Firebase · Supabase',
    count: '8 Projetos',
  },
]

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" className="border-t px-6 md:px-12" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {services.map((s, i) => {
          const isActive = hovered === i || (hovered === null && i === 0)
          return (
            <motion.div
              key={s.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-8 py-10 cursor-default border-b md:border-b-0 transition-all duration-300"
              style={{
                backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-bg-elevated)',
                borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-8 transition-all duration-300"
                style={{
                  backgroundColor: isActive ? 'rgba(0,0,0,0.15)' : 'var(--color-bg-subtle)',
                  color: isActive ? '#fff' : 'var(--color-accent)',
                }}
              >
                <s.icon size={20} />
              </div>

              {/* Title */}
              <h3
                className="font-bold leading-snug mb-2 transition-colors duration-300 whitespace-pre-line"
                style={{
                  fontSize: 'clamp(18px, 2.5vw, 24px)',
                  color: isActive ? '#0a0a0a' : 'var(--color-text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                {s.title}
              </h3>

              {/* Sub */}
              <p
                className="text-sm mb-10 transition-colors duration-300"
                style={{ color: isActive ? 'rgba(0,0,0,0.55)' : 'var(--color-text-muted)' }}
              >
                {s.sub}
              </p>

              {/* Count link */}
              <p
                className="text-sm font-semibold flex items-center gap-2 transition-colors duration-300"
                style={{ color: isActive ? 'rgba(0,0,0,0.7)' : 'var(--color-text-secondary)' }}
              >
                {s.count}
                <span className="text-lg">→</span>
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
