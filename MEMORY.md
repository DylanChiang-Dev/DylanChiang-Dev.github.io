# Dylan Chiang 的學術個人網站 Memory

## Context Loading Policy

- This file is a progressive memory entrypoint, not a full-session transcript.
- Start by reading this policy and the latest entries only.
- Search this file with narrow keywords before opening older sections or linked artifacts.
- Record durable decisions, current environment facts, deployment notes, and repeated gotchas here.
- Do not record secrets or raw `.env` values.

## Current Repository Facts

- Owner: `DylanChiang-Dev`
- Repository: `DylanChiang-Dev.github.io`
- Origin: `https://github.com/DylanChiang-Dev/DylanChiang-Dev.github.io`
- Local path: `/Users/dc/Documents/github/DylanChiang-Dev/DylanChiang-Dev.github.io`
- Main branch: `main`
- Documentation standardized: 2026-05-18 02:30 CST
- Deployment: Automated Cloudflare Pages build triggered directly by pushes to the `main` branch. GitHub Actions deployment workflow is redundant and has been removed.

## Latest Entries

### 2026-06-02 20:15 CST Cloudflare Pages Migration, Go Requirement & pnpm Symlinks

- **Cloudflare Pages Migration**: The website is now automatically built and deployed via Cloudflare Pages directly triggered by GitHub repository pushes.
- **Redundant Workflow Removal**: Removed `.github/workflows/deploy.yml` as it is no longer needed.
- **pnpm Symlink configuration**: Added `.npmrc` with `prefer-symlinked-executables=true`. By default on macOS, `pnpm` creates POSIX shell script wrapper files in `node_modules/.bin/tailwindcss`, which causes Hugo's Tailwind CSS transformer to fail with `binary "tailwindcss" is not a Node.js script`. Enabling symlinked executables forces `pnpm` to create real node-compatible symlinks, resolving the Hugo build issue.
- **Go Environment**: Confirmed that the local Hugo / Tailwind Blox template relies on Go Modules. Installed Go `1.26.3` via Homebrew in the local development environment to enable successful builds.

### 2026-05-18 02:30 CST Documentation entrypoint standardization

- Standardized root agent documents to `AGENTS.md`, `RULES.md`, and `MEMORY.md`.
- Migrated useful content from legacy agent/memory files into the standard files where present.
- Repository should now start from `AGENTS.md`, then `RULES.md`, then this file's policy and latest entries.
