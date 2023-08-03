import { Header } from "./Header";
import { OptionsBar } from "./OptionsBar";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { useEffect, useState } from "react";
import { ITask } from "../interfaces/ITask";
import axios from "axios";

function ToDosApp(): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [updateTasks, setUpdateTasks] = useState(true);
  useEffect(() => {
    async function fetchTasks() {
      axios
        .get("https://anagmrebelo-to-do-app.onrender.com/tasks")
        .then((response) => {
          setTasks(response.data);
        });
    }
    fetchTasks();
  }, [updateTasks]);

  return (
    <>
      <Header />
      <OptionsBar />
      <AddTask setUpdateTasks={setUpdateTasks} />
      <TaskList tasks={tasks} setUpdateTasks={setUpdateTasks} />
    </>
  );
}

export { ToDosApp };
