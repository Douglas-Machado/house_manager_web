import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import AuthContext, { IProfile } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { AxiosError, AxiosResponse } from "axios";

type SignInRequestData = {
  email: string;
  password: string;
};

export function Login() {
  const { setAuth } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<SignInRequestData>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<IProfile | null>(null)

  async function handleSignIn({ email, password }: SignInRequestData) {
    try {
      const response: AxiosResponse = await api.post(
        "/auth/login/",
        JSON.stringify({ email, password }),
        {
            headers: { 'Content-Type': 'application/json'},
        }
      );
      const accessToken: string = response.data?.access;
      setAuth({ profile, accessToken})
      setProfile(null)
      navigate("/dashboard")
    } catch (err) {
        const error = err as AxiosError
        if (!error.response) {
            console.log("deu erro")
        }
    }
  }

  return (
    <div>
      <div className="bg-slate-800 border border-slate-600 rounded-md p-8 backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="relative my-4">
            <input
              type="email"
              {...register("email")}
              name="email"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
            <BiUser className="absolute top-4 right-4" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              {...register("password")}
              name="password"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remember Me">Rmember Me</label>
            </div>
            <Link to="" className="text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
          >
            Login
          </button>
          <div>
            <span className="m-4">
              New Here?{" "}
              <Link to={"/register"} className="text-blue-500">
                Create an Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
