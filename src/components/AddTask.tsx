import { useState } from "react";
import axios from "axios";

interface IAddTask {
  value: undefined | string;
  dueDate: undefined | string;
}

const cleanTask = {
  value: undefined,
  dueDate: undefined,
};

interface AddTaskProps {
  setUpdateTasks: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddTask({ setUpdateTasks }: AddTaskProps): JSX.Element {
  const [taskInp, setTaskInp] = useState<IAddTask>(cleanTask);
  const handleAddOnClick = () => {
    // if both fields are not empty
    //    POST request
    axios.post("https://anagmrebelo-to-do-app.onrender.com/tasks", {
      ...taskInp,
      status: false,
    });
    setTaskInp(cleanTask);
    setUpdateTasks((previous) => !previous);
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
