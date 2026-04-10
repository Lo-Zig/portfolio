interface BadgeProps {
  label: string
  level?: 'expert' | 'proficient' | 'learning'
  variant?: 'default' | 'skill'
}

const levelOpacity = {
  expert: 1,
  proficient: 0.65,
  learning: 0.35,
}

export default function Badge({ label, level, variant = 'default' }: BadgeProps) {
  if (variant === 'skill' && level) {
    const opacity = levelOpacity[level]
    return (
      <span
        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium border transition-colors"
        style={{
          backgroundColor: `color-mix(in srgb, var(--color-accent) ${Math.round(opacity * 12)}%, transparent)`,
          color: `color-mix(in srgb, var(--color-accent) ${Math.round(opacity * 100)}%, var(--color-text-muted) ${Math.round((1 - opacity) * 100)}%)`,
          borderColor: `color-mix(in srgb, var(--color-accent) ${Math.round(opacity * 25)}%, transparent)`,
        }}
      >
        {label}
      </span>
    )
  }

  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium"
      style={{
        backgroundColor: 'var(--color-bg-subtle)',
        color: 'var(--color-text-muted)',
        border: '1px solid var(--color-border)',
      }}
    >
      {label}
    </span>
  )
}
