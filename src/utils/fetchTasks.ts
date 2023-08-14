import axios from "axios";

async function fetchAndSet<T>(
  url: string,
  setFn: React.Dispatch<React.SetStateAction<T>>
) {
  axios.get(url).then((response) => {
    setFn(response.data);
  });
}

export { fetchAndSet };
