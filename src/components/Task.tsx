import { useState } from "react";
import { ITask } from "../interfaces/ITask";

interface TaskProps {
  oneTask: ITask;
}

function Task({ oneTask }: TaskProps): JSX.Element {
  const [editingMode, setEditingMode] = useState(false);
  const [oneTaskEditable, setOneTaskEditable] = useState(oneTask);

  const handleEditClick = () => {
    setEditingMode((previous) => !previous);
    // if previous is done, make a put request
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
