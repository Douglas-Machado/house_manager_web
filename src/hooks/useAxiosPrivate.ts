// import { apiPrivate } from "../services/api";
// import { useEffect } from "react";
// import useRefreshToken from "./useRefreshToken";
// import useAuth from "./useAuth";
// import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// export default function useAxiosPrivate() {
//     const refresh = useRefreshToken();
//     const { auth } = useAuth();

//     useEffect(() => {
//         const responseIntercept = apiPrivate.interceptors.response.use(
//             response => response,
//             async (error) => {
//                 const prevRequest = error.config;
//                 if (error.response?.status === 401 && !prevRequest.sent) {
//                     prevRequest.sent = true;
//                     const newAccessToken = await refresh();
//                     prevRequest.headers['Authorization'] = `Bearer ${auth?.refreshToken}`;
//                     return apiPrivate(prevRequest)
//                 }
//             }
//         );
//     }, [auth, refresh])

//     return apiPrivate;
// }
