import React from "react";
import "./OurServices.css";
import { RiFileCodeLine } from "react-icons/ri";
import { TbFileChart, TbFileDollar, TbView360 } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <>
      <div id="service" className="ourServices">
        <h2>Services We Offer</h2>
        <div className="servicesContainer">
          <div className="serviceContainer">
            <TbView360 className="serviceIcon" />
            <h4>SEO</h4>
            <p>
              Search Engine Optimization
              <br />
              Service
            </p>
            <span>
              <Link to="/seo-service">
                Get Started&nbsp; <AiOutlineArrowRight className="blogIcon" />
              </Link>
            </span>
          </div>
          <div className="serviceContainer">
            <TbFileDollar className="serviceIcon" />
            <h4>PPC</h4>
            <p>
              Pay-Per-Click
              <br />
              Service
            </p>
            <span>
              <Link to="/ppc-service">
                Get Started&nbsp; <AiOutlineArrowRight className="blogIcon" />
              </Link>
            </span>
          </div>
          <div className="serviceContainer">
            <TbFileChart className="serviceIcon" />
            <h4>SMM</h4>
            <p>
              Social Media Marketing
              <br />
              Service
            </p>
            <span>
              <Link to="/smm-service">
                Get Started&nbsp; <AiOutlineArrowRight className="blogIcon" />
              </Link>
            </span>
          </div>
          <div className="serviceContainer">
            <RiFileCodeLine className="serviceIcon" />
            <h4>Website</h4>
            <p>
              Design & Development
              <br />
              Service
            </p>
            <span>
              <Link to="/website-service">
                Get Started&nbsp; <AiOutlineArrowRight className="blogIcon" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
