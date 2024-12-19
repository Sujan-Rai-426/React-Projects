import React, {useState, useRef, useEffect, useCallback} from 'react'

function Password_Generator() {
     // Password generate and store 
    const [password, setPassword] = useState('')

    // for password length
    const [length, setLength] = useState(8)

    // for number choice or checkbox to choose number in password
    const [numAllowed, setNumAllowed] = useState(true)

    // for number choice or checkbox to choose special character in password
    const [charAllowed, setCharAllowed] = useState(true)


    // useCallback function to generate password and call it back
    const generatePassword = useCallback( () => {

        let passw = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        if (numAllowed) str += '0123456789';
        if (charAllowed) str += '~!@#$%^&*|\/<>'
        
        //now whenever length change loop through the characters and generate password
        for (let i=1; i<length; i++){
        const char = Math.floor(Math.random()*(str.length + 1)) //generate randow password and store in char constant
        passw += str.charAt(char)  // pass that char constant to passw
        }

        setPassword(passw) // passw as paramater of setPassword function or method

    }, [length, numAllowed, charAllowed] )


    // useEffect to generate or trrigger above 'generatePassword' function whenever the dependencies is changes
    useEffect(() => {
        generatePassword()
    }, [length, charAllowed, numAllowed])


        //give visual effect of selected
    const passwordRef = useRef(null)

    // Copy to clipbodard for copy button
    const copyPasswordToClipboard = () => {
        window.navigator.clipboard.writeText(password)  //copy to clipbpard
        passwordRef.current.select()  //give visual effect of select
        alert("Passowrd Copied !!!")  //give alert message of Copied 
    }

    return (

        <div className='container my-5' style={{minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems:'center'}}>

                <h2>Random Password Generator</h2>
                <br />

                {/* div for password label and copy button */}
            <div style={{gap: '1vw', display:'flex'}}>
                <input type="text" ref={passwordRef}  placeholder='Password' readOnly value={password} style={{minWidth:'40vw', borderRadius: '0.5rem', padding: '1vh',}} />
                <button onClick={copyPasswordToClipboard} style={{padding: '0 1vw', borderRadius: '.7rem'}} className='btn btn-danger'> Copy </button>
            </div>


                {/* div with number and character checkbox and length */}
            <div className='my-4' style={{display: 'flex', gap:'3vw'}}>

                    {/* length div */}
                <div className="length">  
                    <input type="range" min={8} max={60} onChange={(e) => setLength (e.target.value)} name="" id="LENGTH" />
                    <label htmlFor="LENGTH"> Lenght: {length} </label>
                </div>

                        {/* numAllowed div */}
                <div className="numAllowed" >
                    <input type="checkbox" defaultChecked={numAllowed} onChange={() => setNumAllowed((prev) => !prev)} name="" id="NUMBER" />
                    <label htmlFor="NUMBER"> Number </label>
                </div>

                    {/* special charAllowed div */}
                    <div className="charAllowed" >
                    <input type="checkbox" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} name="" id="Special_CHAR" />
                    <label htmlFor="Special_CHAR"> Special Character </label>
                    </div>

            </div>

        </div>

    )
}

export default Password_Generator