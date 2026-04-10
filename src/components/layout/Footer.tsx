import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Lo-Zig', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lorenzo-ziglioli/', icon: Linkedin },
  { label: 'E-mail', href: 'mailto:loziglioli@gmail.com', icon: Mail },
]

const navLinks = [
  { label: 'Work', to: '/portfolio' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* ── CTA ── */}
      <section
        className="border-t px-6 md:px-12 lg:px-16 py-24"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-display leading-none mb-10"
            style={{ fontSize: 'clamp(48px, 12vw, 160px)', color: 'var(--color-text-light)' }}
          >
            GOT A<br />PROJECT?<br />
            <span style={{ color: 'var(--badge-yellow)', WebkitTextStroke: '0' }}>
              LET'S TALK.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <a
              href="mailto:loziglioli@gmail.com"
              className="text-sm font-medium border-b pb-0.5 transition-colors"
              style={{ color: 'var(--color-text-light)', borderColor: 'var(--color-text-light)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--badge-yellow)'
                e.currentTarget.style.borderColor = 'var(--badge-yellow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-light)'
                e.currentTarget.style.borderColor = 'var(--color-text-light)'
              }}
            >
              loziglioli@gmail.com
            </a>

            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border flex items-center justify-center transition-all"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-muted-dark)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--badge-yellow)'
                    e.currentTarget.style.borderColor = 'var(--badge-yellow)'
                    e.currentTarget.style.color = 'var(--color-bg)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.color = 'var(--color-text-muted-dark)'
                  }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Bottom bar ── */}
      <div
        className="border-t px-6 md:px-12 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <span
          className="font-display text-sm"
          style={{ color: 'var(--color-text-muted-dark)' }}
        >
          © {new Date().getFullYear()} LORENZO ZIGLIOLI
        </span>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to.startsWith('/#') ? '/' : link.to}
                className="text-xs uppercase tracking-widest transition-colors"
                style={{ color: 'var(--color-text-muted-dark)' }}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
