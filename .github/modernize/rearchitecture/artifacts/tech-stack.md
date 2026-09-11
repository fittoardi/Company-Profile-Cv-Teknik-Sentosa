# Tech Stack

- Language: TypeScript 5.5; JSX with React 18.3.
- Runtime: browser; TypeScript target ES2020.
- Bundler/dev server: Vite 5.4 with `@vitejs/plugin-react`.
- Styling: Tailwind CSS 3.4, PostCSS, Autoprefixer, Google Fonts Inter.
- UI/icons: custom React components and `lucide-react`.
- Routing: custom hash router; no React Router dependency.
- Backend client: `@supabase/supabase-js` 2.116; browser variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- Database/tooling dependencies present: `postgres`, `drizzle-orm`, and `drizzle-kit`; no source usage was found in the tracked frontend.
- Backend runtime: Supabase PostgreSQL migrations and Deno-based Edge Function.
- Email provider: Resend HTTP API from `supabase/functions/lead-notification/index.ts`.
- Quality commands: `npm run lint`, `npm run typecheck`, `npm run build`.
- TypeScript configuration: strict mode, bundler module resolution, `@/*` alias to `src/*`, no emit.
- ESLint: flat config with `@eslint/js`, TypeScript ESLint, React Hooks, and React Refresh.
- No server-side application framework or ORM model layer is present in `src`.

