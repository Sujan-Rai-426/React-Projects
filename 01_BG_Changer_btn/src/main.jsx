import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'

import Bg_Changer from './components/Bg_Changer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    {/* <App /> */}

    {/* Manually Created files  */}
    <Bg_Changer/>

  </StrictMode>,
)
