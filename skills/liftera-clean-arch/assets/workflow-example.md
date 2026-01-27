# Complete Feature Development Example

This document shows a complete workflow for implementing a Task Management feature using Clean Architecture.

## Step 1: Define Domain Entity (`@liftera/core`)

```typescript
// packages/core/src/entities/task.entity.ts
export class Task {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly status: TaskStatus,
    public readonly assigneeId: string | null,
  ) {}

  canBeCompletedBy(userId: string): boolean {
    return this.assigneeId === userId && this.status !== TaskStatus.COMPLETED;
  }

  complete(): Task {
    if (this.status === TaskStatus.COMPLETED) {
      throw new Error("Task already completed");
    }
    return new Task(this.id, this.title, TaskStatus.COMPLETED, this.assigneeId);
  }
}

export enum TaskStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}
```

## Step 2: Define Port (`@liftera/application`)

```typescript
// packages/application/src/ports/task-repository.port.ts
import type { Task } from "@liftera/core/entities/task";

export interface ITaskRepository {
  findById(id: string): Promise<Task | null>;
  findByAssignee(userId: string): Promise<Task[]>;
  save(task: Task): Promise<void>;
  delete(id: string): Promise<void>;
}
```

## Step 3: Create Use Case (`@liftera/application`)

```typescript
// packages/application/src/use-cases/complete-task.use-case.ts
import type { Task } from "@liftera/core/entities/task";
import type { ITaskRepository } from "../ports/task-repository.port";
import type { Result } from "@liftera/shared/types/result";

export class CompleteTaskUseCase {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async execute(taskId: string, userId: string): Promise<Result<Task>> {
    const task = await this.taskRepository.findById(taskId);

    if (!task) {
      return { success: false, error: new Error("Task not found") };
    }

    if (!task.canBeCompletedBy(userId)) {
      return {
        success: false,
        error: new Error("User cannot complete this task"),
      };
    }

    const completedTask = task.complete();
    await this.taskRepository.save(completedTask);

    return { success: true, data: completedTask };
  }
}
```

## Step 4: Implement Repository with Supabase (`@liftera/infrastructure`)

```typescript
// packages/infrastructure/src/repositories/task.repository.ts
import type { SupabaseClient } from "@supabase/supabase-js";
import type { ITaskRepository } from "@liftera/application/ports/task-repository.port";
import { Task, TaskStatus } from "@liftera/core/entities/task";

export class TaskRepository implements ITaskRepository {
  constructor(private readonly supabase: SupabaseClient) {}

  async findById(id: string): Promise<Task | null> {
    const { data, error } = await this.supabase
      .from("tasks")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) return null;

    return new Task(
      data.id,
      data.title,
      data.status as TaskStatus,
      data.assignee_id,
    );
  }

  async findByAssignee(userId: string): Promise<Task[]> {
    const { data, error } = await this.supabase
      .from("tasks")
      .select("*")
      .eq("assignee_id", userId);

    if (error || !data) return [];

    return data.map(
      (item) =>
        new Task(
          item.id,
          item.title,
          item.status as TaskStatus,
          item.assignee_id,
        ),
    );
  }

  async save(task: Task): Promise<void> {
    await this.supabase.from("tasks").upsert({
      id: task.id,
      title: task.title,
      status: task.status,
      assignee_id: task.assigneeId,
    });
  }

  async delete(id: string): Promise<void> {
    await this.supabase.from("tasks").delete().eq("id", id);
  }
}
```

## Step 5: Use in Presentation Layer (`apps/web` or `apps/mobile`)

```typescript
// apps/web/app/tasks/[id]/complete/route.ts
import { container } from "@liftera/di";
import { setupDI } from "@/lib/setup-di";
import { CompleteTaskUseCase } from "@liftera/application/use-cases/complete-task.use-case";
import { NextRequest, NextResponse } from "next/server";

setupDI(); // Registers Supabase and all repositories

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { userId } = await request.json();

  const completeTask = container.resolve(CompleteTaskUseCase);
  const result = await completeTask.execute(params.id, userId);

  if (!result.success) {
    return NextResponse.json({ error: result.error.message }, { status: 400 });
  }

  return NextResponse.json({ task: result.data });
}
```
