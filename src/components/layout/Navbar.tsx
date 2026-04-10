import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname])

  const handleAnchor = (to: string) => {
    if (to.startsWith('/#')) {
      const id = to.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--color-bg)' }}>
      <nav
        className="flex items-center justify-between px-6 md:px-12 lg:px-16 h-16 border-b"
        style={{ borderColor: 'var(--color-border)' }}
      >
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 flex items-center justify-center font-display text-sm font-bold"
              style={{ backgroundColor: 'var(--color-text-light)', color: 'var(--color-bg)' }}
            >
              LZ
            </div>
            <span
              className="hidden sm:block text-xs font-medium leading-tight"
              style={{ color: 'var(--color-text-muted-dark)' }}
            >
              Lorenzo<br />Ziglioli
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.to}>
              {link.to.startsWith('/#') ? (
                <button
                  onClick={() => handleAnchor(link.to)}
                  className="text-sm font-medium transition-colors cursor-pointer"
                  style={{ color: 'var(--color-text-muted-dark)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted-dark)')}
                >
                  {link.label}
                </button>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${isActive ? '' : ''}`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-text-light)' : 'var(--color-text-muted-dark)',
                  })}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 cursor-pointer"
          style={{ color: 'var(--color-text-light)' }}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to.startsWith('/#') ? '/' : link.to}
                    onClick={() => link.to.startsWith('/#') && handleAnchor(link.to)}
                    className="block py-3 text-xl font-display"
                    style={{ color: 'var(--color-text-light)' }}
                  >
                    {link.label.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
