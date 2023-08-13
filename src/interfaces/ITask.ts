interface ITask {
  id: number;
  value: string;
  due_date: string;
  status: boolean;
}

interface IDraft {
  value: string;
  due_date: Date;
}

// interface ITask {
//   :
//   draft: IDraft
// }

export type { ITask };
