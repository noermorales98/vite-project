import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import "./styles/main.css";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import CryptosPage from "./pages/cryptos/Cryptos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/error/error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cryptos" element={<CryptosPage />}/>
        <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>
);
