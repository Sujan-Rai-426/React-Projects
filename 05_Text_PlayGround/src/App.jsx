import { useState } from 'react'

import './App.css'

// Manually imported
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar project='Text-PlayGround'/>

      <div className="container">

        <TextForm heading='Enter the text in below Text PlayGround' />

      </div>
    </>
  )
}

export default App
