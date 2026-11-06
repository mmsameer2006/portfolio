import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from './data/profile.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import { Cursor, ScrollProgress, BackToTop } from './components/ui.jsx'
import { About, Skills, Projects, Experience, Education, Certifications, Resume, Contact } from './components/Sections.jsx'
const Lab = lazy(() => import('./components/Lab.jsx'))

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1300); return () => clearTimeout(t) }, [])
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div key="load" exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg">
            <div className="grad-text font-display text-4xl font-bold">MS</div>
            <div className="mt-4 h-1 w-40 overflow-hidden rounded bg-white/10"><motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ duration: 1.1 }} className="h-full bg-gradient-to-r from-violet to-neon" /></div>
          </motion.div>
        )}
      </AnimatePresence>
      <Cursor /><ScrollProgress /><Nav />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ duration: 0.8 }}>
        <Hero /><About /><Skills /><Projects />
        <Suspense fallback={<div id="lab" className="h-40" />}><Lab /></Suspense>
        <Experience /><Education /><Certifications /><Resume /><Contact />
      </motion.main>
      <footer className="py-10 text-center text-sm text-white/50">
        <p className="mb-2"><a className="text-neon hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a className="text-neon hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
        © {new Date().getFullYear()} Mohamed Sameer M
      </footer>
      <BackToTop />
    </>
  )
}
