import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
function App() {
  const [coins, setCoins] = useState();
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        console.log(data);
        setCoins(data.data.data)
      })
      .catch(() => console.log("Error"));
  }, []);
  
  
  if (!coins) {
    return <div>Cargando...</div>;
  }
  
  
  return (
    <div className="App">
      <div>
        <main>
          <h1 className="font-bold text-6xl">
            Analiza el mercado de las criptomonedas
          </h1>
          <p className="text-xl">
            Obtén información sobre las tendencias de precios, volumen y
            capitalización del mercado de las criptomonedas y descubre las
            mejores oportunidades de inversión en criptomonedas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coins.map(({id, name}) => (
              <li key={id}>{name}</li>
            ))}
            </div>
        </main>
      </div>
    </div>
  );
}

export default App;
