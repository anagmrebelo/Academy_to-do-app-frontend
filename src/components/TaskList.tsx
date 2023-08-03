import { ITask } from "../interfaces/ITask";
import { Task } from "./Task";

interface TaskListProps {
  tasks: ITask[];
  setUpdateTasks: React.Dispatch<React.SetStateAction<boolean>>;
}

function TaskList({ tasks, setUpdateTasks }: TaskListProps): JSX.Element {
  const taskList = tasks.map((oneTask) => (
    <Task key={oneTask.id} oneTask={oneTask} setUpdateTasks={setUpdateTasks} />
  ));
  return <>{taskList}</>;
}

export { TaskList };
