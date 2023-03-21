import { useState } from 'react'
import '../styles/App.css'
import Calculadora from './Calculadora'
import Header from './header/Header'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <h1>Calculadora simple</h1>
          <Calculadora/>
        </main>
      </div>
    </div>
  )
}

export default App
