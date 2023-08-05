import axios from "axios";
import { ITask } from "../interfaces/ITask";

async function fetchAndSetTasks(
  url: string,
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) {
  axios.get(url).then((response) => {
    setTasks(response.data);
  });
}

export { fetchAndSetTasks };
