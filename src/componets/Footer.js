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
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
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