import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, setAuth } = useAuth();
  const [cookies, setCookie] = useCookies();

  const verifyRefreshToken = async (refreshToken: string) => {
    try {
      const newData = await refresh(refreshToken);
      setAuth(prev => {
        return {
          ...prev,
          profile: cookies.profile,
          accessToken: newData.access,
          refreshToken: newData.refresh,
        };
      });
      setCookie("refresh", newData.refresh)
      setCookie("access", newData.access, {path: "/", maxAge: 30})
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function checkToken() {
      if (auth) {
        setIsLoading(false);
        return;
      }
      if (cookies.access) {
        setAuth({
          accessToken: cookies.access,
          profile: cookies.profile,
          refreshToken: cookies.refresh,
        });
      } else if (!cookies.access && cookies.refresh) {
        await verifyRefreshToken(cookies.refresh);
      }
      setIsLoading(false);
      return;
    }
    checkToken();
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
}
