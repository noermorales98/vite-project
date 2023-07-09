import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./pages/error/error";
import App from "./App.jsx";
import Home from "@home";
import CryptosPage from "@cryptos"
import CryptoPage from "@crypto";

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
