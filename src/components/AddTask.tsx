import { useState } from "react";

interface IAddTask {
  value: undefined | string;
  dueDate: undefined | string;
}

const cleanTask = {
  value: undefined,
  dueDate: undefined,
};

function AddTask(): JSX.Element {
  const [taskInp, setTaskInp] = useState<IAddTask>(cleanTask);
  const handleAddOnClick = () => {
    // if both fields are not empty
    //    POST request
    // clear inputs
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
      <input type="date" value={taskInp.dueDate} />
      <button onClick={handleAddOnClick}>Add</button>
    </div>
  );
}

export { AddTask };
