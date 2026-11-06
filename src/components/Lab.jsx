import { ResponsiveContainer, BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { Section, Tilt } from './ui.jsx'

// DEMO DATA ONLY: generated sample values, not from real projects.
const bars = ['Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => ({ q, v: [40, 65, 52, 88][i] }))
const line = Array.from({ length: 12 }, (_, i) => ({ m: i + 1, v: Math.round(30 + i * 4 + Math.sin(i) * 9) }))
const scatter = Array.from({ length: 40 }, (_, i) => ({ x: i, y: Math.round(i * 1.4 + Math.sin(i * 7) * 12 + 10) }))
const ml = ['Collect data', 'Clean & transform', 'Explore (EDA)', 'Train model', 'Evaluate', 'Deploy']
const clean = ['Remove duplicates', 'Handle missing values', 'Fix data types', 'Detect outliers', 'Normalize']
const axis = { stroke: '#6b7280', fontSize: 12 }

function Chart({ title, children }) {
  return <Tilt className="p-5"><h3 className="mb-3 font-bold">{title}</h3><div className="h-52" style={{ transform: 'translateZ(30px)' }}><ResponsiveContainer>{children}</ResponsiveContainer></div></Tilt>
}
function Flow({ title, steps }) {
  return <div className="glass rounded-2xl p-5"><h3 className="mb-3 font-bold">{title}</h3><ol className="flex flex-wrap gap-2">{steps.map((s, i) => <li key={s} className="rounded-full border border-neon/30 px-3 py-1 text-sm"><span className="text-neon">{i + 1}.</span> {s}</li>)}</ol></div>
}

export default function Lab() {
  return (
    <Section id="lab" kicker="04 — Analytics Lab" title="Data science showcase">
      <p className="mb-6 rounded-lg border border-violet/40 bg-violet/10 p-3 text-sm text-white/70">All charts below use generated sample data for demonstration only. They are not results from my projects.</p>
      <div className="grid gap-6 lg:grid-cols-3">
        <Chart title="Bar chart (demo)"><BarChart data={bars}><CartesianGrid stroke="#ffffff10" /><XAxis dataKey="q" {...axis} /><YAxis {...axis} /><Tooltip contentStyle={{ background: '#11131A', border: '1px solid #8B5CF6' }} /><Bar dataKey="v" fill="#8B5CF6" radius={[6, 6, 0, 0]} /></BarChart></Chart>
        <Chart title="Line chart (demo)"><LineChart data={line}><CartesianGrid stroke="#ffffff10" /><XAxis dataKey="m" {...axis} /><YAxis {...axis} /><Tooltip contentStyle={{ background: '#11131A', border: '1px solid #22D3EE' }} /><Line dataKey="v" stroke="#22D3EE" strokeWidth={2} dot={false} /></LineChart></Chart>
        <Chart title="Scatter plot (demo)"><ScatterChart><CartesianGrid stroke="#ffffff10" /><XAxis dataKey="x" type="number" {...axis} /><YAxis dataKey="y" type="number" {...axis} /><Tooltip contentStyle={{ background: '#11131A', border: '1px solid #8B5CF6' }} /><Scatter data={scatter} fill="#22D3EE" /></ScatterChart></Chart>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Flow title="Machine learning workflow" steps={ml} />
        <Flow title="Data cleaning workflow" steps={clean} />
      </div>
      <pre className="glass mt-6 overflow-x-auto rounded-2xl p-5 text-sm text-neon"><code>{`import pandas as pd\ndf = pd.read_csv("data.csv").drop_duplicates().dropna()\nSELECT category, SUM(sales) FROM orders GROUP BY category;`}</code></pre>
    </Section>
  )
}
