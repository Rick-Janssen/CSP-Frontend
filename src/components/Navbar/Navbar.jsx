import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from "../../assets/FlagFlaggyLogo.png";
import {Link} from 'react-router-dom';


function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={isSticky ? 'sticky' : ''}>
        <img className="LogoPng" src={Logo} alt="Logo" />
        <div className="nav-content">
          <div className="logo">
            <Link to="/">Rater</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/">Products</Link>  
            </li>
            <li>
              <Link to="#">Most Rated</Link>
            </li>
            <li>
              <Link to="#">About us</Link>
            </li>
            <li>
              <Link to="login" className="Formbutton">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="home"></section>

      <div className='H'></div>
    </>
  );
}

export default Navbar;
