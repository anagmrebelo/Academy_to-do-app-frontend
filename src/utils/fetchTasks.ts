import axios from "axios";
import { ITask } from "../interfaces/ITask";

async function fetchTasks(
  url: string,
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) {
  axios.get(url).then((response) => {
    setTasks(response.data);
  });
}

export { fetchTasks };
