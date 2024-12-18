
// Manually added file from TextForm field

import React, { StrictMode, useRef, useState } from 'react'

function TextForm(props) {



    // Initialize the text and setText
    const [text, setText] = useState ("Enter your text here to customize...");

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

    const textRef = useRef(null)
    const handle_copy = () => {
        alert(" Text is copied !!! ")
        window.navigator.clipboard.writeText(text)
        textRef.current.select()
    }

    const handle_clear = () => {
        setText("")
    }



    return (
        
        <div className = 'my-5'>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <h2> {props.heading} </h2>
                {/* <div>
                    <label htmlFor="exampleColorInput" className="form-label"> <h5> Color picker </h5></label>
                    <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>
                </div> */}
            </div>
            
            <div className="mb-3">
                <textarea  value={text} onChange={handle_change} ref={textRef} className="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>

            {/* button div */}
            <div style={{ display: 'flex', gap :'3vw' }}>
                <button onClick={handle_Upper_click} className="btn btn-success"> convert to Uppercase </button>
                <button onClick={handle_Lower_click} className="btn btn-success"> convert to Lowercase </button>
                <button onClick={handle_copy} className="btn btn-success"> copy text </button>
                <button onClick={handle_clear} className="btn btn-success"> clear text </button>
            </div>
        </div>

    )
}

export default TextForm