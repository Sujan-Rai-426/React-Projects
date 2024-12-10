
// MANUALLY CREATED FILE

import React from 'react'
import { useState } from 'react'

import './Bg_Changer.css'

function Bg_Changer() {

    const [color, setColor] = useState('Gray')

    return (

        <div className='Container Bg_Container' style={{background : color}}>

            <div className='Info'>
                <h3> Background Color Changing Buttons </h3> 
                <p> Simple React Project - Learning Purpose</p>
            </div>
            

            <div className="btn-Container Bg_Container">
                <button onClick={() =>  setColor('red')} className='btn Red' > Red </button>
                <button onClick={() =>  setColor('green')} className='btn Green' > Green </button>
                <button onClick={() =>  setColor('blue')} className='btn Blue' > Blue </button>
            </div>
            
        </div>

    )
}

export default Bg_Changer