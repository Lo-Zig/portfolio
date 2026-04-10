import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="pt-16 min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* ── Massive hero type ── */}
      <div className="px-4 md:px-8 lg:px-12 pt-4 md:pt-10 pb-6 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Display lines */}
          <h1
            className="font-display leading-none block w-full text-center"
            style={{
              fontSize: 'clamp(72px, 17.5vw, 280px)',
              color: 'var(--color-text-light)',
              letterSpacing: '0.01em',
            }}
          >
            FRONT-END
          </h1>
          <h1
            className="font-display leading-none block w-full text-center"
            style={{
              fontSize: 'clamp(72px, 17.5vw, 280px)',
              color: 'var(--color-text-light)',
              letterSpacing: '0.01em',
            }}
          >
            DEVELOPER.
          </h1>
        </motion.div>

        {/* ── Sub row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-end text-center md:text-left"
        >
          <p
            className="text-sm leading-relaxed col-span-1"
            style={{ color: 'var(--color-text-muted-dark)' }}
          >
            Estou atualmente construindo interfaces elegantes e de alto desempenho com React e TypeScript, entregando produtos que os usuários amam.
          </p>

          <p
            className="text-sm leading-relaxed col-span-1"
            style={{ color: 'var(--color-text-muted-dark)' }}
          >
            Sou apaixonado por criar experiências digitais que combinam código limpo, design intencional e atenção obsessiva aos detalhes.
          </p>

          <div className="flex justify-center md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest group border-b-2 pb-1 transition-all"
              style={{
                color: 'var(--color-text-light)',
                borderColor: 'var(--color-text-light)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.color = 'var(--badge-yellow)'
                el.style.borderColor = 'var(--badge-yellow)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.color = 'var(--color-text-light)'
                el.style.borderColor = 'var(--color-text-light)'
              }}
            >
              Get in touch
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom border ── */}
      <div
        className="h-px mx-4 md:mx-8 lg:mx-12"
        style={{ backgroundColor: 'var(--color-border)' }}
      />
    </section>
  )
}
