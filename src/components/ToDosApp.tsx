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
    fetchTasks(setTasks);
  }, []);

  return (
    <>
      <Header />
      <OptionsBar />
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export { ToDosApp };
