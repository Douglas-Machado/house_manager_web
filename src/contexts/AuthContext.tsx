import { ReactNode, createContext, useState } from "react";

export type IProfile = {
  email: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  house: number;
  owner: boolean;
  password: string;
};

type Auth = {
  profile: IProfile | null;
  accessToken: string;
};

type AuthContextType = {
  auth: Auth | null;
  setAuth: (data: Auth) => void;
};

type Props = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState<Auth | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
