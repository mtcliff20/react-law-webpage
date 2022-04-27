import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { GoX } from 'react-icons/go';
import { GiScales } from 'react-icons/gi';
import { Button } from '../Button/button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(()=> {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Frenzel Law LLC<span className='scale-icon'><GiScales /></span>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        {click ? <GoX /> : <GoThreeBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
            Services
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/career' className='nav-links' onClick={closeMobileMenu}>
            Careers
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li>
              <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar