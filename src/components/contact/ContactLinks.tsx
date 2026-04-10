import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'loziglioli@gmail.com',
    href: 'mailto:loziglioli@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Lo-Zig',
    href: 'https://github.com/Lo-Zig',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/lorenzo-ziglioli',
    href: 'https://www.linkedin.com/in/lorenzo-ziglioli/',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Brasil',
    href: null,
  },
]

export default function ContactLinks() {
  return (
    <div>
      <h2
        className="font-bold leading-tight mb-4"
        style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          letterSpacing: '-0.03em',
          color: 'var(--color-text-primary)',
        }}
      >
        Qualquer dúvida<br />
        ou <span style={{ color: 'var(--color-accent)' }}>discussão.</span>
      </h2>
      <p
        className="text-base leading-relaxed mb-10"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        Estou aberto a novas oportunidades, freelances e colaborações. Se você tem um projeto em mente — minha caixa de entrada está sempre aberta.
      </p>

      <div className="space-y-3">
        {contactItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200"
                style={{
                  backgroundColor: 'var(--color-bg-elevated)',
                  borderColor: 'var(--color-border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.transform = 'translateX(6px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-dim)', color: 'var(--color-accent)' }}
                >
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    {item.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ) : (
              <div
                className="flex items-center gap-4 p-4 rounded-2xl border"
                style={{ backgroundColor: 'var(--color-bg-elevated)', borderColor: 'var(--color-border)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-accent-dim)', color: 'var(--color-accent)' }}
                >
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    {item.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                    {item.value}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
