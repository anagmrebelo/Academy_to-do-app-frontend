import { tasks } from "../dataTemp/tasks";
import { Task } from "./Task";

function TaskList(): JSX.Element {
  const taskList = tasks.map((oneTask) => (
    <Task key={oneTask.id} oneTask={oneTask} />
  ));
  return <>{taskList}</>;
}

export { TaskList };
