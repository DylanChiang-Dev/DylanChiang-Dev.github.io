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
- Deployment: Automated GitHub Pages build and deployment triggered directly by pushes to the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`).

## Latest Entries

### 2026-07-28 20:00 CST Open-source portfolio

- Added DC-WeMark, BOYA Skills, and DC Family Task Manager as featured portfolio projects.
- Each project page documents Dylan's role, core innovations, technical architecture, live demo, and GitHub source.
- Increased the homepage recent-project count from three to five so all current personal projects are visible.

### 2026-07-28 19:00 CST Demo project cleanup

- Removed the Pandas, scikit-learn, and PyTorch starter-template examples because they were not Dylan's projects.
- The project portfolio now contains only Dylan's own work and the research-project section.

### 2026-07-28 18:10 CST WeiShi project profile

- Added 未識 WeiShi as the featured project for the sixth Yunnan-Taiwan University Student Innovation and Entrepreneurship Competition.
- The public project page describes the local-first competition prototype, Dylan's product and technology contributions, and the consent-based AI-agent relationship exploration flow without exposing team titles or the private source repository.
- Added the project to the homepage's featured project collection and reused the pitch deck's title, mechanism, and governance slides as project visuals.

### 2026-07-28 18:45 CST Kinmen AI computing center project refresh

- Rewrote the fourth Yunnan-Taiwan competition project page as a concise public portfolio entry covering Dylan's contributions, service concept, core innovations, silver award, and related research.
- Clarified that the computing center is a research and competition proposal rather than an operating facility.
- Added a generated infrastructure cover image and featured the project on the homepage alongside WeiShi.
- Reframed all cross-regional service discussion around export-control, data-protection, and legal compliance.

### 2026-07-28 17:30 CST Fudan PhD profile update

- Updated the academic profile to reflect Dylan's 智能科學與技術 PhD study at the School of Data Science, Fudan University, and affiliation with the Data Intelligence and Social Computing Lab (Fudan DISC).
- Aligned the biography, education, research interests, homepage research summary, and skills with the public GitHub profile: NLP, LLMs, computational social science, and human-centered AI.
- Replaced placeholder LinkedIn and Google Scholar links with verified GitHub and X profiles.
- Corrected the production base URL and replaced the stale SEO description with the current research profile.

### 2026-06-02 20:15 CST Local Development Environment Fixes & GitHub Actions Restore

- **GitHub Pages Deployment**: Confirmed that the website is deployed via GitHub Pages (GitHub Actions `deploy.yml`), not Cloudflare Pages. Restored the `.github/workflows/deploy.yml` file.
- **pnpm Symlink configuration**: Added `.npmrc` with `prefer-symlinked-executables=true`. By default on macOS, `pnpm` creates POSIX shell script wrapper files in `node_modules/.bin/tailwindcss`, which causes Hugo's Tailwind CSS transformer to fail with `binary "tailwindcss" is not a Node.js script`. Enabling symlinked executables forces `pnpm` to create real node-compatible symlinks, resolving the Hugo build issue.
- **Go Environment**: Confirmed that the local Hugo / Tailwind Blox template relies on Go Modules. Installed Go `1.26.3` via Homebrew in the local development environment to enable successful builds.

### 2026-05-18 02:30 CST Documentation entrypoint standardization

- Standardized root agent documents to `AGENTS.md`, `RULES.md`, and `MEMORY.md`.
- Migrated useful content from legacy agent/memory files into the standard files where present.
- Repository should now start from `AGENTS.md`, then `RULES.md`, then this file's policy and latest entries.
