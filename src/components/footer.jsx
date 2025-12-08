import "./Footer.css"
import { useState } from "react"
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope} from "@fortawesome/free-regular-svg-icons"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"




export default function Footer(){


    return(
        
    <footer>

        <div className="footer__dropdown">

           
                <NavLink to="/" className="footer__btn" >Home </NavLink>

            <div className="footer__dropdown__section">
                <NavLink to="/examples" className="footer__btn" >Portfolio </NavLink>
                
            </div>

            <div className="footer__dropdown__section">
                <NavLink to="/help" className="footer__btn" >Get in touch</NavLink>
                
            </div>
        </div>

        <div className="footer__socials">
            <a href="mailto:jhondrek116@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
            </a>

            <a href="https://www.linkedin.com/in/david-fern%C3%A1ndez-0b103611a/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="footer__icon" />
            </a>
            <a href="https://wa.me/+50670340543"target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="footer__icon" />
            </a>
            
            
        </div>


    </footer>
    )
}