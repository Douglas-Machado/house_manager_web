import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { AxiosError } from "axios";

type SignUpData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birth_date: Date;
};

export function Register() {
  const { register, handleSubmit } = useForm<SignUpData>();
  const navigate = useNavigate();

  async function handleRegister(data: SignUpData) {
    try {
      const response = await api.post("/auth/register/", JSON.stringify(data), {
        headers: {
          "Content-Type": "Application/json",
        },
      });
      console.log(response.status);
      navigate("/login");
    } catch (err) {
      const error = err as AxiosError;
      if (!error.message) {
        console.log("deu erro");
      }
    }
  }

  return (
    <div>
      <div className="bg-slate-800 border border-slate-600 rounded-md p-8 backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Register
        </h1>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="relative my-4">
            <input
              type="text"
              {...register("first_name")}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First Name
            </label>
            <BiUser className="absolute top-4 right-4" />
          </div>
          <div className="relative my-4">
            <input
              type="text"
              {...register("last_name")}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last Name
            </label>
            <BiUser className="absolute top-4 right-4" />
          </div>
          <div className="relative my-4">
            <input
              type="email"
              {...register("email")}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
            <BiUser className="absolute top-4 right-4" />
          </div>
          <div className="relative my-4 text-center">
            <small>Birth Date</small>
            <input
              type="date"
              {...register("birth_date")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date"
            />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              {...register("password")}
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
          <div className="relative my-4">
            <input
              type="password"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Your Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4" />
          </div>
          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
          >
            Login
          </button>
          <div>
            <span className="m-4">
              Already Have an Account?{" "}
              <Link to={"/auth/login"} className="text-blue-500">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
