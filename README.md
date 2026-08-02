# WelliQo

WelliQo is a compliance-first wellness knowledge platform. The repository documentation is the single source of truth.

## Engineering quick start

1. Read [`docs/README.md`](docs/README.md) and follow its mandatory reading order.
2. Copy `.env.example` to `.env.local` and add only public Supabase configuration when a project is provisioned.
3. Run `pnpm install`.
4. Run `pnpm dev`.

## Commands

| Command             | Purpose                            |
| ------------------- | ---------------------------------- |
| `pnpm dev`          | Run the Next.js foundation locally |
| `pnpm build`        | Create the production build        |
| `pnpm lint`         | Check application lint rules       |
| `pnpm typecheck`    | Check all typed workspaces         |
| `pnpm test`         | Run package tests                  |
| `pnpm format:check` | Verify formatting                  |

## Scope

Only Sprint 1 is implemented. The assessment, reports, content management, database schema, and lead workflows are intentionally absent.
