import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
// import Dropdown from 'react-overlays/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from "react-bootstrap/Navbar";
import {withRouter} from "react-router-dom";

import axios from 'axios';
                // <Link className="navbar-brand" to={{pathname:`/api/account/`, froDashboard:false }}>Django Boards</Link>

function MyNavbar(props) {
    const [user, Setuser] = useState({})
    const tokens = localStorage.tokens;
    const logout = ()=>{ axios({
            method: "post",
            headers: {
                'Authorization': `Token ${tokens}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
                },
            url: `http://127.0.0.1:8000/auth/token/logout/`
        }).then((response)=> {
            // console.log(response)
            if (response.status === 204) {
            window.localStorage.removeItem("tokens");
             // window.href="/"
                props.history.push("/auth/token/login/")
            }
    } )}


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
                        {
                          tokens ? null : ( <>
                        <li className="nav-item">

         <Link  className="nav-link active" aria-current="page" to={{pathname:`/auth/token/login/`, froDashboard:false }}>Login</Link>

                        </li>
                        <li className="nav-item">
         <Link  className="nav-link active" aria-current="page" to={{pathname:`/auth/users/`, froDashboard:false }}>Register</Link>
                        </li>
                            </>)
                        }
                        <li className="nav-item dropdown">
                            {
                                !tokens ? null : ( <><Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Profile"
          menuVariant="dark"
        >
            <Link to={{pathname:`/account/`, froDashboard:false }} >  <NavDropdown.Item href="/account/">My profile</NavDropdown.Item></Link>
          <NavDropdown.Item href="#action/3.2">Change password</NavDropdown.Item>
          {/*<NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>*/}
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse></>)
                            }

                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default withRouter(MyNavbar);