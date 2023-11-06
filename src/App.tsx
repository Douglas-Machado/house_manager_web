import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import Profile from "./Pages/Dashboard/Profile";
import Dashboard from "./Pages/Dashboard";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Missing from "./Pages/Missing";
import Home from "./Pages/Home";
import PersistLogin from "./components/PersistLogin";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* home */}
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
        {/* missing */}
        <Route path="*" element={<Layout />}>
          <Route path="*" element={<Missing />} />
        </Route>

        {/* auth */}
        <Route path="/auth" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* dashboard */}
        <Route element={<PersistLogin />}>
          <Route path="/dashboard" element={<Layout />}>
            <Route element={<RequireAuth />}>
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route element={<RequireAuth />}>
              <Route path="" element={<Dashboard />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
