import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from "../../assets/FlagFlaggyLogo.png";
import useCheckLogin from '../../utils/CheckLogin';
import useCheckAdmin from '../../utils/CheckAdmin';
import { Link } from 'react-router-dom';

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
            <Link to="/home">Rater</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/home">Products</Link>
            </li>
            <li>
              <Link to="/most_rated">Most Rated</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              {isAuthenticated ? (
                <Link onClick={logout} className="Formbutton">
                  Logout


                </Link>
              ) : (
                <Link to="/login" className="Formbutton">
                  Login
                </Link>
              )}
            </li>
            <li>
              {isAdmin && (
                <Link to="/admin">
                  Admin
                </Link>
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
