import React from "react"
import logo2 from "../images/logo2.png"

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
            <img src={logo2}  alt="footer-logo"/>
            </div>
            <div>
                <h3>Document Navigation</h3>
            <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/abaut">Abaut</a></li>
            <li><a href="/Menu">Menu</a></li>
             <li><a href="/Booking">Reservations</a></li>
             <li><a href="/orer online">Order Online</a></li>
             <li><a href="/login">Login</a></li>
 
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;