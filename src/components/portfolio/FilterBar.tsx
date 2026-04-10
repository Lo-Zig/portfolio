import { motion } from 'framer-motion'
import type { ProjectCategory } from '@/types'

type FilterValue = 'all' | ProjectCategory

const filters: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'ALL' },
  { value: 'web', label: 'WEB' },
  { value: 'ui', label: 'UI' },
  { value: 'tool', label: 'TOOLS' },
  { value: 'other', label: 'OTHER' },
]

interface FilterBarProps {
  active: FilterValue
  onChange: (value: FilterValue) => void
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex gap-1 overflow-x-auto pb-1">
      {filters.map((f) => {
        const isActive = f.value === active
        return (
          <motion.button
            key={f.value}
            onClick={() => onChange(f.value)}
            whileTap={{ scale: 0.96 }}
            className="px-4 py-2 text-xs font-sans font-medium uppercase tracking-widest whitespace-nowrap cursor-pointer border transition-all duration-200"
            style={{
              backgroundColor: isActive ? 'var(--color-text-light)' : 'transparent',
              color: isActive ? 'var(--color-bg)' : 'var(--color-text-muted-dark)',
              borderColor: isActive ? 'var(--color-text-light)' : 'var(--color-border)',
            }}
          >
            {f.label}
          </motion.button>
        )
      })}
    </div>
  )
}
