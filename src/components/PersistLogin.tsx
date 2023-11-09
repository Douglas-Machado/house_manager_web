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
      setCookie("access", newData.access, {path: "/", maxAge: 30})
      setCookie("refresh", newData.refresh, {path: "/", maxAge: 864000})
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function checkToken() {
      if (!auth) {
        if (cookies.access) {
          console.log(cookies)
          setAuth({
            accessToken: cookies.access,
            profile: cookies.profile,
            refreshToken: cookies.refresh,
          });
        } else if (!cookies.access && cookies.refresh) {
          await verifyRefreshToken(cookies.refresh);
        }
      }
      setIsLoading(false);
      return;
    }
    checkToken();
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
}
