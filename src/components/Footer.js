import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

import "./FooterStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                      <p>2-88, Gandhinagar</p>
                      <p>Kruthivennu Mandal,Krishna dist,AP</p>
                      <p>521324</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                 +91 8247412039</h4>
                
                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                  pavankumarmuthyala00@gmail.com    </h4>
               
                </div>
            </div>
            <div className="right">
              <h4>Reach me through using these links:</h4>
              <div className="social">
              <Link to='https://www.facebook.com/mutyalapavankumar.naidu'><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>
              <Link to='https://www.linkedin.com/in/venkata-pavan-kumar-muthyala-7855701ab/'><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>
              <Link to='https://github.com/Pavan199909'><FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
