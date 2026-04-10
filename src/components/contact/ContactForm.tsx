import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import type { ContactFormData } from '@/types'

type Status = 'idle' | 'loading' | 'success' | 'error'

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL as string | undefined

const inputBase: React.CSSProperties = {
  backgroundColor: 'transparent',
  borderColor: 'var(--color-border)',
  color: 'var(--color-text-light)',
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = () => {
    const e: Partial<ContactFormData> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.subject.trim()) e.subject = 'Required'
    if (!form.message.trim()) e.message = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      if (FORMSPREE_URL) {
        const res = await fetch(FORMSPREE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error()
      } else {
        window.location.href = `mailto:loziglioli@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.message)}`
      }
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name as keyof ContactFormData]) setErrors((p) => ({ ...p, [name]: undefined }))
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-16 gap-4 text-center"
      >
        <CheckCircle size={40} style={{ color: 'var(--badge-green)' }} />
        <p className="font-display text-2xl" style={{ color: 'var(--color-text-light)' }}>
          MESSAGE SENT!
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-xs uppercase tracking-widest mt-2 border-b pb-0.5"
          style={{ color: 'var(--color-text-muted-dark)', borderColor: 'var(--color-border)' }}
        >
          Send another
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" type="text" placeholder="Your name" value={form.name} error={errors.name} onChange={handleChange} style={inputBase} />
        <Field label="Email" name="email" type="email" placeholder="your@email.com" value={form.email} error={errors.email} onChange={handleChange} style={inputBase} />
      </div>
      <Field label="Subject" name="subject" type="text" placeholder="What's this about?" value={form.subject} error={errors.subject} onChange={handleChange} style={inputBase} />

      {/* Message */}
      <div>
        <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-text-muted-dark)' }}>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Hello, I'd like to talk about..."
          rows={5}
          className="w-full border px-4 py-3 text-sm resize-none outline-none transition-all duration-200"
          style={inputBase}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--badge-yellow)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
        />
        <AnimatePresence>{errors.message && <ErrMsg msg={errors.message} />}</AnimatePresence>
      </div>

      {status === 'error' && (
        <p className="text-xs" style={{ color: '#f87171' }}>Something went wrong. Try again or send an email directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium uppercase tracking-widest transition-all disabled:opacity-50 cursor-pointer border"
        style={{ backgroundColor: 'var(--color-text-light)', color: 'var(--color-bg)', borderColor: 'var(--color-text-light)' }}
        onMouseEnter={(e) => {
          if (status !== 'loading') {
            e.currentTarget.style.backgroundColor = 'var(--badge-yellow)'
            e.currentTarget.style.borderColor = 'var(--badge-yellow)'
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-text-light)'
          e.currentTarget.style.borderColor = 'var(--color-text-light)'
        }}
      >
        {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send message</>}
      </button>
    </form>
  )
}

function Field({ label, name, type, placeholder, value, error, onChange, style }: {
  label: string; name: string; type: string; placeholder: string; value: string; error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; style: React.CSSProperties
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-text-muted-dark)' }}>{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        className="w-full border px-4 py-3 text-sm outline-none transition-all duration-200"
        style={style}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--badge-yellow)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
      />
      <AnimatePresence>{error && <ErrMsg msg={error} />}</AnimatePresence>
    </div>
  )
}

function ErrMsg({ msg }: { msg: string }) {
  return (
    <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-xs mt-1" style={{ color: '#f87171' }}>
      {msg}
    </motion.p>
  )
}
