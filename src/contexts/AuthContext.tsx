import { ReactNode, createContext, useState } from "react";
import { useCookies } from "react-cookie";

export type Profile = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  house: number;
  owner: boolean;
  password: string;
};

export type Auth = {
  profile: Profile;
  accessToken: string;
  refreshToken: string;
};

export type AuthContextType = {
  auth: Auth | null;
  setAuth: (data: Auth) => void;
  cookies: object;
  setTokens: ({profile, accessToken, refreshToken}: Auth) => void;
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies();

  function setTokens ({accessToken, refreshToken, profile}: Auth) {
    removeCookie("access")
    removeCookie("refresh")
    removeCookie("profile")
    setCookie("access", accessToken, {path: "/", maxAge: 30});
    setCookie("refresh", refreshToken, {path: "/"});
    setCookie("profile", profile, {path: "/"})
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, cookies, setTokens }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
