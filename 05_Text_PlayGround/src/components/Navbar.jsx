
// Manually added file for text 

import React, { useState } from 'react'

function Navbar(props) {

    return (

        
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    {/* toggle button */}
                    <button className="btn btn-dark" onClick={props.toggleMode}>
                            {props.myStyle.backgroundColor === '#dbd0d0' ? (<i className="bi bi-moon-fill"></i>) : (<i className="bi bi-brightness-high-fill"></i>)}
                    </button>

                    <a className="navbar-brand" href="#"> {props.project} </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 dark">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"> Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="https://www.sujan140.com.np">Portfolio</a>
                            </li>
                        </ul>
                        
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar