import axios from "axios";
import { useState } from "react";
import { ITask } from "../interfaces/ITask";
import { fetchAndSet } from "../utils/fetchTasks";
import { validateTask } from "../utils/validateTask";
import {
  Tr,
  Td,
  IconButton,
  Checkbox,
  ButtonGroup,
  Input,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IUser } from "../interfaces/IUser";
import { CreateToastFnReturn } from "@chakra-ui/react";

interface TaskProps {
  oneTask: ITask;
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  currUser: IUser | undefined;
  toast: CreateToastFnReturn;
}

function Task({ oneTask, setTasks, currUser, toast }: TaskProps): JSX.Element {
  const [editingMode, setEditingMode] = useState(false);
  const [draft, setDraft] = useState({ ...oneTask });

  const handleEditClick = () => {
    setEditingMode((previous) => !previous);
  };

  const handleDoneClick = async () => {
    if (!validateTask(draft, toast) || !currUser) {
      return;
    }
    setEditingMode((previous) => !previous);
    await axios.patch(
      `https://anagmrebelo-to-do-app.onrender.com/tasks/${oneTask.id}`,
      draft
    );
    await fetchAndSet(
      `https://anagmrebelo-to-do-app.onrender.com/tasks/${currUser.id}`,
      setTasks
    );
  };

  const handleStatusClick = async () => {
    if (!currUser) {
      return;
    }
    await axios.patch(
      `https://anagmrebelo-to-do-app.onrender.com/tasks/${oneTask.id}`,
      {
        status: !oneTask.status,
      }
    );
    await fetchAndSet(
      `https://anagmrebelo-to-do-app.onrender.com/tasks/${currUser.id}`,
      setTasks
    );
  };

  const handleCancelClick = () => {
    setDraft({ ...oneTask });
    setEditingMode((previous) => !previous);
  };

  const handleDeleteClick = async () => {
    if (!currUser) {
      return;
    }
    setTasks((previous) => previous.filter((item) => item.id != oneTask.id));
    const deletedTask = await axios.delete(
      `https://anagmrebelo-to-do-app.onrender.com/tasks/${oneTask.id}`
    );
  };

  return (
    <Tr>
      {!editingMode ? (
        <>
          <Td>
            <Checkbox
              size="lg"
              onChange={handleStatusClick}
              isChecked={oneTask.status}
            ></Checkbox>
          </Td>
          <Td>{oneTask.value}</Td>
          <Td>{oneTask.due_date?.slice(0, 10)}</Td>
          <Td>
            <ButtonGroup spacing="6">
              <IconButton
                aria-label="Edit task"
                icon={<EditIcon />}
                onClick={handleEditClick}
              />
              <IconButton
                aria-label="Delete task"
                icon={<DeleteIcon />}
                onClick={handleDeleteClick}
              />
            </ButtonGroup>
          </Td>
        </>
      ) : (
        <>
          <Td>
            <Checkbox size="lg"></Checkbox>
          </Td>
          <Td>
            <Input
              variant="filled"
              placeholder="Edit your task..."
              value={draft.value}
              onChange={(e) => setDraft({ ...draft, value: e.target.value })}
            />
          </Td>
          <Td>
            <Input
              variant="filled"
              value={draft.due_date?.slice(0, 10)}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  due_date: e.target.value,
                })
              }
              type="Date"
            />
          </Td>
          <Td>
            <ButtonGroup spacing="6">
              <IconButton
                aria-label="Save changes"
                icon={<CheckIcon />}
                onClick={handleDoneClick}
              />
              <IconButton
                aria-label="cancel changes"
                icon={<CloseIcon />}
                onClick={handleCancelClick}
              />
            </ButtonGroup>
          </Td>
        </>
      )}
    </Tr>
  );
}

export { Task };
