import React from "react";
import logo from "../images/logo.png"

const Nav = () => {
    return(
       <nav>
             <img src={logo} alt="Little Lemon Logo" ></img>
             <ul>
             <li><a href="/home">Home</a></li>
             <li><a href="/abaut">Abaut</a></li>
             <li><a href="/Booking">Reservations</a></li>
             <li><a href="/orer online">Order Online</a></li>
             <li><a href="/login">Login</a></li>
 
         </ul>
         </nav>
    )  
}
export default Nav;

