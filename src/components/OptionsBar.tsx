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

function OptionsBar({
  setTasks,
  users,
  setCurrUserId,
}: OptionsBarProps): JSX.Element {
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
  const userOptions = users.map((oneUser) => (
    <option key={oneUser.id} value={oneUser.id}>
      {oneUser.name}
    </option>
  ));
  return (
    <div>
      <select onChange={(e) => setCurrUserId(parseInt(e.target.value))}>
        {userOptions}
      </select>
      <button onClick={handleFilterOnClick}>Filter</button>
      <button onClick={handleSortOnClick}>Sort</button>
    </div>
  );
}

export { OptionsBar };
