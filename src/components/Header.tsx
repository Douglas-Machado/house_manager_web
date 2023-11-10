import { BsHouseFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useCookies } from "react-cookie";

export default function Header() {
  const { auth, setAuth } = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  function handleLogOut() {
    setAuth(null)
    removeCookie("access", {path: "/"})
    removeCookie("profile", {path: "/"})
    removeCookie("refresh", {path: "/"})
    navigate("/auth/login")
  }

  return (
    <header className="fixed right-0 left-0 flex justify-around py-6 bg-slate-800 border-b border-slate-600 rounded-md backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Link to={"dashboard"}>
        <BsHouseFill size={60} />
      </Link>

      <ul className="flex items-center gap-4">
        <li>
          <button
            className="bg-transparent outline-none hover:outline-none"
            onClick={handleLogOut}>
            logOut
          </button>
        </li>
        <li>
          <Link to={"dashboard/profile"}>
            <span>profile image id: {auth?.profile.id}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
