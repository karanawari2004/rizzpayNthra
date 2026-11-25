import axios from "axios";

const api = axios.create({
  baseURL: "https://rizzpaynthra-4.onrender.com/api",
  withCredentials: true,
});

export default api;
