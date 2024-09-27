import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from "../../assets/FlagFlaggyLogo.png";
import useCheckLogin from '../../utils/CheckLogin';
import useCheckAdmin from '../../utils/CheckAdmin';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const isAuthenticated = useCheckLogin();
  const isAdmin = useCheckAdmin();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logout = () => {
    fetch('http://localhost/csp-backend/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);

        if (data.message === "Logged out successfully") {
          localStorage.removeItem('token');
        }
        window.location.href = '/home';
      });
  }

  return (
    <>
      <nav className={isSticky ? 'sticky' : ''}>
        <img className="LogoPng" src={Logo} alt="Logo" />
        <div className="nav-content">
          <div className="logo">
            <NavLink to="/home" exact activeClassName="active-link">Rater</NavLink>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/home" activeClassName="active-link">Products</NavLink>
            </li>
            <li>
              <NavLink to="/most_rated" activeClassName="active-link">Most Rated</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-link">About us</NavLink>
            </li>
            <li>
              {isAuthenticated ? (
                <NavLink to="#" onClick={logout} className="Formbutton">
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login" className="Formbutton">
                  Login
                </NavLink>
              )}
            </li>
            <li>
              {isAdmin && (
                <NavLink to="/admin" activeClassName="active-link">
                  Admin
                </NavLink>
              )}
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
