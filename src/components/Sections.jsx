import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Download, Code2, Database, BarChart3, Brain, Briefcase, GraduationCap, Award } from 'lucide-react'
import { Section, Tilt, Magnetic } from './ui.jsx'
import { profile, skillGroups, projects, experience, education, certificates } from '../data/profile.js'

export function About() {
  return (
    <Section id="about" kicker="01 — About" title="Who I am">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <p className="text-lg leading-relaxed text-white/75">{profile.about}</p>
        <div className="flex justify-center gap-4" aria-hidden>
          {[Brain, Database, BarChart3].map((I, i) => (
            <motion.div key={i} animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 3 + i, ease: 'easeInOut' }} className="glass rounded-2xl p-6 text-neon"><I size={40} /></motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

const groupIcon = { Programming: Code2, 'Data Analysis': Database, Visualization: BarChart3, 'Machine Learning': Brain }
export function Skills() {
  return (
    <Section id="skills" kicker="02 — Skills" title="Toolkit">
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skillGroups).map(([g, items]) => {
          const Icon = groupIcon[g] || Code2 || Code2
          return (
            <Tilt key={g} className="p-6">
              <div className="flex items-center gap-3 text-neon" style={{ transform: 'translateZ(40px)' }}><Icon /><h3 className="text-xl font-bold text-white">{g}</h3></div>
              <ul className="mt-4 flex flex-wrap gap-2" style={{ transform: 'translateZ(25px)' }}>
                {items.map((s) => <li key={s} className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-sm">{s}</li>)}
              </ul>
            </Tilt>
          )
        })}
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" kicker="03 — Projects" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const url = p.repo ? `${profile.github}/${p.repo}` : null
          return (
            <Tilt key={p.title} className="overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-violet/40 via-panel to-neon/30">
                {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center font-display text-2xl text-white/40">{p.title}</div>}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.overview}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-neon/10 px-3 py-1 text-xs text-neon">{t}</li>)}</ul>
                <div className="mt-5 flex gap-3">
                     {url && <a href={url} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20"><Github size={16} /> Source code</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-neon px-4 py-2 text-sm text-bg"><ExternalLink size={16} /> Live demo</a>}
                </div>
              </div>
            </Tilt>
          )
        })}
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" kicker="05 — Experience" title="Internships">
      <div className="space-y-6 border-l border-violet/50 pl-8">
        {experience.map((n) => (
          <div key={n.role + n.org} className="relative">
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-neon shadow-[0_0_20px_#22D3EE]" />
            <Tilt className="p-6">
              <div className="flex flex-wrap items-center gap-3 text-neon"><Briefcase /><span className="rounded-full border border-neon/40 px-3 py-1 text-xs">{n.status}</span></div>
              <h3 className="mt-3 text-2xl font-bold">{n.role}</h3>
              <p className="text-white/60">{n.org}{n.where ? ` · ${n.where}` : ''}{n.period ? ` · ${n.period}` : ''}</p>
              {n.points.length > 0 && <ul className="mt-4 list-disc pl-5 text-white/75">{n.points.map((f) => <li key={f}>{f}</li>)}</ul>}
            </Tilt>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" kicker="06 — Education" title="Learning path">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div key={e.title} initial={{ opacity: 0, x: i ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass glow rounded-2xl p-6">
            <GraduationCap className="text-neon" /><h3 className="mt-3 text-xl font-bold">{e.title}</h3>{e.note && <p className="text-sm text-neon">{e.note}</p>}<p className="text-white/60">{e.place}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Certifications() {
  const list = certificates.length ? certificates : [{ title: 'Your certificate here', issuer: 'Add it in src/data/profile.js', placeholder: true }]
  return (
    <Section id="certifications" kicker="07 — Certifications" title="Certificates">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <Tilt key={c.title} className={`p-6 ${c.placeholder ? 'border-dashed' : ''}`}>
            {c.image ? <img src={c.image} alt={c.title} loading="lazy" className="mb-4 rounded-lg" /> : <Award className="mb-3 text-neon" />}
            <h3 className="font-bold">{c.title}</h3><p className="text-sm text-white/60">{c.issuer}</p>
            {c.link && <a href={c.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-neon">Verify ↗</a>}
          </Tilt>
        ))}
      </div>
    </Section>
  )
}

export function Resume() {
  return (
    <Section id="resume" kicker="08 — Resume" title="Resume">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <div className="glass rounded-2xl p-6">
          <p className="text-white/70">Replace <code className="text-neon">public/resume.pdf</code> with your own PDF; the preview and download update automatically.</p>
          <Magnetic href={profile.resume} download="Mohamed_Sameer_M_Resume.pdf" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-neon px-6 py-3 font-semibold text-bg"><Download size={18} /> Download Resume</Magnetic>
        </div>
        <iframe title="Resume preview" src={profile.resume} loading="lazy" className="glass h-[480px] w-full rounded-2xl" />
      </div>
    </Section>
  )
}

export function Contact() {
  const [state, setState] = useState('idle')
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT
  const submit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (!endpoint) { window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio message from ' + data.name)}&body=${encodeURIComponent(data.message + '\n\n' + data.email)}`; return }
    setState('sending')
    try {
      const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      setState(r.ok ? 'sent' : 'error'); if (r.ok) e.target.reset()
    } catch { setState('error') }
  }
  return (
    <Section id="contact" kicker="09 — Contact" title="Let’s connect">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {[[Mail, profile.email, `mailto:${profile.email}`], [Github, 'GitHub', profile.github], [Linkedin, 'LinkedIn', profile.linkedin]].map(([I, label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="glass glow flex items-center gap-4 rounded-2xl p-4"><I className="text-neon" />{label}</a>
          ))}
        </div>
        <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-6">
          <label className="block text-sm">Name<input name="name" required /></label>
          <label className="block text-sm">Email<input name="email" type="email" required /></label>
          <label className="block text-sm">Message<textarea name="message" rows="4" required /></label>
          <button className="rounded-full bg-gradient-to-r from-violet to-neon px-6 py-3 font-semibold text-bg" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send message'}</button>
          {state === 'sent' && <p className="text-neon" role="status">Thanks! Message sent.</p>}
          {state === 'error' && <p className="text-red-400" role="alert">Something went wrong. Please email me directly.</p>}
        </form>
      </div>
    </Section>
  )
}
