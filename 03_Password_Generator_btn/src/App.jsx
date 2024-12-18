import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Password_Generator from './components/Password_Generator'

function App() {

  return(
    <>
      <Navbar project='Password-Generator'/>

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Password_Generator />
      </div>
    </>

  )
}

export default App
