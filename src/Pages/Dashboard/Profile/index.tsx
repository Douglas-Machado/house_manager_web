import useAuth from "../../../hooks/useAuth";
import ProfilePng from "../../../assets/profile2.jpg";
import { useState } from "react";
import { Profile } from "../../../contexts/AuthContext";
import api from "../../../services/api";
import { AxiosError } from "axios";

export default function Profile() {
  const { auth } = useAuth();
  const [profile, setProfile] = useState<Profile>(auth!.profile);

  async function editUser() {
    try {
      const response = await api.patch(
        `profiles/${profile.id}/`,
        { email: profile.email },
        {
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setProfile((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className="w-10/12 h-5/6 bg-slate-800 border-2 border-slate-600 rounded-md p-8 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="flex justify-center">
        <img
          src={ProfilePng}
          alt="profile"
          className="w-28 rounded-full border-4"
        />
      </div>
      <div className="text-center">
        <h1>{auth?.profile?.first_name}</h1>
      </div>
      <div className="mt-9 flex flex-col gap-7">
        <div className="flex justify-around">
          <input
            className="w-72 py-3 px-0 test-sm text-white bg-transparent border-0 border-b-2"
            type="text"
            name="first_name"
            value={profile?.first_name}
            disabled
          />

          <input
            className="w-72 py-3 px-0 test-sm text-white bg-transparent border-0 border-b-2"
            type="text"
            name="first_name"
            value={profile?.last_name}
            disabled
          />
          <input
            className="w-72 py-3 px-0 test-sm text-white bg-transparent border-0 border-b-2"
            type="date"
            name="first_name"
            value={profile?.birth_date}
            disabled
          />
        </div>
        <div className="flex justify-center">
          <input
            className="w-72 py-3 px-0 test-sm text-white bg-transparent border-0 border-b-2"
            type="email"
            name="email"
            value={profile?.email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <button onClick={editUser}>salvar informações</button>
        </div>
      </div>
    </div>
  );
}
