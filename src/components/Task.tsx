import axios from "axios";
import { useState } from "react";
import { ITask } from "../interfaces/ITask";
import { fetchAndSetTasks } from "../utils/fetchTasks";
import { validateTask } from "../utils/validateTask";

interface TaskProps {
  oneTask: ITask;
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Task({ oneTask, setTasks }: TaskProps): JSX.Element {
  const [editingMode, setEditingMode] = useState(false);
  const [draft, setDraft] = useState({ ...oneTask });

  const handleEditClick = () => {
    setEditingMode((previous) => !previous);
  };

  const handleDoneClick = () => {
    if (!validateTask(draft)) {
      return;
    }
    setEditingMode((previous) => !previous);
    axios
      .patch(
        `https://anagmrebelo-to-do-app.onrender.com/tasks/${oneTask.id}`,
        draft
      )
      .then(() =>
        fetchAndSetTasks(
          "https://anagmrebelo-to-do-app.onrender.com/tasks",
          setTasks
        )
      );
  };

  const handleStatusClick = () => {
    axios
      .patch(`https://anagmrebelo-to-do-app.onrender.com/tasks/${oneTask.id}`, {
        status: !oneTask.status,
      })
      .then(() =>
        fetchAndSetTasks(
          "https://anagmrebelo-to-do-app.onrender.com/tasks",
          setTasks
        )
      );
  };

  const handleCancelClick = () => {
    setDraft({ ...oneTask });
    setEditingMode((previous) => !previous);
  };

  return (
    <div className="flex">
      {!oneTask.status ? (
        <button onClick={handleStatusClick}>Incomplete</button>
      ) : (
        <button onClick={handleStatusClick}>Complete</button>
      )}
      {!editingMode ? (
        <div className="flex">
          <p>{oneTask.value}</p>
          <p>{oneTask.dueDate}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Edit your task..."
            value={draft.value}
            onChange={(e) => setDraft({ ...draft, value: e.target.value })}
          />
          <input
            type="date"
            value={draft.dueDate}
            onChange={(e) =>
              setDraft({
                ...draft,
                dueDate: e.target.value,
              })
            }
          />
          <button onClick={handleDoneClick}>Done</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export { Task };
