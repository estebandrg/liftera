# Repository Guidelines

## How to Use This Guide

- Start here for cross-project norms. Liftera is a monorepo with several components.
- Each component may add its own `AGENTS.md` with specific guidelines.
- Component docs override this file when guidance conflicts.

## Available Skills

Use these skills for detailed patterns on-demand:

### Generic Skills (Any Project)

| Skill        | Description                                 | URL                                    |
| ------------ | ------------------------------------------- | -------------------------------------- |
| `typescript` | Const types, flat interfaces, utility types | [SKILL.md](skills/typescript/SKILL.md) |
| `react-19`   | React 19 patterns, React Compiler           | [SKILL.md](skills/react-19/SKILL.md)   |
| `nextjs-15`  | App Router, Server Actions, streaming       | [SKILL.md](skills/nextjs-15/SKILL.md)  |
| `tailwind-4` | cn() utility, Tailwind patterns             | [SKILL.md](skills/tailwind-4/SKILL.md) |
| `zustand-5`  | Persist, selectors, slices                  | [SKILL.md](skills/zustand-5/SKILL.md)  |

### Liftera-Specific Skills

| Skill                  | Description                                    | URL                                              |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------ |
| `liftera-architecture` | Monorepo architecture patterns and boundaries  | [SKILL.md](skills/liftera-architecture/SKILL.md) |
| `liftera-clean-arch`   | Clean Architecture for business logic features | [SKILL.md](skills/liftera-clean-arch/SKILL.md)   |
| `liftera-ui`           | Shared UI with Gluestack UI + `@liftera/ui`    | [SKILL.md](skills/liftera-ui/SKILL.md)           |
| `package-manager`      | pnpm workspace rules and dependency placement  | [SKILL.md](skills/package-manager/SKILL.md)      |
| `nativewind-v4`        | NativeWind v4 cross-platform styling patterns  | [SKILL.md](skills/nativewind-v4/SKILL.md)        |
| `expo-router`          | Expo Router file-based routing and navigation  | [SKILL.md](skills/expo-router/SKILL.md)          |
| `turborepo`            | Turborepo tasks workflow (`turbo.json`)        | [SKILL.md](skills/turborepo/SKILL.md)            |

### Meta Skills

| Skill           | Description                | URL                                       |
| --------------- | -------------------------- | ----------------------------------------- |
| `skill-creator` | Create new AI agent skills | [SKILL.md](skills/skill-creator/SKILL.md) |

### Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action                                                    | Skill                  |
| --------------------------------------------------------- | ---------------------- |
| Adding new packages/apps or moving code across boundaries | `liftera-architecture` |
| Adding/updating dependencies in the monorepo              | `package-manager`      |
| App Router / Server Actions                               | `nextjs-15`            |
| Creating business logic, use cases, or repositories       | `liftera-clean-arch`   |
| Creating domain entities or value objects                 | `liftera-clean-arch`   |
| Creating new skills                                       | `skill-creator`        |
| Creating/modifying shared UI components (`packages/ui`)   | `liftera-ui`           |
| Cross-app or cross-package architectural decisions        | `liftera-architecture` |
| General Liftera development questions                     | `liftera-architecture` |
| Implementing data access or external service integrations | `liftera-clean-arch`   |
| Using Zustand stores                                      | `zustand-5`            |
| Working with Expo Router navigation                       | `expo-router`          |
| Working with NativeWind styles                            | `nativewind-v4`        |
| Working with Tailwind classes                             | `tailwind-4`           |
| Working with Turborepo tasks                              | `turborepo`            |
| Writing React components                                  | `react-19`             |
| Writing TypeScript types/interfaces                       | `typescript`           |

---

## Project Overview

Liftera is a modern monorepo that shares UI and code between web (Next.js) and mobile (Expo/React Native), using Gluestack UI and NativeWind.

| Component  | Location       | Tech Stack                                          |
| ---------- | -------------- | --------------------------------------------------- |
| Web App    | `apps/web/`    | Next.js 15, React 19, React Native Web, NativeWind  |
| Mobile App | `apps/mobile/` | Expo 54, React Native 0.81, Expo Router, NativeWind |
| Shared UI  | `packages/ui/` | `@liftera/ui`, Gluestack UI, NativeWind             |

---

## JavaScript/TypeScript Development

```bash
# Install
pnpm install

# Dev (all)
pnpm dev

# Dev (per app)
pnpm dev --filter=web
pnpm dev --filter=mobile

# Quality
pnpm lint
pnpm check-types
pnpm format

# Build
pnpm build
```

---

## Commit & Pull Request Guidelines

Follow conventional-commit style: `<type>[scope]: <description>`

**Types:** `feat`, `fix`, `docs`, `chore`, `perf`, `refactor`, `style`, `test`

Before creating a PR:

1. Run all relevant tests, linters, and type checks
2. Keep changes scoped (prefer small, reviewable PRs)
3. Include screenshots for UI changes when applicable
