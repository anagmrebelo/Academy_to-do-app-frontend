interface Task {
  id: number;
  value: string;
  dueDate: string;
  status: TaskStatus;
}

type TaskStatus = "complete" | "incomplete";

export type { Task };
