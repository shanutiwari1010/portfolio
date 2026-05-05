# AGENTS.md

Single source of truth for AI agents (and humans) working in this repo.
Mirror of `.cursor/rules/*` — kept here so non-Cursor tools (Codex, Claude Code, Cline, etc.) can read it.

---

## TL;DR for the agent

1. **Stack**: Next.js **16** App Router · React **19** · TypeScript **5.9** · Tailwind **v4** · shadcn/ui (`new-york`).
2. **Animation**: Use `motion/react` (NOT `framer-motion`) — they share an API; we standardised on `motion`.
3. **Styling**: Tailwind v4 with **CSS-only config** in `src/app/globals.css`. There is no `tailwind.config.ts`.
4. **Components**: shadcn primitives live in `src/components/ui/`. App-level components live in `src/components/`. Sections in `src/components/sections/`.
5. **Package manager**: `npm` (lockfile is `package-lock.json`). Do **not** introduce yarn/pnpm/bun lockfiles.
6. **Verification**: After substantive changes run **all three**: `npm run lint && npm run typecheck && npm run build`.

---

## Project Layout

```
src/
  app/                  Next.js App Router (route groups, RSCs by default)
    (root)/             Public site routes
    api/                Route handlers
    layout.tsx          Root layout (fonts, providers, analytics)
    globals.css         Tailwind v4 + design tokens (HSL-based)
  components/
    ui/                 shadcn primitives — vendored, treat as 3rd-party
    sections/           Page-level composed sections
    *.tsx               App-specific shared components
  constants/            String/URL constants
  data/                 Static structured data (projects, links, …)
  hooks/                Custom hooks
  lib/                  Utilities (`cn`, …)
  types/                Shared TypeScript types
```

---

## Non-negotiables

### Server Components first
- Default to **Server Components**. Only mark `"use client"` when a file actually needs hooks, browser APIs, or interactivity.
- Never put `"use client"` in `layout.tsx` or page entry files unless absolutely required.

### Imports
- Use the `@/*` path alias — never relative paths that climb out of the current folder.
- Group: `react/next` → third-party → `@/...` → relative.

### Animation
```ts
// ✅ DO
import { motion } from "motion/react";

// ❌ DO NOT — framer-motion was removed
import { motion } from "framer-motion";
```

### Styling
- Tailwind v4 (CSS-first). All design tokens live as CSS variables in `globals.css`.
- Use `cn()` from `@/lib/utils` for conditional classes.
- Reference colour tokens through `bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`, etc. — don't hard-code hex/rgb.

### shadcn/ui
- Treat `src/components/ui/*` as **vendored** code: keep diffs minimal so we can re-sync from the registry.
- To add a new primitive: `npx shadcn@latest add <name>`.
- To check if local components are out of sync: `npx shadcn@latest diff`.
- Style is `new-york`, base colour `zinc`, icon library `lucide`.

### Icons
- Lucide icons via `lucide-react` (pinned to `0.5x` because the `1.x` line dropped brand icons).
- Brand icons (GitHub, LinkedIn, X, etc.) come from `react-icons` or are imported from `lucide-react` 0.x.

### Forms
- `react-hook-form` + `zod` (v3) + `@hookform/resolvers` for validated forms.
- Don't bump `zod` to v4 without an explicit migration pass — it's a breaking refactor.

---

## Verification commands

```bash
# full pre-flight (run as one chained command — safe to paste)
npm run lint && npm run typecheck && npm run build

# individual scripts
npm run lint        # eslint flat config (eslint-config-next 16)
npm run typecheck   # tsc --noEmit
npm run build       # production build via Turbopack
npm run dev         # local dev (Turbopack)
```

ESLint runs via the `eslint` binary directly (Next 16 removed `next lint`).

> ⚠️ When pasting multiple commands into zsh, **chain them with `&&`** — never paste lines that end in `# comment`. zsh ends up forwarding the `#` token as an argument to the npm script, which then fails (e.g. `tsc --noEmit '#'`).

---

## When updating dependencies

1. Bump in `package.json`, then `npm install`.
2. Always finish with `npm run lint && npm run typecheck && npm run build`.
3. `lucide-react` stays on **0.x** until brand-icon imports in `src/data/links.ts` are migrated to `react-icons`.
4. Don't bump `eslint` past `9.x` until `eslint-plugin-react` supports the `10.x` rule context API.
5. The 4 remaining `npm audit` moderate findings are inside Next.js's bundled `postcss` — upstream issue, no action.

---

## Cursor-specific

Project rules live in `.cursor/rules/*.mdc` and are auto-loaded by Cursor agents. Keep them concise and per-concern. Update them whenever a convention here changes.
