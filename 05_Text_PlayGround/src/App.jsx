import { useState } from 'react'


// Manually imported
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import AlertMsg from './components/AlertMsg'


function App() {

      //for alert message
      const [alert, setAlert] = useState(null);

      // Method for above setAlert
      const showAlert =(message, type) => {
        setAlert({
          msg:message,
          type:type
        })
      }


           // for toggle mode  initialize myStyle
      const [myStyle, setMyStyle] = useState({
          color: 'black',
          backgroundColor : 'rgb(113 159 184 / 87%)',
      })
  
      // funCtion to handle toggle button
      const handle_Toggle_btn =() => {
          if (myStyle.backgroundColor === 'rgb(113 159 184 / 87%)'){
              setMyStyle({
                  backgroundColor: 'rgb(28 38 36 / 89%)',
                  color: 'white'
                });
              showAlert("Dark mode has been enabled", "success");
            }
            else{
              setMyStyle({
                backgroundColor: 'rgb(113 159 184 / 87%)',
                color: 'black'
              })
              showAlert("Light mode has been enabled", "success");              
          }
      }

  return (
    <div style={myStyle}>
      <Navbar project='Text-PlayGround' toggleMode={handle_Toggle_btn} myStyle={myStyle} />
      <AlertMsg alert={alert} />

      <div className="container">
        <TextForm showAlert={showAlert} heading='Enter the text in below Text PlayGround' />
      </div>
    </div>
  )
}

export default App
