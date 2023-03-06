import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Mi primer App con Vite</h1>
        <button onClick={()=>setCount(count => count+1)}>Contador {count}</button>
      </div>
    </div>
  )
}

export default App
