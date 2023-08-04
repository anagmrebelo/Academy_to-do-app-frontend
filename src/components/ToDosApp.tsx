import { Header } from "./Header";
import { OptionsBar } from "./OptionsBar";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { useEffect, useState } from "react";
import { ITask } from "../interfaces/ITask";
import { fetchTasks } from "../utils/fetchTasks";

function ToDosApp(): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([]);
  useEffect(() => {
    fetchTasks("https://anagmrebelo-to-do-app.onrender.com/tasks", setTasks);
  }, []);

  return (
    <>
      <Header />
      <OptionsBar setTasks={setTasks} />
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export { ToDosApp };
