import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-t"
      style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-border-cream)' }}
    >
      <div className="max-w-none px-6 md:px-12 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: big text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-display text-xs mb-4 tracking-widest"
            style={{ color: 'var(--color-text-muted-light)' }}
          >
            — ABOUT
          </p>
          <h2
            className="font-display leading-none"
            style={{
              fontSize: 'clamp(40px, 8vw, 96px)',
              color: 'var(--color-text-dark)',
            }}
          >
            CÓDIGO COM<br />PROPÓSITO.
          </h2>
        </motion.div>

        {/* Right: body + stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--color-text-muted-light)' }}
          >
            Sou um desenvolvedor Front-end apaixonado por criar experiências digitais que unem estética e funcionalidade. Trabalho com React e TypeScript, sempre buscando o equilíbrio perfeito entre performance e beleza.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--color-text-muted-light)' }}
          >
            Minha abordagem é centrada no usuário: cada decisão de design e código tem como objetivo tornar a experiência mais fluida, acessível e agradável.
          </p>

          <div
            className="grid grid-cols-3 gap-6 pt-6 border-t"
            style={{ borderColor: 'var(--color-border-cream)' }}
          >
            {[
              { value: '3+', label: 'Anos' },
              { value: '30+', label: 'Projetos' },
              { value: '10+', label: 'Técnologias' },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="font-display text-5xl leading-none"
                  style={{ color: 'var(--color-text-dark)' }}
                >
                  {s.value}
                </p>
                <p
                  className="text-xs mt-1 uppercase tracking-widest"
                  style={{ color: 'var(--color-text-muted-light)' }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
