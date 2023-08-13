import axios from "axios";
import { useState } from "react";
import { ITask } from "../interfaces/ITask";
import { fetchAndSet } from "../utils/fetchTasks";
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
        fetchAndSet(
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
        fetchAndSet(
          "https://anagmrebelo-to-do-app.onrender.com/tasks",
          setTasks
        )
      );
  };

  const handleCancelClick = () => {
    setDraft({ ...oneTask });
    setEditingMode((previous) => !previous);
  };

  const handleDeleteClick = () => {
    axios
      .delete(`https://anagmrebelo-to-do-app.onrender.com/tasks/${oneTask.id}`)
      .then(() =>
        fetchAndSet(
          "https://anagmrebelo-to-do-app.onrender.com/tasks",
          setTasks
        )
      );
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
          <p>{oneTask.due_date}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
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
            value={draft.due_date}
            onChange={(e) =>
              setDraft({
                ...draft,
                due_date: e.target.value,
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
