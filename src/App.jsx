import Navbar from "./components/navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import React from "react";

export default function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Outlet/>
        </React.Fragment>
    );
}