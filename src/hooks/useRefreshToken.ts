import { AxiosResponse } from "axios";
import api from "../services/api";
import useAuth from "./useAuth";

export default function useRefreshToken() {
  const { auth, setAuth } = useAuth();
  const refresh = async () => {
    console.log(auth?.refreshToken)
    const response: AxiosResponse = await api.post(
      "/token/refresh",
      JSON.stringify({ refresh: auth?.refreshToken }),
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
      };
    });
    return response.data.access;
  };

  return refresh;
}
