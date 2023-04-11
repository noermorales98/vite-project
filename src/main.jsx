import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import './styles/main.css'
import './index.css'
import Navbar from './components/navbar/Navbar'
import CryptosPage from './pages/Cryptos/Cryptos'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar />
        <Home />
        <CryptosPage/>
    </React.StrictMode>
)
