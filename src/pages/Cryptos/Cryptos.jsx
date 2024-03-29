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
          console.log(data.data.data);
        setCoins(data.data.data);
      })
      .catch(() => console.log("Error"));
  }, []);

  if (!coins) {
    return <div className="h-screen w-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>;
  }
  return (
    <div className="flex flex-col justify-between px-20 gap-2 pb-20 max-md:px-5 mt-32">
      <h1 className="text-xl font-semibold py-2 mb-6">Criptomonedas</h1>
      <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {coins.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
          <Criptos
            key={id}
            id={id}
            name={name}
            priceUsd={priceUsd}
            symbol={symbol}
            changePercent24Hr={changePercent24Hr}
          />
        ))}
      </div>
    </div>
  );
}
