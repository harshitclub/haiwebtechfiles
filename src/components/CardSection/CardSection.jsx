import React from "react";
import "./cardSection.css";
import { RiCodeBoxLine, RiMailLine, RiPaletteLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const cardSection = () => {
  return (
    <>
      <div className="cardSection">
        <div className="cardContainer">
          <div className="card card1">
            <RiPaletteLine className="cardIcons" />
            <h4>Design</h4>
          </div>
          <div className="card card2">
            <h4>Hai WebTech</h4>
            <p>
              Get{" "}
              <Link to="/website-service" style={{ color: "var(--yellow)" }}>
                Website
              </Link>
              ,{" "}
              <Link to="/seo-service" style={{ color: "var(--yellow)" }}>
                SEO
              </Link>
              ,{" "}
              <Link to="/smm-service" style={{ color: "var(--yellow)" }}>
                SMM
              </Link>{" "}
              and{" "}
              <Link to="/ppc-service" style={{ color: "var(--yellow)" }}>
                PPC
              </Link>{" "}
              Services In One Place.
            </p>
            <p>We are the Digital Marketing Company that gets you Results.</p>
            <p id="cardEmail">
              <a href="mailto: info@haiwebtech.com">
                <RiMailLine id="cEmailIcon" /> info@haiwebtech.com
              </a>
            </p>
          </div>
          <div className="card card3">
            <RiCodeBoxLine className="cardIcons" />
            <h4>Development</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default cardSection;
