---
name: turborepo
description: >
  Turborepo workflow for Liftera.
  Trigger: When adding/modifying tasks in turbo.json, optimizing builds/dev, or troubleshooting task pipelines.
license: Apache-2.0
metadata:
  author: liftera
  version: "1.0"
  scope: [root]
  auto_invoke: "Working with Turborepo tasks"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## Core Commands (REQUIRED)

- Root scripts are Turborepo-driven:
  - `pnpm dev` -> `turbo run dev`
  - `pnpm build` -> `turbo run build`
  - `pnpm lint` -> `turbo run lint`
  - `pnpm check-types` -> `turbo run check-types`

## Task Principles (REQUIRED)

- **ALWAYS** define tasks in `turbo.json`.
- **ALWAYS** keep `dev` non-cached and persistent.
- **ALWAYS** keep build outputs accurate for caching.

## When Editing turbo.json

- Ensure task dependencies include `^task` when packages depend on other packages.
- Keep inputs/outputs minimal and correct so caching is reliable.
