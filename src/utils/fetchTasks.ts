import axios from "axios";

async function fetchAndSet<T>(
  url: string,
  setFn: React.Dispatch<React.SetStateAction<T>>
) {
  const response = await axios.get(url);
  setFn(response.data);
}

export { fetchAndSet };
