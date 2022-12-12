import React from 'react';
import './About.css';
import Store from '../Images/storefront.jpg';

function About() {
  return (
    <>
      <div>
        <h2>The Largest Toy Selection on the East Coast!</h2>
      </div>
      <img className='storefront' src={Store} alt="store front" />
    </>
  )
}

export default About
