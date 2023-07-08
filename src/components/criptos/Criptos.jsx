import "./Criptos.css";
import React from "react";
import {Link} from "react-router-dom";

export default function Criptos({ id, name, priceUsd, symbol, changePercent24Hr }) {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return (
    <React.Fragment>
        <Link to={id} className="w-full flex flex-col gap-4 text-left justify-between items-start px-10 py-6 bg-white rounded-xl">
            <div className="left flex gap-1 items-end justify-center">
                <h1 className="text-base">{name}</h1>
                <span className="text-gray-500 text-sm">/{symbol}</span>
            </div>
            <div className="flex items-center justify-between w-full">
                <span className="text-3xl font-semibold max-sm:text-xl">${parseFloat(priceUsd).toFixed(2)}</span>
                <span
                    className={
                        parseFloat(changePercent24Hr) > 0 ? "positivo max-sm:text-xs" : "negativo max-sm:text-xs"
                    }
                >
          {" "}
                    {parseFloat(changePercent24Hr).toFixed(3)}%
        </span>
            </div>
            <div>
                <span className=" text-xs text-gray-400">La variación de las últimas 24 hrs</span>
            </div>
        </Link>
    </React.Fragment>
  );
}
