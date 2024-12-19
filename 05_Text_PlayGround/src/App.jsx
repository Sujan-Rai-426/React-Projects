import { useState } from 'react'


// Manually imported
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import AlertMsg from './components/AlertMsg'
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Password_Generator from './components/Password_Generator';


function App() {

      //for alert message
      const [alert, setAlert] = useState(null);

      // Method for above setAlert
      const showAlert =(message, type) => {
        setAlert({
          msg:message,
          type:type
        })
        setTimeout( () => {
          setAlert(null);
        }, 2800 )
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
            }
            else{
              setMyStyle({
                backgroundColor: 'rgb(113 159 184 / 87%)',
                color: 'black'
              })             
          }
      }

  return (

    // Always when using Routes the components should be wrapped inside <Router> </Router>
    <Router>
        <div style={myStyle}>
          
          {/* navbar */}
          <Navbar project='Text-PlayGround' toggleMode={handle_Toggle_btn} myStyle={myStyle} />

          {/* AlertMessage */}
          <AlertMsg alert={alert} />

          <div className="container">

              {/* Router-Dom Routes, only use in section or portion that we want it to change */}
              <Routes>

                    {/* When People visit default '/'  -->TextForm or Home*/}
                  <Route exact path="/" element={ <TextForm showAlert={showAlert} heading='Enter the text in below Text PlayGround' /> } />
                    {/* when people visit path '/about'  --> About */}
                  <Route exact path="/about" element={ <About /> } />
                    {/* when people visit path '/password_generator'  --> Password_Generator */}
                  <Route exact path="/password_generator" element={ <Password_Generator /> } />

              </Routes>
          </div>

          {/* footer */}
          <Footer />

        </div>


    </Router>

  )
}

export default App
