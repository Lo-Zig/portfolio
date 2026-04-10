import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  tag: Tag = 'h1',
}: AnimatedTextProps) {
  const words = text.split(' ')

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: delay + (wi * word.length + ci) * 0.025,
                duration: 0.4,
                ease: 'easeOut',
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  )
}
