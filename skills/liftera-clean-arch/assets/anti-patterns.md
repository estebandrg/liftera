# Anti-Patterns to Avoid

## ❌ Domain Depending on Infrastructure

```typescript
// packages/core/src/entities/user.entity.ts
import { prisma } from "@liftera/infrastructure/database"; // NEVER!

export class User {
  async save() {
    await prisma.user.create({ data: this }); // WRONG!
  }
}
```

**Why it's wrong**: Domain layer should have NO external dependencies. It should be pure TypeScript with only business logic.

---

## ❌ Use Cases with Framework Dependencies

```typescript
// packages/application/src/use-cases/login.use-case.ts
import { NextRequest } from "next/server"; // NEVER!

export class LoginUseCase {
  async execute(request: NextRequest) {
    // WRONG! Use DTO instead
    // ...
  }
}
```

**Why it's wrong**: Use cases should be framework-agnostic. Use DTOs to receive data, not framework-specific types.

---

## ❌ Skipping Ports/Interfaces

```typescript
// packages/application/src/use-cases/create-user.use-case.ts
import { UserRepository } from "@liftera/infrastructure/repositories/user.repository"; // WRONG!

export class CreateUserUseCase {
  constructor(private repo: UserRepository) {} // Should be IUserRepository interface
}
```

**Why it's wrong**: Application layer should depend on abstractions (interfaces), not concrete implementations. This violates dependency inversion.

---

## ❌ Anemic Domain Models

```typescript
// ❌ WRONG: No business logic
export class User {
  id: string;
  email: string;
  status: string;
}

// ✅ CORRECT: Rich domain model
export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    private status: UserStatus,
  ) {}

  activate(): void {
    if (this.status === UserStatus.ACTIVE) {
      throw new Error("User already active");
    }
    this.status = UserStatus.ACTIVE;
  }

  isActive(): boolean {
    return this.status === UserStatus.ACTIVE;
  }
}
```

**Why it's wrong**: Domain entities should encapsulate business rules and behavior, not just be data containers.

---

## ❌ Business Logic in Presentation Layer

```typescript
// apps/web/app/users/route.ts
export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // WRONG: Business logic in route handler
  if (!email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password too short" }, { status: 400 });
  }

  // ...
}
```

**Why it's wrong**: Business rules belong in domain entities or use cases, not in presentation layer.

---

## ❌ Infrastructure Leaking into Domain

```typescript
// packages/core/src/entities/user.entity.ts
export class User {
  constructor(
    public id: string,
    public email: string,
    public passwordHash: string, // WRONG: Infrastructure concern
  ) {}
}
```

**Why it's wrong**: Password hashing is an infrastructure concern. Domain should work with domain concepts like `Password` value object.
