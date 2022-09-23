import React from "react";
import "./Hero.css";
import car from "../../assets/heroCar.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="heroLeft">
          <div className="heroContent">
            <img src={car} alt="" />
            <h2>Without Digital Marketing Your Business Resemble This Car</h2>
            <p id="heroTag">
              Lift your business to new heights with our{" "}
              <Link to="/" style={{ color: "var(--yellow)" }}>
                digital marketing services
              </Link>
              .
            </p>
            <p id="heroTag2">
              Converting visitors into customers is the name of our game.
            </p>
            <p id="heroTag3">WEBSITE | SEO | SOCIAL MEDIA | PPC ADS</p>
            <div className="heroBtns">
              <div className="hBtn">
                <span>
                  <a href="#service">Services</a>
                </span>
              </div>
              <div className="hBtn2">
                <span>
                  <a href="#package">Packages</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
