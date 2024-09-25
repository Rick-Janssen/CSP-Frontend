import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from "../../assets/FlagFlaggyLogo.png";
import useCheckLogin from '../../utils/CheckLogin'; // Adjust the import to match your file structure
import { Link } from 'react-router-dom';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const isAuthenticated = useCheckLogin(); // Get authentication state

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
        window.location.href = '/';
      });
  }

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
              <Link to="/home">Products</Link>
            </li>
            <li>
              <Link to="best_rated">Best Rated</Link>
            </li>
            <li>
              <Link to="#">About us</Link>
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
          </ul>
        </div>
      </nav>
      <section className="home"></section>
      <div className='H'></div>
    </>
  );
}

export default Navbar;
