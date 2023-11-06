import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";

export default function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, setAuth, cookies } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        console.log("refresh");
        await refresh();
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    console.log(cookies)
    if (!auth && cookies.access) {
      setAuth({
        accessToken: cookies.access,
        profile: cookies.profile,
        refreshToken: cookies.refresh,
      });
    }
    // verifyRefreshToken();
    setIsLoading(false)
    return;
  }, []);

  useEffect(() => {
    console.log(`IsLoading, ${isLoading}`);
    console.log(`access, ${JSON.stringify(auth?.accessToken)}`);
  }, [isLoading]);
  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
}
