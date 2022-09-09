import React, { useState } from 'react'
import '../Styles/components/Navbar.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/Logo.png'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../components/Sidebar/SidebarData';
import { IconContext } from 'react-icons';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <nav>
    <div className="navContainer">
      <div className="logo">
        <Link to='/'>
          <img src={Logo} alt=''/>
        </Link>
      </div>
      <div className="navMenu">
        <ul className='menuLinks snip1189'>
          <li class="current"><a href="/">Home</a></li>
          <li>Services +
          <ul>
            <li><a href='/seo-service'>SEO Service</a></li>
            <li><a href='/smm-service'>SMM Service</a></li>
            <li><a href='/ppc-service'>PPC Service</a></li>
            <li><a href='/website-service'>Website Service</a></li>
            </ul></li>
          <li>Packages +
          <ul>
            <li><a href='/seo-packages'>SEO Package</a></li>
            <li><a href='/smm-packages'>SMM Package</a></li>
            <li><a href='/ppc-packages'>PPC Package</a></li>
            <li><a href='/website-package'>Website Package</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className='mBar'>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
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
  )
}

export default Navbar
