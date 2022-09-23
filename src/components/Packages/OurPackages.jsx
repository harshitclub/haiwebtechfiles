import React from "react";
import "./OurPackages.css";
import { RiFileCodeLine } from "react-icons/ri";
import { TbFileChart, TbFileDollar, TbView360 } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const OurPackages = () => {
  return (
    <>
      <div className="ourServices-p" id="package">
        <h2>Packages We Offer</h2>
        <div className="servicesContainer-p">
          <div className="serviceContainer-p">
            <TbView360 className="serviceIcon-p" />
            <h4>SEO</h4>
            <p>
              Search Engine Optimization
              <br />
              Packages
            </p>
            <span>
              <Link to="/seo-packages">
                See Plans&nbsp; <AiOutlineArrowRight className="blogIcon" />
              </Link>
            </span>
          </div>
          <div className="serviceContainer-p">
            <TbFileDollar className="serviceIcon-p" />
            <h4>PPC</h4>
            <p>
              Pay-Per-Click
              <br />
              Packages
            </p>
            <span>
              <Link to="/ppc-packages">
                See Plans&nbsp; <AiOutlineArrowRight className="blogIcon" />
              </Link>
            </span>
          </div>
          <div className="serviceContainer-p">
            <TbFileChart className="serviceIcon-p" />
            <h4>SMM</h4>
            <p>
              Social Media Marketing
              <br />
              Packages
            </p>
            <span>
              <Link to="/smm-packages">
                See Plans&nbsp; <AiOutlineArrowRight className="blogIcon" />
              </Link>
            </span>
          </div>
          <div className="serviceContainer-p">
            <RiFileCodeLine className="serviceIcon-p" />
            <h4>Website</h4>
            <p>
              Design & Development
              <br />
              Packages
            </p>
            <span>
              <Link to="/website-package">
                See Plans&nbsp; <AiOutlineArrowRight className="blogIcon" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPackages;
