
// Manually added file from TextForm field

import React, { useState } from 'react'

function TextForm(props) {

    // Initialize the text and setText
    const [text, setText] = useState ("Enter your text here to manipulate....")

    // function to handel the text change event
    const handle_change = (event) =>{
        setText(event.target.value);
    }

    // function to handle the button click events
    const handle_Upper_click = () => {
        setText(text.toUpperCase())
    }
    
    const handle_Lower_click = () => {
        setText(text.toLowerCase())
    }



    return (
        
        <div className = 'my-5'>
            <h1> {props.heading} </h1>
            <div className="mb-3">
                <textarea  value={text} onChange={handle_change} className="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>

            {/* button div */}
            <div style={{ display: 'flex', gap :'3vw' }}>
                <button onClick={handle_Upper_click} className="btn btn-success"> convert to Uppercase </button>
                <button onClick={handle_Lower_click} className="btn btn-success"> convert to Lowercase </button>
            </div>
        </div>

    )
}

export default TextForm