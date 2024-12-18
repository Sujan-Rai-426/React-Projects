import { useState } from 'react'


// Manually imported
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {

           // for toggle mode in Navbar initialize myStyle
      const [myStyle, setMyStyle] = useState({
          color: 'black',
          backgroundColor : '#dbd0d0',
      })
  
      // funCtion to handle toggle button
      const handle_Toggle_btn =() => {
          if (myStyle.backgroundColor == '#dbd0d0'){
              setMyStyle({
                  backgroundColor: 'rgb(35 34 34)',
                  color: 'white'
              })
              
          }
          else{
              setMyStyle({
                  backgroundColor: '#dbd0d0',
                  color: 'black'
              })
          }
      }

  return (
    <div style={myStyle}>
      <Navbar project='Text-PlayGround' toggleMode={handle_Toggle_btn} myStyle={myStyle} />

      <div className="container">

        <TextForm heading='Enter the text in below Text PlayGround' />

      </div>
    </div>
  )
}

export default App
