import { ITask } from "../interfaces/ITask";
import { Task } from "./Task";

interface TaskListProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  currUserId: number;
}

function TaskList({ tasks, setTasks, currUserId }: TaskListProps): JSX.Element {
  const taskList = tasks.map((oneTask) => (
    <Task
      key={oneTask.id}
      oneTask={oneTask}
      setTasks={setTasks}
      currUserId={currUserId}
    />
  ));
  return <>{taskList}</>;
}

export { TaskList };
