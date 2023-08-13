import axios from "axios";
import { useState } from "react";
import { fetchAndSet } from "../utils/fetchTasks";
import { ITask } from "../interfaces/ITask";
import { IAddTask } from "../interfaces/IAddTask";
import { validateTask } from "../utils/validateTask";

const cleanTask = {
  value: "",
  due_date: "",
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
        user_id: 1,
      })
      .then(() =>
        fetchAndSet(
          "https://anagmrebelo-to-do-app.onrender.com/tasks",
          setTasks
        )
      );
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
        value={taskInp.due_date}
        onChange={(e) => setTaskInp({ ...taskInp, due_date: e.target.value })}
      />
      <button onClick={handleAddOnClick}>Add</button>
    </div>
  );
}

export { AddTask };
