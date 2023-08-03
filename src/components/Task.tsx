import { useState } from "react";
import { ITask } from "../interfaces/ITask";

interface TaskProps {
  oneTask: ITask;
}

function Task({ oneTask }: TaskProps): JSX.Element {
  const [editingMode, setEditingMode] = useState(false);
  const [oneTaskEdited, setOneTaskEdited] = useState(oneTask);

  const handleEditClick = () => {
    setEditingMode((previous) => !previous);
    // if previous is done, make a put request
  };

  const handleStatusClick = () => {
    //make a put request to update status to !oneTaskEdited
  };

  return (
    <div className="flex">
      {!oneTaskEdited.status ? (
        <button onClick={handleStatusClick}>Incomplete</button>
      ) : (
        <button onClick={handleStatusClick}>Complete</button>
      )}
      {!editingMode ? (
        <div className="flex">
          <p>{oneTaskEdited.value}</p>
          <p>{oneTaskEdited.dueDate}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Edit your task..."
            value={oneTaskEdited.value}
            onChange={(e) =>
              setOneTaskEdited({ ...oneTaskEdited, value: e.target.value })
            }
          />
          <input
            type="date"
            value={oneTaskEdited.dueDate}
            onChange={(e) =>
              setOneTaskEdited({ ...oneTaskEdited, dueDate: e.target.value })
            }
          />
          <button onClick={handleEditClick}>Done</button>
        </div>
      )}
    </div>
  );
}

export { Task };
