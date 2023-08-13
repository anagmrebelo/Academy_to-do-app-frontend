import axios from "axios";
import { fetchAndSet } from "../utils/fetchTasks";
import { ITask } from "../interfaces/ITask";
import { IUser } from "../interfaces/IUser";

interface OptionsBarProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  users: IUser[];
  currUserId: number | null;
  setCurrUserId: React.Dispatch<React.SetStateAction<number | null>>;
}

function OptionsBar({ setTasks }: OptionsBarProps): JSX.Element {
  const handleFilterOnClick = (): void => {
    axios
      .patch("https://anagmrebelo-to-do-app.onrender.com/users/1", {
        option: "filter",
      })
      .then(() =>
        fetchAndSet(
          "https://anagmrebelo-to-do-app.onrender.com/tasks",
          setTasks
        )
      );
  };

  const handleSortOnClick = () => {
    axios
      .patch("https://anagmrebelo-to-do-app.onrender.com/users/1", {
        option: "sort",
      })
      .then(() =>
        fetchAndSet(
          "https://anagmrebelo-to-do-app.onrender.com/tasks",
          setTasks
        )
      );
  };
  // const
  // const userOptions =
  return (
    <div>
      <select></select>
      <button onClick={handleFilterOnClick}>Filter</button>
      <button onClick={handleSortOnClick}>Sort</button>
    </div>
  );
}

export { OptionsBar };
