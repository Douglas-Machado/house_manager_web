import { Navigate, useLocation } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from "./contexts/AuthContext"
import { Profile } from "./Pages/Profile"

const useAuth = () => {
    const { profile } = useContext(AuthContext)
    return profile
}

const ProtectedRoutes = () => {
    const location = useLocation();
    const isAuth = useAuth();
    return isAuth ? (
        <Profile/>
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    )
}

export default ProtectedRoutes;
