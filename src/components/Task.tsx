import { useState } from "react";
import { ITask } from "../interfaces/ITask";
import axios from "axios";

interface TaskProps {
  oneTask: ITask;
  setUpdateTasks: React.Dispatch<React.SetStateAction<boolean>>;
}

function Task({ oneTask, setUpdateTasks }: TaskProps): JSX.Element {
  const [editingMode, setEditingMode] = useState(false);
  const [oneTaskEditable, setOneTaskEditable] = useState(oneTask);

  const handleEditClick = () => {
    setEditingMode((previous) => !previous);
    if (editingMode === true) {
      axios.patch(
        `https://anagmrebelo-to-do-app.onrender.com/tasks/${oneTask.id}`,
        oneTaskEditable
      );
      setUpdateTasks((previous) => !previous);
    }
  };

  const handleStatusClick = () => {
    console.log(oneTaskEditable.dueDate);
    //make a put request to update status to !oneTaskEditable
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
