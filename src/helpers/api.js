import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
console.log(BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
});

const fetchData = async (endpoint) => {
  try {
    const url = new URL(endpoint, BASE_URL);
    const response = await api.get(url.toString());
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
