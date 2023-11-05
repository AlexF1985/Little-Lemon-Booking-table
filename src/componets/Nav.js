import React from "react";
import logo from "../images/logo.png"

const Nav = () => {
    return(
       <nav>
             <img src={logo} alt="Little Lemon Logo" ></img>
             <ul>
             <li><a href="/home">Home</a></li>
             <li><a href="/home">About</a></li>
             <li><a href="/home">Menu</a></li>
             <li><a href="/BookingForm">Reservations</a></li>
             <li><a href="/home">Order Online</a></li>
             <li><a href="/home">Login</a></li>
 
         </ul>
         </nav>
    )
}
export default Nav;

