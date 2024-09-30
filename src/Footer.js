
import React, { useState, useEffect, useRef } from 'react';
import Logo from './imgs/logo.png';
import './Footer.css';
import LinkedIn from './imgs/LinkedIn.png';
import Github from './imgs/Github.png';
import Spotify from './imgs/Spotify.png';
const Footer = () => {


    return (
        <div className="footer">
            <div className="footer_SM"> 
                <a className="footer_SMicon" href="https://www.linkedin.com/in/carlo-teufel-839b75214/"> <img src={LinkedIn}/> </a>
                <a className="footer_SMicon" href="https://github.com/cteufel13"> <img src={Github}/> </a>
                <a className="footer_SMicon" href="https://open.spotify.com/user/chewbacagames?si=ee36e0ed65674686"> <img src={Spotify}/> </a>

            </div>

            <div className="footer_Logo">
                <img  src={Logo} alt='Logo' />
            </div>
            
            <p className="footer_Copyright"> ©️ Carlo Teufel 2024</p>
        </div>
    )
}


export default Footer;