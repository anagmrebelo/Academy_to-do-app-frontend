interface ITask {
  id: number;
  value: string;
  due_date: string | undefined;
  status: boolean;
}

export type { ITask };
