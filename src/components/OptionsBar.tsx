import axios from "axios";
import { fetchAndSet } from "../utils/fetchTasks";
import { ITask } from "../interfaces/ITask";
import { IUser } from "../interfaces/IUser";
import { Checkbox, Stack } from "@chakra-ui/react";

interface OptionsBarProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  users: IUser[];
  currUser: IUser | undefined;
  setCurrUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

function OptionsBar({
  setTasks,
  users,
  currUser,
  setCurrUser,
}: OptionsBarProps): JSX.Element {
  const handleFilterOnClick = async (): Promise<void> => {
    if (!currUser) {
      return;
    }
    const response = await axios.patch(
      `https://anagmrebelo-to-do-app.onrender.com/users/${currUser.id}`,
      {
        option: "filter",
      }
    );
    setCurrUser(response.data);
    await fetchAndSet(
      `https://anagmrebelo-to-do-app.onrender.com/tasks/${currUser.id}`,
      setTasks
    );
  };

  const handleSortOnClick = async () => {
    if (!currUser) {
      return;
    }
    const response = await axios.patch(
      `https://anagmrebelo-to-do-app.onrender.com/users/${currUser.id}`,
      {
        option: "sort",
      }
    );
    setCurrUser(response.data);
    await fetchAndSet(
      `https://anagmrebelo-to-do-app.onrender.com/tasks/${currUser.id}`,
      setTasks
    );
  };
  return (
    <Stack spacing={5} direction="row" justifyContent="flex-end" pr={12}>
      <Checkbox isChecked={currUser?.sort} onChange={handleSortOnClick}>
        Sort by due date
      </Checkbox>
      <Checkbox isChecked={currUser?.filter} onChange={handleFilterOnClick}>
        Hide complete taks
      </Checkbox>
    </Stack>
  );
}

export { OptionsBar };
