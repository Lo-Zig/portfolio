import { motion } from 'framer-motion'
import { skills } from '@/data/projects'

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'tooling', label: 'Tooling' },
  { key: 'design', label: 'Design' },
] as const

const levelDot: Record<string, string> = {
  expert: 'var(--color-accent)',
  proficient: 'color-mix(in srgb, var(--color-accent) 55%, transparent)',
  learning: 'color-mix(in srgb, var(--color-accent) 25%, transparent)',
}

export default function SkillsSection() {
  return (
    <section className="py-28 px-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p
            className="font-mono text-xs mb-4 flex items-center gap-3 tracking-widest uppercase"
            style={{ color: 'var(--color-accent)' }}
          >
            <span className="inline-block w-6 h-px" style={{ backgroundColor: 'var(--color-accent)' }} />
            Skills
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
            }}
          >
            Meu stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: 'var(--color-bg-elevated)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3
                className="font-mono text-xs font-semibold mb-5 tracking-widest uppercase"
                style={{ color: 'var(--color-accent)' }}
              >
                {cat.label}
              </h3>

              <div className="space-y-3">
                {skills
                  .filter((s) => s.category === cat.key)
                  .map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.04 }}
                      className="flex items-center justify-between"
                    >
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: levelDot[skill.level] }}
                        title={skill.level}
                      />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
