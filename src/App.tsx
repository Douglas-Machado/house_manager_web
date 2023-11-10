import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import Profile from "./Pages/Dashboard/Profile";
import Dashboard from "./Pages/Dashboard";
import HomeLayout from "./components/HomeLayout";
import DashboardLayout from "./components/DashboardLayout";
import RequireAuth from "./components/RequireAuth";
import Missing from "./Pages/Missing";
import Home from "./Pages/Home";
import PersistLogin from "./components/PersistLogin";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* home */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<DashboardLayout />}>
          {/* missing */}
          <Route path="*">
            <Route path="*" element={<Missing />} />
          </Route>

          {/* auth */}
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* dashboard */}
          <Route element={<PersistLogin />}>
            <Route path="/dashboard">
              <Route element={<RequireAuth />}>
                <Route path="profile" element={<Profile />} />
              </Route>

              <Route element={<RequireAuth />}>
                <Route path="" element={<Dashboard />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
