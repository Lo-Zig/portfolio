import { motion } from 'framer-motion'

interface StickerProps {
  color: string
  textColor?: string
  text: string
  sub?: string
  rotation: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  delay?: number
  reverse?: boolean
  size?: 'sm' | 'md' | 'lg'
}

function Sticker({ color, textColor = '#0d0d0d', text, sub, rotation, top, left, right, bottom, delay = 0, reverse = false, size = 'md' }: StickerProps) {
  const padding = size === 'sm' ? 'px-3 py-2' : size === 'lg' ? 'px-5 py-4' : 'px-4 py-3'
  const fontSize = size === 'sm' ? '14px' : size === 'lg' ? '20px' : '16px'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: rotation - 10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08, zIndex: 20 }}
      className={`absolute ${padding} rounded-xl cursor-default select-none z-10 ${reverse ? 'animate-float-rev' : 'animate-float'}`}
      style={{
        backgroundColor: color,
        color: textColor,
        top, left, right, bottom,
        ['--rot' as string]: `${rotation}deg`,
        rotate: `${rotation}deg`,
        boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
      }}
    >
      <p
        className="font-display leading-none whitespace-nowrap"
        style={{ fontSize }}
      >
        {text}
      </p>
      {sub && (
        <p
          className="font-sans text-xs mt-1 leading-none opacity-70 whitespace-nowrap"
        >
          {sub}
        </p>
      )}
    </motion.div>
  )
}

export default function SkillBadges() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-cream)', minHeight: '90vh' }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-border-cream) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-cream) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Main visual — large letter/monogram */}
      <div className="relative z-0 flex items-center justify-center h-full" style={{ minHeight: '90vh' }}>
        {/* Photo placeholder — large centered block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
          style={{
            width: 'clamp(260px, 35vw, 480px)',
            height: 'clamp(360px, 50vw, 640px)',
          }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '200px 200px 0 0',
            }}
          />
          {/* Text inside placeholder */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ borderRadius: '200px 200px 0 0', overflow: 'hidden' }}
          >
            <span
              className="font-display select-none"
              style={{ fontSize: 'clamp(80px, 15vw, 180px)', color: '#333', letterSpacing: '-0.02em' }}
            >
              LZ
            </span>
          </div>
        </motion.div>

        {/* ── Sticker badges ── */}
        <Sticker
          color="var(--badge-green)"
          text="REACT©"
          sub="& TYPESCRIPT"
          rotation={-8}
          top="12%"
          left="5%"
          delay={0.1}
          size="lg"
        />
        <Sticker
          color="var(--badge-pink)"
          textColor="#fff"
          text="UI / UX"
          sub="DESIGN©"
          rotation={6}
          top="8%"
          right="8%"
          delay={0.2}
          size="lg"
          reverse
        />
        <Sticker
          color="var(--badge-orange)"
          textColor="#fff"
          text="E-COMM."
          sub="WEB APPS"
          rotation={-5}
          top="38%"
          left="3%"
          delay={0.15}
          size="md"
          reverse
        />
        <Sticker
          color="var(--badge-cyan)"
          text="NEXT.JS"
          sub="& NODE.JS"
          rotation={4}
          top="35%"
          right="4%"
          delay={0.25}
          size="md"
        />
        <Sticker
          color="var(--badge-yellow)"
          text="PERFORMANCE"
          sub="FIRST."
          rotation={-6}
          bottom="24%"
          left="6%"
          delay={0.3}
          size="sm"
        />
        <Sticker
          color="var(--badge-violet)"
          textColor="#fff"
          text="FIREBASE"
          sub="& SUPABASE"
          rotation={8}
          bottom="20%"
          right="5%"
          delay={0.2}
          size="sm"
          reverse
        />
      </div>

      {/* Section label */}
      <div
        className="absolute bottom-8 left-6 md:left-12"
      >
        <p
          className="font-display text-4xl md:text-5xl leading-none"
          style={{ color: 'var(--color-text-dark)', opacity: 0.08 }}
        >
          SKILLS
        </p>
      </div>
    </section>
  )
}
