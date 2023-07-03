import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full flex gap-4 items-center justify-between px-16 py-6 max-md:px-4 m-auto">
      <div className="title flex gap-10">
        <h1 className="font-semibold px-3 text-xl">SPSCoin</h1>
        <div className="menu max-lg:hidden">
          <ul className="flex gap-8">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li>Mercado</li>
            <li><NavLink to={"/cryptos"}>Criptomonedas</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="menu-buttons flex px-8 py-4 gap-6 items-center rounded-full max-lg:hidden">
        <div className="left flex gap-2">
          <button className="btn btn-primary bg-[#dee0e2] text-gray-900 px-4 py-2 rounded-xl">Ingresar</button>
          <button className="btn btn-secondary bg-[#1d4ed8] text-white px-4 py-2 rounded-xl">Registrarse</button>
        </div>
        <div className="divisor border-r-2 border-gray-200 block py-4"></div>
        <div className="right">
          <div className="dark-mode">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="nav-icon"
              >
                <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="hidden max-lg:block px-3">
        <span>=</span>
      </div>
    </nav>
  );
}
