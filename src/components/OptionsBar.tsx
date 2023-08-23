import axios from "axios";
import { fetchAndSet } from "../utils/fetchTasks";
import { ITask } from "../interfaces/ITask";
import { IUser } from "../interfaces/IUser";
import { Stack, Switch, FormLabel } from "@chakra-ui/react";

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
      <FormLabel htmlFor="isChecked">Sort by due date </FormLabel>
      <Switch
        id="isChecked"
        isChecked={currUser?.sort}
        onChange={handleSortOnClick}
      />
      <FormLabel htmlFor="isChecked">Hide complete taks </FormLabel>
      <Switch
        id="isChecked"
        isChecked={currUser?.filter}
        onChange={handleFilterOnClick}
      />
    </Stack>
  );
}

export { OptionsBar };
