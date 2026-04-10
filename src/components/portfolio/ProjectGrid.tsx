import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from '@/components/portfolio/ProjectCard'
import type { Project } from '@/types'

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-24 text-center"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <p className="font-mono text-sm">Nenhum projeto encontrado.</p>
      </motion.div>
    )
  }

  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
