import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <main
        className="text-white h-[100vh] w-[100vw] flex justify-center items-center bg-cover"
        style={{ backgroundImage: "url('../src/assets/homebg.jpg')" }}
      >
        <Outlet />
      </main>
    </>
  );
}
