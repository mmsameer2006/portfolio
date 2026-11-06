import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = ['About', 'Skills', 'Projects', 'Lab', 'Experience', 'Education', 'Certifications', 'Resume', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav aria-label="Main" className="fixed left-1/2 top-4 z-50 w-[92%] max-w-5xl -translate-x-1/2">
      <div className="glass flex items-center justify-between rounded-full px-5 py-3">
        <a href="#home" className="font-display font-bold grad-text">MS</a>
        <ul className="hidden gap-5 text-sm text-white/70 lg:flex">
          {links.map((l) => <li key={l}><a className="hover:text-neon" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul>
        <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <ul className="glass mt-2 grid gap-1 rounded-2xl p-3 lg:hidden">
          {links.map((l) => <li key={l}><a onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-white/5" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul>
      )}
    </nav>
  )
}
