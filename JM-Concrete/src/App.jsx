import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>  
        <h1>JM Concrete</h1>
      </div>
      <p className="read-the-docs">
        JM Concrete is a concrete company that specializes in concrete
      </p>

      <p className="read-the-docs">
        ARROZCONPOLLO</p>
    </>
  )
}

export default App
