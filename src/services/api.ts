import axios from "axios";

export const api = axios.create({
  baseURL: `http://localhost:${import.meta.env.VITE_URL}/api`,
  timeout: 5000,
})
