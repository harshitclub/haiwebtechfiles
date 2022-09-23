import React from "react";
import "./Footer.css";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="footerTabs">
            <div className="footerTab">
              <div className="footerImage">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="footerTab">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/seo-service">SEO Service</Link>
                </li>
                <li>
                  <Link to="/smm-service">SMM Service</Link>
                </li>
                <li>
                  <Link to="/ppc-service">PPC Service</Link>
                </li>
                <li>
                  <Link to="/website-service">WEB Service</Link>
                </li>
              </ul>
            </div>
            <div className="footerTab">
              <h4>Packages</h4>
              <ul>
                <li>
                  <Link to="/seo-packages">SEO Package</Link>
                </li>
                <li>
                  <Link to="/smm-packages">SMM Package</Link>
                </li>
                <li>
                  <Link to="/ppc-packages">PPC Package</Link>
                </li>
                <li>
                  <Link to="/website-package">WEB Package</Link>
                </li>
              </ul>
            </div>
            <div className="footerTab">
              <h4>Pages</h4>
              <ul>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy & Policy</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyRightSection">
          <div className="copyright">
            <div className="cSection">
              <p>© Copyright 2022 | All Rights Reserved By Hai Web Tech</p>
            </div>
            <div className="fSocial">
              <div className="fSocialLinks">
                <div>
                  <a href="https://www.instagram.com/haiwebtech/">
                    <IoLogoInstagram className="fIcons" />
                  </a>
                </div>
                <div>
                  <a href="/">
                    <IoLogoLinkedin className="fIcons" />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/haiwebtech">
                    <IoLogoTwitter className="fIcons" />
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/haiwebtech">
                    <IoLogoFacebook className="fIcons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
