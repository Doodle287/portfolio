import { ArrowUp } from 'lucide-react'
import { profile, navItems } from '../../lib/data'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] py-10">
      <div className="container-edge flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-mono text-lg font-bold"
          >
            <span className="text-white/40">&lt;</span>
            <span className="text-gradient">{profile.initials}</span>
            <span className="text-white/40">/&gt;</span>
          </a>
          <p className="mt-2 text-sm text-white/40">
            © 2026 {profile.firstName} {profile.lastName}. Built with clean code &amp; care.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navItems.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="text-sm text-white/50 transition-colors hover:text-white">
              {it.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full glass text-white/70 transition-all duration-300 hover:-translate-y-1 hover:text-white"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  )
}
