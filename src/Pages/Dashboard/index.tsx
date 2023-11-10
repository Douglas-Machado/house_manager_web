import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { BsHouseFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import api from "../../services/api";

type House = {
  id: number;
  name: string;
};

export default function DashBoard() {
  const { auth } = useAuth();
  const [houses, setHouses] = useState<House[]>([]);
  
  
  useEffect(() => {
    async function getHouses() {
      try {
        const response = await api.get("/houses", {
          headers: {
            "Authorization": `Bearer ${auth!.accessToken}`
          }
        });
        setHouses(response.data);
      } catch (err) {
        const error = err as AxiosError;
        console.log(error)
        if (!error.message) {
          console.log("deu ruim");
        }
      }
    }
    getHouses();
  }, [auth]);

  return (
    <div className="bg-slate-800 border border-slate-600 rounded-md p-8 backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
      {houses.map((house) => {
        return (
          <div key={house.id}>
            <p>{house.name}</p>
            <BsHouseFill size={60} color="#900e0e" weight="fill" />
          </div>
        );
      })}
      <div>
        <Link to={"profile"} relative="path">Profile</Link>
      </div>
    </div>
  );
}
