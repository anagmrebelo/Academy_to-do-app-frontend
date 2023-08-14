import { Header } from "./Header";
import { OptionsBar } from "./OptionsBar";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { useEffect, useState } from "react";
import { ITask } from "../interfaces/ITask";
import { IUser } from "../interfaces/IUser";
import { fetchAndSet } from "../utils/fetchTasks";

function ToDosApp(): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [currUserId, setCurrUserId] = useState<number>(1);

  useEffect(() => {
    fetchAndSet("https://anagmrebelo-to-do-app.onrender.com/users", setUsers);
  }, []);

  useEffect(() => {
    fetchAndSet(
      `https://anagmrebelo-to-do-app.onrender.com/tasks/${currUserId}`,
      setTasks
    );
  }, [currUserId]);

  return (
    <>
      <Header currUserId={currUserId} users={users} />
      <OptionsBar
        setTasks={setTasks}
        users={users}
        currUserId={currUserId}
        setCurrUserId={setCurrUserId}
      />
      <AddTask setTasks={setTasks} currUserId={currUserId} />
      <TaskList tasks={tasks} setTasks={setTasks} currUserId={currUserId} />
    </>
  );
}

export { ToDosApp };
