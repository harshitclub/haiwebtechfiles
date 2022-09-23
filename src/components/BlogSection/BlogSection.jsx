import React from "react";
import "./BlogSection.css";
import blogImage from "../../assets/blogImage.jpg";
import blogImage2 from "../../assets/blogImage2.jpg";
import blogImage3 from "../../assets/blogImage3.jpg";
import { IoArrowForward } from "react-icons/io5";

const BlogSection = () => {
  return (
    <>
      <div className="blogContainer">
        <h2>Our Blogs</h2>
        <div className="blogTabs">
          <div className="blogTab">
            <div className="blogImage">
              <img src={blogImage} alt="" />
            </div>
            <div className="blogContent">
              <h4>How SEO Helps Your Business</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
              <span>
                Coming Soon <IoArrowForward className="blogIcon" />
              </span>
            </div>
          </div>
          <div className="blogTab">
            <div className="blogImage">
              <img src={blogImage2} alt="" />
            </div>
            <div className="blogContent">
              <h4>How SMM Helps Your Business</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
              <span>
                Coming Soon <IoArrowForward className="blogIcon" />
              </span>
            </div>
          </div>
          <div className="blogTab">
            <div className="blogImage">
              <img src={blogImage3} alt="" />
            </div>
            <div className="blogContent">
              <h4>How PPC Helps Your Business</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
              <span>
                Coming Soon <IoArrowForward className="blogIcon" />
              </span>
            </div>
          </div>
          <div className="blogTab">
            <div className="blogImage">
              <img src={blogImage3} alt="" />
            </div>
            <div className="blogContent">
              <h4>How PPC Helps Your Business</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
              <span>
                Coming Soon <IoArrowForward className="blogIcon" />
              </span>
            </div>
          </div>
        </div>
        <div className="blogBtn">
          <p>
            <span>
              <a href="/">Coming Soon</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
