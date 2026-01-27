# Common Patterns

## Result Type for Error Handling

```typescript
// packages/shared/src/types/result.ts
export type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

// Usage in use case
async execute(id: string): Promise<Result<User>> {
  const user = await this.userRepo.findById(id);
  if (!user) {
    return { success: false, error: new Error('User not found') };
  }
  return { success: true, data: user };
}
```

## Value Objects for Domain Concepts

```typescript
// packages/core/src/value-objects/email.vo.ts
export class Email {
  private constructor(private readonly value: string) {}

  static create(email: string): Email | null {
    if (!email.includes("@")) return null;
    return new Email(email.toLowerCase());
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Email): boolean {
    return this.value === other.value;
  }
}
```

## Dependency Injection in Use Cases

```typescript
// Use constructor injection for dependencies
export class CreateUserUseCase {
  constructor(
    private readonly userRepo: IUserRepository,
    private readonly emailService: IEmailService,
    private readonly logger: ILogger,
  ) {}

  async execute(dto: CreateUserDto): Promise<Result<User>> {
    // Implementation
  }
}
```

## Entity Purity

Domain entities should contain ONLY business logic, no framework dependencies:

```typescript
// ✅ CORRECT: Pure domain entity
export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    private readonly createdAt: Date,
  ) {}

  isActive(): boolean {
    const daysSinceCreation =
      (Date.now() - this.createdAt.getTime()) / (1000 * 60 * 60 * 24);
    return daysSinceCreation <= 365;
  }
}

// ❌ WRONG: Entity with framework dependencies
import { z } from "zod";
export class User {
  schema = z.object({ email: z.string().email() }); // NO!
}
```

## Using Ports (Interfaces)

```typescript
// ✅ CORRECT: Define port in application layer
// packages/application/src/ports/user-repository.port.ts
export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
}

// Implement in infrastructure layer with Supabase
// packages/infrastructure/src/repositories/user.repository.ts
import type { SupabaseClient } from "@supabase/supabase-js";

export class UserRepository implements IUserRepository {
  constructor(private readonly supabase: SupabaseClient) {}

  async findById(id: string): Promise<User | null> {
    const { data, error } = await this.supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) return null;
    return new User(data.id, data.email);
  }

  async save(user: User): Promise<void> {
    await this.supabase
      .from("users")
      .upsert({ id: user.id, email: user.email });
  }
}
```
