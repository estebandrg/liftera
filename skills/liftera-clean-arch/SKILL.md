---
name: liftera-clean-arch
description: >
  Clean Architecture patterns for Liftera business logic and feature development.
  Trigger: When creating features with business logic, use cases, data access, or any non-UI code (domain entities, repositories, services, API clients).
license: Apache-2.0
metadata:
  author: liftera
  version: "1.0"
---

> **Backend:** This project uses **Supabase** as the backend (no custom API server). All data access in `@liftera/infrastructure` connects to Supabase for persistence, authentication, and storage.

## When to Use

- Creating business logic or domain entities
- Implementing use cases or application services
- Building data access layers (repositories, API clients)
- Adding external service integrations
- Implementing authentication/authorization logic
- Creating validation or business rules
- Building any feature that involves data transformation or business workflows

**Do NOT use for:**

- Pure UI components (use `liftera-ui` instead)
- Routing/navigation (use `expo-router` or `nextjs-15`)
- Styling (use `nativewind-v4` or `tailwind-4`)

---

## Architecture Layers

Liftera follows Clean Architecture with dependency inversion:

```
┌─────────────────────────────────────┐
│  Presentation Layer                 │  apps/web, apps/mobile
│  (UI, Routes, View Models)          │  ↓ depends on
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Application Layer                  │  packages/application
│  (Use Cases, DTOs, Ports)           │  ↓ depends on
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Domain Layer                       │  packages/core
│  (Entities, Value Objects, Rules)   │  ← NO dependencies
└─────────────────────────────────────┘
         ▲ implements
┌─────────────────────────────────────┐
│  Infrastructure Layer               │  packages/infrastructure
│  (Repositories, APIs, External)     │
└─────────────────────────────────────┘
```

---

## Critical Patterns

### 1. Package Boundaries

| Package                   | Purpose                         | Can Import                                                 | Cannot Import                   |
| ------------------------- | ------------------------------- | ---------------------------------------------------------- | ------------------------------- |
| `@liftera/core`           | Domain entities, business rules | Nothing (pure TS)                                          | Any other package               |
| `@liftera/application`    | Use cases, orchestration        | `@liftera/core`, `@liftera/shared`                         | `@liftera/infrastructure`, apps |
| `@liftera/infrastructure` | External integrations           | `@liftera/core`, `@liftera/application`, `@liftera/shared` | apps                            |
| `@liftera/shared`         | Common utilities, types         | Nothing                                                    | Any other package               |
| `apps/*`                  | Presentation                    | All packages                                               | Other apps                      |

### 2. Dependency Rule

**ALWAYS**: Dependencies point inward (toward domain)  
**NEVER**: Domain depends on infrastructure or application

### 3. Use Ports (Interfaces) for External Dependencies

Define interfaces in `@liftera/application/ports/`, implement in `@liftera/infrastructure`.

### 4. Entity Purity

Domain entities should contain ONLY business logic, no framework dependencies.

---

## Quick Reference

### Where Should This Code Live?

```
Is it a business rule or entity? → @liftera/core
Is it orchestrating business logic? → @liftera/application (use case)
Is it calling external APIs/DB? → @liftera/infrastructure
Is it a shared utility/type? → @liftera/shared
Is it UI-related? → apps/* or @liftera/ui
```

### Should I Create a Use Case?

```
Does it involve multiple steps? → Yes
Does it orchestrate multiple repositories? → Yes
Is it just a simple CRUD operation? → Maybe, consider if business logic exists
Is it pure UI state management? → No, use Zustand store instead
```

### Should I Create an Entity or DTO?

```
Does it have business logic/rules? → Entity (@liftera/core)
Is it just data transfer between layers? → DTO (@liftera/application)
Is it API request/response shape? → DTO (@liftera/application)
Does it represent a domain concept? → Entity (@liftera/core)
```

---

## Commands

```bash
# Create new package
mkdir -p packages/{package-name}/src
cd packages/{package-name}
pnpm init

# Add dependencies between packages
cd packages/application
pnpm add @liftera/core@workspace:*

# Type check all packages
pnpm check-types

# Build specific package
pnpm build --filter=@liftera/core
```

---

## Resources

- **Complete Workflow Example**: See [assets/workflow-example.md](assets/workflow-example.md) for step-by-step feature implementation
- **Common Patterns**: See [assets/common-patterns.md](assets/common-patterns.md) for Result types, Value Objects, DI patterns
- **Package Structures**: See [assets/package-structures.md](assets/package-structures.md) for detailed folder organization
- **Anti-Patterns**: See [assets/anti-patterns.md](assets/anti-patterns.md) for what NOT to do
- **Architecture**: See [AGENTS.md](../../AGENTS.md) for monorepo structure
- **Package Manager**: Use `package-manager` skill for dependency management
- **TypeScript**: Use `typescript` skill for type patterns
