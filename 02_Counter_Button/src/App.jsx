import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //

  return (
    <>
    
      <h1> Simple Counter button  </h1>
      <h2>React Project 2 </h2>
      <br />
      <h1>Count : {count}</h1>
      <br />

      <button onClick={()=> setCount(count+1) }  style={{background: 'gray', color: 'white'}} > Counter Up </button> {"   "}
      <button onClick={()=> setCount(count-1) } style={{background: 'gray', color: 'white'}} > Counter Down </button>
    </>
  )
}

export default App
