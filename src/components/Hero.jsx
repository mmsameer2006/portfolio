import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ChevronDown } from 'lucide-react'
import { Magnetic } from './ui.jsx'
import { profile } from '../data/profile.js'
const Scene = lazy(() => import('./Scene.jsx'))

export default function Hero() {
  return (
    <header id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 opacity-70 md:opacity-100" aria-hidden><Suspense fallback={null}><Scene /></Suspense></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,246,.18),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-20">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-neon tracking-[0.3em] text-xs md:text-sm">AI &amp; DATA SCIENCE ENTHUSIAST</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="grad-text mt-4 text-5xl font-bold uppercase leading-[1.05] md:text-8xl">Mohamed<br />Sameer M</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 max-w-md text-lg italic text-white/70">“{profile.tagline}”</motion.p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Magnetic href="#projects" className="rounded-full bg-gradient-to-r from-violet to-neon px-7 py-3 font-semibold text-bg">Explore My Work</Magnetic>
          <Magnetic href={profile.resume} download className="glass glow rounded-full px-7 py-3 font-semibold">Download Resume</Magnetic>
        </div>
        <div className="mt-8 flex gap-4">
          <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="glass glow rounded-full p-3"><Github size={20} /></a>
          <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="glass glow rounded-full p-3"><Linkedin size={20} /></a>
        </div>
      </div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-neon"><ChevronDown /></a>
    </header>
  )
}
