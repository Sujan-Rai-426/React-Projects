
// Manually added file for text 

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

    return (

        
        <div style={{left: '0', right:'0', top:'0', zIndex:'10', position: 'fixed'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    {/* toggle button */}
                    <button className="btn btn-dark mx-4" onClick={props.toggleMode}>
                            {props.myStyle.backgroundColor === 'rgb(113 159 184 / 87%)' ? (<i className="bi bi-moon-fill"></i>) : (<i className="bi bi-brightness-high-fill"></i>)}
                    </button>

                    <Link className="navbar-brand" to="/"> {props.project} </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 dark">
                            
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"> Home</Link>
                            </li>
                            
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about"> About </Link>
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

        </div>

    )
}

export default Navbar