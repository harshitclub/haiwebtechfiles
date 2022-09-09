import React from 'react'
import '../Styles/components/TopBar.css'
import { IoCall, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoPinterest, IoLogoTwitter } from "react-icons/io5";

const TopBar = () => {
  return (
    <>
    <div className="topBarContainer">
        <div className="topContact">
            <p><IoCall className='blogIcon'/> +91 987 654 321</p>
        </div>
        <div className="topButton">
            <div className="topSocial"><a href='/'><IoLogoFacebook/></a></div>
            <div className="topSocial"><a href='/'><IoLogoInstagram/></a></div>
            <div className="topSocial"><a href='/'><IoLogoLinkedin/></a></div>
            <div className="topSocial"><a href='/'><IoLogoTwitter/></a></div>
            <div className="topSocial"><a href='/'><IoLogoPinterest/></a></div>
        </div>
    </div>
    </>
  )
}

export default TopBar