import axios from "axios";
import { fetchTasks } from "../utils/fetchTasks";
import { ITask } from "../interfaces/ITask";

interface OptionsBarProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function OptionsBar({ setTasks }: OptionsBarProps): JSX.Element {
  const handleFilterOnClick = (): void => {
    axios
      .patch("https://anagmrebelo-to-do-app.onrender.com/options", {
        type: "filter",
      })
      .then(() =>
        fetchTasks("https://anagmrebelo-to-do-app.onrender.com/tasks", setTasks)
      );
  };

  const handleSortOnClick = () => {
    axios
      .patch("https://anagmrebelo-to-do-app.onrender.com/options", {
        type: "sort",
      })
      .then(() =>
        fetchTasks("https://anagmrebelo-to-do-app.onrender.com/tasks", setTasks)
      );
  };

  return (
    <div>
      <button onClick={handleFilterOnClick}>Filter</button>
      <button onClick={handleSortOnClick}>Sort</button>
    </div>
  );
}

export { OptionsBar };
