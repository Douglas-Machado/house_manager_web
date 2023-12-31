import { useContext, useDebugValue } from "react";
import AuthContext from "../contexts/AuthContext";

export default function useAuth() {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.profile ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
}
