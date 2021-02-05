import React from 'react';
import goku from "../goku.jpg";
//IMPORT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <a className="navbar-brand" href="#"><img className="goku" src={goku} alt="goku..."/></a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
           aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color:"#fff" }}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a class="nav-link " href="#">about me</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">services</a>
        </li><li className="nav-item">
          <a class="nav-link" href="#">How work</a>
        </li><li className="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="#">Contacts</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Navbar
