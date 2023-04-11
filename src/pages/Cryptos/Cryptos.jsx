import { useEffect, useState } from "react";
import axios from "axios";
import Criptos from "../../components/criptos/Criptos";

export default function CryptosPage() {
  
  const [coins, setCoins] = useState();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((data) => {
        setCoins(data.data.data);
      })
      .catch(() => console.log("Error"));
  }, []);

  if (!coins) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="flex flex-col justify-between px-20 gap-2 pb-20">
      <h1 className="text-xl font-semibold py-2 mb-6">Criptomonedas</h1>
      {coins.map(({id, name, priceUsd}) => (
       <Criptos key={id} name={name} priceUsd={priceUsd}/>
      ))}
    </div>
  );
}
