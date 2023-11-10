import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { auth } = useAuth();

  function handleLogOut() {
    console.log('logOut')
  }

  return (
    <header className="fixed right-0 left-0 flex justify-around py-6 bg-slate-800 border-b border-slate-600 rounded-md backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Link to={"dashboard"}>
        <BsHouseFill size={60} />
      </Link>

      <ul className="flex items-center gap-4">
        <li>
          <button className="bg-transparent" onClick={handleLogOut}>
            logOut
          </button>
        </li>
        <li>
          <Link to={"dashboard/profile"}>
            <span>profile image {auth?.profile.id}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
