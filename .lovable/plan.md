
## Build plan — Zulqarnain Haider portfolio (Midnight Tech direction)

Single-page portfolio built on the selected prototype. Deep navy dark theme with blue→purple gradient accents, glass navbar, and full light-mode support.

### Structure

One route (`src/routes/index.tsx`) with anchor-scroll sections composed from small components in `src/components/portfolio/`:

```text
Navbar (sticky, glass)
Hero
About
Education
Skills
Projects
Certifications
SoftSkills
Interests
Contact
Footer
```

Root route `__root.tsx` gets real head metadata (title "Zulqarnain Haider — Full-Stack Developer", description, og, twitter).

### Design tokens

Update `src/styles.css`:
- Add brand + accent tokens: `--brand-500 #3b82f6`, `--brand-600 #2563eb`, `--accent-500 #8b5cf6`, `--dark-bg #030712`, `--dark-surface #0f172a`, `--dark-border #1e293b` — mapped in `@theme inline` so `bg-brand-500`, `text-accent-500`, `border-dark-border` etc. resolve.
- Keep shadcn semantic tokens; refine dark values to match navy palette.
- Add keyframes/utilities: `float`, `fade-in`, `fade-in-up`, `glow-pulse`.

Fonts: load Inter (body) + JetBrains Mono (mono) via `<link>` in `__root.tsx` head (per project rule — no CSS @import). Register in `@theme` as `--font-sans` / `--font-mono`.

### Theme toggle

Simple class-based dark mode:
- `ThemeProvider` in `src/components/portfolio/theme-provider.tsx`: reads `localStorage.theme` (default `dark`), toggles `document.documentElement.classList` for `dark`.
- `ThemeToggle` button in the navbar with sun/moon lucide icons.
- Custom variant `@custom-variant dark (&:is(.dark *))` already present.

### Content sections (all copy from the user's brief)

- **Hero**: badge "Available for hire", H1 with gradient span on name, subtitle, description, two CTAs (View Projects → `#projects`, Contact Me → `#contact`), floating illustration card + floating "Top CS Student" badge. Animated blue/purple blur blobs in background.
- **About**: intro paragraph + 4 capability cards (Full-Stack, Problem Solving, Software Design, AI Applications) with lucide icons (`Code2`, `Brain`, `Layers`, `Bot`).
- **Education**: single elegant card for Sahara College Narowal / BSCS / 2022–2026 + animated chip grid for 8 coursework items.
- **Skills**: 5 category cards (Frontend, Backend, Database, Programming, Tools) with badge chips per the user's lists. Hover glow on badges.
- **Projects**: 2-col grid of 4 project cards (CarHub, Student Mgmt, Library Mgmt, Weather App). Each: generated thumbnail, title, description, features list, tech badges, Live Demo + GitHub buttons (placeholder `#`), hover lift.
- **Certifications**: 4 cards with lucide icons.
- **Soft Skills**: animated chips (Problem Solving, Teamwork, Communication, Time Management).
- **Interests**: 4 icon cards.
- **Contact**: Name/Email/Message form (client-only, `toast.success` on submit — no backend), plus GitHub / LinkedIn / Email link row.
- **Footer**: copyright + GitHub/LinkedIn/Email icon buttons.

### Images

Generate 5 assets via `imagegen` (saved under `src/assets/`) and import as ES6:
- `hero-developer.jpg` — abstract developer/code visualization
- `project-carhub.jpg` — car parts e-commerce dashboard
- `project-students.jpg` — student records dashboard
- `project-library.jpg` — library management dashboard
- `project-weather.jpg` — weather forecast app UI

### Animations

- `animate-fade-in-up` on hero text (staggered via delay classes)
- `animate-float` on hero image
- Section reveal on scroll via a tiny `useInView` hook (IntersectionObserver) adding `animate-fade-in-up`
- Hover: card lift (`hover:-translate-y-1/-2`), badge glow (`hover:shadow-brand-500/40`)
- Smooth scroll: `html { scroll-behavior: smooth }` in styles.css

### Files to create / edit

Edit: `src/styles.css`, `src/routes/__root.tsx`, `src/routes/index.tsx`

Create:
- `src/components/portfolio/theme-provider.tsx`
- `src/components/portfolio/theme-toggle.tsx`
- `src/components/portfolio/navbar.tsx`
- `src/components/portfolio/hero.tsx`
- `src/components/portfolio/about.tsx`
- `src/components/portfolio/education.tsx`
- `src/components/portfolio/skills.tsx`
- `src/components/portfolio/projects.tsx`
- `src/components/portfolio/certifications.tsx`
- `src/components/portfolio/soft-skills.tsx`
- `src/components/portfolio/interests.tsx`
- `src/components/portfolio/contact.tsx`
- `src/components/portfolio/footer.tsx`
- `src/hooks/use-in-view.ts`
- `src/assets/hero-developer.jpg` + 4 project thumbnails (generated)

### Out of scope

No backend, no auth, no DB, no email delivery. Contact form is a UI-only demo with toast confirmation. Links to GitHub / LinkedIn / Email use `#` placeholders — the user can swap in real URLs later.
