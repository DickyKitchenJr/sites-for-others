import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <p>
          <a href="#about">About</a>
        </p>
        <p>
          <a href="#products">Products</a>
        </p>
        <p>
          <a href="#location">Location</a>
        </p>
        <p><a href="#contact">Contact</a></p>
      </nav>
    </>
  );
}

export default Nav;
