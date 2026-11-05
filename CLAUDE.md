# CLAUDE.md — Portfolio Next.js

## Project Overview

Personal portfolio website for **Alipasha Askerov** (Full-Stack Developer), built with **Next.js 16**, **React 19**, **TypeScript**, and **SCSS**. Uses the Next.js App Router with server-side data fetching. Deployed at [alipashaskerov.vercel.app](https://alipashaskerov.vercel.app/).

---

## Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Framework  | Next.js 16.1.3 (App Router, Turbopack)          |
| UI         | React 19.1.0                                    |
| Language   | TypeScript 5 (strict mode)                      |
| Styling    | SCSS (Sass 1.93.2) — no CSS modules, global BEM |
| Email      | emailjs-com 3.2.0                               |
| Hooks lib  | usehooks-ts 3.1.1                               |
| Icons      | Font Awesome 7 (CDN in layout)                  |
| Fonts      | Google Fonts — Montserrat, Fira Code (CDN)      |
| Build      | Turbopack (both dev and build)                  |
| Deploy     | Vercel                                          |

---

## Commands

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build (Turbopack)
npm start         # Start production server
npm run lint      # Run ESLint
```

---

## Directory Structure

```
portfolio-next/
├── app/                        # Next.js App Router
│   ├── api/
│   │   ├── information/route.ts
│   │   ├── menu/route.ts
│   │   ├── projects/route.ts
│   │   └── skills/route.ts
│   ├── projects/page.tsx       # /projects page
│   ├── layout.tsx              # Root layout (metadata, fonts, CDN scripts)
│   ├── page.tsx                # Home page (/)
│   └── not-found.tsx           # 404 page
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Counter.tsx         # Scroll-triggered animated counter
│   │   ├── Cursor.tsx          # Custom cursor with hover effects
│   │   ├── Logo.tsx            # Letter-by-letter animated logo
│   │   ├── Preloader.tsx       # Page preloader with percentage
│   │   ├── ScrollBtn.tsx       # Scroll-to-top button
│   │   └── SocialIcons.tsx     # Social media icon links
│   ├── data/                   # Static data (source of truth for APIs)
│   │   ├── Information.ts      # Personal info, experience, education, services
│   │   ├── Menu.ts             # Navigation menu items
│   │   ├── Projects.ts         # 40+ projects portfolio data
│   │   ├── Skills.ts           # 20 technical skills with logos/colors
│   │   └── index.ts            # Re-exports all data
│   ├── hooks/
│   │   ├── useApi.ts           # Fetch wrappers for all 4 API endpoints
│   │   ├── useScrollTo.ts      # Smooth scroll + hash URL update
│   │   └── useTheme.ts         # Dark/light theme toggle (localStorage)
│   ├── layout/
│   │   ├── DefaultLayout.tsx   # Wraps Preloader + Header + children + Footer
│   │   ├── HomeLayout.tsx      # Layout for home page
│   │   └── ProjectsLayout.tsx  # Layout for /projects page
│   ├── partials/
│   │   ├── Header.tsx          # Nav with mobile drawer, theme toggle, version switcher
│   │   └── Footer.tsx          # Footer component
│   ├── scss/
│   │   ├── styles.scss         # Entry point — imports all partials
│   │   ├── _variables.scss     # Theme colors, fonts, opacity variants, keyframes
│   │   ├── _global.scss        # CSS reset, base elements, scrollbar theming
│   │   └── _utils.scss         # Breakpoints, container, flex mixin, display utils
│   ├── sections/               # Page sections (mapped 1:1 to menu items)
│   │   ├── About.tsx           # Bio, photo, counters, CV download
│   │   ├── Banner.tsx          # Hero with animated text
│   │   ├── Contact.tsx         # EmailJS contact form
│   │   ├── Education.tsx       # Academic background
│   │   ├── Experience.tsx      # Work history with responsibilities
│   │   ├── ProjectsGrid.tsx    # Filterable projects grid
│   │   ├── Services.tsx        # Service offerings
│   │   └── Skills.tsx          # Tech skills with logos
│   └── types/
│       └── index.ts            # All TypeScript types
├── public/
│   ├── design/                 # Framework logos (Next, Angular, Vue)
│   ├── personal/               # Author photo + CV PDF
│   ├── projects/               # Project screenshot images (47 images)
│   └── skills/                 # Technology skill logo images
├── .env                        # BASE_URL=http://localhost:3000/
├── next.config.ts
└── tsconfig.json
```

---

## Architecture Decisions

### Data Flow
All data lives in `src/data/`. The API routes in `app/api/` simply re-export this data as JSON. The pages (`app/page.tsx`, `app/projects/page.tsx`) fetch from these APIs at request time using `src/hooks/useApi.ts`. This means:
- **To update portfolio content** — edit files in `src/data/`, never in API routes directly.
- **API routes are thin wrappers** — they just `import` and `return NextResponse.json(data)`.

### Styling
- All styles are in `src/scss/`. There are **no CSS modules** — all styles are global BEM-style.
- The SCSS entry point is `src/scss/styles.scss`, imported in `app/layout.tsx`.
- Breakpoints defined in `_utils.scss`: `xs(480px)`, `sm(576px)`, `md(768px)`, `lg(992px)`, `xl(1200px)`, `xxl(1400px)`.
- Theme is managed via CSS `light-dark()` function + `:root` class toggling (`.dark` / `.light`).
- `_variables.scss` holds all design tokens: colors, opacity variants, font families, keyframe animations.

### Theme System
- `src/hooks/useTheme.ts` uses `useColorScheme` from `usehooks-ts`.
- Adds `dark` or `light` class to `document.documentElement`.
- Persists to `localStorage` automatically via `usehooks-ts`.

### Navigation & Scrolling
- `src/hooks/useScrollTo.ts` handles smooth scroll to section IDs.
- When on `/projects` page, clicking a nav link routes to `/#sectionId` then scrolls.
- Uses `history.replaceState` to update URL hash without re-render.
- 50ms delay applied after route change before scrolling.

### Mobile Menu (Header.tsx)
- Drawer with two states: half-screen and full-screen.
- Drag detection via `touchstart`/`touchend` events.
- Locks body scroll when menu is open.
- Auto-closes on navigation or click-outside.
- Version switcher (Next.js / Angular / Vue) shown in mobile footer.

### Preloader
- Shows animated percentage counter on page load and route changes.
- Prevents body scroll during loading.
- Reveals logo animation at 100%.
- 1.5 second completion animation before hiding.

### Contact Form
- Uses **EmailJS** (`emailjs-com`) with embedded service/template/user IDs.
- Validates name, email format, and message fields before submit.
- Shows loading state during submission, success message after.

---

## TypeScript Types (`src/types/index.ts`)

```typescript
PersonalInformationDataType  // All personal info, social links, experience[], education[], services[]
MenuDataType                 // { id, name }
ProjectDataType              // { title, image, category, previewLink, githubLink, skills[] }
SkillDataType                // { id, title, logo, color }
```

---

## Environment Variables

```bash
BASE_URL=http://localhost:3000/   # Used in useApi.ts for API fetches
```

In production (Vercel), set `BASE_URL` to the deployed URL.

---

## Important Patterns

### Adding a New Project
Edit `src/data/Projects.ts` and add an entry to the `projects` array:
```typescript
{
    title: "Project Name",
    image: "/projects/filename.png",   // place image in public/projects/
    category: 1 | 2 | 3,              // 1=fullstack, 2=frontend, 3=backend
    previewLink: "https://...",
    githubLink: "https://github.com/...",
    skills: ["React", "TypeScript"]
}
```

### Adding a New Skill
Edit `src/data/Skills.ts`:
```typescript
{ id: 21, title: "TechName", logo: "/skills/logo.svg", color: "#HEXCOLOR" }
```

### Adding a New Experience Entry
Edit `src/data/Information.ts` inside the `experience` array:
```typescript
{
    id: 5,
    position: "Role",
    company: "Company",
    location: "City, Country",
    start: "Jan 2025",
    end: "Present",
    description: "Short description",
    responsibilities: ["Responsibility 1", "Responsibility 2"]
}
```

### Adding a New SCSS Variable
Add to `src/scss/_variables.scss`. Follow existing naming — dark/light pairs are defined with CSS `light-dark()`.

### Adding a New Section
1. Create `src/sections/NewSection.tsx`
2. Add menu entry in `src/data/Menu.ts` with the section `id`
3. Add `<section id="sectionId">` to `app/page.tsx` or `src/layout/HomeLayout.tsx`
4. Style in `src/scss/styles.scss`

---

## API Endpoints

| Endpoint             | Method | Returns                        |
|----------------------|--------|--------------------------------|
| `/api/information`   | GET    | `PersonalInformationDataType`  |
| `/api/menu`          | GET    | `MenuDataType[]`               |
| `/api/projects`      | GET    | `ProjectDataType[]`            |
| `/api/skills`        | GET    | `SkillDataType[]`              |

---

## Key Files Quick Reference

| Task                          | File                               |
|-------------------------------|------------------------------------|
| Personal info / bio           | `src/data/Information.ts`          |
| Projects list                 | `src/data/Projects.ts`             |
| Skills list                   | `src/data/Skills.ts`               |
| Navigation items              | `src/data/Menu.ts`                 |
| Global styles entry           | `src/scss/styles.scss`             |
| Design tokens (colors, fonts) | `src/scss/_variables.scss`         |
| Responsive mixins             | `src/scss/_utils.scss`             |
| Root HTML structure           | `app/layout.tsx`                   |
| Home page composition         | `app/page.tsx`                     |
| Header + mobile menu          | `src/partials/Header.tsx`          |
| Contact form (EmailJS)        | `src/sections/Contact.tsx`         |
| Theme hook                    | `src/hooks/useTheme.ts`            |
| Scroll navigation             | `src/hooks/useScrollTo.ts`         |

---

## Known Constraints

- **No animation library** — all animations are pure CSS keyframes and JS `requestAnimationFrame`.
- **No state management** — React local state only (`useState`, `useRef`).
- **No database** — all data is static TypeScript files in `src/data/`.
- **EmailJS credentials** are hardcoded in `src/sections/Contact.tsx` — do not expose new secrets in client components.
- **Path alias** `@/*` resolves to the project root (not `src/`) per `tsconfig.json` — use `@/src/...` or `@/app/...`.
- **Turbopack** is used for both dev and build — avoid webpack-only plugins/configs.
- **React 19** is used — ensure any added packages support React 19.
- `public/projects/` contains 47 images — when adding new projects, match the existing naming convention (`project-name.png` or similar).

---

## Deployment

- **Platform**: Vercel
- **Production URL**: https://alipashaskerov.vercel.app/
- Set `BASE_URL` environment variable in Vercel project settings to the production URL.
- Build command: `npm run build` (Turbopack enabled in `next.config.ts`).
