import { Link } from "react-router-dom";
import "./HeroImgStyles.css";

import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={"https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M  PAVAN KUMAR</p>
            <h1>MERN STACK DEVELOPER</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
      
    </div>
  )
}

export default HeroImg
