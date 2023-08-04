import axios from "axios";
import { ITask } from "../interfaces/ITask";

async function fetchTasks(
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) {
  axios
    .get("https://anagmrebelo-to-do-app.onrender.com/tasks")
    .then((response) => {
      setTasks(response.data);
    });
}

export { fetchTasks };
