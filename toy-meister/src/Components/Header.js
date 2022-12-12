import React from "react";
import "./Header.css";
import Logo from "../Images/logoCircle.png";

function Header() {
  return (
    <>
      <div className="header">
        <h1>TOYMEiSTER</h1>
        <img className="logo" src={Logo} alt="business logo" />
      </div>
    </>
  );
}

export default Header;
