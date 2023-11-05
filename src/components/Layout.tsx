import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main
      className="text-white h-[100vh] w-[100vw] flex justify-center items-center bg-cover"
      style={{ backgroundImage: "url('../src/assets/homebg.jpg')" }}
    >
      <Outlet />
    </main>
  );
};

export default Layout;
