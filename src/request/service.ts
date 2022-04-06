import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
  timeout: 20000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
