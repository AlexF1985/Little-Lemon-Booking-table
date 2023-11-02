import React from 'react';
import logo from "../images/logo.png"

const Nav = () => {
    return(
        <nav>
            <img src={logo} alt='Little Lemon Logo'></img>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>

            </ul>
        </nav>
    )
};