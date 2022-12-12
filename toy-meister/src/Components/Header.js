import React from 'react';
import './Header.css';
import Logo from "../Images/logoCircle.png";

function Header() {
  return (
    <>
      <h1>TOYMEiSTER</h1>
      <img src={Logo} alt="business logo" />
    </>
  )
}

export default Header
