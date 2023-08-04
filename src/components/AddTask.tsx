import axios from "axios";
import { useState } from "react";
import { fetchTasks } from "../utils/fetchTasks";
import { ITask } from "../interfaces/ITask";
import { IAddTask } from "../interfaces/IAddTask";
import { validateTask } from "../utils/validateTask";

const cleanTask = {
  value: "",
  dueDate: "",
};

interface AddTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function AddTask({ setTasks }: AddTaskProps): JSX.Element {
  const [taskInp, setTaskInp] = useState<IAddTask>(cleanTask);

  const handleAddOnClick = () => {
    if (!validateTask(taskInp)) {
      return;
    }
    axios
      .post("https://anagmrebelo-to-do-app.onrender.com/tasks", {
        ...taskInp,
        status: false,
      })
      .then(() => fetchTasks(setTasks));
    setTaskInp(cleanTask);
  };
  return (
    <div className="flex">
      <p>+</p>
      <input
        type="text"
        placeholder="Type a task here..."
        value={taskInp.value}
        onChange={(e) => setTaskInp({ ...taskInp, value: e.target.value })}
      />
      <input
        type="date"
        value={taskInp.dueDate}
        onChange={(e) => setTaskInp({ ...taskInp, dueDate: e.target.value })}
      />
      <button onClick={handleAddOnClick}>Add</button>
    </div>
  );
}

export { AddTask };
