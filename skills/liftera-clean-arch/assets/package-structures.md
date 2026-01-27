# Package Structure Templates

## `@liftera/core` Structure

```
packages/core/
├── src/
│   ├── entities/           # Domain entities
│   │   ├── user.entity.ts
│   │   └── task.entity.ts
│   ├── value-objects/      # Immutable value objects
│   │   ├── email.vo.ts
│   │   └── money.vo.ts
│   ├── enums/              # Domain enums
│   │   └── task-status.enum.ts
│   ├── errors/             # Domain-specific errors
│   │   └── domain.error.ts
│   └── index.ts            # Public API
├── package.json
└── tsconfig.json
```

## `@liftera/application` Structure

```
packages/application/
├── src/
│   ├── use-cases/          # Application use cases
│   │   ├── auth/
│   │   │   ├── login.use-case.ts
│   │   │   └── register.use-case.ts
│   │   └── tasks/
│   │       ├── create-task.use-case.ts
│   │       └── complete-task.use-case.ts
│   ├── ports/              # Interfaces for infrastructure
│   │   ├── user-repository.port.ts
│   │   ├── task-repository.port.ts
│   │   └── auth-service.port.ts
│   ├── dtos/               # Data Transfer Objects
│   │   ├── create-task.dto.ts
│   │   └── login.dto.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

## `@liftera/infrastructure` Structure

```
packages/infrastructure/
├── src/
│   ├── repositories/       # Repository implementations (Supabase)
│   │   ├── user.repository.ts
│   │   └── task.repository.ts
│   ├── services/           # External services
│   │   ├── supabase.service.ts  # Supabase client singleton
│   │   ├── auth.service.ts      # Supabase Auth wrapper
│   │   └── storage.service.ts   # Supabase Storage wrapper
│   ├── di/                 # Dependency injection setup
│   │   ├── registry.ts     # Register implementations
│   │   └── index.ts
│   └── index.ts
├── package.json            # Includes @supabase/supabase-js
└── tsconfig.json
```

**Note:** This project uses **Supabase** as the backend (no custom API server).

## `@liftera/shared` Structure

```
packages/shared/
├── src/
│   ├── types/              # Common types
│   │   ├── result.ts
│   │   └── pagination.ts
│   ├── utils/              # Utility functions
│   │   ├── date.utils.ts
│   │   └── string.utils.ts
│   ├── constants/          # Global constants
│   │   └── app.constants.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```
