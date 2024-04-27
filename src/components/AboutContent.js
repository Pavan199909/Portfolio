 import { Link } from "react-router-dom"
import "./AboutContentstyles.css"
import react7 from '../assets/react-7.jpg'
import react5 from '../assets/react-5.jpg'

 import React from 'react'
 
 const AboutContent = () => {
   return (
     <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a Full Stack web Developer.I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
               <div className="img-stack top">
                <img src={react5} alt="true" className="img"/>
                </div> 
                <div className="img-stack bottom">
                <img src={react7} alt="true" className="img" />
                </div> 
            </div>
        </div>
       
     </div>
   )
 }
 
 export default AboutContent
 