import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/img/logo.png"
import ig_icon from "../../assets/img/ig_logo.png"
import facebook_icon from "../../assets/img/facebook_logo.webp"
import twitter_icon from "../../assets/img/twitter_logo.png"



function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} width={360} height={360} alt="" />
            <p>Camisetas UD</p>
        </div>
        <ul className='footer-links'>
            <li>Compañia</li>
            <li>Productos</li>
            <li>Officinas</li>
            <li>Acerca</li>
            <li>Contactanos</li>
        </ul>
        <div className="footer social-icon">
            <div className="footer-icons-container">
                <img src={ig_icon} alt=""  width={80} height={80}/>
                <img src={facebook_icon} alt=""  width={80} height={80}/>
                <img src={twitter_icon} alt=""  width={80} height={80}/>
            </div>
        </div>
        

        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer