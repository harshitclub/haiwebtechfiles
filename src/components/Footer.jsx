import React from "react";
import "../Styles/components/Footer.css";
import {  IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin,  IoLogoTwitter } from "react-icons/io5";
import logo from '../assets/Logo.png'


const Footer = () => {
  return (
    <>
    <footer>

    <div className="footerContainer">

    <div className="footerTabs">
      <div className="footerTab">
        <div className="footerImage">
          <img src={logo} alt=''/>
        </div>
      </div>
      <div className="footerTab">
        <h4>Services</h4>
        <ul>
          <li><a href='/seo-service'>SEO Service</a></li>
          <li><a href='/smm-service'>SMM Service</a></li>
          <li><a href='/ppc-service'>PPC Service</a></li>
          <li><a href='/website-service'>WEB Service</a></li>
        </ul>
      </div>
      <div className="footerTab">
        <h4>Packages</h4>
        <ul>
          <li><a href='/seo-packages'>SEO Package</a></li>
          <li><a href='/smm-packages'>SMM Package</a></li>
          <li><a href='/ppc-packages'>PPC Package</a></li>
          <li><a href='/website-package'>WEB Package</a></li>
        </ul>
      </div>
      <div className="footerTab">
        <h4>Pages</h4>
        <ul>
          <li><a href='/'>Blog</a></li>
          <li><a href='/contact'>Contact</a></li>
          <li><a href='/privacy-policy'>Privacy & Policy</a></li>
          <li><a href='/terms-conditions'>Terms & Conditions</a></li>
        </ul>
      </div>
    </div>

    </div>
<hr/>
    <div className="copyRightSection">
    <div className="copyright">
      <div className="cSection">
        <p>© Copyright 2022 | All Rights Reserved By Hai Web Tech</p>
      </div>
      <div className="fSocial">
        <div className="fSocialLinks">
          <div><a href='https://www.instagram.com/haiwebtech/'><IoLogoInstagram className="fIcons"/></a></div>
          <div><a href='/'><IoLogoLinkedin className="fIcons"/></a></div>
          <div><a href='https://twitter.com/haiwebtech'><IoLogoTwitter className="fIcons"/></a></div>
          <div><a href='https://www.facebook.com/haiwebtech'><IoLogoFacebook className="fIcons"/></a></div>
        </div>
      </div>
    </div>
    </div>
    </footer>
    </>
  );
};

export default Footer;
