import { motion } from 'framer-motion'
import PageTransition from '@/components/layout/PageTransition'
import ContactForm from '@/components/contact/ContactForm'
import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Lo-Zig', icon: Github, value: 'github.com/Lo-Zig' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-ziglioli/', icon: Linkedin, value: 'linkedin.com/in/lorenzo-ziglioli' },
  { label: 'E-mail', href: 'mailto:loziglioli@gmail.com', icon: Mail, value: 'loziglioli@gmail.com' },
]

export default function Contact() {
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
            className="font-display leading-none"
            style={{ fontSize: 'clamp(48px, 10vw, 120px)', color: 'var(--color-text-light)' }}
          >
            LET'S TALK.
          </motion.h1>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:px-16 py-14 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: 'var(--color-text-muted-dark)' }}
            >
              Estou aberto a novas oportunidades, freelances e colaborações. Se você tem um projeto em mente ou só quer bater um papo sobre tecnologia, minha caixa de entrada está sempre aberta.
            </p>

            <div className="space-y-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-4 py-4 border-b group transition-all"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div
                    className="w-10 h-10 border flex items-center justify-center shrink-0 transition-all"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted-dark)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--badge-yellow)'
                      e.currentTarget.style.color = 'var(--color-bg)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = 'var(--color-text-muted-dark)'
                    }}
                  >
                    <s.icon size={16} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: 'var(--color-text-muted-dark)' }}
                    >
                      {s.label}
                    </p>
                    <p
                      className="text-sm font-medium group-hover:text-white transition-colors"
                      style={{ color: 'var(--color-text-muted-dark)' }}
                    >
                      {s.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border p-8"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <h3
              className="font-display text-2xl mb-6"
              style={{ color: 'var(--color-text-light)' }}
            >
              SEND A MESSAGE
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
