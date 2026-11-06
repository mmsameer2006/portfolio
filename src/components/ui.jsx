import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useScroll } from 'framer-motion'

export function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-24 scroll-mt-16">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
        <p className="text-neon text-sm tracking-[0.3em] uppercase">{kicker}</p>
        <h2 className="mt-2 mb-10 text-3xl md:text-5xl font-bold">{title}</h2>
        {children}
      </motion.div>
    </section>
  )
}

// Perspective tilt wrapper (pure CSS 3D, cheap on mobile)
export function Tilt({ children, className = '' }) {
  const ref = useRef(null)
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 })
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 16)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 16)
  }
  const leave = () => { rx.set(0); ry.set(0) }
  return (
    <div style={{ perspective: 900 }}>
      <motion.div ref={ref} onMouseMove={move} onMouseLeave={leave} style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }} className={`glass glow rounded-2xl transition-colors ${className}`}>
        {children}
      </motion.div>
    </div>
  )
}

export function Magnetic({ as = 'a', className = '', children, ...rest }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })
  const Comp = motion[as]
  return (
    <Comp ref={ref} style={{ x, y }} {...rest} className={className}
      onMouseMove={(e) => { const r = ref.current.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.25) }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </Comp>
  )
}

export function Cursor() {
  const x = useSpring(useMotionValue(-100), { stiffness: 500, damping: 40 })
  const y = useSpring(useMotionValue(-100), { stiffness: 500, damping: 40 })
  useEffect(() => {
    const m = (e) => { x.set(e.clientX - 10); y.set(e.clientY - 10) }
    window.addEventListener('mousemove', m)
    return () => window.removeEventListener('mousemove', m)
  }, [x, y])
  return <motion.div aria-hidden style={{ x, y }} className="cursor pointer-events-none fixed z-[100] h-5 w-5 rounded-full border border-neon bg-neon/20 shadow-[0_0_20px_#22D3EE]" />
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return <motion.div style={{ scaleX: scrollYProgress }} className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-violet to-neon" />
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  if (!show) return null
  return <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 rounded-full glass glow px-4 py-3 text-neon">↑</button>
}
