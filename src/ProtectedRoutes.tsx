// import { Navigate, useLocation } from "react-router-dom"
// import { useContext } from 'react'
// import AuthContext from "./contexts/AuthContext"
// import DashBoard from "./Pages/Dashboard"

// const useAuth = () => {
//     const { auth } = useContext(AuthContext)
//     return auth
// }

// const ProtectedRoutes = () => {
//     const location = useLocation();
//     const isAuth = useAuth();
//     console.log(isAuth)
//     console.log('isAuth')
//     return isAuth ? (
//         <DashBoard/>
//     ) : (
//         <Navigate to="/login" replace state={{ from: location }} />
//     )
// }

// export default ProtectedRoutes;
