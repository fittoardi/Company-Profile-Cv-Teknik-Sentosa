# Project Structure

## Classification

- Type: frontend SPA
- Runtime: browser
- Build: Vite
- Entry point: `src/main.tsx`
- Backend integration: Supabase REST client, PostgreSQL migration, and Supabase Edge Function

## Structure

```text
src/
  main.tsx                 React bootstrap
  App.tsx                  shell and page dispatch
  pages/                   externally reachable page units
  components/layout/       navbar, footer, floating actions
  components/ui/           reusable presentational components
  components/              contact form and page shell
  lib/                     constants, hash router, Supabase client
supabase/
  migrations/              leads schema, RLS, trigger, realtime
  functions/lead-notification/  Resend email integration
public/assets/             local logo and static assets
```

## Entry Points and Domains

- `home`: `/` hash route; marketing overview, services preview, projects preview, CTA.
- `about`: `/tentang`; company story, statistics, certifications, reasons to choose.
- `services`: `/layanan`; boiler services, process stages, certifications.
- `projects`: `/proyek`; project portfolio filtered by industrial sector.
- `contact`: `/kontak`; contact details, map, WhatsApp links, lead form.
- `lead-notification`: Supabase Edge Function invoked after a `leads` insert.

## Layers

- Presentation: page components and reusable UI/layout components.
- Navigation/state: `src/lib/router.ts` and local React state.
- Static content: `src/lib/constants.ts`.
- Persistence boundary: `src/lib/supabase.ts` and `ContactForm`.
- Backend automation: PostgreSQL trigger/`pg_net` and Edge Function.

## File Counts

- 22 tracked files under `src/`
- 5 page units
- 6 reusable UI components
- 3 layout components
- 3 Supabase SQL migration/function surfaces

