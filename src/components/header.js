import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo2.png'
const Header = () => {
  return (
    <header>
      <Link to='/'> <img src={logo} alt="banner"/></Link>
    </header>
  );
};

export default Header;
