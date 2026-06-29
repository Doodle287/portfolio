# Abdyjelil Tuvakov — Portfolio

A fast, animated personal portfolio for **Abdyjelil (Jelil) Tuvakov**, Senior Flutter Developer.
Dark, futuristic / AI-inspired aesthetic with smooth motion, a shared-element project
case-study modal, and all eight shipped apps with their real App Store / Google Play links.

**Stack:** Vite · React 18 · TypeScript · Tailwind CSS · Framer Motion · lucide-react

---

## Quick start

```bash
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

Other scripts:

- `npm run build` — type-check with `tsc`, then build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run typecheck` — type-check only

> Requires Node 18+ (Node 20 LTS recommended).
>
> Tip: paste each command on its own line. macOS's zsh does **not** treat `#`
> as a comment, so an inline `# note` after a command gets passed as an argument.

---

## Deploy to Vercel

This is a static Vite site — Vercel builds and hosts it with zero config.

**Option A — Git (recommended)**

1. Push this folder to a GitHub/GitLab repo.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects **Vite**. Defaults are already correct (and pinned in `vercel.json`):
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Deploy.** Every push to `main` redeploys automatically.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

To use a custom domain, add it under the project's **Settings → Domains**.

---

## Editing your content

All copy lives in one typed file — **no JSX needed** to update text:

```
src/lib/data.ts
```

There you can edit: profile/headline, stats, about, skills, the experience
timeline, contact links, and every project (descriptions, badges, tech stacks,
store links, gallery captions, features, and case-study text).

App screenshots live in `public/portfolio-assets/`. To swap one, replace the file
(keep the same name) or add a new one and reference it from `data.ts`.

The favicon is `public/favicon.svg` and the social-share image is `public/og.png`.

---

## Project structure

```
index.html                 # Vite entry + SEO / Open Graph meta
src/
  main.tsx                 # React bootstrap
  App.tsx                  # page composition
  index.css                # Tailwind + design tokens, glass / gradient utilities
  lib/
    data.ts                # ← all site content (edit here)
    hooks.ts               # useTilt, useMagnetic
  components/
    Background.tsx          # aurora blobs + grid + particle constellation
    Cursor.tsx              # pointer glow (desktop only)
    ScrollProgress.tsx      # top gradient progress bar
    Navbar.tsx              # glass nav with active section + mobile menu
    Reveal.tsx              # scroll-reveal wrapper
    MagneticButton.tsx
    ui/                     # SectionHeading, Counter, PhoneMockup, StoreButton
    sections/               # Hero, Marquee, About, Skills, Projects,
                            #   ProjectModal, Experience, Contact, Footer
public/
  portfolio-assets/        # app screenshots
  og.png, favicon.svg
legacy/
  index.html               # the previous single-file site, archived for reference
```

## Accessibility & performance

- Respects `prefers-reduced-motion` (animations, cursor, and particles disabled).
- Keyboard-navigable cards/modal, focus-visible rings, descriptive labels, Esc to close.
- Lazy-loaded gallery images; hardware-accelerated transform/opacity animations only.

---

© 2026 Abdyjelil Tuvakov.
