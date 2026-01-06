# Students' Week 2026 (Vite + React + Tailwind)

This project renders the Students' Week 2026 schedule with detail modals for rules and submission links. Built with Vite, React, and Tailwind CSS, ready for Firebase Hosting.

## Scripts

- `npm install` – install dependencies
- `npm run dev` – start dev server (default http://localhost:5173)
- `npm run build` – production build to `dist/`
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint on `src`

## Firebase Hosting

1. Install the CLI: `npm install -g firebase-tools`
2. Auth: `firebase login`
3. Set your project: update `.firebaserc` with your project id.
4. (If re-running) `firebase init hosting` and choose `dist` as public, single-page app: **No**.
5. Deploy after building:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

## Tailwind notes

- Global styles live in `src/index.css` (includes Tailwind base).
- Components use utility classes; tweak theme in `tailwind.config.js`.

## Environment / API keys

- Hosting-only setup; no client keys are required. If you add Firebase SDK later, keep keys in `.env.local` (already git-ignored) and reference via `import.meta.env.VITE_*`.
