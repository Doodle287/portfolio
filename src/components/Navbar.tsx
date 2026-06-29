import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems, profile } from '../lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const pos = window.scrollY + 130
      let cur = ''
      for (const it of navItems) {
        const el = document.getElementById(it.id)
        if (el && el.offsetTop <= pos) cur = it.id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`container-edge flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg' : ''
        }`}
      >
        <a
          href="#"
          onClick={toTop}
          className="font-mono text-lg font-bold tracking-tight text-white"
          aria-label="Back to top"
        >
          <span className="text-white/40">&lt;</span>
          <span className="text-gradient">{profile.initials}</span>
          <span className="text-white/40">/&gt;</span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                  active === it.id ? 'text-white' : 'text-white/55 hover:text-white'
                }`}
              >
                {active === it.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.07]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {it.label}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-gradient-to-r from-brand-500 to-iris-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform duration-200 hover:scale-[1.04]"
          >
            Let's talk
          </a>
        </ul>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full glass md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="relative h-4 w-5">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-5 rounded bg-white"
              animate={open ? { rotate: 45, top: 7 } : { rotate: 0, top: 0 }}
            />
            <motion.span
              className="absolute left-0 top-[7px] h-0.5 w-5 rounded bg-white"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="absolute left-0 bottom-0 h-0.5 w-5 rounded bg-white"
              animate={open ? { rotate: -45, bottom: 7 } : { rotate: 0, bottom: 0 }}
            />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container-edge mt-2 md:hidden"
          >
            <ul className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
              {navItems.map((it) => (
                <li key={it.id}>
                  <a
                    href={`#${it.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base ${
                      active === it.id ? 'bg-white/[0.07] text-white' : 'text-white/70'
                    }`}
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
