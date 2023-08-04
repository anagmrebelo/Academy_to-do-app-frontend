import { ITask } from "../interfaces/ITask";
import { Task } from "./Task";

interface TaskListProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function TaskList({ tasks, setTasks }: TaskListProps): JSX.Element {
  const taskList = tasks.map((oneTask) => (
    <Task key={oneTask.id} oneTask={oneTask} setTasks={setTasks} />
  ));
  return <>{taskList}</>;
}

export { TaskList };
