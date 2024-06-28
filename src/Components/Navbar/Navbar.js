import React from 'react';
import './Navbar.css';



const Navbar = () => {

 return (

   <div>

<nav>
        <div className="nav__logo">
          <a href="/">
          StayHealthy <svg>
          </svg></a>
          <span>.</span>
        </div>
        <div className="nav__icon" >
          <i className="fa fa-times fa fa-bars"></i>
        </div>
        <ul className="nav__links active">
          <li className="link">
            <a href="../Landing_Page/LandingPage.html">Home</a>
          </li>
          <li className="link">
            <a href="#">Appointments</a>
          </li>
              <li className="link">
                <a href="../Sign_Up//Sign_Up.html">
                  <button className="btn1">Sign Up</button>
                </a>
              </li>
              <li className="link">
                <a href="../Login/Login.html">
                  <button className="btn1">Login</button>
                </a>
              </li>
        </ul>
      </nav>
   </div>

 );

}

export default Navbar;
