interface ITask {
  id: number;
  value: string;
  dueDate: string;
  status: boolean;
}

interface IDraft {
  value: string;
  dueDate: Date;
}

// interface ITask {
//   :
//   draft: IDraft
// }

export type { ITask };
