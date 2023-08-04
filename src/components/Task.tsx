import axios from "axios";
import { useState } from "react";
import { ITask } from "../interfaces/ITask";
import { fetchTasks } from "../utils/fetchTasks";
import { validateTask } from "../utils/validateTask";

interface TaskProps {
  oneTask: ITask;
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Task({ oneTask, setTasks }: TaskProps): JSX.Element {
  const [editingMode, setEditingMode] = useState(false);
  const [oneTaskEditable, setOneTaskEditable] = useState({ ...oneTask });

  const handleEditClick = () => {
    if (!validateTask(oneTaskEditable)) {
      return;
    }
    setEditingMode((previous) => !previous);
    if (editingMode === true) {
      axios
        .patch(
          `https://anagmrebelo-to-do-app.onrender.com/tasks/${oneTask.id}`,
          oneTaskEditable
        )
        .then(() => fetchTasks(setTasks));
    }
  };

  const handleStatusClick = () => {
    setOneTaskEditable((previous) => ({
      ...previous,
      status: !previous.status,
    }));
    axios
      .patch(`https://anagmrebelo-to-do-app.onrender.com/tasks/${oneTask.id}`, {
        status: !oneTaskEditable.status,
      })
      .then(() => fetchTasks(setTasks));
  };

  return (
    <div className="flex">
      {!oneTaskEditable.status ? (
        <button onClick={handleStatusClick}>Incomplete</button>
      ) : (
        <button onClick={handleStatusClick}>Complete</button>
      )}
      {!editingMode ? (
        <div className="flex">
          <p>{oneTaskEditable.value}</p>
          <p>{oneTaskEditable.dueDate}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Edit your task..."
            value={oneTaskEditable.value}
            onChange={(e) =>
              setOneTaskEditable({ ...oneTaskEditable, value: e.target.value })
            }
          />
          <input
            type="date"
            value={oneTaskEditable.dueDate}
            onChange={(e) =>
              setOneTaskEditable({
                ...oneTaskEditable,
                dueDate: e.target.value,
              })
            }
          />
          <button onClick={handleEditClick}>Done</button>
        </div>
      )}
    </div>
  );
}

export { Task };
