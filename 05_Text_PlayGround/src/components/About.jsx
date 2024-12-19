
import React, {useState} from 'react'



function About(props) {


    return (
        

    <div className="accordion container" id="accordionPanelsStayOpenExample" style={{  minHeight:'100vh',  paddingTop:'5vh', paddingBottom:'10vh'}}>
        <h3 style={{textAlign: 'center', fontFamily:'initial', fontWeight: '700'}}>About Us</h3>

        {/* Accordion section 1st */}
        <div className="accordion-item border border-white" style={props.myStyle.backgroundColor === 'rgb(28 38 36 / 89%)'? {backgroundColor: '#282424de', color: 'white'} : {backgroundColor: '#b0cbe4', color: 'black'}}>

            <button style={props.myStyle.backgroundColor === 'rgb(28 38 36 / 89%)'? {backgroundColor: 'gray', color: 'white'} : {backgroundColor: '#c8fdf2', color: 'black'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"  aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
                <h5>What is Text Playground?</h5>
            </button>

            <div id="panelsStayOpen-collapseOne"  className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body" >
                    
                        <strong> Text Playground </strong> is a versatile text manipulation tool designed to help you effortlessly modify your text. Whether you're editing a document, preparing content for online publishing, or simply experimenting with text transformations, this tool provides an intuitive interface to get the job done. 
                            <br /> 
                        <code><b>Key uses include:</b></code>
                        <ul>
                            <li>Quick text formatting.</li>
                            <li>Copying and sharing cleaned or formatted text.</li>
                            <li>Simplifying repetitive text-based tasks.</li>
                        </ul>
                    
                </div>
            </div>
        </div>


            {/* Accordion section 2nd */}
        <div className="accordion-item border border-white" style={props.myStyle.backgroundColor === 'rgb(28 38 36 / 89%)'? {backgroundColor: '#282424de', color: 'white'} : {backgroundColor: '#b0cbe4', color: 'black'}}>

            <button style={props.myStyle.backgroundColor === 'rgb(28 38 36 / 89%)'? {backgroundColor: 'gray', color: 'white'} : {backgroundColor: '#c8fdf2', color: 'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <h5> Features of Text Playground </h5>
            </button>

            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body" >
                <strong>Text Playground provides</strong> some basic features rightnow to enhance your text manipulation experience with fun.
                <br />
                <code><b> Currently, Text Playground offers the following key features:</b></code>
                <ul>
                    <li><strong>Convert to Uppercase:</strong>  Instantly transform your text to all uppercase letters.</li>
                    <li><strong>Convert to Lowercase:</strong> Quickly change your text to all lowercase letters for uniformity.</li>
                    <li><strong>Clear Text:</strong> Remove all content from the text area with one click to start fresh.</li>
                    <li><strong>Copy Text:</strong> Copy your formatted text to the clipboard for use elsewhere.</li>
                    <li><strong>Remove Extra spaces:</strong> Help to remove the spaces where there is more than one space between the words..</li>
                    <li><strong>Word Count & Character Count:</strong>  Get real-time statistics for your text.</li>
                </ul>
                    Each feature is designed with user simplicity in mind, ensuring a seamless and productive experience.
                </div>
            </div>
        </div>


            {/* Accordion section 2nd */}
        <div className="accordion-item border border-white" style={props.myStyle.backgroundColor === 'rgb(28 38 36 / 89%)'? {backgroundColor: '#282424de', color: 'white'} : {backgroundColor: '#b0cbe4', color: 'black'}}>

            <button style={props.myStyle.backgroundColor === 'rgb(28 38 36 / 89%)'? {backgroundColor: 'gray', color: 'white'} : {backgroundColor: '#c8fdf2', color: 'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                <h5> Future Enhancements </h5>
            </button>

            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body" >
                    <strong>Text Playground is just getting started! </strong> Future Updates and Enhancements will be consistent to Enhance your experience.
                    <br />
                    <code><b> Here are some of the exciting features we plan to add in the future: </b></code>
                    <ul>
                        <li><strong>Find and Replace:</strong>  Easily search for specific words or phrases and replace them in bulk.</li>
                        <li><strong>Text Reversing:</strong>  Flip your text for creative purposes.</li>
                        <li><strong>Text Formatting Options:</strong>  Add bold, italic, or underline formatting to your text.</li>
                        <li><strong>Customizable Themes:</strong> Personalize the interface to suit your preferences, including dark mode.</li>
                    </ul>
                    Our goal is to continuously enhance the tool to meet the evolving needs of our users. Stay tuned for updates!
                </div>
            </div>
        </div>

    </div>
    )
}

export default About