import { AxiosError, AxiosResponse } from "axios";
import api from "../services/api";

export default function useRefreshToken() {
  const refresh = async (refreshToken: string) => {
    try {
      const response: AxiosResponse = await api.post(
        "/token/refresh",
        JSON.stringify({ refresh: refreshToken }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.response?.data)
    }
  };

  return refresh;
}
