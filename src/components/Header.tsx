import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { auth } = useAuth();
  return (
    <header className="flex py-6 justify-around">
        <Link to={"dashboard"}>
            <BsHouseFill />
        </Link>

      <ul className="flex gap-4">
        <li>
            <span>logout</span>
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
