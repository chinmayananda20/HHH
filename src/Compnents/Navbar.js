import React from "react";
import logo from "./champagne-glass.png";
import "./Navbar.css";
export default function Navbar() {
  
  return (
    // <div className='mynav'>
    //     <b>Happy Hours</b> <img src={logo} alt="" style={{width:"50px"}} /> <b>Home</b>
    // </div>
    <div>
      <nav className="navbar mynav navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={logo} width="30" className="d-inline-block align-top" alt="" />
          <b>Happy Hours At Home</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Beers <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/mocktails">
                Mocktails <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
