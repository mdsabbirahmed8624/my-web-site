# Copilot Instructions for OrbitCart Ecommerce Platform

## Purpose
This file helps GitHub Copilot agents quickly understand the workspace and take safe, consistent actions. Follow the repo conventions, run tests before proposing changes, and prioritize minimal, non-destructive modifications.

## Project at a glance
- Node.js + Express backend in `src/`
- MongoDB via Mongoose
- Vanilla frontend in `public/`
- Docker-ready deployment with `Dockerfile`, `Procfile`
- `npm` scripts:
  - `npm run dev` (watch server)
  - `npm start`
  - `npm run seed`
  - `npm run check`
  - `npm run smoke`
  - `npm test`

## Environment
- Copy `.env.example` to `.env`; set `MONGODB_URI`, `JWT_SECRET`
- Default development admin: `admin@example.com` / `Admin12345!`
- Validate with `npm run smoke`; this needs `scripts/smoke-test.js` to exist.

## Recommended workflow for agents
1. Read `README.md` and `package.json` to infer architecture.
2. Search for requested file paths and existing patterns before creating new files.
3. For code changes, include tests and run `npm run check` + `npm test`.
4. If there is a missing smoke test script, add a placeholder test or update `package.json` to avoid failing `npm test`.

## Committing
- Keep diffs limited to the requested scope.
- Preserve existing code and docs; only adjust where necessary.
- If a change is opinionated, include explicit rationale in PR description.

## Known pitfalls
- Non-existent `scripts/smoke-test.js` can cause test failures.
- Ensure production secrets are not committed.
- `.env` is in `.gitignore`.

## Useful links
- Repository README: `README.md`
- Current branch: `main`
