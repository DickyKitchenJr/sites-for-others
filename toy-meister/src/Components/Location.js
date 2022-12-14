import React from "react";
import "./Location.css";
import Map from "../Images/map.webp";

function Location() {
  return (
    <>
      <div id="location">
        <h2>Come Find Us!</h2>
      </div>
      <div className="image-center">
        <img className="map" src={Map} alt="location on the map" />
      </div>
      <div className="location">
        <p className="location-p">Toymeister is located at:</p>
        <address>
          3900 Bonney Rd #111,
          <br />
          Virginia Beach, VA 23452
          <br />
          <br />
          Mon-Thurs 10AM - 6PM EST
          <br />
          Fri-Sat 10AM - 8PM EST
          <br />
          Sun Noon - 8PM EST
          <br />
          <br />
          <a href="tel:+17573903244">(757) 390-3244</a>
        </address>
      </div>
    </>
  );
}

export default Location;
