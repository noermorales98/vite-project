import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import "./styles/main.css";
import "./index.css";
import CryptosPage from "./pages/cryptos/Cryptos";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./pages/error/error";
import App from "./App.jsx";
import CryptoPage from "./pages/cryptos/Crypto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
                <Route path="/cryptos" element={<App/>}>
                    <Route index element={<CryptosPage/>}/>
                    <Route path=":id" element={<CryptoPage/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);
