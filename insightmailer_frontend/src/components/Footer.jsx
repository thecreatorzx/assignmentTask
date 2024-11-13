import React from 'react'
import { FaLinkedinIn,FaFacebook,FaInstagram,FaGithub,FaTwitter } from "react-icons/fa6";
<FaLinkedinIn />

const Footer = () => {
  return (
    <div className='footerPage'>
      <div className="footer">
        <div className="text-body">
        Copyright © 2024 </div>
        <div className="links"><FaLinkedinIn /><FaFacebook/><FaInstagram/><FaGithub/><FaTwitter/></div>
      </div>
    </div>
  )
}

export default Footer