import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <Link to={"/auth/login"} className="text-blue-500">
        LOGIN
      </Link>
    </div>
  );
}
