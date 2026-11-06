# Mohamed Sameer M – 3D Data Science Portfolio

React + Vite + Tailwind + Three.js (React Three Fiber, Drei) + Framer Motion + Recharts.

## Run locally (VS Code)
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit your content
Everything lives in `src/data/profile.js`: email, about text, skills, projects, internship, education, certificates.
- **Email:** replace `your.email@example.com`.
- **Resume:** overwrite `public/resume.pdf` (same filename).
- **Project screenshots:** put images in `public/projects/` and add `image: '/projects/name.png'` to the project.
- **Live demo buttons:** add `demo: 'https://...'` to a project.
- **Certificates:** add real entries to `certificates` (images in `public/certs/`). The list is empty until you do.

## Contact form
Without setup it opens your mail app (mailto). For real submissions: create a free form at formspree.io, copy `.env.example` to `.env`, and set `VITE_FORM_ENDPOINT`. On Vercel add the same variable under Project Settings → Environment Variables.

## Upload to GitHub
```bash
git init && git add . && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/mmsameer2006/portfolio.git
git push -u origin main
```

## Deploy to Vercel
Import the GitHub repo at vercel.com/new. Vite is auto-detected (build `npm run build`, output `dist`). Click Deploy.

## Performance notes
Phones and low-core devices get fewer 3D nodes and capped pixel ratio; `prefers-reduced-motion` stops 3D motion and CSS animation. The 3D scene and charts are lazy-loaded.
