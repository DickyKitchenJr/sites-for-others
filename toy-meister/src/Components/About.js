import React from "react";
import "./About.css";
import Store from "../Images/storefront.jpg";

function About() {
  return (
    <>
      <div>
        <h2>The Largest Toy Selection on the East Coast!</h2>
      </div>

      <div className="image-center">
        <img className="storefront" src={Store} alt="store front" />
      </div>
      
      <p className="aboutWriteUp">
        Located on the second floor of Virginia Beach's Antique Mall, Toymeister
        houses the largest toy selection on the East Coast.
        <br /><br/>
        Established in 19XX, Toymeister set itself apart in the toy industry by
        providing toys ranging from antique to modern.
        <br /><br/>
        The 15000 square foot facility is packed to the brim with row after row
        of all the biggest names of yesteryear and today.
        <br /><br/>
        Whether you are looking for a vintage action figure to complete your
        collection or a missing piece to complete your Lego set, our friendly
        staff can help you find the perfect toy for any occasion.
      </p>
    </>
  );
}

export default About;
