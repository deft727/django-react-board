import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

import axios from 'axios';
                // <Link className="navbar-brand" to={{pathname:`/board/`, froDashboard:false }}>Django Boards</Link>

function Navbar() {

  return (

    <div className="App">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={{pathname:`/`, froDashboard:false }}>Django Boards</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
  <a href="http://127.0.0.1:8000/swagger/" className="nav-link active text-info" target="_blank">Documents</a>
                        </li>
                        <li className="nav-item">
         <Link  className="nav-link active" aria-current="page" to={{pathname:`/auth/token/login/`, froDashboard:false }}>Login</Link>

                        </li>
                        <li className="nav-item">
         <Link  className="nav-link active" aria-current="page" to={{pathname:`/auth/users/`, froDashboard:false }}>Register</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">My info</a></li>
                                <li><a className="dropdown-item" href="#">Change password</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
         <Link  className="nav-link active" aria-current="page" to={{pathname:`/auth/logout/`, froDashboard:false }}>Logout</Link>
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;