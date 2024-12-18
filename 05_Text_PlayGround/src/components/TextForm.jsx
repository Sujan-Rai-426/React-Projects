
// Manually added file from TextForm field

import React, { StrictMode, useRef, useState } from 'react'

function TextForm(props) {



    // Initialize the text and setText
    const [text, setText] = useState ("");

    // function to handel the text change event
    const handle_change = (event) =>{
        setText(event.target.value);
    }

    //-------------- function to handle the button click events--------------

    // To Upper Case
    const handle_Upper_click = () => {
        let upr_txt = text.toUpperCase()
        setText(upr_txt)
        props.showAlert(" Text converted to Uppercase successfully...", "success") 
    }
    
    // To Lower Case
    const handle_Lower_click = () => {
        let lwr_txt = text.toLowerCase()
        setText(lwr_txt)
        props.showAlert(" Text converted to Lowercase successfully...", "success") 
    }
    
    // To remove extra spaCes where there is more than one spaCes
    const handle_Extra_Spaces = () => {
        let new_Text = text.split(/[ ]+/);
        setText (new_Text.join(" "))
        props.showAlert(" Extra Spaces of text removed successfully...", "success") 
    }
    
    
    // To Copy text
    const textRef = useRef(null)
    const handle_copy = () => {
        alert(" Text is copied !!! ")
        window.navigator.clipboard.writeText(text)
        textRef.current.select()
        props.showAlert(" Text copied successfully...", "success") 
    }
    
    // To Cleare text
    const handle_clear = () => {
        setText("")
        props.showAlert(" Text cleared successfully...", "success") 
    }



    return (
    
    <div style={{minHeight: '100vh'}}>
    {/* start div container for text operation */}
        <div className = 'my-5'>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <h3> {props.heading} </h3>
                {/* <div>
                    <label htmlFor="exampleColorInput" className="form-label"> <h5> Color picker </h5></label>
                    <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>
                </div> */}
            </div>
            
            <div className="mb-3">
                <textarea  value={text} onChange={handle_change} style={{ color:'red' }} ref={textRef} className="form-control" id="exampleFormControlTextarea1" rows="9" ></textarea>
            </div>

            {/* button div */}
            <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap :'1vw' }}>
                <button onClick={handle_Upper_click} className="btn btn-danger"> Uppercase </button>
                <button onClick={handle_Lower_click} className="btn btn-danger"> Lowercase </button>
                <button onClick={handle_Extra_Spaces} className="btn btn-danger"> Manage Spaces </button>
                <button onClick={handle_copy} className="btn btn-danger"> Copy </button>
                <button onClick={handle_clear} className="btn btn-danger"> Clear </button>
            </div>
        </div>
    {/* end div container for text operation */}
    
    
    {/* start div container for text information */}
        <div className="container">
            <h3> Text Summary </h3>
            <p> Total word = <b> {text.split(" ").length} </b>, Total characters in text = <b> {text.length} </b></p>
            <h3> Preview </h3>
            <p> <i> {text}</i> </p>
        </div>
    {/* end div container for text information */}
    </div>
    )
}

export default TextForm