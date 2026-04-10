import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '@/data/projects'

export default function FeaturedProjects() {
  return (
    <section
      className="border-t"
      style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
    >
      {/* Header */}
      <div
        className="px-6 md:px-12 lg:px-16 py-10 border-b flex items-end justify-between"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display"
          style={{ fontSize: 'clamp(32px, 7vw, 80px)', color: 'var(--color-text-light)' }}
        >
          SELECTED WORK.
        </motion.h2>

        <Link
          to="/portfolio"
          className="hidden md:inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest group"
          style={{ color: 'var(--color-text-muted-dark)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted-dark)')}
        >
          Explore more
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Project list — numbered rows */}
      <div>
        {featuredProjects.map((project, i) => {
          const href = project.liveUrl ?? project.githubUrl
          return (
          <motion.a
            key={project.id}
            href={href}
            target={href ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col md:flex-row md:items-center gap-4 py-7 border-b px-6 md:px-12 lg:px-16"
            style={{ borderColor: 'var(--color-border)', cursor: href ? 'pointer' : 'default', display: 'flex' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#111')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {/* Number */}
            <span
              className="font-display text-xl shrink-0 w-12"
              style={{ color: 'var(--color-text-muted-dark)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Color dot */}
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{
                background: `linear-gradient(135deg, ${project.coverGradient[0]}, ${project.coverGradient[1]})`,
              }}
            />

            {/* Title */}
            <h3
              className="font-display flex-1 transition-colors"
              style={{
                fontSize: 'clamp(20px, 3.5vw, 40px)',
                color: 'var(--color-text-light)',
              }}
            >
              {project.title.toUpperCase()}
            </h3>

            {/* Year */}
            <span
              className="font-sans text-xs shrink-0"
              style={{ color: 'var(--color-text-muted-dark)' }}
            >
              {project.year}
            </span>

            {/* Tags */}
            <div className="hidden lg:flex items-center gap-2 shrink-0 w-56 justify-end">
              {project.tags.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 border"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-muted-dark)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Arrow */}
            <ArrowUpRight
              size={18}
              className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: 'var(--badge-yellow)' }}
            />
          </motion.a>
          )
        })}
      </div>

      {/* Mobile: explore more */}
      <div className="px-6 md:px-12 py-8 md:hidden">
        <Link
          to="/portfolio"
          className="text-sm font-medium uppercase tracking-widest flex items-center gap-2"
          style={{ color: 'var(--color-text-muted-dark)' }}
        >
          Explore more <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  )
}
