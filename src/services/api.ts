import axios from "axios";

const BASE_URL = `http://localhost:${import.meta.env.VITE_URL}/api`;

export default axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});
