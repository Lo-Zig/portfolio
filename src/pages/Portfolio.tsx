import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/layout/PageTransition'
import FilterBar from '@/components/portfolio/FilterBar'
import ProjectGrid from '@/components/portfolio/ProjectGrid'
import { projects } from '@/data/projects'
import type { ProjectCategory } from '@/types'

type FilterValue = 'all' | ProjectCategory

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <PageTransition>
      <div
        className="pt-16 min-h-screen"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        {/* Header */}
        <div
          className="px-6 md:px-12 lg:px-16 pt-16 pb-10 border-b"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display leading-none mb-6"
            style={{ fontSize: 'clamp(48px, 12vw, 140px)', color: 'var(--color-text-light)' }}
          >
            WORKS.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
          >
            <FilterBar active={activeFilter} onChange={setActiveFilter} />
            <span
              className="text-xs font-mono shrink-0"
              style={{ color: 'var(--color-text-muted-dark)' }}
            >
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="px-6 md:px-12 lg:px-16 py-10">
          <ProjectGrid projects={filtered} />
        </div>
      </div>
    </PageTransition>
  )
}
