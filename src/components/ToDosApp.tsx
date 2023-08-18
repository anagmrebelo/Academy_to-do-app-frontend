import { Header } from "./Header";
import { OptionsBar } from "./OptionsBar";
import { TaskList } from "./TaskList";
import { useEffect, useState } from "react";
import { ITask } from "../interfaces/ITask";
import { IUser } from "../interfaces/IUser";
import { fetchAndSet } from "../utils/fetchTasks";
import { useToast, Heading } from "@chakra-ui/react";

function ToDosApp(): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [currUser, setCurrUser] = useState<IUser>();
  const toast = useToast();

  useEffect(() => {
    fetchAndSet("https://anagmrebelo-to-do-app.onrender.com/users", setUsers);
  }, [currUser]);

  useEffect(() => {
    currUser &&
      fetchAndSet(
        `https://anagmrebelo-to-do-app.onrender.com/tasks/${currUser.id}`,
        setTasks
      );
  }, [currUser]);

  return (
    <>
      <Header currUser={currUser} users={users} setCurrUser={setCurrUser} />
      {!currUser ? (
        <Heading as="h2" size="md" ml={16}>
          Please select a user from the right top menu
        </Heading>
      ) : (
        <>
          <OptionsBar
            setTasks={setTasks}
            users={users}
            currUser={currUser}
            setCurrUser={setCurrUser}
          />
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            currUser={currUser}
            toast={toast}
          />
        </>
      )}
    </>
  );
}

export { ToDosApp };
