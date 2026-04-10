import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  large?: boolean
}

export default function ProjectCard({ project, large = false }: ProjectCardProps) {
  return (
    <motion.article
      layout
      className="group relative overflow-hidden border cursor-default"
      style={{ borderColor: 'var(--color-border)', backgroundColor: '#111' }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#fff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
      }}
    >
      {/* Cover */}
      <div
        className={`w-full relative overflow-hidden ${large ? 'h-64' : 'h-52'}`}
        style={{
          background: `linear-gradient(135deg, ${project.coverGradient[0]}, ${project.coverGradient[1]})`,
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 border border-white/30 flex items-center justify-center transition-all text-white"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--badge-yellow)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver projeto"
              className="w-10 h-10 border border-white/30 flex items-center justify-center transition-all text-white"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--badge-yellow)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        {/* Year */}
        <div className="absolute top-3 right-3">
          <span className="text-xs font-mono text-white/50">{project.year}</span>
        </div>

        {/* Category */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs px-2 py-1 uppercase tracking-widest font-sans"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.8)' }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'var(--color-text-light)' }}
          >
            {project.title.toUpperCase()}
          </h3>
          <ArrowUpRight
            size={16}
            className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"
            style={{ color: 'var(--badge-yellow)' }}
          />
        </div>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: 'var(--color-text-muted-dark)' }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 border font-sans"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted-dark)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
