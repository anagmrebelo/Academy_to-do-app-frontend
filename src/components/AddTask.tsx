import axios from "axios";
import { useState, useEffect } from "react";
import { fetchAndSet } from "../utils/fetchTasks";
import { ITask } from "../interfaces/ITask";
import { IAddTask } from "../interfaces/IAddTask";
import { validateTask } from "../utils/validateTask";
import { Tr, Td, IconButton, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { IUser } from "../interfaces/IUser";
import { CreateToastFnReturn } from "@chakra-ui/react";

const cleanTask = {
  value: "",
  due_date: "",
};

interface AddTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  currUser: IUser | undefined;
  toast: CreateToastFnReturn;
}

function AddTask({ setTasks, currUser, toast }: AddTaskProps): JSX.Element {
  const [taskInp, setTaskInp] = useState<IAddTask>(cleanTask);

  async function handleKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      console.log("Enter key pressed!", taskInp);
      await validateAndAddTask();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const validateAndAddTask = async () => {
    if (!validateTask(taskInp, toast) || !currUser) {
      return;
    }
    await axios.post("https://anagmrebelo-to-do-app.onrender.com/tasks", {
      ...taskInp,
      status: false,
      user_id: currUser.id,
    });
    await fetchAndSet(
      `https://anagmrebelo-to-do-app.onrender.com/tasks/${currUser.id}`,
      setTasks
    );
    setTaskInp(cleanTask);
  };

  return (
    <Tr className="highlight-row">
      <Td>
        <IconButton
          aria-label="Add task"
          icon={<AddIcon />}
          onClick={validateAndAddTask}
        />
      </Td>
      <Td>
        <Input
          type="text"
          placeholder="Type a task here..."
          value={taskInp.value}
          onChange={(e) => setTaskInp({ ...taskInp, value: e.target.value })}
        />
      </Td>
      <Td>
        <Input
          type="Date"
          value={taskInp.due_date}
          onChange={(e) => setTaskInp({ ...taskInp, due_date: e.target.value })}
        />
      </Td>
      <Td></Td>
    </Tr>
  );
}

export { AddTask };
