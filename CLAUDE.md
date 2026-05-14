# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Package manager is **pnpm**.

- `pnpm dev` — start Next.js dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — Biome check (lint + import-order assist)
- `pnpm format` — Biome format --write

There is no test runner configured. Do not invent `pnpm test` / `npm test` commands.

## Stack notes that change how you write code

- **Next.js 16.2.6, App Router only.** See `AGENTS.md` — APIs may differ from training data. Consult `node_modules/next/dist/docs/01-app/` before writing route, layout, or data-fetching code.
- **React 19.2 with the React Compiler enabled** (`reactCompiler: true` in `next.config.ts`, `babel-plugin-react-compiler` installed). Do not hand-add `useMemo` / `useCallback` for memoization — the compiler handles it. Follow the Rules of React strictly; the compiler bails out on violations.
- **Tailwind CSS v4** via `@tailwindcss/postcss`. There is no `tailwind.config.*` — design tokens live in `src/app/globals.css` under `@theme inline { ... }`, and the entry point is `@import "tailwindcss"`. Add new tokens there, not in a JS config.
- **Biome 2.2 replaces ESLint + Prettier.** Config in `biome.json` has `next` and `react` linter domains enabled and `organizeImports: on`. Two-space indent. Don't add ESLint or Prettier configs.
- **pnpm workspace** with `ignoredBuiltDependencies: [sharp, unrs-resolver]` in `pnpm-workspace.yaml` — don't re-enable their postinstall scripts without a reason.

## Layout

- `src/app/` — App Router root. `layout.tsx` wires global CSS and the `Geist` / `Geist_Mono` next/font instances; everything else inherits from it.
- `@/*` is aliased to `src/*` (`tsconfig.json`). Prefer it over deep relative imports.
- `public/` — static assets served at the URL root.
