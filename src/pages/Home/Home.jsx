import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import coinsimg from "../../assets/coins.svg";

function Home() {
  const [coins, setCoins] = useState();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((data) => {
        //console.log(data);
        setCoins(data.data.data);
      })
      .catch(() => console.log("Error"));
  }, []);

  if (!coins) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="home pt-16 px-16 mt-4">
      <div className="flex flex-row justify-center items-center">
        <div className="w-1/2 left flex flex-col gap-8">
          <h1 className="font-bold text-7xl whitespace-nowrap">
            Analiza el mercado <br /> de las criptomonedas
          </h1>
          <p className="text-xl">
            Obtén información sobre las tendencias de precios, volumen y
            capitalización del mercado de las criptomonedas y descubre las
            mejores oportunidades de inversión en criptomonedas.
          </p>
          <a
            href="#"
            className="main_button flex gap-3 items-center w-60 py-2 px-4 rounded-full"
          >
            <span className="w-12 h-12 bg-blue-700 flex items-center justify-center rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="m11.953 8.819-.547 2.19c.619.154 2.529.784 2.838-.456.322-1.291-1.673-1.579-2.291-1.734zm-.822 3.296-.603 2.415c.743.185 3.037.921 3.376-.441.355-1.422-2.029-1.789-2.773-1.974z"></path>
                <path d="M14.421 2.299C9.064.964 3.641 4.224 2.306 9.581.97 14.936 4.23 20.361 9.583 21.697c5.357 1.335 10.783-1.924 12.117-7.281 1.336-5.356-1.924-10.781-7.279-12.117zm1.991 8.275c-.145.974-.686 1.445-1.402 1.611.985.512 1.485 1.298 1.009 2.661-.592 1.691-1.998 1.834-3.87 1.48l-.454 1.82-1.096-.273.447-1.794a44.624 44.624 0 0 1-.875-.228l-.449 1.804-1.095-.275.454-1.823c-.257-.066-.517-.136-.782-.202L6.87 15l.546-1.256s.808.215.797.199c.311.077.448-.125.502-.261l.719-2.875.115.029a.864.864 0 0 0-.114-.037l.512-2.053c.013-.234-.066-.528-.511-.639.018-.011-.797-.198-.797-.198l.291-1.172 1.514.378-.001.005c.227.057.461.111.7.165l.449-1.802 1.097.273-.44 1.766c.294.067.591.135.879.207l.438-1.755 1.097.273-.449 1.802c1.384.479 2.396 1.195 2.198 2.525z"></path>
              </svg>
            </span>
            <span className="font-semibold text-sm">Ver los precios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              className="svg-icon"
            >
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </svg>
          </a>
        </div>
        <div className="w-1/2 right flex items-center justify-center">
          <img src={coinsimg} alt="" />
        </div>
      </div>
      <div>
        {/* barra de criptomonedas */}
        <div className="top-cryptos px-8 py-8 flex justify-between gap-8 mx-2 rounded-xl mb-8">
          {/* primer cripto */}
          <div className="w-full flex flex-col gap-8">
            <div className="top flex gap-1 items-baseline">
              <p className="font-semibold">BTC</p>
              <span className="text-xs text-gray-500">/USD</span>
            </div>
            <div className="bottom">
              <div className="price flex justify-between items-start">
                <div>
                  <h1 className="priceUSD font-bold text-2xl">{parseFloat(coins[0].priceUsd).toFixed(2)}</h1>
                  <p className="priceBTC text-xs text-gray-500">
                    0.00000000 BTC
                  </p>
                </div>
                <p className="p-2 bg-green-600 text-xs font-semibold rounded-xl text-white">
                  +0.80%
                </p>
              </div>
            </div>
          </div>
          {/* dividor */}
          <div className="divisor border-r-2 border-gray-200 block py-4"></div>
          {/* segunda cripto */}
          <div className="w-full flex flex-col gap-8">
            <div className="top flex gap-1 items-baseline">
              {/* Tether */}
              <p className="font-semibold">Tether</p>
              <span className="text-xs text-gray-500">/USD</span>
            </div>
            <div className="bottom">
              <div className="price flex justify-between items-start">
                <div>
                  <h1 className="priceUSD font-bold text-2xl">{parseFloat(coins[2].priceUsd).toFixed(3)}</h1>
                  <p className="priceBTC text-xs text-gray-500">
                    0.00000000 BTC
                  </p>
                </div>
                <p className="p-2 bg-green-600 text-xs font-semibold rounded-xl text-white">
                  +0.80%
                </p>
              </div>
            </div>
          </div>
          {/* dividor */}
          <div className="divisor border-r-2 border-gray-200 block py-4"></div>
          {/* tercera cripto */}
          <div className="w-full flex flex-col gap-8">
            <div className="top flex gap-1 items-baseline">
              {/* dogecoin */}
              <p className="font-semibold">DogeCoin</p>
              <span className="text-xs text-gray-500">/USD</span>
            </div>
            <div className="bottom">
              <div className="price flex justify-between items-start">
                <div>
                  <h1 className="priceUSD font-bold text-2xl">{parseFloat(coins[7].priceUsd).toFixed(2)}</h1>
                  <p className="priceBTC text-xs text-gray-500">
                    0.00000000 BTC
                  </p>
                </div>
                <p className="p-2 bg-green-600 text-xs font-semibold rounded-xl text-white">
                  +0.80%
                </p>
              </div>
            </div>
          </div>
          {/* dividor */}
          <div className="divisor border-r-2 border-gray-200 block py-4"></div>
          {/* cuarta cripto */}
          <div className="w-full flex flex-col gap-8">
            <div className="top flex gap-1 items-baseline">
              {/* Ethereum */}
              <p className="font-semibold">ETH</p>
              <span className="text-xs text-gray-500">/USD</span>
            </div>
            <div className="bottom">
              <div className="price flex justify-between items-start">
                <div>
                  <h1 className="priceUSD font-bold text-2xl">{parseFloat(coins[1].priceUsd).toFixed(2)}</h1>
                  <p className="priceBTC text-xs text-gray-500">
                    0.00000000 BTC
                  </p>
                </div>
                <p className="p-2 bg-green-600 text-xs font-semibold rounded-xl text-white">
                  +0.80%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
