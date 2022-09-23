import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../Sidebar/SidebarData";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <nav>
        <div className="navContainer">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="navMenu">
            <ul className="menuLinks snip1189">
              <li className="current">
                <Link to="/">Home</Link>
              </li>
              <li>
                Services +
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
                    <Link to="/website-service">Website Service</Link>
                  </li>
                </ul>
              </li>
              <li>
                Packages +
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
                    <Link to="/website-package">Website Package</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mBar">
            <IconContext.Provider value={{ color: "#fff" }}>
              <div className="navbar">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
              </div>
              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
                  {SidebarData.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </IconContext.Provider>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
