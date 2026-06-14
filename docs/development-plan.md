# Development Plan

## 1. Project Foundation

- Set up FSD layers: `app`, `pages`, `widgets`, `features`, `entities`, `shared`.
- Add path aliases for clean imports.
- Define global design tokens: colors, typography, spacing, radii, z-indexes, breakpoints.
- Create typed content contracts for profile, skills, projects, experience, posts, and contacts.

## 2. Content Model

- Prepare `profile` data: name, role, intro, location, availability, socials, email.
- Prepare `skills` data grouped by frontend, tooling, architecture, UI, backend if needed.
- Prepare `projects` data with case title, role, stack, description, metrics, links, images.
- Prepare `experience` and `posts` data for the sections shown in the reference.

## 3. Shared UI Kit

- Build shared primitives: `Button`, `IconButton`, `SectionTitle`, `Badge`, `Card`, `Container`.
- Add responsive image wrapper for profile and project thumbnails.
- Add form fields for the contact section.
- Keep all primitives theme-aware and reusable across widgets.

## 4. Page Widgets

- Header with compact navigation and contact action.
- Hero with your portrait, role headline, short intro, and CTA.
- About and stats section.
- Recent work grid with your real cases.
- Core skills grid with your actual stack.
- Work experience timeline.
- Process or blog/thoughts section.
- Contact form and footer.

## 5. Responsive Layout

- Match desktop composition from the Behance reference first.
- Create tablet and mobile variants section by section.
- Keep image crops and headline sizes controlled with CSS constraints.
- Verify no text overlap at common widths: 360, 768, 1024, 1440.

## 6. Motion And Polish

- Add restrained hover states for buttons, cards, and project images.
- Add section reveal animation only after the static layout is stable.
- Respect `prefers-reduced-motion`.

## 7. Integrations

- Decide contact delivery: `mailto`, Formspree, EmailJS, or backend endpoint.
- Add SEO metadata and Open Graph image.
- Add analytics only if you need it.

## 8. Quality Gate

- Run TypeScript build.
- Check Lighthouse performance and accessibility.
- Optimize images to `webp` or `avif`.
- Deploy to Vercel, Netlify, or GitHub Pages.
