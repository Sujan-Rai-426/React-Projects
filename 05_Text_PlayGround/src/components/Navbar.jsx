
// Manually added file for text 

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

    return (

        
        <div style={{left: '0', right:'0', top:'0', zIndex:'100', position:'sticky'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
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


                            {/* Dropdown Features  */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/password_generator"> Password Generator </Link></li>
                                    <li><Link className="dropdown-item" to="/">  Text Utils </Link></li>
                                </ul>
                            </li>

                        </ul>
                        
                        {/* SEARcH BAR */}
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navbar