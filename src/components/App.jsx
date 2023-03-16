import { useState } from 'react'
import '../styles/App.css'
import GridCursos from './cursos/GridCursos'
import Header from './header/Header'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <h1>Mi primer App con Vite</h1>
          <GridCursos/>
        </main>
      </div>
    </div>
  )
}

export default App
